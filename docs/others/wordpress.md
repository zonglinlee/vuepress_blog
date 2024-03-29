---
title: wordpress basic
---

## wordpress 主题目录结构

- `style.css`: wordpress的主要样式，样式首行为注释，约定主题 名称，作者，版本号,wordpress 会读取这些信息

```css
/*
Theme Name: themeName
Author: authorName
version: 0.0.1
 */
body {
    color: orangered;
}
```

- `index.php`: wordpress 主题的主页文件,这个页面循环调用 `have_posts()`,会获取所有发布的文章。wordpress著名的 `famous loop` 如下

```php
<? php
while (have_posts()) {
    the_post(); ?>
    <h2><a href="<?php the_permalink(); ?>"><?php the_title() ?></a></h2>
    <?php the_content(); ?>
    <hr>
<?php } ?>
```

- `header.php`: wordpress 的 header 模板
- `footer.php`: wordpress 的 footer 模板
- `single.php`: wordpress 单个 post 模板页面，这个页面循环调用 `famous loop`,只会展示单个post
- `page.php`: wordpress 独立页面的模板, 这个页面循环调用 `famous loop`,只会展示单个独立页面
- `front-page.php`: 当 wordpress 首页设置为独立静态页面时候, 会使用 front-page.php 作为模板
- `archive.php`: WordPress 归档页面，按照 时间、作者、文章分类 等等，归档页面的模板，如果归档页面模板不存在，会使用 index.php 作为 fallback(事实上，index.php也会作为其他页面的
  fallback page)
- `functions.php`: 调用wordpress内置钩子，加载自定义函数,如下通过 add_action 添加自定义函数 `load_files`,来加载 `index.css`

```php
<?php
function load_files() {
    wp_enqueue_style('my_index_stylesheet', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 'load_files');
```

- `screenshot.png`: 主题安装页面的缩略图

## 代码须知

- wordpress 以 `get_` 开头的函数，内部都没有echo,我们得到的是 返回值，在页面上需要 echo 输出; 以`the_`开头的函数得到的是 echo 到页面上的内容，我们只需要调用即可
- 后台管理主题中菜单项默认不显示，注册之后才可以显示,然后在 需要使用菜单的地方 调用 `wp_nav_menu(array('theme_location' => 'headerMenu1'))`

```php
function registerMenu(){
    // 第一个参数 后续在 header.php 中需要使用, 第二个参数是后台管理页面菜单分组的展示
    register_nav_menu('headerMenu1', '注册 headerMenu1');
}
add_action('after_setup_theme', 'registerMenu');
```

- wordpress 自定义 query，WordPress 默认情况下会根据 URL 来进行查询，如果是首页，则默认查询最近 10 条post，如果是 独立page页面，则查询当前 page，如果我们想更改默认查询，就需要自定义
  query, 使用 `new WP_Query`,最后要还原默认查询 `wp_reset_postdata()`

```php 
<?php
    $homePagePost = new WP_Query(
          array('posts_per_page' => 2)
      );
      
    while ($homePagePost->have_posts()) {
        $homePagePost->the_post(); ?>
        <div> post info </div>
                
<?php } wp_reset_postdata(); ?>
```

- wordpress 自定义post type,在主题文件夹上一级目录(wp-content)目录下，新建文件夹 `mu-plugins`
  ,这个目录里面的php文件WordPress都会执行，与主题无关.添加如下代码，添加一个event类型的文章类型，后台管理页面就会出现 `Events`的面板
- 自定义postType后页面找不见情况时候，需要在后台固定链接页面刷新一下 `固定链接结构`,即重新点击一下 **保存更改** 按钮
- 新建 `archive-event.php` `single-event.php` 作为归档和文章页面的模板框架，注意文件命名 `archive-postType.php  single-postType.php`

```php 
<?php
function add_custom_post_type(){
    // 新增一个 type 为 event 的 post，wordpress 默认 postType 为 page 和 post
    register_post_type('event', array(
        'show_in_rest' => true,
        'public' => true,
        'menu_icon' => 'dashicons-calendar',
        'has_archive' => true, // 开启归档
        'rewrite' => array('slug' => 'events'),// 定义 url 为 /events
        'supports' => array('title','editor','excerpt'),
        'labels' => array( // 设置后台管理页面显示
            'name' => 'Events',
            'add_new_item' => 'Add new Events',
            'edit_item' => 'Edit event',
            'all_items' => 'All Events',
            'singular_name' => 'Event',
        )
    ));
}
- 如果需要给文章添加 自定义 字段，可以使用 `advanced custom fields`这个插件，添加完自定义字段后，在php文件中通过 the_field(fieldName) 或者 get_field(fieldName) 来使用

add_action('init', 'add_custom_post_type');
```

- wordpress 自定义查询分页会失效，需要稍作调整自定义查询参数
- 在functions.php中添加钩子函数，可以拦截默认查询，并修改相应的查询参数

```php
function adjust_default_query($query){
    // 非后台管理页面 && 自定义event类型的post && 是默认查询（非自定义query）
    if (!is_admin() and is_post_type_archive('event') and $query->is_main_query()) {
        $today = date('Ymd');
        $query->set('meta_key', 'event_date');
        $query->set('orderby', 'meta_value_num');
        $query->set('order', 'ASC');
        $query->set('meta_query', array(
            array(
                'key' => 'event_date',
                'compare' => '>=',
                'value' => $today,
                'type' => 'numeric',
            )
        ));
    }

}
add_action('pre_get_posts', 'adjust_default_query');
```

## 常见问题

- wordpress更改固定链接,id 形式改成 post_name 形式后页面刷新报 404
  [nginx 需要进行伪静态配置](https://blog.51cto.com/simadi/3137787)

```text
location / {
    try_files $uri $uri/ /index.php?$args;
}

# Add trailing slash to */wp-admin requests.
rewrite /wp-admin$ $scheme://$host$uri/ permanent;
```

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

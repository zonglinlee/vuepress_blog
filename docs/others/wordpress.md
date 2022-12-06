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
- `functions.php`: 调用wordpress内置钩子，加载自定义函数,如下通过 add_action 添加自定义函数 `load_files`,来加载 `index.css`
```php
<?php
function load_files() {
    wp_enqueue_style('my_index_stylesheet', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 'load_files');
```
- `screenshot.png`: 主题安装页面的缩略图

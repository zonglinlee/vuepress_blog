---
title: scss
---

## Mixins

@[code scss](../_code/css/scssMixin.scss)

## 常用命令

### `@each` 指令

```scss
$bgColors: (
        "1": #FC1786, "2": #2EC8FA, "3": #2672ae, "4":#f80, "5":#f2c2b9, "6":#1c6072,
        "7":#779ced, "8":#303d69, "9":#fbc9b8, "10":#412e45, "11":#88e9e4, "12":#98c3bf,
        "13":#e3bafa, "14":#9add8d, "15":#5e7987, "16":#dedf7b, "17":#5d94a6, "18":#0571b4,
        "19":#bd5008, "20":#4d41be
);

@each $key, $value in $bgColors {
  .card_bg#{$key} {
    background-color: $value;
  }
}
```

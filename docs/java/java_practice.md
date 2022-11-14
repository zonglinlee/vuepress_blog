---
title: java practice_100
---

### 基本类型判断
```java
    private boolean isBaseType(Object object) {
        List<Class> classList = new ArrayList<>(8);
        classList.add(java.lang.Integer.class);
        classList.add(java.lang.Byte.class);
        classList.add(java.lang.Long.class);
        classList.add(java.lang.Double.class);
        classList.add(java.lang.Float.class);
        classList.add(java.lang.Character.class);
        classList.add(java.lang.Short.class);
        classList.add(java.lang.Boolean.class);
        return classList.contains(object.getClass());
    }
```

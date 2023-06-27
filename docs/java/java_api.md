---
title: java api
---

### 字符串转数组

```java
Scanner in = new Scanner(System.in);
int[] nums = Arrays.stream(in.nextLine().split(",")).mapToInt(Integer::parseInt).toArray();
```

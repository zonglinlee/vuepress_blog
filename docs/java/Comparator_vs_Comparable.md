---
title: Comparator_vs_Comparable
---

### 一、核心区别与概念解析
#### 1. 基本定义与定位
- **Comparable（可比较的）**：
    - 是一个**内部比较器**，也叫自然排序接口。
    - 实现该接口的类会**自身具备比较能力**，相当于“对象自己知道怎么和同类型对象比大小”。
    - 接口只有一个方法：`int compareTo(T o)`，返回值规则：
        - 正数：当前对象 > 传入对象；
        - 0：两者相等；
        - 负数：当前对象 < 传入对象。

- **Comparator（比较器）**：
    - 是一个**外部比较器**，也叫定制排序接口。
    - 不修改原类的代码，通过**外部类实现比较逻辑**，相当于“找一个第三方裁判来判断两个对象的大小”。
    - 核心方法：`int compare(T o1, T o2)`，返回值规则和 `compareTo` 一致；Java 8 后还新增了大量便捷的静态方法（如 `comparing`、`thenComparing`）。

#### 2. 代码示例对比
##### 示例1：使用 Comparable 实现自然排序
假设我们有一个 `Person` 类，希望按年龄自然排序：
```java
// 实现 Comparable 接口，指定比较的类型为 Person
class Person implements Comparable<Person> {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // 实现 compareTo 方法，定义“自然排序规则”：按年龄升序
    @Override
    public int compareTo(Person o) {
        // 简化写法：return this.age - o.age;（升序），o.age - this.age 为降序
        return Integer.compare(this.age, o.age);
    }

    // getter/toString 省略
    @Override
    public String toString() {
        return "Person{name='" + name + "', age=" + age + "}";
    }
}

// 测试 Comparable
public class CompareTest {
    public static void main(String[] args) {
        List<Person> list = new ArrayList<>();
        list.add(new Person("张三", 25));
        list.add(new Person("李四", 20));
        list.add(new Person("王五", 30));

        // Collections.sort 直接支持实现 Comparable 的对象
        Collections.sort(list);
        System.out.println("按年龄自然排序：" + list);
        // 输出：[Person{name='李四', age=20}, Person{name='张三', age=25}, Person{name='王五', age=30}]
    }
}
```

##### 示例2：使用 Comparator 实现定制排序
如果想临时按姓名排序，且不想修改 `Person` 类（比如 `Person` 是第三方类），就用 `Comparator`：
```java
// 无需修改 Person 类，外部定义比较规则
public class ComparatorTest {
    public static void main(String[] args) {
        List<Person> list = new ArrayList<>();
        list.add(new Person("张三", 25));
        list.add(new Person("李四", 20));
        list.add(new Person("王五", 30));

        // 方式1：匿名内部类实现 Comparator
        Collections.sort(list, new Comparator<Person>() {
            @Override
            public int compare(Person o1, Person o2) {
                // 按姓名升序（字符串的 compareTo 是按字典序）
                return o1.getName().compareTo(o2.getName());
            }
        });
        System.out.println("按姓名排序：" + list);
        // 输出：[Person{name='李四', age=20}, Person{name='王五', age=30}, Person{name='张三', age=25}]

        // 方式2：Java 8 简化写法（Lambda）
        list.sort(Comparator.comparing(Person::getName).reversed()); // 姓名降序
        System.out.println("按姓名降序：" + list);
        // 输出：[Person{name='张三', age=25}, Person{name='王五', age=30}, Person{name='李四', age=20}]
    }
}
```

### 二、核心差异总结表
| 维度                | Comparable                          | Comparator                          |
|---------------------|-------------------------------------|-------------------------------------|
| 所属类型            | 内部比较器（自身实现）              | 外部比较器（第三方实现）            |
| 核心方法            | `compareTo(T o)`                    | `compare(T o1, T o2)`               |
| 代码侵入性          | 需修改被比较类的源码（实现接口）    | 无需修改被比较类，灵活扩展          |
| 排序规则灵活性      | 只能定义**一种**排序规则（自然排序）| 可定义**多种**排序规则，按需切换    |
| 使用场景            | 固定的、默认的排序逻辑              | 临时的、定制化的排序逻辑            |
| 典型使用方式        | `Collections.sort(list)`            | `Collections.sort(list, comparator)`|

### 三、使用建议
1. 如果一个类的排序逻辑是“固定的、天然的”（比如数字的大小、字符串的字典序），让类实现 `Comparable`；
2. 如果排序逻辑是“多变的、临时的”，或者无法修改原类（如第三方类），使用 `Comparator`；
3. Java 8 后优先使用 `Comparator` 的静态方法（如 `comparing`、`thenComparing`）+ Lambda，代码更简洁。

### 总结
1. `Comparable` 是**对象自身具备比较能力**，通过 `compareTo` 实现，排序规则固定，需修改原类；
2. `Comparator` 是**外部定制比较规则**，通过 `compare` 实现，灵活无侵入，支持多规则排序；
3. 实际开发中，`Comparator` 因灵活性更常用，尤其是 Java 8 后的 Lambda 写法大幅简化了其使用成本。

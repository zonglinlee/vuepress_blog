---
title: java generic
---

## java 泛型方法

### 通配符
- `<?>`: 无限制通配符
- `<? extends E>`: **extends** 关键字声明了类型的上界，表示参数化的类型可能是所指定的类型 E，或者是此类型的子类
- `<? super E>` : **super** 关键字声明了类型的下界，表示参数化的类型可能是指定的类型 E，或者是此类型的父类


```java
private  <E extends Comparable<? super E>> E max(List<? extends E> e1) {
    if (e1 == null){
        return null;
    }
    //迭代器返回的元素属于 E 的某个子类型
    Iterator<? extends E> iterator = e1.iterator();
    E result = iterator.next();
    while (iterator.hasNext()){
        E next = iterator.next();
        if (next.compareTo(result) > 0){
            result = next;
        }
    }
    return result;
}
```
- `<E extends Comparable<? super E>>`：泛型方法的类型参数声明
- `E`: 返回值类型


举个例子，说明一下 **下限通配符** 的用处
```java
// 父类：实现 Comparable<Fruit>
class Fruit implements Comparable<Fruit> {
    private int weight;
    public Fruit(int weight) { this.weight = weight; }
    
    @Override
    public int compareTo(Fruit o) {
        return Integer.compare(this.weight, o.weight);
    }
}

// 子类：继承 Fruit，不重写 compareTo（复用父类的比较逻辑）
class Apple extends Fruit {
    public Apple(int weight) { super(weight); }
}
```

如果你的 `max` 方法签名是 `<E extends Comparable<E>> E max(...)`，当你传入 `List<Apple>` 时会编译报错：

```java
List<Apple> appleList = Arrays.asList(new Apple(50), new Apple(100));
// 编译错误：Apple 没有实现 Comparable<Apple>（它继承的是 Comparable<Fruit>）
Apple maxApple = max(appleList);

// 此时 Apple 类相当于以下代码
class Apple {
    private int weight;
    
    public Apple(int weight) { this.weight = weight; }
    
    @Override
    public int compareTo(Fruit o) {
        return Integer.compare(this.weight, o.weight);
    }
}
```


把方法签名改成 `<E extends Comparable<? super E>> E max(...)`，上面的代码就能正常运行 ，因为 `Apple` 实现的 `Comparable<Fruit>` 符合 `Comparable<? super Apple>`（Fruit 是 Apple 的父类），泛型限定被满足。

### 多重边界 `public static <T extends Staff & Passenger> void discount(T t)`

泛型参数声明：`<T extends Staff & Passenger>` , 这是多重边界限定，表示 `T` 必须满足：

  - 如果 Staff/Passenger 是接口：T 必须同时实现这两个接口；
  - 如果其中一个是类（比如 Staff 是类，Passenger 是接口）：T 必须继承 Staff 类 + 实现 Passenger 接口（注意：Java 不支持多继承，所以多重边界中最多只能有一个类，且必须放在第一个位置）。
  - 语法规则：多重边界用 `&` 分隔，**类必须在前，接口在后**，否则编译报错。

 

### 泛型中类型擦除


- 当类定义中的类型参数没有任何限制时，在类型擦除中直接被替换为 `Object`，即形如`<T>`和`<?>`的类型参数都被替换为 `Object`。
- 当类定义中的类型参数存在限制（上下界）时，在类型擦除中替换为类型参数的上界或者下界，比如形如`<T extends Number>`和`<? extends Number>`的类型参数被替换为 `Number`，`<? super Number>` 被替换为 `Object`。



在调用泛型方法时，可以指定泛型，也可以不指定泛型。
- 在不指定泛型的情况下，泛型变量的类型为该方法中的几种类型的同一父类的最小级，直到 `Object`；
- 在指定泛型的情况下，该方法的几种类型必须是该泛型的实例的类型或者其子类


```java
public static void main(String[] args) {  
    ArrayList list = new ArrayList();  
    list.add(1);  
    list.add("121");  
    list.add(new Date());  
}  
```



### java 编译类型检查

类型检查就是针对**引用**的，谁是一个引用，用这个引用调用泛型方法，就会对这个引用调用的方法进行类型检测，而**无关它真正引用的对象**

```java
public class Test {  

    public static void main(String[] args) {  

        ArrayList<String> list1 = new ArrayList();  
        list1.add("1"); //编译通过  
        list1.add(1); //编译错误  
        String str1 = list1.get(0); //返回类型就是String  

        ArrayList list2 = new ArrayList<String>();  
        list2.add("1"); //编译通过  
        list2.add(1); //编译通过  
        Object object = list2.get(0); //返回类型就是Object  

        new ArrayList<String>().add("11"); //编译通过  
        new ArrayList<String>().add(22); //编译错误  

        String str2 = new ArrayList<String>().get(0); //返回类型就是String  
    }  
} 
```


### 实例化泛型
通过反射实现泛型的实例化

```java
static <T> T newTclass (Class < T > clazz) throws InstantiationException, IllegalAccessException {
    T obj = clazz.newInstance();
    return obj;
}

```

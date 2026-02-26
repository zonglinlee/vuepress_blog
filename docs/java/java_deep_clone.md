---
title: Java 拷贝
---

### 1. `clone()` 方法的核心基础
#### （1）方法定义（Object 类中）
`clone()` 是 `Object` 类的**protected 本地方法**，源码简化如下：
```java
protected native Object clone() throws CloneNotSupportedException;
```
- `native`：底层由C/C++实现，直接操作内存，拷贝效率高；
- `protected`：默认仅允许同包类/子类访问，若想让外部类调用，需重写为 `public`；
- `CloneNotSupportedException`：若类未实现 `Cloneable` 接口，调用 `clone()` 会抛出此异常。

#### （2）核心规则
- `clone()` 创建的是**新对象**（堆中新内存地址），而非引用拷贝；
- 要调用 `clone()`，类必须实现 **`Cloneable` 接口**（标记接口，无任何方法，仅表示“该类允许克隆”）；
- 默认实现是**浅拷贝**（关键！后续重点讲）。

### 2. 使用 `clone()` 的完整步骤
#### 步骤1：实现 `Cloneable` 接口
```java
// 标记该类允许克隆
public class User implements Cloneable {
    private String name;
    private int age;
    // 引用类型字段（用于演示深浅拷贝）
    private Address address;

    // 构造器、getter/setter 省略
    public User(String name, int age, Address address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    // 步骤2：重写 clone() 方法（改为public，处理异常）
    @Override
    public Object clone() throws CloneNotSupportedException {
        // 调用父类（Object）的 clone() 方法，完成基础拷贝
        return super.clone();
    }
}

// 引用类型辅助类
class Address {
    private String city;
    public Address(String city) {
        this.city = city;
    }
    // getter/setter 省略
    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }
}
```

#### 步骤3：调用 `clone()` 方法
```java
public class CloneDemo {
    public static void main(String[] args) {
        try {
            // 创建原对象
            Address addr = new Address("北京");
            User user1 = new User("张三", 20, addr);
            
            // 克隆新对象
            User user2 = (User) user1.clone();
            
            // 验证：新对象和原对象地址不同（是新对象）
            System.out.println(user1 == user2); // false
            
            // 验证：基础类型字段值相同
            System.out.println(user1.getAge() == user2.getAge()); // true
            System.out.println(user1.getName().equals(user2.getName())); // true
            
        } catch (CloneNotSupportedException e) {
            e.printStackTrace();
        }
    }
}
```

### 3. 核心难点：浅拷贝 vs 深拷贝
这是 `clone()` 最易踩坑的点，先明确两者的核心区别：

| 类型       | 拷贝规则                                                                 | 风险点                                   |
|------------|--------------------------------------------------------------------------|------------------------------------------|
| 浅拷贝（默认） | 1. 基础类型字段：拷贝**值本身**<br>2. 引用类型字段：拷贝**地址引用**（新旧对象指向同一个引用对象） | 修改新对象的引用字段，会影响原对象       |
| 深拷贝     | 1. 基础类型字段：拷贝值<br>2. 引用类型字段：创建**新的引用对象**（新旧对象引用字段指向不同内存） | 无上述风险，拷贝更彻底                   |

#### （1）浅拷贝的问题演示
接上面的示例，修改新对象的引用字段：
```java
public class ShallowCloneProblem {
    public static void main(String[] args) {
        try {
            Address addr = new Address("北京");
            User user1 = new User("张三", 20, addr);
            User user2 = (User) user1.clone();
            
            // 修改新对象的引用字段（地址）
            user2.getAddress().setCity("上海");
            
            // 原对象的地址也被修改了！（浅拷贝导致）
            System.out.println(user1.getAddress().getCity()); // 输出：上海
        } catch (CloneNotSupportedException e) {
            e.printStackTrace();
        }
    }
}
```

#### （2）实现深拷贝的两种方式
##### 方式1：重写 `clone()` 时，手动拷贝引用字段
让引用类型也实现 `Cloneable` 并重写 `clone()`，然后在主类的 `clone()` 中手动拷贝：
```java
// 1. Address 实现 Cloneable 并重写 clone()
class Address implements Cloneable {
    private String city;
    public Address(String city) { this.city = city; }
    
    @Override
    public Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
    // getter/setter 省略
}

// 2. User 类重写 clone()，手动拷贝引用字段
public class User implements Cloneable {
    private String name;
    private int age;
    private Address address;

    @Override
    public Object clone() throws CloneNotSupportedException {
        // 第一步：拷贝当前对象的基础字段（浅拷贝）
        User cloneUser = (User) super.clone();
        // 第二步：手动拷贝引用字段（深拷贝核心）
        cloneUser.address = (Address) this.address.clone();
        return cloneUser;
    }
    // 构造器、getter/setter 省略
}
```

##### 方式2：通过序列化实现深拷贝（更通用）
无需让每个引用类都实现 `Cloneable`，适合引用层级深的场景：
```java
import java.io.*;

public class User implements Serializable { // 实现Serializable接口
    private String name;
    private int age;
    private Address address; // Address也需实现Serializable

    // 深拷贝方法（序列化+反序列化）
    public User deepClone() throws IOException, ClassNotFoundException {
        // 1. 序列化：将对象写入字节流
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        ObjectOutputStream oos = new ObjectOutputStream(bos);
        oos.writeObject(this);
        
        // 2. 反序列化：从字节流重建对象（全新的引用）
        ByteArrayInputStream bis = new ByteArrayInputStream(bos.toByteArray());
        ObjectInputStream ois = new ObjectInputStream(bis);
        return (User) ois.readObject();
    }
    // 构造器、getter/setter 省略
}

// Address 需实现 Serializable
class Address implements Serializable {
    private String city;
    public Address(String city) { this.city = city; }
    // getter/setter 省略
}

// 测试深拷贝
public class DeepCloneTest {
    public static void main(String[] args) {
        try {
            Address addr = new Address("北京");
            User user1 = new User("张三", 20, addr);
            User user2 = user1.deepClone();
            
            user2.getAddress().setCity("上海");
            // 原对象地址不变（深拷贝成功）
            System.out.println(user1.getAddress().getCity()); // 输出：北京
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

### 4. `clone()` 的优缺点
#### 优点
- 底层是 native 方法，拷贝效率高（浅拷贝场景）；
- 无需手动写大量赋值代码，简化对象拷贝逻辑。

#### 缺点
- 默认是浅拷贝，深拷贝需手动处理，层级深时繁琐；
- 必须实现 `Cloneable` 接口，否则抛异常（接口无方法，设计不优雅）；
- `clone()` 返回值是 `Object`，需强制类型转换，易出错；
- 无法拷贝 `final` 引用字段（final 字段指向的对象无法被重新赋值）。

### 5. 替代方案：避免使用 `clone()`
在实际开发中，更多人选择以下更优雅的方式替代 `clone()`：
1. **手动编写拷贝方法**（拷贝构造器）：
```java
public class User {
    private String name;
    private int age;
    private Address address;

    // 拷贝构造器
    public User(User original) {
        this.name = original.name;
        this.age = original.age;
        // 深拷贝：新建Address对象
        this.address = new Address(original.address.getCity());
    }
}
```
2. **使用第三方库**（如 Apache Commons Lang 的 `SerializationUtils`、Gson/Jackson 序列化）：
```java
// Apache Commons Lang 实现深拷贝
User user2 = (User) SerializationUtils.clone(user1);
```

### 总结
1. `Object.clone()` 是 native 方法，需实现 `Cloneable` 接口才能调用，默认是**浅拷贝**；
2. 浅拷贝仅拷贝基础类型值和引用地址，修改引用字段会影响原对象，深拷贝需手动处理引用字段；
3. 实际开发中，推荐用**拷贝构造器**或**序列化**实现深拷贝，替代原生 `clone()`（更易维护）。

简单记：`clone()` 核心是“内存级拷贝”，浅拷贝够用就用，需要彻底拷贝就做深拷贝，或直接用更优雅的替代方案。

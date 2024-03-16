### Default Parameters

```js
function applyDiscount(price: number, discount: number = 0.05): number {
  return price * (1 - discount)
}
```

```kotlin
fun printMessageWithPrefix(message: String, prefix: String = "Info") {
    println("[$prefix] $message")
}
```

// reference link : https://juejin.cn/post/6844903847249330184
// 事件循环：微任务和宏任务::: https://zh.javascript.info/event-loop
export default function timeSliceFun (gen) {
  if (typeof gen === 'function') gen = gen()
  if (!gen || typeof gen.next !== 'function') return

  return function next () {
    const start = performance.now()
    let res = null
    do {
      res = gen.next()
    } while(!res.done && performance.now() - start < 25);

    if (res.done) return
    setTimeout(next)
  }
}


// @Test
function* forLoopGenerator(){
  for (let i = 0; i < 10000 * 100; i++) {
    console.log(i)
    yield
  }
  console.log('done!')
}

timeSliceFun(forLoopGenerator)();

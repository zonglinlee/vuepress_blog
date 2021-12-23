// reference link  : http://objcer.com/2017/02/26/traverse-the-tree/
let tree = {
  value: 0,
  children: [{
    value: 11,
    children: [{
      value: 21,
      children: [{
        value: 31,
        children: []
      }, {
        value: 32,
        children: []
      }, {
        value: 33,
        children: []
      }]
    }, {
      value: 22,
      children: []
    }]
  }, {
    value: 12,
    children: [{
      value: 23,
      children: []
    }, {
      value: 24,
      children: []
    }]
  }, {
    value: 13,
    children: []
  }]
}
const recursiveTraverse = function (node, action) {
  if (!node || !node.children) { return; }
  action(node.value);
  node.children.forEach(function(item, index) {
    recursiveTraverse(item, action);
  });
}
// 递归实现
recursiveTraverse(tree, console.log);
console.log("======================split==============================")


// 非递归深度优先遍历
const nonRecursiveDepthFirstTraversal = function (node, action) {
  if (!node || !node.children) { return; }
  let _stack = []; // 借助一个栈
  _stack.unshift(node);
  while (_stack.length) {
    let _curNode = _stack.shift(); // 推出栈顶元素
    action(_curNode.value);
    // 将子节点依次放入到栈顶
    // _curNode.children.forEach(function (item, index) {
    // 	_stack.unshift(item);
    // })
    if (_curNode.children.length) {
      _stack = _curNode.children.concat(_stack); // 深度优先这里优先将 children 树放到栈首位
    }
  }
}
nonRecursiveDepthFirstTraversal(tree, console.log);
console.log("======================split==============================")


// 非递归宽度优先遍历
const nonRecursiveWidthFirstTraversal = function (node, action) {
  if (!node || !node.children) { return; }
  let _queue = []; // 借助一个队列
  _queue.push(node);
  while (_queue.length) {
    let _curNode = _queue.shift(); // 推出队头元素
    action(_curNode.value);
    // 将子节点依次推入队列中
    // _curNode.children.forEach(function (item, index) {
    // 	_queue.push(item);
    // })
    if (_curNode.children.length) {
      _queue = _queue.concat(_curNode.children); // 广度优先这里优先将队列元素放在队列首位, children靠后
    }
  }
}
nonRecursiveWidthFirstTraversal(tree, console.log);

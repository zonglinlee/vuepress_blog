const readline = require("readline")
// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const it = rl[Symbol.asyncIterator]();

// 宜居星球改造计划
// 关键点： YES 区域大于0 且 NO 区域大于 0
function fun1(matrix) {
    const setYes = (i, j) => {
        if (matrix[i][j] === 'NO') matrix[i][j] = 'YES'
    }
    const traversal = (i, j) => {
        const item = matrix[i][j]
        if (item === 'V_YES' || item === 'NA') return
        if (item === 'YES') {
            matrix[i][j] = 'V_YES'
            const len1 = matrix.length
            const len2 = matrix[0].length
            if (i >= 1) setYes(i - 1, j)
            if (i + 1 < len1) setYes(i + 1, j)
            if (j >= 1) setYes(i, j - 1)
            if (j + 1 < len2) setYes(i, j + 1)
        }
    }
    const countYesArea = () => {
        const queue = []
        for (let i = 0; i < matrix.length; i++) {
            const outer = matrix[i]
            for (let j = 0; j < outer.length; j++) {
                const inner = outer[j]
                if (inner === 'YES') {
                    queue.push([i, j])
                }
            }
        }
        return queue
    }
    // ==============================
    let days = 0
    let queue = countYesArea()
    if (queue.length === 0) return -1

    while (queue.length > 0) {
        queue.forEach((queueItem) => {
            traversal(queueItem[0], queueItem[1])
        })
        queue = countYesArea()
        days++
    }
    if (matrix.reduce((acc, item) => acc + item.filter(subItem => subItem === 'NO').length, 0) > 0) days = -1
    return days
}

const fun1Arr1 = [
    ['YES', 'NO', 'NO', 'NO'],
    ['NO', 'NO', 'NO', 'NO'],
    ['NO', 'NO', 'NO', 'NO'],
    ['NO', 'NO', 'NO', 'NO'],
]

const fun1Arr2 = [
    ['YES', 'NO', 'NO', 'YES'],
    ['NO', 'NO', 'YES', 'NO'],
    ['NO', 'YES', 'NA', 'NA'],
    ['YES', 'NO', 'NA', 'NO']
]

fun1(fun1Arr1)


// 阿里巴巴找黄金宝箱

function fun2(arr) {
    let result = -1
    let leftTotal = 0
    let rightTotal = arr.reduce((acc, item) => acc + item, 0)
    for (let i = 0; i < arr.length; i++) {
        const iNum = arr[i]
        if (leftTotal === (rightTotal - iNum)) {
            result = i
            break
        }
        leftTotal += iNum
        rightTotal -= iNum
    }
    console.log(result)
}

// fun2([2, 5, -1, 8, 6])
// fun2([8, 9])
// fun2([11])

// 选修课
const fun3Str1 = `01202021,75;01201033,95;01202008,80;01203006,90;01203088,100`
const fun3Str2 = '01202008,70;01203088,85;01202111,80;01202021,75;01201100,88'
const fun3Str3 = '01201022,75;01202033,95;01202018,80;01203006,90;01202066,100'
const fun3Str4 = '01202008,70;01203102,85;01202111,80;01201021,75;01201100,88'


function fun3(str1, str2) {
    const preHandleInput = str => {
        return str.split(';').map(item => item.split(','))
    }
    const arr1 = preHandleInput(str1)
    const arr2 = preHandleInput(str2)
    const map = {}
    arr1.forEach(item => {
        const no = item[0]
        if (!map[no]) {
            map[no] = [item[1]]
        }
    })
    arr2.forEach(item => {
        const no = item[0]
        if (map[no]) {
            map[no].push(item[1])
        }
    })

    for (let key of Object.keys(map)) {
        if (map[key].length !== 2) {
            delete map[key]
        }
    }
    if (Object.keys(map).length === 0) {
        console.log(null)
        return
    }
    const nosSet = new Set(Object.keys(map).map(key => key.substring(0, 5)))
    const sortedNosArr = Array.from(nosSet).sort((a, b) => parseInt(a) - parseInt(b))

    const newMap = {}
    sortedNosArr.forEach(item => {
        if (!newMap[item]) {
            newMap[item] = []
        }
        for (let key of Object.keys(map)) {
            if (key.startsWith(item)) {
                newMap[item].push([key, parseInt(map[key][0]) + parseInt(map[key][1])])
            }
        }
    })
    sortedNosArr.forEach(item => {
        console.log(item)
        const resArr = newMap[item].sort((a, b) => {
            let res = b[1] - a[1]
            if (res === 0) {
                return (parseInt(a[0]) - parseInt(b[0]))
            }
            return res
        }).map(item => item[0])
        console.log(resArr.join(','));
    })


}

// fun3(fun3Str1, fun3Str2)
// fun3(fun3Str3, fun3Str4)


// 五子棋迷
function fun4(type, statusStr) {
    const status = statusStr.split(' ')
    const position = []
    status.forEach((item, index) => {
        if (item === '0') position.push(index)
    })

    if (position.length === 0) {
        console.log(-1)
        return
    }
    const result = [[], []]
    for (let i = 0; i < position.length; i++) {
        let startIndex = position[i]
        result[0].push(startIndex)
        let count = 1
        let counter = 1
        while (startIndex + counter < status.length) {
            if (status[startIndex + counter] === type) {
                count++
                counter++
            } else {
                break
            }
        }
        counter = 1
        while (startIndex - counter >= 0) {
            if (status[startIndex - counter] === type) {
                count++
                counter++
            } else {
                break
            }
        }
        result[1].push(count)
    }
    const maxLen = Math.max(...result[1])
    const totalMaxLen = result[1].filter(item => item === maxLen).length
    if (totalMaxLen > 1) {
        const mid = status.length % 2 === 0 ? (status.length / 2 + 0.5) : status.length / 2
        const positionArr = []
        result[1].forEach((item, index) => {
            if (item === maxLen) {
                positionArr.push(result[0][index])
            }
        })
        const diffArr = positionArr.map(item => Math.abs(item - mid))
        const min = Math.min(...diffArr)
        for (let i = 0; i < diffArr.length; i++) {
            if (diffArr[i] === min) {
                console.log(positionArr[i])
            }
        }
    } else {
        const index = result[1].findIndex(val => val === maxLen)
        console.log(result[0][index])
    }

}

// fun4('1', '-1 0 1 1 1 0 1 0 1 -1 1')
// fun4('-1', '-1 0 1 1 1 0 1 0 1 -1 1')
// fun4('1', '0 0 0 0 1 0 0 0 0 1 0')

// 代表团坐车 [failed]
function fun5(nums, target) {
    let n = nums.length;

    let dp = new Array(n + 1);
    for (let i = 0; i < n + 1; i++) {
        dp[i] = new Array(target + 1).fill(0);
    }
    dp[0][0] = 1;

    for (let i = 1; i <= n; i++) {
        let num = nums[i - 1];
        for (let j = 0; j <= target; j++) {
            if (j < num) {
                dp[i][j] = dp[i - 1][j];
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i - 1][j - num];
            }
        }
    }

    console.log(dp[n][target], n, target, dp);

}

// fun5([5, 4, 2, 3, 2, 4, 9], 10)

// 座位调整
function fun6(inputStr) {
    const places = inputStr.split(',')
    let counter = 0
    for (let i = 0; i < places.length; i++) {
        const num = places[i]
        if (num === '1') continue
        if (num === '0') {
            if (i === 0 && places[i + 1] === '0') {
                places[i] = '1'
                counter++
            }
            if (i === places.length - 1 && places[i - 1] === '0') {
                places[i] = '1'
                counter++
            }
            if (i - 1 >= 0 && places[i - 1] === '0' && i + 1 < places.length && places[i + 1] === '0') {
                places[i] = '1'
                counter++
            }
        }
    }
    console.log(counter)
}

// fun6('1,0,0,0,1')


// 食堂供餐 [failed][找不到边界条件]

function fun7(num1, num2, arr) {
    let left = 0
    let right = arr.reduce((acc, item) => acc + item, 0) - num2
    const check = (speed, left, time, arr) => {
        let result = true
        for (let i = 0; i < time; i++) {
            left -= arr[i]
            if (left < 0) {
                result = false
                break
            }
            left += speed
        }
        return result
    }
    while (left < right) { // 边界判断很重要
        //    二分法
        const mid = (left + right) / 2
        if (check(mid, num2, num1, arr)) {
            right = mid
        } else {
            left = mid + 1
        }

    }
    console.log(left)
}

// fun7(3, 14, [10, 4, 5])


// 寻找最大价值的矿堆
function fun8(arr) {
    const m = arr.length
    const n = arr[0].length
    const traversal = (i, j) => {
        let val = arr[i][j]
        arr[i][j] = -1 // 标记已经访问过的区域
        if (val === -1) return 0 // 返回条件
        if (val === 0) return val // 返回条件
        // left
        if (j > 0) {
            val += traversal(i, j - 1)
        }
        // right
        if (j < n - 1) {
            val += traversal(i, j + 1)
        }
        //    top
        if (i > 0) {
            val += traversal(i - 1, j)
        }
        //    bottom
        if (i < m - 1) {
            val += traversal(i + 1, j)
        }
        return val
    }
    let max = 0

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (arr[i][j] !== 0) {
                let val = traversal(i, j)
                max = Math.max(val, max)
            }

        }
    }
    console.log(max)
}

// fun8([
//     [2, 2, 2, 2, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [1, 1, 1, 1, 1]
// ])
// fun8([
//     [2, 2, 2, 2, 0],
//     [0, 0, 0, 2, 0],
//     [0, 0, 0, 1, 0],
//     [0, 1, 1, 1, 1],
// ])
//
// fun8([
//     [2, 0, 0, 0, 0],
//     [0, 0, 0, 2, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 1, 1, 1],
// ])

// 数据最节约的备份方法[failed]
function fun9(arr) {
    arr.sort((a, b) => a - b) // 将 arr 升序排列
    const check = (num) => {
        const storage = new Array(num).fill(500)
        for (let i = arr.length - 1; i >= 0; i--) { // 将输入数据倒序循环 先处理最大的值
            storage.sort((a, b) => a - b) // 确保每次都取最大的 剩余值
            const maxLeft = storage[num - 1]
            if (maxLeft >= arr[i]) {
                storage[num - 1] = maxLeft - arr[i] // 将当前存储数据从中减去
            } else {
                return false // 表明剩余的存储空间不够存储 当前未存储中 最大的值
            }
        }
        return true // 循环完毕  说明可以存储
    }

    let left = 1
    let right = arr.length + 1

    while (left < right) {
        let mid = Math.floor((right + left) / 2)
        if (check(mid)) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    console.log("数据最节约的备份方法:", left)
}

// fun9([100, 500, 300, 200, 400])
// fun9([100, 500, 300, 200, 400, 500, 400])
// fun9([100, 100, 200, 300])

// 最长公共后缀 java[todo]
function fun10(arr) {
    let tem = ""
    const word = arr[0]
    let len = word.length
    let jumpOut = false
    while (len >= 0) {
        if (len - 1 >= 0) {
            tem = word[len - 1] + tem
        }
        for (let j = 1; j < arr.length; j++) {
            const word1 = arr[j]
            if (!word1.endsWith(tem)) {
                jumpOut = true
                break
            }
        }
        if (jumpOut) break
        len--
    }
    if (len === -1) {
        return tem
    }
    if (tem.length > 1) {
        return tem.substring(1)
    }
    return '@Zero'
}


// console.log(fun10(["abc", "abc", "abcabc"]))
// console.log(fun10(["aa", "bb", "cc"]))

// 比赛
function fun11(num1, num2, arr) {
    let newArr = []
    for (let i = 0; i < num2; i++) {
        let obj = {total: 0, scores: []}
        obj.no = i + 1
        for (let j = 0; j < num1; j++) {
            obj.total += arr[j][i]
            obj.scores.push(arr[j][i])
        }
        newArr.push(obj)
    }
    const compareFun = (arr1, arr2) => {
        const getMap = (arr) => {
            let arr1 = new Array(10).fill(0)
            arr.forEach(item => {
                arr1[item % 10] = arr1[item % 10] + 1
            })
            return arr1
        }
        let a1 = getMap(arr1)
        let a2 = getMap(arr2)
        let index = 0
        while (index < 10) {
            if (a1[index] > a2[index]) {
                return -1
            } else if (a1[index] > a2[index]) {
                return 1
            } else {
                index++
            }
        }
    }
    const top3 = newArr.sort((a, b) => {
        if (a.total === b.total) {
            return compareFun(a.scores, b.scores)
        }
        return b.total - a.total
    }).filter((item, index) => index <= 2)
    console.log(top3.map(item => item.no).join(','))
}

// fun11(4, 5,
//     [
//         [10, 6, 9, 7, 6],
//         [9, 10, 6, 7, 5],
//         [8, 10, 6, 5, 10],
//         [9, 10, 8, 4, 9]
//     ])


// 告警抑制 [failed] java[todo]
function fun12(num, relation, input) {
    const map = relation.reduce((acc, item) => {
        const [key, val] = item
        if (!acc[key]) {
            acc[key] = [] // 这里应该是个数组才对， 因为有可能会 A->B A->C  (一对多)
        }
        acc[key].push(val)
        return acc
    }, {})
    let indexArr = []
    for (let i = 0; i < input.length; i++) {
        let selectedCharArr = map[input[i]]
        if (!selectedCharArr) continue
        for (let j = i + 1; j < input.length; j++) {
            let char = input[j]
            if (selectedCharArr.includes(char)) {
                indexArr.push(j)
            }
        }
    }
    const result = input.reduce((acc, item, index) => {
        if (!indexArr.includes(index)) acc.push(input[index])
        return acc
    }, []).join(' ')
    console.log(result)
}

// fun12(2, [['A', 'B'], ['B', 'C']], ['A', 'B', 'C', 'D', 'E'])
// 这个输入是否正确
// fun12(4, [['F', 'G'], ['C', 'B'], ['A', 'G'], ['A', 'O']], ['A', 'B', 'C', 'D', 'E'])

// 报文重排序
function fun13(inputStr) {
    let reg = /^([a-zA-Z]+)(\d+)$/
    const result = inputStr.split(' ').map(item => {
        const [str, word, index] = item.match(reg)
        return [word, parseInt(index)]
    }).sort((a, b) => a[1] - b[1]).map(item => item[0]).join(" ")
    console.log(result);
}

// fun13('rolling3 stone4 like1 a2')
// fun13('gifts6 and7 Exchanging1 all2 precious5 things8 kinds3 of4')

// 字符串摘要
function fun14(str) {
    const smallStr = str.toLowerCase()
    const code_a = 'a'.charCodeAt(0)
    const code_z = 'z'.charCodeAt(0)
    const arr = []
    for (let i = 0; i < smallStr.length; i++) {
        const char = smallStr[i]
        const charCode = char.charCodeAt(0)
        const flag = charCode >= code_a && charCode <= code_z
        if (flag) {
            let j = 1
            let nextChar = smallStr[i + j]
            while (nextChar && nextChar === char) {
                j++
                nextChar = smallStr[i + j]
            }
            if (j === 1) { // 不连续
                let counter = 0
                let k = 1
                let nextChar = smallStr[i + k]
                while (nextChar) {
                    if (nextChar === char) counter++
                    k++
                    nextChar = smallStr[i + k]
                }
                arr.push([char, counter, false])
            } else {
                arr.push([char, j, true])
                i = i + (j - 1)
            }
        }
    }
    // console.log(arr)
    const result = arr.sort((a, b) => {
        let diff = b[1] - a[1]
        if (diff === 0) {
            return a[0].charCodeAt(0) - b[0].charCodeAt(0)
        }
        return diff
    }).map(item => `${item[0]}${item[1]}`).join('')
    console.log(result)
}

// fun14('aabbcc')
// fun14('bAaAcBb')


// 矩阵稀疏扫描
function fun15() {

}

// AI面板识别[failed]答案中 2、3 两个等的标号是反的
function fun16() {

}

// 组装最大可靠性设备
async function fun17() {
    let input = []
    let types = []
    let counter = 0
    const line1 = await it.next();
    input = line1.value.split(" ").map(item => parseInt(item))
    const line2 = await it.next();
    input.push(parseInt(line2.value))
    console.log(input);
    rl.close()

}



const longestPalindrome = function (s) {
};
// console.log(longestPalindrome("babad"))
// console.log(longestPalindrome("cbbd"))
// console.log(longestPalindrome("abb"))


fun17()

/* eslint-disable */


function noop() {
}

function extend(to, _from) {
    for (let key in _from) {
        to[key] = _from[key];
    }
    return to;
}

function isError(err) {
    return Object.prototype.toString.call(err).indexOf('Error') > -1
}

const isArray = Array.isArray || function (arr) {
    return Object.prototype.toString.call(arr) == '[object Array]';
};

function isNumber(v) {
    return typeof v === 'number'
}

function isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
}

function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
}

function isHtmlElement(node) {
    return node && node.nodeType === Node.ELEMENT_NODE;
}

const isFunction = (functionToCheck) => {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
};

const isUndefined = (val) => {
    return val === void 0; // void 运算符 对给定的表达式进行求值，然后返回 undefined。
};

const isDefined = (val) => {
    return val !== undefined && val !== null;
};

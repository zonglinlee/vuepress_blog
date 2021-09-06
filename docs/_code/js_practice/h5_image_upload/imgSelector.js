!function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global = global || self, global.ImgSelector = factory());
}(this, function () {

    let ImgSelector = {}

    function updateElementStyle(element, styles) {
        for (const attrName in styles) {
            element.style[attrName] = styles[attrName]
        }
    }

    const ALL = '*'

    function isWXEnv() {
        const ua = window.navigator.userAgent.toLowerCase()
        return ua.match(/MicroMessenger/i) && ua.match(/MicroMessenger/i)[0] === 'micromessenger';
    }

    /**
     *  分析智能手机浏览器 版本信息
     */

    const browser = {
        versions: function () {
            const u = navigator.userAgent,
                app = navigator.appVersion;
            return { //移动终端浏览器版本信息
                trident: u.indexOf('Trident') > -1, //IE内核
                presto: u.indexOf('Presto') > -1, //opera内核
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
                iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1, //是否iPad
                webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
                isWeixin: u.toLowerCase().match(/MicroMessenger/i) == 'micromessenger',//  是否是微信打开的浏览器
                isMQQbrowser: u.toLowerCase().match(/MQQbrowser/i) == 'mqqbrowser' //  是否是微信打开的浏览器
            };
        }(),
        // language: (navigator.browserLanguage || navigator.language).toLowerCase()
    }

//  是否是 ios系统
    function isIos() {
        return browser.versions.ios || browser.versions.iPhone || browser.versions.iPad;
    }

// 是否是安卓系统
    function isAndroid() {
        return browser.versions.android
    }

// 是否是移动端
    function isMobile() {
        return browser.versions.mobile;
    }

    function isWeixin() {
        return browser.versions.isWeixin;
    }

    function isMQQbrowser() {
        return browser.versions.isMQQbrowser;
    }


    function createInput({count, sourceType, type, extension}) {
        const inputEl = document.createElement('input')
        inputEl.type = 'file'

        updateElementStyle(inputEl, {
            position: 'absolute',
            visibility: 'hidden',
            'z-index': -999,
            width: 0,
            height: 0,
            top: 0,
            left: 0
        })

        inputEl.accept = extension.map(item => {
            if (type !== ALL) {
                // 剔除.拼接在type后
                return `${type}/${item.replace('.', '')}`
            } else {
                // 在微信环境里，'.jpeg,.png' 会提示没有应用可执行此操作
                if (isWXEnv()) {
                    return '.'
                }
                // 在后缀前方加上.
                return item.indexOf('.') === 0 ? item : `.${item}`
            }
        }).join(',')

        if (count > 1) {
            inputEl.multiple = 'multiple'
        }
        // 经过测试，仅能限制只通过相机拍摄，不能限制只允许从相册选择。
        if (sourceType.length === 1 && sourceType[0] === 'camera') {
            inputEl.capture = 'camera'
        }
        if (isAndroid() && isWeixin() && !isMQQbrowser()) {
            console.log("强制添加摄像头调用功能");
            inputEl.capture = 'camera';
        }
        return inputEl
    }

    function hasOwn(obj, key) {
        const hasOwnProperty = Object.prototype.hasOwnProperty
        return hasOwnProperty.call(obj, key)
    }

    const files = {}

    /**
     * 从url读取File
     * @param {string} url
     */
    ImgSelector.urlToFile = function (url) {
        let file = files[url]
        if (file) {
            return Promise.resolve(file)
        }
        if (/^data:[a-z-]+\/[a-z-]+;base64,/.test(url)) {
            return Promise.resolve(ImgSelector.base64ToFile(url))
        }
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest()
            xhr.open('GET', url, true)
            xhr.responseType = 'blob'
            xhr.onload = function () {
                resolve(this.response)
            }
            xhr.onerror = reject
            xhr.send()
        })
    }

    /**
     * base64转File
     * @param {string} base64
     * @return {File}
     */
    ImgSelector.base64ToFile = function (base64) {
        base64 = base64.split(',')
        var type = base64[0].match(/:(.*?);/)[1]
        var str = atob(base64[1])
        var n = str.length
        var array = new Uint8Array(n)
        while (n--) {
            array[n] = str.charCodeAt(n)
        }
        return ImgSelector.blobToFile(array, type)
    }

    /**
     * 简易获取扩展名
     * @param {string} type
     * @return {string}
     */
    function getExtname(type) {
        const extname = type.split('/')[1]
        return extname ? `.${extname}` : ''
    }

    /**
     * 简易获取文件名
     * @param {*} url
     */
    function getFileName(url) {
        url = url.split('#')[0].split('?')[0]
        const array = url.split('/')
        return array[array.length - 1]
    }

    /**
     * blob转File
     * @param {Blob} blob
     * @param {string} type
     * @return {File}
     */
    ImgSelector.blobToFile = function (blob, type) {
        if (!(blob instanceof File)) {
            type = type || blob.type || ''
            const filename = `${Date.now()}${getExtname(type)}`
            try {
                blob = new File([blob], filename, {type})
            } catch (error) {
                blob = blob instanceof Blob ? blob : new Blob([blob], {type})
                blob.name = blob.name || filename
            }
        }
        return blob
    }

    /**
     * 从本地file或者blob对象创建url
     * @param {Blob|File} file
     * @return {string}
     */
    ImgSelector.fileToUrl = function (file) {
        for (const key in files) {
            if (hasOwn(files, key)) {
                const oldFile = files[key]
                if (oldFile === file) {
                    return key
                }
            }
        }
        let url = (window.URL || window.webkitURL).createObjectURL(file)
        files[url] = file
        return url
    }

    function getSameOriginUrl(url) {
        const a = document.createElement('a')
        a.href = url
        if (a.origin === location.origin) {
            return Promise.resolve(url)
        }
        return ImgSelector.urlToFile(url).then(ImgSelector.fileToUrl)
    }

    function revokeObjectURL(url) {
        (window.URL || window.webkitURL).revokeObjectURL(url)
        delete files[url]
    }

    let imageInput = null

    ImgSelector.chooseImage = function ({
                                            count = 1,
                                            sizeType = ['original'],
                                            sourceType = ['camera', 'album'],
                                            // extension=['jpg','png','jpeg'],
                                            extension = ['*'],
                                            success
                                        }) {
        // TODO handle sizeType 尝试通过 canvas 压缩

        if (imageInput) {
            document.body.removeChild(imageInput)
            imageInput = null
        }

        imageInput = createInput({
            count,
            sourceType,
            extension,
            type: 'image'
        })
        document.body.appendChild(imageInput)

        imageInput.addEventListener('change', function (event) {
            const tempFiles = []
            const fileCount = event.target.files.length
            for (let i = 0; i < fileCount; i++) {
                const file = event.target.files[i]
                let filePath
                Object.defineProperty(file, 'path', {
                    get() {
                        filePath = filePath || ImgSelector.fileToUrl(file)
                        return filePath
                    }
                })
                if (i < count) tempFiles.push(file)
            }
            const res = {
                errMsg: 'chooseImage:ok',
                get tempFilePaths() {
                    return tempFiles.map(({path}) => path)
                },
                tempFiles: tempFiles
            }
            success(res)
            // TODO 用户取消选择时，触发 fail，目前尚未找到合适的方法。
        })

        imageInput.click()
    }
    ImgSelector.appendImgSelector = function (imgName, key, optional = false) {
        return `
                <div class="title-with-image">
                  <div class="choose-image" data-key="${key}">
                    <img src="" alt="" srcset=""  class="image-item">
                    <i class="image-item-delete" ></i>
                    <span class="optional-text">${optional ? '选填项' : '必填项'}</span>
                  </div>
                  <div class="img-item-title">${imgName}</div>
                </div>
        `
    }
    return ImgSelector
})

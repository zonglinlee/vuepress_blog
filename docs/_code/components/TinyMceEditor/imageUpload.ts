// TinyMce富文本编辑器图片上传
import cache from '@/utils/cache'
export function generateRandomFilename(length: number) {
	const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
	let result = ''
	for (let i = length; i > 0; --i) {
		result += chars[Math.floor(Math.random() * chars.length)]
	}
	return result
}
export function tinymceUploadImage(blobInfo: any, progress: Function) {
	console.log(blobInfo)
	let xhr: XMLHttpRequest, formData
	const name = generateRandomFilename(10)
	let file = new window.File([blobInfo.blob()], `${name}.png`, { type: 'image/png' })
	return new Promise((resolve, reject) => {
		xhr = new XMLHttpRequest()
		xhr.withCredentials = false
		xhr.open('POST', import.meta.env.VITE_API_URL + '/sys/file/upload?access_token=' + cache.getToken())
		xhr.upload.onprogress = function (e) {
			progress((e.loaded / e.total) * 100)
		}
		xhr.onload = function () {
			// console.log(xhr)
			let json
			if (xhr.status != 200) {
				reject('HTTP Error: ' + xhr.status)
				return
			}
			json = JSON.parse(xhr.responseText)
			if (!json || !json.data) {
				reject(json.msg)
				return
			}
			resolve(json.data.url)
		}

		formData = new FormData()
		formData.append('file', file)
		xhr.send(formData)
	})
}

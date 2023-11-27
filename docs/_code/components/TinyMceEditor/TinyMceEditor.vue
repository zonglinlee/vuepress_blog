<template>
	<Editor v-model="richTextContent"  tinymce-script-src="/js/tinymce/tinymce.min.js" :init="initOptions" />
</template>

<script lang="ts" setup>
import Editor from '@tinymce/tinymce-vue'
import fetch from 'cross-fetch'
import type { Editor as EditorType } from 'tinymce'
import '../../../public/js/tinymce/prism/prism.js'
import { ref, unref } from 'vue'
import { generateRandomFilename, tinymceUploadImage } from './imageUpload'
import { extractImagesWithRegex } from '@/components/TinyMceEditor/getImgFromRichText'
import service from '@/utils/request'
import cache from '@/utils/cache'
import { ElMessage } from 'element-plus'
import { watch,toRefs} from 'vue'
const props = defineProps({
	rOptions: {
		type: Object,
		default: () => {
			return {}
		}
	},
	requireImg: {
		type: Boolean,
		default: false
	},
	content:{
		type: String,
		default:""
	}
})
const emit = defineEmits(['img-list'])
const {content, rOptions, requireImg } = toRefs(props)
const richTextContent = ref(content.value)
console.log(richTextContent.value)
watch(
    content, (newval, oldval) => {
		let { matches: images } = extractImagesWithRegex(newval)
		if(requireImg.value){
			emit('img-list', images)
		}
		richTextContent.value = newval;
	},{ immediate: true,deep: true }
);
watch(
    richTextContent, (newval, oldval) => {
		let { matches: images } = extractImagesWithRegex(newval)
		if(requireImg.value){
			emit('img-list', images)
		}
	},{ immediate: true,deep: true }
);
const options = {
	// height: 650,
	min_height: 650,
	max_height: 650,
	menubar: false,
	language: 'zh_CN',
	placeholder: '在这里输入文字',
	toolbar_mode: 'wrap',
	branding: false,
	relative_urls: false,
	custom_undo_redo_levels: 5,
	autosave_ask_before_unload: false,
	quickbars_selection_toolbar: 'removeformat | bold italic underline strikethrough | fontsizeselect forecolor backcolor',
	images_upload_handler: tinymceUploadImage,
	setup: (editor: EditorType) => {
		editor.on('paste', async event => {
			if (event.clipboardData) {
				const items = event.clipboardData.items
				const html = event.clipboardData.getData('text/html ')
				let { matches: images, outputHtml } = extractImagesWithRegex(html)
				console.log(images)
				const map = new Map()
				// 前端转化图片，会有跨域问题
				const fetchImage = (src, index: number) => {
					fetch(src)
						.then(function (response) {
							return response.blob()
						})
						.then(async blob => {
							const name = generateRandomFilename(10)
							let _file = new window.File([blob], `${name}.png`, { type: 'image/png' })
							const formData = new FormData()
							formData.append('file', _file)
							try {
								const res = await service.post(import.meta.env.VITE_API_URL + '/sys/file/upload?access_token=' + cache.getToken(), formData)
								map.set(src, res.data.url)
								richTextContent.value = richTextContent.value.replace(images[index], res.data.url)
							} catch (e) {
								ElMessage.error('图片上传失败,请手动下载后上传')
							}
						})
						.catch(e => {
							ElMessage.error('图片上传失败,请手动下载后上传')
						})
				}

				for (let i = 0; i < images.length; i++) {
					try {
						if (images[i].startsWith('http')) {
							const res = await service.get(
								import.meta.env.VITE_API_URL + `/work/CoverImage/queryImgUrl?imgurl=${images[i]}&access_token=` + cache.getToken()
							)
							map.set(images[i], res.data.remotePath)
							outputHtml = outputHtml.replace(images[i], res.data.remotePath)
							images[i] = res.data.remotePath;
						}
					} catch (e) {
						ElMessage.error('图片上传失败,请手动下载后上传')
					}
				}
				richTextContent.value = outputHtml
				if(requireImg.value){
					emit('img-list', images)
				}

			}
		})
	},
	codesample_content_css: '/js/tinymce/prism/prism.css',
	font_family_formats:
		"微软雅黑='微软雅黑';宋体='宋体';黑体='黑体';仿宋='仿宋';楷体='楷体';隶书='隶书';幼圆='幼圆';Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings",
	content_style: "body { font-family: '宋体'; font-size:'16px' }",
	font_size_formats: '12px 14px 16px 18px 20px 24px 28px 36px',
	icons_url: '/js/tinymce/icons/colorIcon/icons.js', // load icon pack
	icons: 'colorIcon',
	external_plugins: {
		// tpImportword: '/js/tinymce/plugins/tpImportword/tpImportword.js'
		tpImportword: '/js/tinymce/plugins/tpImportword/tpImportword.js'
	},
	plugins:
		'tpImportword autolink autoresize autosave  charmap  code emoticons fullscreen  image insertdatetime link  lists media nonbreaking preview quickbars save searchreplace table wordcount',
	// ' anchor autocorrect autolink autoresize autosave  charmap code codesample directionality  emoticons  footnotes  fullscreen help image importcss inlinecss insertdatetime link  lists media nonbreaking pagebreak pageembed permanentpen  preview quickbars save searchreplace table  template  tinydrive tinymcespellchecker typography visualblocks visualchars wordcount',
	toolbar:
		'fontfamily fontsize h1 h2 h3 h4 h5 hr indent outdent italic lineheight aligncenter alignjustify alignleft alignnone alignright  blockquote blocks  backcolor forecolor  bold  newdocument pastetext removeformat  undo redo  strikethrough underline image  bullist numlist   fullscreen preview table emoticons subscript superscript code insertdatetime link openlink unlink media quicklink tablecellprops tablecopyrow tablecutrow tabledelete tabledeletecol tabledeleterow  tpImportword  print'
	// 'aligncenter alignjustify alignleft alignnone alignright| anchor | blockquote blocks | backcolor | bold | copy | cut | fontfamily fontsize forecolor h1 h2 h3 h4 h5 h6 hr indent | italic | language | lineheight | newdocument | outdent | paste pastetext | print | redo | remove removeformat | selectall | strikethrough | styles | subscript superscript underline | undo | visualaid | a11ycheck advtablerownumbering typopgraphy anchor restoredraft  charmap  code codesample addcomment showcomments ltr rtl  fliph flipv imageoptions rotateleft rotateright emoticons  footnotes footnotesupdate  fullscreen help image insertdatetime link openlink unlink bullist numlist media  _list nonbreaking pagebreak pageembed permanentpen preview quickimage quicklink quicktable cancel save searchreplace spellcheckdialog spellchecker | table tablecellprops tablecopyrow tablecutrow tabledelete tabledeletecol tabledeleterow tableinsertdialog tableinsertcolafter tableinsertcolbefore tableinsertrowafter tableinsertrowbefore tablemergecells tablepasterowafter tablepasterowbefore tableprops tablerowprops tablesplitcells tableclass tablecellclass tablecellvalign tablecellborderwidth tablecellborderstyle tablecaption tablecellbackgroundcolor tablecellbordercolor tablerowheader tablecolheader |  update | template typography | insertfile | visualblocks visualchars | wordcount'
}
const mergeOptions = { ...options, ...rOptions.value }
const initOptions = ref(mergeOptions)

const getHtml = () => {
	return richTextContent.value
}

defineExpose({
	getHtml
})
</script>
<script lang="ts">
export default {
	name: 'TinyMceEditor'
}
</script>

<style scoped></style>

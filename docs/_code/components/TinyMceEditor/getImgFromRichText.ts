export const extractImagesWithRegex = (html: string): { matches: string[]; outputHtml: string } => {
	const regex = /<img.*?src=["'](.*?)['"].*?>/g
	const matches = []
	let outputHtml = ''
	let start = 0
	let match
	while ((match = regex.exec(html)) !== null ) {
		const [zero, first] = match
		matches.push(first)
		outputHtml += html.substring(start, match.index)
		outputHtml += `<img src="${first}" />`
		start = match.index + zero.length
		
	}
	if (!outputHtml) {
		outputHtml = html
	}
	return { matches, outputHtml }
}

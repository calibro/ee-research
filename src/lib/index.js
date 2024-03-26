import { base } from "$app/paths"

// place files you want to import through the `$lib` alias in this folder.
export const getRelativeUrl = (urlValue = "") => {
	if (!urlValue) {
		return
	}

	const url = urlValue.replace(import.meta.env.BASE_URL, "/")
	if (url.startsWith("http")) {
		return url
	}

	return `${base}${url}`
}

export const generateSvgPlaceholder = ({
	width = 150,
	height = 300,
	bgColor = "#ddd",
	dataUri = true,
	charset = "UTF-8",
	fluid = false,
} = {}) => {
	const str = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" ${
		fluid ? 'preserveAspectRatio="none"' : ""
	}>
			<rect fill="${bgColor}" width="${width}" height="${height}"/>
		</svg>`

	// Thanks to: filamentgroup/directory-encoder
	const cleaned = str
		.replace(/[\t\n\r]/gim, "") // Strip newlines and tabs
		.replace(/\s\s+/g, " ") // Condense multiple spaces
		.replace(/'/gim, "\\i") // Normalize quotes

	if (dataUri) {
		const encoded = encodeURIComponent(cleaned)
			.replace(/\(/g, "%28") // Encode brackets
			.replace(/\)/g, "%29")

		return `data:image/svg+xml;charset=${charset},${encoded}`
	}

	return cleaned
}

export const repeatArray = (array, times) => {
	let result = []
	for (let i = 0; i <= times; i++) {
		result = [...result, ...array]
	}
	return result
}

export const slugify = (string) => {
	const a =
		"àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;"
	const b =
		"aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------"
	const p = new RegExp(a.split("").join("|"), "g")

	return string
		.toString()
		.toLowerCase()
		.replace(/\s+/g, "-") // Replace spaces with -
		.replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters
		.replace(/&/g, "-and-") // Replace & with 'and'
		.replace(/[^\w\-]+/g, "") // Remove all non-word characters
		.replace(/\-\-+/g, "-") // Replace multiple - with single -
		.replace(/^-+/, "") // Trim - from start of text
		.replace(/-+$/, "") // Trim - from end of text
}

export const extractNumber = (str) => {
	var num = str.replace(/[^0-9]/g, "")
	return parseInt(num, 10)
}

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

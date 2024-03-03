// place files you want to import through the `$lib` alias in this folder.
export const getRelativeUrl = (urlValue = "") => {
	if (!urlValue) {
		return
	}

	const url = urlValue.replace(import.meta.env.BASE_URL, "/")

	return url
}

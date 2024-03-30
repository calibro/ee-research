import { base } from "$app/paths"

export const getImageUrl = (image, query) => {
	return `${base}/assets/gettyimages/${query}/images/${image}.jpg`
}

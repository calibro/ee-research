export const isSmartphone = () =>
	/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)

export const isInstagram = () => navigator.userAgent.match(/instagram/i)

export const checkInstagramHeight = () => {
	const heightBlock = document.createElement("div")
	const style = {
		position: "fixed",
		top: 0,
		right: 0,
		left: 0,
		height: "-webkit-fill-available",
	}
	Object.assign(heightBlock.style, style)
	document.body.appendChild(heightBlock)
	const vh = heightBlock.clientHeight
	heightBlock.parentNode?.removeChild(heightBlock)
	document.documentElement.style.setProperty("--vh", `${vh}px`)
	return
}

export const setVhResized = () => {
	if (isSmartphone() && !isInstagram()) {
		const vh = window.innerHeight * 0.01
		document.documentElement.style.setProperty("--vh-resized", `${vh}px`)
	} else {
		document.documentElement.style.setProperty("--vh-resized", "1vh")
	}
}

export const setVh = () => {
	if (isSmartphone() && !isInstagram()) {
		const vh = window.innerHeight * 0.01
		document.documentElement.style.setProperty("--vh", `${vh}px`)
		return
	} else if (isInstagram()) {
		return checkInstagramHeight()
	} else {
		document.documentElement.style.setProperty("--vh", "1vh")
		return
	}
}

export const setVw = () => {
	const oldWidth = window
		.getComputedStyle(document.documentElement)
		.getPropertyValue("--vw")
	const newWidth = `${
		(window.innerWidth - (window.innerWidth - document.body.clientWidth)) / 100
	}px`

	if (newWidth !== oldWidth) {
		document.documentElement.style.setProperty("--vw", newWidth)
	}
}

export const setViewport = () => {
	setVw()
	setVhResized()
}

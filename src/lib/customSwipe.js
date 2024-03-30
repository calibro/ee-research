export const swipe = (node) => {
	const handleMouseDown = (e) => {
		const ele = e.target.closest(".scroll-container")
		if (!ele) {
			return
		}
		const startPos = {
			left: ele.scrollLeft,
			top: ele.scrollTop,
			x: e.clientX,
			y: e.clientY,
		}

		const handleMouseMove = (e) => {
			const dx = e.clientX - startPos.x
			const dy = e.clientY - startPos.y
			ele.scrollTop = startPos.top - dy
			ele.scrollLeft = startPos.left - dx
			updateCursor(ele)
		}

		const handleMouseUp = () => {
			document.removeEventListener("mousemove", handleMouseMove)
			document.removeEventListener("mouseup", handleMouseUp)
			resetCursor(ele)
		}

		document.addEventListener("mousemove", handleMouseMove)
		document.addEventListener("mouseup", handleMouseUp)
	}

	const handleTouchStart = (e) => {
		const ele = containerRef.current
		if (!ele) {
			return
		}
		const touch = e.touches[0]
		const startPos = {
			left: ele.scrollLeft,
			top: ele.scrollTop,
			x: touch.clientX,
			y: touch.clientY,
		}

		const handleTouchMove = (e) => {
			const touch = e.touches[0]
			const dx = touch.clientX - startPos.x
			const dy = touch.clientY - startPos.y
			ele.scrollTop = startPos.top - dy
			ele.scrollLeft = startPos.left - dx
			updateCursor(ele)
		}

		const handleTouchEnd = () => {
			document.removeEventListener("touchmove", handleTouchMove)
			document.removeEventListener("touchend", handleTouchEnd)
			resetCursor(ele)
		}

		document.addEventListener("touchmove", handleTouchMove)
		document.addEventListener("touchend", handleTouchEnd)
	}

	const updateCursor = (ele) => {
		ele.style.cursor = "grabbing"
		ele.style.userSelect = "none"
	}

	const resetCursor = (ele) => {
		ele.style.cursor = "grab"
		ele.style.removeProperty("user-select")
	}

	document.addEventListener("mousedown", handleMouseDown, true)
	document.addEventListener("touchstart", handleTouchStart, true)

	return {
		destroy() {
			document.removeEventListener("mousedown", handleMouseDown, true)
			document.removeEventListener("touchstart", handleTouchStart, true)
		},
	}
}

export const handleClick = (node, options) => {
	let isClicked = false
	let isDragging = false
	let startX = 0
	let startY = 0
	let el = node

	const handleMouseMove = (e) => {
		if (!isClicked) return

		const currentX = e.clientX
		const currentY = e.clientY

		const distanceX = Math.abs(currentX - startX)
		const distanceY = Math.abs(currentY - startY)

		if (distanceX > 100 || distanceY > 100) {
			isDragging = true
		}
	}

	const handleMouseUp = () => {
		isClicked = false
		if (!isDragging) {
			options.fn()
		}
		isDragging = false
		el.removeEventListener("mouseup", handleMouseUp)
		el.removeEventListener("mousemove", handleMouseMove)
	}

	const handleMouseDown = (event) => {
		isClicked = true
		startX = event.clientX
		startY = event.clientY
		el.addEventListener("mouseup", handleMouseUp)
		el.addEventListener("mousemove", handleMouseMove)
	}

	node.addEventListener("mousedown", handleMouseDown)
}

export const getAsyncData = async (
	{ key, url, type = "json" },
	fetchFn = fetch
) => {
	let data
	let error

	// const dataStore = getContext(key)
	// if (dataStore) {
	// 	data = dataStore
	// } else {
	try {
		const res = await fetchFn(url)
		if (res.status === 200) {
			data = await res?.[type]?.()
			// if (data) {
			// 	setContext(key, data)
			// }
		} else {
			error = res
		}
	} catch (e) {
		error = e
		console.error(e)
	}
	// }

	return { data, error }
}

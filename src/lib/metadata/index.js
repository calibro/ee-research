import getty_circular from "./getty_circular.json"
import getty_stereotype from "./getty_stereotype.json"
import tiktok from "./tiktok.json"
import youtube_language from "./youtube_language.json"
import youtube_network from "./youtube_network.json"
import globals from "./globals.json"

const labels = {
	getty_circular,
	getty_stereotype,
	tiktok,
	youtube_language,
	youtube_network,
	globals,
}

export const t = (topic = "globals", key, subkey) => {
	if (labels[topic] && labels[topic][key]) {
		if (subkey) {
			return labels[topic][key][subkey]
		}
		return labels[topic][key]
	}
	return null
}

export const getTopicLabels = (topic) => {
	return (key, subkey) => t(topic, key, subkey)
}

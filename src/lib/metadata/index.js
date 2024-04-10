import getty_circulation from "./getty_circulation.json"
import getty_stereotypes from "./getty_stereotypes.json"
import globals from "./globals.json"
import tiktok from "./tiktok.json"
import youtube_language from "./youtube_language.json"
import youtube_network from "./youtube_network.json"

const labels = {
	getty_circulation,
	getty_stereotypes,
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

export const getProtocol = (topic) => {
	return labels[topic]?.protocol
}

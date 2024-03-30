import Swiper from "swiper"

export const swiperInit = (node, arg) => {


	return {
		destroy: () => {
			swiper.destroy()
		},
	}
}

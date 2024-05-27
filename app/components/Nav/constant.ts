import business from "@/public/business.png"
import crime from "@/public/crime.png"
import entertainment from "@/public/entertainment.png"
import environment from "@/public/environment.png"
import health from "@/public/health.png"
import logo from "@/public/logo.png"
import sports from "@/public/sports.png"
import technology from "@/public/technology.png"
import top from "@/public/top.png"
import world from "@/public/world.png"

export const IMG_ITEM = {
  business:{src:business,alt:'business logo',category:'business'},
	crime:{src:crime,alt:'crime logo',category:'crime'},
	entertainment:{src:entertainment,alt:'entertainment logo',category:'entertainment'},
	environment:{src:environment,alt:'environment logo',category:'environment'},
	health:{src:health,alt:'health logo',category:'health'},
	logo:{src:logo,alt:'logo logo',category:'logo'},
	sports:{src:sports,alt:'sports logo',category:'sports'},
	technology:{src:technology,alt:'technology logo',category:'technology'},
	top:{src:top,alt:'top logo',category:'top'},
	world:{src:world,alt:'world logo',category:'world'},
}

export const nav_list = [
	IMG_ITEM.business,
	IMG_ITEM.environment,
	IMG_ITEM.technology,
	IMG_ITEM.world
]
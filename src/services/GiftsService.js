import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"




class GiftsService {
    async getGifts() {
        const res = await api.get('api/gifts')
        logger.log('got gifts!', res.data)
        const newGifts = res.data.map(POJO => new Gift(POJO))
        AppState.gifts = newGifts
    }
    async openGift(giftId) {
        const gifts = AppState.gifts
        const foundGift = gifts.find(gift => giftId == gift.id)
        foundGift.opened = true
        const res = await api.put(`api/gifts/${giftId}`, foundGift)
        logger.log(res, 'opening gift')
        gifts.splice(foundGift, 1, new Gift(res.data))
    }
    async createGift(giftData) {
        const res = await api.post(`api/gifts`, giftData)
        const newGift = new Gift(res.data)
        logger.log(newGift)
        AppState.gifts.unshift(newGift)

    }
}

export const giftsService = new GiftsService()

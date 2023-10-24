<template>
    <div class="rounded bg-light shadow">
        <img @click="openGift(giftProp.id)" v-if="giftProp.url == ''"
            src="https://images.unsplash.com/photo-1496449903678-68ddcb189a24?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvb2wlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
            :alt="giftProp.name" class="img-fluid rounded-top">
        <img v-else :src="giftProp.url" :alt="giftProp.name" class="img-fluid rounded-top">
        <h2>{{ giftProp.name }}</h2>
    </div>
</template>


<script>

import { Gift } from '../models/Gift.js';
import { logger } from '../utils/Logger.js';
import { giftsService } from '../services/GiftsService.js'
export default {
    props: {
        giftProp: { type: Gift, required: true }
    },
    setup() {
        async function openGift(giftId) {
            try {
                await giftsService.openGift(giftId)
            } catch (error) {
                logger.error(error)
            }
        }
        return {
            openGift
        }
    }
};
</script>


<style lang="scss" scoped></style>
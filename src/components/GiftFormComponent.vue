<template>
    <h3>Create New Gift.</h3>
    <form @submit.prevent="createGift()">
        <div>
            <label for="giftTitle" class="form-label">Gift Name....</label>
            <input v-model="editable.tag" id="giftTitle" type="text" class="form-label">
        </div>
        <div>
            <label for="giftUrl" class="form-label">Gift URL...</label>
            <input v-model="editable.url" id="giftUrl" type="url" class="form-label">

        </div>
        <button type="submit">Submit</button>

    </form>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { giftsService } from '../services/GiftsService.js';
import { logger } from '../utils/Logger.js';
import { Gift } from '../models/Gift.js';

export default {
    props: {
        formProp: { type: Gift, required: true }
    },
    setup() {
        const editable = ref({})

        const editable1 = ref('')
        const editable2 = ref('')
        return {
            editable1, editable2, editable,
            async createGift() {
                try {
                    logger.log(editable)
                    let formData = editable.value
                    logger.log(formData)

                    // const formData = {tag: editable1.value, url: editable2.value}
                    await giftsService.createGift(formData)
                } catch (error) {
                    logger.error(error)

                }
            }
        }
    }
};
</script>


<style lang="scss" scoped></style>
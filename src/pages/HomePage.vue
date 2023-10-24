<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12 text-center m-3">
        <h1 class="gift-title">Gifts</h1>
      </div>
    </section>
    <div class="col-12">
      <GiftFormComponent :formProp="form" />
      <!-- <h3>Create New Gift.</h3>
      <form @submit.prevent="createGift()">
        <div>
          <label for="giftTitle" class="form-label">Gift Name....</label>
          <input v-model="editable1" id="giftTitle" type="text" class="form-label">
        </div>
        <div>
          <label for="giftUrl" class="form-label">Gift URL...</label>
          <input v-model="editable2" id="giftUrl" type="url" class="form-label">

        </div>
        <button type="submit">Submit</button>

      </form> -->
    </div>

    <section class="row">
      <div v-for="gift in gifts" :key="gift.name" class="col-4 p-4">
        <GiftCardComponent :giftProp="gift" />
        <!-- <div class="rounded bg-light shadow">
          <img :src="gift.url" :alt="gift.name" class="img-fluid rounded-top">
          <h2>{{ gift.name }}</h2>
        </div> -->
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { logger } from '../utils/Logger.js';
import { giftsService } from '../services/GiftsService.js'
import { AppState } from '../AppState.js'
import GiftCardComponent from '../components/GiftCardComponent.vue';
import GiftFormComponent from '../components/GiftFormComponent.vue';

export default {
  setup() {
    const editable1 = ref('')
    const editable2 = ref('')
    async function getGifts() {
      try {
        await giftsService.getGifts()
      } catch (error) {
        logger.error(error)
      }
    }
    async function openGift(giftId) {
      try {
        await giftsService.openGifts(giftId)
      } catch (error) {
        logger.error(error)
      }
    }
    onMounted(() => {
      getGifts()

    })
    return {
      editable1, editable2,
      gifts: computed(() =>
        AppState.gifts),
      async createGift() {
        try {

          const gifts = editable1.value + editable2.value
          await giftsService.createGift()
        } catch (error) {
          logger.error(error)

        }
      }
    }
  },
  components: { GiftCardComponent, GiftFormComponent }
}
</script>

<style scoped lang="scss">
.gift-title {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 45px;
}
</style>

<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12 text-center m-3">
        <h1 class="gift-title">Gifts</h1>
      </div>
    </section>
    <section class="row">
      <div v-for="gift in gifts" :key="gift.name" class="col-4 p-4">
        <div class="rounded bg-light shadow">
          <img :src="gift.url" :alt="gift.name" class="img-fluid rounded-top">
          <h2>{{ gift.name }}</h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { logger } from '../utils/Logger.js';
import { giftsService } from '../services/GiftsService.js'
import { AppState } from '../AppState.js'


export default {
  setup() {
    async function getGifts() {
      try {
        await giftsService.getGifts()
      } catch (error) {
        logger.error(error)
      }
    }
    onMounted(() => {
      getGifts()
    })
    return {
      gifts: computed(() =>
        AppState.gifts)
    }
  }
}
</script>

<style scoped lang="scss">
.gift-title {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 45px;
}
</style>

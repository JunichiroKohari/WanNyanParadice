<template>
    <section class="container">
        <div class="columns is-multiline">
          <div v-for="(item, i) in dog_list" :key="i" class="column is-1">
            <img :src="item.url" alt="犬" srcset="">
            <span v-if="i < 3" class="tag is-danger">NEW</span>
            <a href="" class="button is-warning is-small" @click="item.like += 1">
              <span>いいね！{{ item.like }}件</span>
            </a>
          </div>
        </div>
    </section>
</template>
 
<script>
import dogApi from '@/api/dog';
import {mapState} from 'vuex';

export default {
    async fetch ({ store, params }) {
      const json = await dogApi.dogs(params.breed);
      store.commit('dog_list_update', json);
  },
  computed: mapState(['dog_list'])
}

</script>
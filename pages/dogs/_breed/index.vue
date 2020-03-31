<template>
    <section class="container">
        <div class="columns is-multiline">
          <div v-for="(item, i) in dog_list" :key="i" class="column is-1">
            <img :src="item.url" alt="犬" srcset="">
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
<template>
  <div>
    <section class="container">
        <div class="columns is-multiline">
            <!-- v-for で breed_list からループ出力 -->
            <div v-for="(item, i) in breed_list" v-bind:key='i' class='column is-2'>
                <nuxt-link :to="{ path: 'dogs/' + i }" class="button">{{ i }}</nuxt-link>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import dogApi from '@/api/dog';
import {mapState} from 'vuex';

export default {
  async fetch ({ store, params }) {
    const json = await dogApi.breeds();
    store.commit('breed_list_update', json);
  },
  computed: mapState(['breed_list'])
}
</script>
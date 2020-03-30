<template>
  <div>
    <section class="container">
        <div class="columns is-multiline">
            <!-- v-for で breed_list からループ出力 -->
            <div v-for="(item, i) in breed_list" v-bind:key='i' class='column is-2'>
                <a class="button">{{ i }}</a>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import dogApi from '@/api/dog';
import {mapState} from 'vuex';

export default {
  // async asyncData({ $axios }) {
  //   const url = 'https://dog.ceo/api/breeds/list/all';
  //   const result = await $axios.$get(url)
  //     .then(json => {
        
  //       this.$store.commit('breed_list_update', json);
  //       console.log(this.$store.state);
  //     })
  //     .catch(e => ({ error: e }));
  // },
  async fetch ({ store, params, $axios }) {
    const url = 'https://dog.ceo/api/breeds/list/all';
    await $axios.$get(url)
      .then(json => {
        console.log(json)
        store.commit('breed_list_update', json.message)
      })
      .catch(e => ({ error: e }))
  },
  computed: mapState(['breed_list'])
}
</script>
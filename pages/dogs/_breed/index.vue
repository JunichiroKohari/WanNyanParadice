<template>
    <section class="container">
        <div class="columns is-multiline">
        </div>
    </section>
</template>
 
<script>
import dogApi from '@/api/dog';
import {mapState} from 'vuex';

export default {
  //   async fetch ({ store, params, $axios }) {
  //   const url = 'https://dog.ceo/api/breeds/list/all';
  //   await $axios.$get(url)
  //     .then(json => {
  //       console.log(json)
  //       store.commit('breed_list_update', json.message)
  //     })
  //     .catch(e => ({ error: e }))
  // },
  // computed: mapState(['breed_list'])
}

</script>
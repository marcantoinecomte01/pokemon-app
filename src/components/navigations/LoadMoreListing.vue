<template>
  <div class="container my-5">
    <div class="row">
        <div v-for="pokemon in pokemonList" v-bind:key="pokemon.name" class="col-2 m-2">
            <PokemonProfile :pokemon="pokemon"></PokemonProfile>
        </div>
    </div>
    <div class="row">
      <button class="btn btn-primary col-11" :disabled="pokemonList.length==150" @click="loadMore">Load more</button>
    </div>
  </div>
</template>

<script>
import PokemonProfile from '../cards/PokemonProfile.vue'

export default {
  name: 'LoadMoreListing',
  components: {
    PokemonProfile
  },
  data() {
    return {
      pokemonList: [],
      initialUrl: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=30",
      nextUrl: ""
    }
  },
  mounted() {
    this.getCards(this.initialUrl);
  },
  methods:{
    getCards(url){
      if(this.pokemonList.length < 150){
        this.axios.get(url).then((response) => {
          let data = response.data;
          this.pokemonList.push(...data.results);
          this.nextUrl = data.next;
        });
      }
    },
    loadMore(){
      this.getCards(this.nextUrl);
    }
  }
}
</script>

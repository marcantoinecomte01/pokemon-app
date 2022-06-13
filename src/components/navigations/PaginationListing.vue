<template>
  <div class="container my-5">
    <div class="row">
        <div v-for="pokemon in pokemonList" v-bind:key="pokemon.name" class="col-2 m-2">
          <PokemonProfile :pokemon="pokemon"></PokemonProfile>
        </div>
    </div>
    <div class="row">
      <div class="col-6 offset-7">
        <pagination v-model="page" :records="150" :per-page="30" />
      </div>
    </div>
  </div>
</template>

<script>
import PokemonProfile from '../cards/PokemonProfile.vue'
import Pagination from 'v-pagination-3';

export default {
  name: 'PaginationListing',
  components: {
    PokemonProfile, Pagination
  },
  data() {
    return {
      pokemonList: [],
      url: "https://pokeapi.co/api/v2/pokemon/",
      page:1
    }
  },
  mounted() {
    this.getPokemonList();
  },
watch: {
    page: function() {
      this.getPokemonList();
    }
  },
  methods:{
    getPokemonList(){
      this.pokemonList = [];
      this.axios.get(`${this.url}?offset=${(this.page - 1)*30}&limit=30`).then((response) => {
        this.pokemonList = response.data.results;
      });
    }
  }
}
</script>

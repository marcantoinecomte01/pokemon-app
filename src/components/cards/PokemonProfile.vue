<template>
  <div class="card">
  <img :src="imageUrl" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">{{pokemonInfo.id}}.{{pokemonInfo.name}}</h5>
    <p class="card-text">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">{{t ("weight-property")}} {{pokemonInfo.weight}}</li>
      <li class="list-group-item">{{t ("height-property")}} {{pokemonInfo.height}}</li>
    </ul>
    </p>
  </div>
</div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {

  name: 'PokemonProfile',
    setup() {
    const { locale, t } = useI18n({
      inheritLocale: true,
    })
    return {
      locale, t
    }
  },
  props: [ 'pokemon' ],
  data() {
    let pokemonInfo = {};
    let imageUrl = "";
    return {
      pokemonInfo,
      imageUrl
    }
  },
  mounted() {
    this.axios.get(this.pokemon.url).then((response) => {
      this.pokemonInfo = response.data;
      this.imageUrl = this.pokemonInfo.sprites.front_default;
    });
  },
}
</script>

<style>
  .card:hover{
    box-shadow: 0.5rem 0.5rem  rgb(192, 192, 192);
  }
</style>

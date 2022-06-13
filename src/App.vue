<template>
  <div class="container my-5">
    <div class="offset-8 row">
        <a class="col-3" href="#/load-more">Load More</a> |
        <a class="col" href="#/pagination">Pagination</a>
    </div>
    <div class="ms-2">
      <component :is="currentNavigation"/>
    </div>
  </div>
</template>

<script>
import LoadMoreListing from './components/navigations/LoadMoreListing.vue'
import PaginationListing from './components/navigations/PaginationListing.vue'
const routes = {
  '/pagination': PaginationListing,
  '/load-more': LoadMoreListing
}
export default {
  name: 'App',
  components: {
    LoadMoreListing, PaginationListing
  },
  data() {
    return {
      currentPath: "#/load-more"
    }
  },
   mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
		})
  },
  computed: {
    currentNavigation() {
      return routes[this.currentPath.slice(1) || '/']
    }
  },
  methods:{
    toggleListing(){
      this.listingWithPagination = !this.listingWithPagination;
    }
  }
}
</script>
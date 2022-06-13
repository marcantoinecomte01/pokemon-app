<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">{{ t("pokemon-app") }}</a>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {{t("navigation-type")}}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="btn btn-light border-bottom-secondary" href="#/load-more">{{ t("load-more") }}</a></li>
              <li><a class="btn btn-light" href="#/pagination">{{ t("pagination") }}</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container my-5">
    <div class="ms-2">
      <component :is="currentNavigation"/>
    </div>
  </div>
</template>

<script>
import LoadMoreListing from './components/navigations/LoadMoreListing.vue'
import PaginationListing from './components/navigations/PaginationListing.vue'
import { useI18n } from 'vue-i18n'

const routes = {
  '/pagination': PaginationListing,
  '/load-more': LoadMoreListing
}
export default {
  name: 'App',
  setup() {
    const { locale, t } = useI18n({
      inheritLocale: true,
    })
    return {
      locale, t
    }
  },
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
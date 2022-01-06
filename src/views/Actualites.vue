<template>
  <div>
    <heading-component
        v-for="(title, index) in getMetaData.titles"
        :main-proname="title.mainProname"
        :main-title="title.mainTitle"
        :main-text="title.mainText"
        :key="index"
        :style="getMetaData.mainBackground"/>
    <h2>Les projets <br><span>Étudiants</span></h2>
    <div class="actu">
      <div class="pActu" v-for="projet in liste" :key="projet.id">
        <a :href="projetLink+projet.id" v-for="recompense in projet.recompense" :key="recompense.id">
          <div v-if="recompense.id === 28989">
            <img
                :src="projet.image.url"
                :alt="projet.image.alt">
            <div>
              <h3>{{ projet.nom }}</h3>
              <span>{{ projet.date_de_debut }} - {{ projet.date_de_fin }}</span>
            </div>
          </div>
        </a>
      </div>
    </div>
    <h2>Dernières <br><span>Nouvelles</span></h2>
    <newsComponent/>
  </div>
</template>

<script>
import headingComponent from '@/components/heading.component'
import newsComponent from "@/components/Actu/news.component";
import param from "@/param/param";
/* eslint-disable */
export default {
  name: "Actualites",
  data() {
    return {
      liste : [],
      projetLink : null
    }
  },
  components: {
    headingComponent,
    newsComponent
  },
  computed: {
    getMetaData() {
      return this.$route.meta.data;
    }
  },
  created: function () {
    axios.get(param.host_collection + "projet/v9/listeProjets")
        .then(response => {
          this.liste = response.data;

        })
        .catch(error => console.log(error))
    this.projetLink = 'https://mmicollection.raphaelbonin.fr/#/projet/'
  }
}
</script>

<style lang="less" scoped>

h3 {
  font-weight: normal;
  background-color: #FFFFFF;
  font-size: 2.6rem;
  padding: 1rem 2rem;
}

h2 {
  font-size: 3.2rem;
  font-weight: 400;
  color: #9A9A9A;
  padding: 1rem 2rem;

  span {
    font-size: 6.4rem;
    font-weight: 600;
    background: -webkit-linear-gradient(0deg, rgba(85, 242, 214, 1) 16%, rgba(227, 137, 229, 1) 78%);
    -webkit-background-clip: text;
    color: transparent;
    @media screen and (max-width: 730px) {
      font-size: 5.2rem;
    }
  }
}

.actu {
  display: flex;
  flex-direction: column;
  margin-left: 10vw;
  margin-right: 10vw;

  .pActu:hover {
    transform: scale(1.1);
  }

  .pActu {
    transition: all .3s ease-in-out;
    div {
      position: relative;
      margin: 2rem 0;
      img {
        width: 100%;
        height: 472px;
        object-fit: cover;
        position: relative;
        z-index: -1;
      }

      div {
        position: absolute;
        bottom: 48px;
        left: 30px;
        span {
          color: #FFFFFF;
          font-weight: 500;
          font-size: 1.8rem;
          margin-left: 2rem;
        }
      }
    }
    .projet {
      position: relative;
    }
  }
}


</style>
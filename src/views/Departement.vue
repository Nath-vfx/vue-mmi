<template>
  <div id="departement">
    <heading-component
        v-for="(title, index) in getMetaData.titles"
        :main-proname="title.mainProname"
        :main-title="title.mainTitle"
        :main-text="title.mainText"
        :key="index"
        :style="getMetaData.mainBackground"/>
    <div>
      <div class="content">
        <h3>Présentation</h3>
        <div>
          <p>Le département MMI de Montbéliard forme des professionnels du web et du multimédia en ligne depuis plus de
            quinze ans. Chaque année, quatre-vingt nouveaux étudiants nous rejoignent afin de devenir les futurs acteurs
            du monde numérique.
          </p>
          <p>En collaboration constante avec des professionnels du domaine, notre équipe pédagogique s’engage à vous
            former en deux ans aux métiers du web à travers un enseignement pluridisciplinaire de qualité. En 2013, notre
            département se classe ainsi 5ème au palmarès Figaro des écoles du web.
          </p>
          <p>En France comme à l’étranger, nos diplômés sont reconnus pour leurs aptitudes à dialoguer avec les
            spécialistes des différents métiers du web et à développer le design communicant de demain.</p>
        </div>

      <div class="video">
        <img src="../../public/images/Decoration/player.svg" alt="player">
        <span>Future Video</span>
      </div>
        <div id="actu">
          <h3>Nos actualités</h3>
          <div>
            <news-component/>
          </div>
        </div>

      <div>
        <h3>L'équipe Pédagogique</h3>
        <div>
          <p>Cette formation a pour but de préparer ses étudiants aux métiers du web dans les secteurs de la
            programmation, de la communication, du marketing ou du graphisme.
          </p>
          <p>Cette diversité et cette complémentarité se retrouvent évidemment dans une équipe pédagogique
            pluridisciplinaire constituée d'enseignants permanents, d'intervenants professionnels et de jeunes chercheurs
            de l'Université de Franche-Comté.
          </p>
        </div>
        <photos_peda-component/>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import headingComponent from '@/components/heading.component'
import photos_pedaComponent from "@/components/Departement/photos_peda.component";
import newsComponent from "@/components/Actu/news.component";

/* eslint-disable */
export default {
  name: "Departement",
  components: {
    headingComponent,
    photos_pedaComponent,
    newsComponent
  },
  computed: {
    getMetaData() {
      return this.$route.meta.data;
    }
  }
}
</script>

<style lang="less" scoped>
#departement {
  #actu {
    div {
      margin-left: -10vw;
      margin-right: -10vw;
    }
  }
  h3 {
    font-size: 6.4rem;
    font-weight: 600;
    background: -webkit-linear-gradient(0deg, rgba(85, 242, 214, 1) 16%, rgba(227, 137, 229, 1) 78%);
    -webkit-background-clip: text;
    color: transparent;
    @media screen and (max-width: 730px) {
      font-size: 5.2rem;
    }
  }

  p {
    font-family: Lato, sans-serif;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 150%;
  }
  .content {
    display: flex;
    flex-direction: column;
    margin: 0 10vw 6rem 10vw;
    .video {
      margin-left: auto;
      margin-right: auto;
      background-color: #E1E1E1;
      width: 530px;
      height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      @media screen and (max-width: 725px) {
        margin-left: -10vw;
        margin-right: -10vw;
      }
      span {
        font-size: 3rem;
      }
    }
  }
}


</style>
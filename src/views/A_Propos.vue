<template>
  <div class="about">
    <heading-component
        v-for="(title, index) in getMetaData.titles"
        :main-proname="title.mainProname"
        :main-title="title.mainTitle"
        :main-text="title.mainText"
        :key="index"
        :style="getMetaData.mainBackground"/>

    <div class="content">
      <div>
        <h3>Qui?</h3>
        <p>Le département MMI de Montbéliard forme des professionnels du web et du multimédia en ligne depuis plus de
          quinze ans. Chaque année, quatre-vingt nouveaux étudiants nous rejoignent afin de devenir les futurs acteurs
          du
          monde numérique.
        </p>
        <p>En collaboration constante avec des professionnels du domaine, notre équipe pédagogique s’engage à vous
          former
          en deux ans aux métiers du web à travers un enseignement pluridisciplinaire de qualité. En 2013, notre
          département se classe ainsi 5ème au palmarès Figaro des écoles du web.
        </p>
        <p>En France comme à l’étranger, nos diplômés sont reconnus pour leurs aptitudes à dialoguer avec les
          spécialistes
          des différents métiers du web et à développer le design communicant de demain.</p>
      </div>
      <equipeComponent/>
      <div>
        <h3>Où ?</h3>
        <p>Cette formation a pour but de préparer ses étudiants aux métiers du web dans les secteurs de la
          programmation,
          de la communication, du marketing ou du graphisme.
        </p>
        <p>Cette diversité et cette complémentarité se retrouvent évidemment dans une équipe pédagogique
          pluridisciplinaire constituée d'enseignants permanents, d'intervenants professionnels et de jeunes chercheurs
          de
          l'Université de Franche-Comté.</p>
      </div>
      <div>
        <img src="../../public/images/dotted-line.svg" alt="Ligne de point">
      </div>
      <div>
        <h3>Pourquoi ?</h3>
        <p>Cette formation a pour but de préparer ses étudiants aux métiers du web dans les secteurs de la
          programmation,
          de la communication, du marketing ou du graphisme.
        </p>
        <p>Cette formation a pour but de préparer ses étudiants aux métiers du web dans les secteurs de la
          programmation,
          de la communication, du marketing ou du graphisme.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import headingComponent from '@/components/heading.component'
import equipeComponent from '@/components/A_propos/equipe.component'

export default {
  name: 'About',
  components: {
    headingComponent,
    equipeComponent
  },
  computed: {
    getMetaData() {
      return this.$route.meta.data;
    }
  }
}
</script>

<style lang="less" scoped>
.about {
  background: linear-gradient(0deg, rgba(241,241,241,1) 40%, rgba(255,255,255,1) 40%);
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    width: 75%;
  }

  div:nth-child(4), div:nth-child(2){
    margin-top: 5rem;
    width: 100%;
    position: relative;
  }
  div:nth-child(4):after {
    content: url("../../public/images/pine.svg");
    position: absolute;
    right: 150px;
    bottom: 30px;
  }
}

p {
  font-family: Lato, sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
}

h3 {
  font-size: 6.4rem;
  font-weight: 600;
  background: -webkit-linear-gradient(0deg, rgba(85, 242, 214, 1) 16%, rgba(227, 137, 229, 1) 78%);
  -webkit-background-clip: text;
  color: transparent;
}
</style>
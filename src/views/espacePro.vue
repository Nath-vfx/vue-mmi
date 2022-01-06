<template>
  <div>

    <heading-component
        v-for="(title, index) in getMetaData.titles"
        :main-proname="title.mainProname"
        :main-title="title.mainTitle"
        :main-text="title.mainText"
        :key="index"
        :style="getMetaData.mainBackground"/>
    <div class="proCat">
      <div>
        <h3>Nous vous <br><span>intéressons ?</span></h3>
        <p>Afin de valider leur quatrième semestre et obtenir leur diplôme, nos étudiants doivent effectuer un stage de
          12
          semaines en milieu professionnel (pour les DUT) ou de 16 semaines (pour les Licences Professionnelles en
          formation initiale). Ils mettent en pratique l'ensemble leurs savoirs acquis durant la formation. Leur travail
          se développe dans un large champ d’action, de la start-up à l’entreprise plus traditionnelle en passant par
          les
          agences de communication digitale ou les associations régionales.
        </p>
        <p>Si leurs projets ont retenu votre attention, n’hésitez pas à nous soumettre vos offres grâce à notre
          formulaire.</p>
      </div>
      <div class="boutons-espace-pro">
        <a href="http://src-media.com/node/add/proposition-offre-emploi">
          <button>Déposer une offre</button>
        </a>
      </div>
    </div>
    <div class="proCat">
      <div class="catContent">
        <h3>Le choix de <br><span>l'alternance</span></h3>
        <p>Vous pouvez également accueillir un étudiant de licence professionnelle webdesign en apprentissage. La
          licence
          professionnelle en alternance est conçue pour une immersion importante en entreprise. Son rythme est pensé sur
          2
          semaines : 10 jours en entreprise, 3 jours au département. Sauf condition particulière, les congés sont de 5
          semaines.
        </p>
        <p>N’hésitez plus… Contactez-nous pour adopter un apprenti !</p>
      </div>
      <div class="boutons-espace-pro">
        <a href="http://src-media.com/node/add/proposition-offre-emploi">
          <button>Déposer une offre</button>
        </a>
      </div>
    </div>
    <div class="proCat">
      <div class="catContent">
        <h3>Un projet ? <br><span>Une application ?</span></h3>
        <p>Vous pouvez également accueillir un étudiant de licence professionnelle webdesign en apprentissage. La
          licence
          professionnelle en alternance est conçue pour une immersion importante en entreprise. Son rythme est pensé sur
          2
          semaines : 10 jours en entreprise, 3 jours au département. Sauf condition particulière, les congés sont de 5
          semaines.
        </p>
        <p>N’hésitez plus… Contactez-nous pour adopter un apprenti !</p>
      </div>
      <div class="boutons-espace-pro">
        <a href="http://src-media.com/projets-etudiants/proposition-projet">
          <button>Proposer un projet</button>
        </a>
      </div>
    </div>

  </div>
</template>

<script>
import headingComponent from '@/components/heading.component'

/* eslint-disable */
export default {
  name: "espacePro",
  components: {
    headingComponent
  },
  computed: {
    getMetaData() {
      return this.$route.meta.data;
    }
  }
}
</script>

<style scoped lang="less">
.proCat:nth-child(1), .proCat:nth-child(3) {
  background-color: #eee;
}

.proCat {
  padding: 2.5rem 8rem;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  @media screen and (max-width: 800px){
    align-items: center;
  }
  h3{
    font-size: 3.2rem;
    font-weight: 400;
    color: #9A9A9A;

    span {
      font-size: 6.4rem;
      font-weight: 600;
      background: -webkit-linear-gradient(0deg, rgba(85, 242, 214, 1) 16%, rgba(227, 137, 229, 1) 78%);
      -webkit-background-clip: text;
      color: transparent;
      @media screen and (max-width: 725px){
        font-size: 4.8rem;
      }
    }
  }

  p {
    font-family: Lato, sans-serif;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 150%;
  }

  button {
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    padding: 5px 40px;
    font-weight: initial;
    border-color: transparent;
    background-color: #FFFFFF;
    box-shadow: 0 0 8px #9A9A9A;
    width: 320px;
    cursor: pointer;
  }
}
</style>
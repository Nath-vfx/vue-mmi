<template>
  <div id="page-but">
    <heading-component
        v-for="(title, index) in getMetaData.titles"
        :main-proname="title.mainProname"
        :main-title="title.mainTitle"
        :main-text="title.mainText"
        :key="index"
        :style="getMetaData.mainBackground"/>

    <div class="programme">
      <h3>Programme <br><span>Pédagogique</span></h3>

      <p>Le BUT MMI est une formation pluridisciplinaire qui s’articule autour de trois axes fondamentaux : le design,
        le
        développement et la communication. Inspirés par les pratiques professionnelles, nous formons des étudiants
        polyvalents sur l’ensemble des corps de métier du web</p>
      <p>Nous encourageons nos étudiants à la mobilité en leur offrant la possibilité de suivre un semestre complet au
        Canada. Nous facilitons l’insertion professionnelle en offrant la possibilité de réaliser la seconde année en
        alternance et de poursuivre en licence.</p>
    </div>
    <ul id="poles-cat">
      <li>
        <div class="titre-poles-dvp">
          <svg></svg>
          <h4>Développement</h4>
        </div>
        <div class="contenus-poles-dvp">
          <h5>Étudier et <br>concevoir...</h5>
          <p>Le développement permet à l’étudiant d’acquérir des compétences techniques dans le web. Ils apprendront à développer des pages web, à intégrer des contenus multimédia (image, audio, vidéo...)  tout en respectant les normes d’accessibilité et les standards web.
          </p>
        </div>
      </li>
      <li>
        <div class="titre-poles-com">
          <svg></svg>
          <h4>Communication</h4>
        </div>
        <div class="contenus-poles-com">
          <h5>Comprendre et <br>exploiter...</h5>
          <p>La communication met en avant les savoir-faire d’analyse, la capacité à établir des rapports d’audit concernant un produit interactif, d’une marque ou d’une organisation. </p>
        </div>
      </li>
      <li>
        <div class="titre-poles-design">
          <svg></svg>
          <h4>Design</h4>
        </div>
        <div class="contenus-poles-design">
          <h5>S'inspirer et <br>créer...</h5>
          <p>Dans le pôle design, les étudiants créeront des interfaces de site web, leur parcours utilisateur et les interactions. Ils devront pallier des connaissances créatives et techniques, en veillant à l’ergonomie et à l’accessibilité pour un référentiel de qualité. </p>
        </div>
      </li>
    </ul>
    <div class="postuler">
      <h3>Postuler <br><span>au BUT MMI</span></h3>
      <p><span>PROFILS :</span>
        Notre formation est ouverte à tous les profils d’étudiants. Que vous veniez de l’enseignement secondaire,
        d’autres filières universitaires ou que vous souhaitiez opérer une reconversion professionnelle, vous êtes le
        bienvenu.
      </p>
      <p>Il n'est pas nécessaire d'avoir une expérience préalable dans le domaine du multimédia pour intégrer la
        formation. Il est cependant recommandé d'avoir une bonne pratique de l'outil informatique.
      </p>
      <p>
        <span>INSCRIPTION :</span>
        Pour s’inscrire, il est indispensable de constituer un dossier de candidature et de valider toutes les étapes du
        processus d'inscription préalable sur parcoursup.fr.</p>
      <div id="bouton-BUT-MMI">
        <a href="">
          <button>Déposer une candidature</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import headingComponent from '@/components/heading.component'

/* eslint-disable */
export default {
  name: "ButMMi",
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

button {
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  padding: 5px 40px;
  font-weight: initial;
  border-color: transparent;
  background-color: #FFFFFF;
  box-shadow: 0 0 8px #9A9A9A;
}

a {
  display: flex;
  justify-content: center;
}

.programme, .postuler {
  p {
    font-family: Lato, sans-serif;
    font-weight: 500;
    font-size: 18px;
    width: 50%;
    line-height: 150%;
    margin-left: 120px;
  }

  h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 3.2rem;
    font-weight: 400;
    color: #9A9A9A;
    margin-left: 120px;
    margin-right: 50px;

    span {
      font-size: 6.4rem;
      font-weight: 600;
      background: -webkit-linear-gradient(0deg, #55f2d6 16%, #e389e5 78%);
      -webkit-background-clip: text;
      color: transparent;
    }
  }
  div {
    padding-top: 50px;
    padding-bottom: 50px;
  }
}

.titre-poles-com {
  font-family: 'Poppins', sans-serif;
  font-size: 3.6rem;
  text-align: center;
  color: #97069A;
}
.contenus-poles-com {
  background-color:#97069A;
  padding: 2px 20px 20px;
}
.contenus-poles-com p {
  font-family: Lato, sans-serif;
  font-size: 1.8rem;
  color: #FFFFFF;
  width: 80%;
  height: 220px;
  margin-right: auto;
  margin-left: auto;
}
.titre-poles-design {
  font-family: 'Poppins', sans-serif;
  font-size: 3.6rem;
  text-align: center;
  color: #55F2D6;
}
.contenus-poles-design {
  background-color:#55F2D6;
  padding: 2px 20px 20px;
}
.contenus-poles-design p {
  font-family: Lato, sans-serif;
  font-size: 1.8rem;
  color: #FFFFFF;
  width: 80%;
  height: 220px;
  margin-right: auto;
  margin-left: auto;
}
.titre-poles-dvp {
  font-family: 'Poppins', sans-serif;
  font-size: 3.6rem;
  text-align: center;
  color: #4348C7;
}
.contenus-poles-dvp {
  background-color:#4348C7;
  padding: 2px 5px 20px;
}
.contenus-poles-dvp p {
  font-family: Lato, sans-serif;
  font-size: 1.8rem;
  color: #FFFFFF;
  width: 80%;
  height: 220px;
  margin-right: auto;
  margin-left: auto;
}
h5 {
  color: #FFFFFF;
  font-family: 'Poppins', sans-serif;
  font-size: 3.6rem;
  text-align: left;
  margin-left: 45px;
}
#poles-cat {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 100px;
  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
}
li {
  width: 500px;
  padding-left: 40px;
  padding-right: 40px;
}

</style>
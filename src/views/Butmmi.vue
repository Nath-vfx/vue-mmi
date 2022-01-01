<template>
  <div id="page-but">
    <heading-component
        v-for="(title, index) in getMetaData.titles"
        :main-proname="title.mainProname"
        :main-title="title.mainTitle"
        :main-text="title.mainText"
        :key="index"
        :style="getMetaData.mainBackground"/>

    <div class="content">
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
          <div class="pole dvp">
            <h4>Développement</h4>
            <router-link to="/pole-developpement">
            <div class="content-pole">
              <h5>Étudier et <br>concevoir...</h5>
              <p>Le développement permet à l’étudiant d’acquérir des compétences techniques dans le web. Ils apprendront
                à développer des pages web, à intégrer des contenus multimédia (image, audio, vidéo...) tout en
                respectant les normes d’accessibilité et les standards web.
              </p>
            </div>
            </router-link>

          </div>
        </li>
        <li>
          <div class="pole com">
            <h4>Communication</h4>
            <router-link to="/pole-communication">
              <div class="content-pole">
                <h5>Comprendre et <br>exploiter...</h5>
                <p>La communication met en avant les savoir-faire d’analyse, la capacité à établir des rapports d’audit
                  concernant un produit interactif, d’une marque ou d’une organisation. </p>
              </div>
            </router-link>
          </div>
        </li>
        <li>
          <div class="pole design">
            <h4>Design</h4>
            <router-link to="/pole-design">
              <div class="content-pole">
                <h5>S'inspirer et <br>créer...</h5>
                <p>Dans le pôle design, les étudiants créeront des interfaces de site web, leur parcours utilisateur et
                  les
                  interactions. Ils devront pallier des connaissances créatives et techniques, en veillant à l’ergonomie
                  et
                  à l’accessibilité pour un référentiel de qualité. </p>
              </div>
            </router-link>
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
          Pour s’inscrire, il est indispensable de constituer un dossier de candidature et de valider toutes les étapes
          du
          processus d'inscription préalable sur parcoursup.fr.</p>
        <div id="bouton-BUT-MMI">
          <a href="">
            <button>Déposer une candidature</button>
          </a>
        </div>
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
.content {
  margin-left: 10vw;
  margin-right: 10vw;

  p {
    font-family: Lato, sans-serif;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 150%;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, 412px);
    grid-template-rows: 600px;
    grid-gap: 30px;
    justify-content: center;
    margin: 10rem -10vw;
    li {
      .pole {
        h4 {
          font-size: 3.6rem;
          font-weight: 400;
          text-align: center;
        }
        .content-pole {
          height: 430px;
          padding: 2rem;
          h5 {
            font-size: 3.6rem;
            font-weight: 700;
            color: #FFFFFF;
          }
          p {
            color: #FFFFFF;
          }
        }

      }
      .design {
        h4 {
          color: rgb(85,242,214);
          position: relative;
          z-index: -1;
        }
        .content-pole {
          background: rgb(85,242,214);
          background: linear-gradient(45deg, rgba(85,242,214,1) 0%, rgba(6,215,177,1) 100%);
          z-index: 1;
        }
        h4::after {
          content: url("../../public/images/shapeDesign.svg");
          position: absolute;
          left: 120px;
          top: -42px;
        }
      }

      .dvp {
        h4 {
          color: rgb(141,146,255);
          position: relative;
          z-index: -1;
        }
        .content-pole {
          background: rgb(141,146,255);
          background: linear-gradient(45deg, rgba(141,146,255,1) 0%, rgba(11,74,197,1) 100%);
          z-index: 1;
        }
        h4::after {
          content: url("../../public/images/shapeDev.svg");
          position: absolute;
          left: 120px;
          top: -42px;
        }
      }

      .com {
        h4 {
          color: rgb(151, 6, 154);
          position: relative;
          z-index: -1;
        }
        .content-pole {
          background: rgb(151, 6, 154);
          background: linear-gradient(45deg, rgba(151, 6, 154, 1) 0%, rgba(174, 65, 176, 1) 100%);
          z-index: -1;
        }
        h4::after {
          content: url("../../public/images/shapeCom.svg");
          position: absolute;
          left: 120px;
          top: -42px;
        }
      }

    }
  }
}
#bouton-BUT-MMI {
  button {
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    padding: 5px 40px;
    font-weight: initial;
    border-color: transparent;
    background-color: #FFFFFF;
    box-shadow: 0 0 8px #9A9A9A;
  }
  text-align: end;
  @media screen and (max-width: 760px) {
    text-align: center;
  }
}


h3 {
  font-size: 3.2rem;
  font-weight: 400;
  color: #9A9A9A;

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

.postuler {
  margin-bottom: 10rem;
}


</style>
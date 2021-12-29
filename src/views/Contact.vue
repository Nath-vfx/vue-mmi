<template>
  <div>
    <heading-component
        v-for="(title, index) in getMetaData.titles"
        :main-proname="title.mainProname"
        :main-title="title.mainTitle"
        :main-text="title.mainText"
        :key="index"
        :style="getMetaData.mainBackground"/>
    <div id="contentContact">
      <h3>Nous <br><span>Rencontrer</span></h3>
      <span class="annotation">
          Avant une inscription au département MMI de l'IUT de Belfort-Montbéliard, une visite s'impose !
        </span>
      <div class="rencontres">
        <aside>
          <h4>
            Forums étudiants
          </h4>
          <p>
            Notre département vient également à votre rencontre chaque année, lors des forums organisés par le SCUIO.
            Ce périple nous conduit de Vesoul/Lure à Montbéliard/Belfort/Sevenans, en passant par Pontarlier et
            Besançon. Vous serez conviés et transportés jusqu’à ces forums par votre lycée
          </p>
          <p>
            Sur place, nous vous présenterons la formation et les réalisations des étudiants. Vous serez accueillis par
            des étudiants et des enseignants du département MMI Montbéliard avec lesquels vous pourrez échanger et
            partager votre passion pour les nouvelles technologies de l'information et de la communication.
          </p>
        </aside>
        <aside>
          <h4>Journées Portes Ouvertes</h4>
          <p>Chaque année, une journée "Portes ouvertes" propose non seulement une visite de nos locaux, mais aussi et
            surtout une rencontre avec les étudiants et les enseignants du département. Chacun pourra ainsi se faire une
            idée précise de notre formation.
          </p>
          <p>
            Par ailleurs, les responsables du département MMI sont évidemment à votre disposition pour répondre à toutes
            vos demandes de renseignements.
          </p>
        </aside>
      </div>
      <contact-form/>
    </div>
  </div>
</template>

<script>
import headingComponent from '@/components/heading.component'
import contactForm from '@/components/Contact/form.component'

/* eslint-disable */
export default {
  name: "Departement",
  components: {
    headingComponent,
    contactForm
  },
  computed: {
    getMetaData() {
      return this.$route.meta.data;
    }
  }
}
</script>

<style lang="less" scoped>
#contentContact {
  margin: 5rem 10vw 10rem 10vw;
}

h3 {
  font-family: 'Poppins', sans-serif;
  font-size: 3.2rem;
  font-weight: 400;
  color: #9A9A9A;

  span {
    font-size: 6.4rem;
    font-weight: 600;
    background: -webkit-linear-gradient(0deg, #55f2d6 16%, #e389e5 78%);
    -webkit-background-clip: text;
    color: transparent;
  }
}
.rencontres {
  display: flex;
  @media screen and (max-width: 725px){
    flex-direction: column;
  }
  aside {
    font-family: Lato, sans-serif;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 150%;
    width: 100%;
    margin: 0 3rem;

    h4 {
      text-transform: uppercase;
      font-weight: normal;
    }

  }
}


.annotation {
  font-size: 2.4rem;
  font-weight: 500;
  font-style: italic;
}
</style>
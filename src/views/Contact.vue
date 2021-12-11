<template>
  <div>
    <div class="rencontre">
      <h3>Nous <span>Rencontrer</span></h3>
      <p class="sous-titre">Avant une inscription au département MMI de l'IUT de Belfort-Montbéliard, une visite
        s'impose
        !</p>
      <aside>
        <div class="forums-etudiants">
          <h4>FORUMS ÉTUDIANTS</h4>
          <p>Notre département vient également à votre rencontre chaque année, lors des forums organisés par le SCUIO.
            Ce périple nous conduit de Vesoul/Lure à Montbéliard/Belfort/Sevenans, en passant par Pontarlier et
            Besançon.
            Vous serez conviés et transportés jusqu’à ces forums par votre lycée.

            <br> Sur place, nous vous présenterons la formation et les réalisations des étudiants. Vous serez accueillis
            par des étudiants et des enseignants du département MMI Montbéliard avec lesquels vous pourrez échanger et
            partager votre passion pour les nouvelles technologies de l'information et de la communication.

          </p>
        </div>
        <div class="JPO">
          <h4>JOURNÉE PORTES OUVERTES</h4>
          <p>Chaque année, une journée "Portes ouvertes" propose non seulement une visite de nos locaux, mais aussi et
            surtout une rencontre avec les étudiants et les enseignants du département. Chacun pourra ainsi se faire une
            idée précise de notre formation.

            Par ailleurs, les responsables du département MMI sont évidemment à votre disposition pour répondre à toutes
            vos demandes de renseignements.</p>
        </div>
      </aside>
    </div>
    <formComponent></formComponent>
  </div>
</template>

<script>
import formComponent from "../../src/components/Contact/form.component"


export default {
  name: "Contact",
  components: {
    formComponent
  },
  data() {
    return {
      msg: 'Page de contact'
    }
  }
}
</script>

<style scoped>

h3 {
  font-family: 'Poppins', sans-serif;
  font-size: 3.2rem;
  font-weight: 400;
  color: #9A9A9A;
  margin-left: 120px;
  margin-right: 50px;
}

span {
  font-size: 6.4rem;
  font-weight: 600;
  background: -webkit-linear-gradient(0deg, #55f2d6 16%, #e389e5 78%);
  -webkit-background-clip: text;
  color: transparent;
}

.sous-titre {
  font-family: Poppins, sans-serif;
  font-size: 1.5rem;
  font-weight: bolder;
  font-style: italic;
  margin-left: 120px;
  margin-right: 50px;
  padding-bottom: 20px;

}
.rencontre{
  padding-top: 50px;
  padding-bottom: 150px;
}
aside {
  width: 80%;
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  padding-left: 50px;
  padding-right: 50px;
}

.forums-etudiants {
  font-family: Lato, sans-serif;
  font-size: 1.2rem;
  justify-content: center;
  padding-left: 50px;
  padding-right: 50px;
}

.JPO {
  padding-left: 60px;
  padding-right: 60px;
  font-family: Lato, sans-serif;
  font-size: 1.2rem;
}
</style>
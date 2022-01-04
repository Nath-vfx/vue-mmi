<template>
  <div id="licencePro">
    <h1>Licence Professionnel <br><span class="up">Webdesign</span></h1>
    <p><strong>Attention :</strong> À partir de la rentrée <strong>2023,</strong> la LP Webdesign aura fusionné avec le
      DUT MMI pour former le BUT MMI et
      ne sera plus connue ni disponible sous ce nom. Cette page est <strong>provisoire.</strong></p>
    <div>
      <h1>Philosophie <br><span>& Objectifs</span></h1>
      <p>En <strong>formation initiale</strong> ou en <strong>alternance</strong>, la licence professionnelle Webdesign
        se propose de donner aux étudiants
        de niveau BAC+2 (minimum) des compétences professionnelles dans les domaines de l’interface utilisateur, de
        l’ergonomie des environnements numériques et de la conception des contenus ou des services en ligne. Enseignants
        du département MMI et professionnels du web s’unissent pour vous offrir <strong>la meilleure formation
          possible</strong>.
      </p>
      <p>Durant leur formation, les étudiants seront amenés à participer à toutes les étapes de la conception et de la
        réalisation de produits ou services interactifs en ligne. À partir d’un cahier des charges, ils rechercheront la
        solution graphique, ergonomique et technique la plus adaptée aux services attendus et aux fonctionnalités
        requises.</p>
    </div>
    <div class="grey">
      <h1>Formation <br><span>en initial</span></h1>
      <p>La licence professionnelle en formation initiale est organisée sur une période de 32 semaines : 420 heures
        d'enseignement, 130 heures de projet tutoré. Afin de parfaire les connaissances théoriques, 16 semaines de stage
        en entreprise valident la formation.</p>
    </div>
    <div>
      <h1>Programme <span>pédagogique</span></h1>
      <p>La licence professionnelle est pensée sur 2 semestres. Si le design est évidemment au cœur de la formation,
        l’aspect pluridisciplinaire des enseignements reste la marque de fabrique du département. Le développement et la
        communication sont également très présents. Inspiré directement de la pratique professionnelle, le programme
        vise à former des professionnels du web. Concevoir un design ne fait pas tout, il faut pouvoir le développer et
        savoir communiquer sur son service pour le faire vivre.</p>
      <p>Durant ces 2 semestres, les bases nécessaires pour appréhender les aspects professionnels du web sont données.
        Dans ce contexte, les cours de design graphique et d’ergonomie web vous donneront les bases de la réalisation
        d’interfaces fonctionnelles et esthétiques. Votre maîtrise des langages et outils du web (HTML5, CSS3,
        Javascript, CMS) sera mise à l’épreuve par le biais d’un projet collectif et d’un projet individuel. Évidemment,
        les matières transversales sont présentes (anglais, communication, gestion de projet, culture du web et
        environnement socio-économique).
      </p>
      <p>Le second semestre est en partie consacré au déploiement des différents projets réalisés. Des soutenances
        finales valident l’ensemble des travaux des étudiants et les compétences acquises.</p>
    </div>
    <div class="grey">
      <h1>Postuler <br><span>La LP Webdesign</span></h1>
      <p>Pour l'initial comme pour l'alternance, les demandes de candidature s’effectuent en ligne de mars à juin sur
        <span>le site internet de l’Université de Franche-Comté.</span></p>
      <div class="flexible">
        <div class="no-margin">
          <h1><span>INITIAL</span></h1>
          <p>En initial, la licence professionnelle Webdesign s’adresse plus particulièrement :
          </p>
          <ul>
            <li>à des étudiants issus de Licence 2 ou Licence 3 en Sciences Humaines & Sociales, Arts Plastiques ou Arts
              Appliqués ;
            </li>
            <li>aux titulaires d’un BTS Communication Visuelle, d’un DUT Info-Com ;</li>
            <li>aux étudiants issus d’une école d’art à même de faire valoir une équivalence de niveau bac + 2 ;</li>
            <li>aux salariés ou demandeurs d’emploi relevant de la formation continue, pour lesquels la validation des
              acquis d’expérience (V.A.E.) est possible.
            </li>
          </ul>
        </div>
        <div class="no-margin">
          <h1><span>ALTERNANCE</span></h1>
          <p>En alternance, des prérequis dans le domaine du web sont les bienvenus.</p>
          <h1><span>RECRUTEMENT</span></h1>
          <p>Le recrutement est effectué par un jury sur la base d’un dossier de candidature incluant les résultats
            universitaires antérieurs (relevés de notes), d’une lettre de motivation et, éventuellement, d’un dossier
            personnel présentant une sélection des travaux du candidat</p>
        </div>
      </div>
      <button>Déposer une candidature</button>
    </div>
  </div>

</template>

<script>
export default {
  name: "LicencePro",
}
</script>

<style lang="less" scoped>
#licencePro {
  padding-left: 10vw;
  padding-right: 10vw;
  h1 {
    font-size: 5.6rem;
    font-weight: normal;
    text-align: center;
    border-bottom: 8px dashed black;

    span {
      font-size: 6.4rem;
      font-weight: 800;
    }

    span.up {
      text-transform: uppercase;
    }
  }

  p, li {
    font-family: Lato, sans-serif;
    line-height: 150%;
    font-size: 1.8rem;
    text-align: center;
  }

  div {
    h1 {
      border: none;
    }

    li {
      list-style: inside;
    }

    p, li {
      text-align: left;

      span {
        text-decoration: underline;
      }
    }
  }

  .grey {
    background-color: #F1F1F1;
    padding: 1rem 10vw 6rem 10vw;
    margin-left: -10vw;
    margin-right: -10vw;
    button {
      font-family: 'Poppins', sans-serif;
      font-size: 2rem;
      padding: 5px 10px;
      font-weight: initial;
      border-color: transparent;
      background-color: #FFFFFF;
      box-shadow: 0 0 8px #9A9A9A;
      width: 320px;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
      margin-top: 6rem;
      display: block;
    }
  }
}

.flexible {
  display: flex;
  @media screen and (max-width: 725px) {
    flex-direction: column;
  }
  div:nth-child(2){
    margin-left: 3rem;
    width: 100%;
    @media screen and (max-width: 725px) {
      margin-left: 0;
    }
  }



}

</style>
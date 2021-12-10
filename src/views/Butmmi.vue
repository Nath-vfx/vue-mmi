<template>
  <div id="page-but">
    <div>
      <h3>Programme <br><span>Pédagogique</span></h3>

      <p>Le BUT MMI est une formation pluridisciplinaire qui s’articule autour de trois axes fondamentaux : le design,
        le
        développement et la communication. Inspirés par les pratiques professionnelles, nous formons des étudiants
        polyvalents sur l’ensemble des corps de métier du web</p>
      <p>Nous encourageons nos étudiants à la mobilité en leur offrant la possibilité de suivre un semestre complet au
        Canada. Nous facilitons l’insertion professionnelle en offrant la possibilité de réaliser la seconde année en
        alternance et de poursuivre en licence.</p>
    </div>
    <div>
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
      <a href="">
        <div id="bouton"><button>Déposer une candidature</button></div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Butmmi",
  data() {
    return {
      titles: [{
        mainProname: 'Le',
        mainTitle: 'BUT MMI',
        mainText: 'À la découverte de la formation MMI à travers les différents pôles'
      }],
      mainBackground: {
        background: 'url(https://images.unsplash.com/photo-1588522943401-6ba285f692de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80)'
      }
    }
  }
}
</script>

<style scoped lang="less">

#page-but {
  height: 3052px;
}

button {
  outline: none;
  border: none;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.16);
  padding: 0.5em 1.5em;

}

#bouton {
  text-align: center;
}
div {
  p {
    font-family: Lato, sans-serif;
    font-weight: 500;
    font-size: 18px;
  }
  h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 3.2rem;
    font-weight: 400;
    color: #9A9A9A;
    span {
      font-size: 6.4rem;
      font-weight: 600;
      background: -webkit-linear-gradient(
          0deg, #55f2d6 16%, #e389e5 78%);
      -webkit-background-clip: text;
      color: transparent;
    }
  }
}

</style>
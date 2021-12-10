<template>
  <div>
    <div>
      <h3>Programme <span>Pédagogique</span></h3>

      <p>Le BUT MMI est une formation pluridisciplinaire qui s’articule autour de trois axes fondamentaux : le design,
        le
        développement et la communication. Inspirés par les pratiques professionnelles, nous formons des étudiants
        polyvalents sur l’ensemble des corps de métier du web</p>
      <p>Nous encourageons nos étudiants à la mobilité en leur offrant la possibilité de suivre un semestre complet au
        Canada. Nous facilitons l’insertion professionnelle en offrant la possibilité de réaliser la seconde année en
        alternance et de poursuivre en licence.</p>
    </div>
    <div>
      <h3>Postuler <span>au BUT MMI</span></h3>
      <p>PROFILS :
        Notre formation est ouverte à tous les profils d’étudiants. Que vous veniez de l’enseignement secondaire,
        d’autres filières universitaires ou que vous souhaitiez opérer une reconversion professionnelle, vous êtes le
        bienvenu.
      </p>
      <p>Il n'est pas nécessaire d'avoir une expérience préalable dans le domaine du multimédia pour intégrer la
        formation. Il est cependant recommandé d'avoir une bonne pratique de l'outil informatique.
      </p>
      <p>
        INSCRIPTION :
        Pour s’inscrire, il est indispensable de constituer un dossier de candidature et de valider toutes les étapes du
        processus d'inscription préalable sur parcoursup.fr.</p>
      <a href="">
        <button>Déposer une offre</button>
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

</style>
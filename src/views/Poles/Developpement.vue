<template>
  <div id="pole">
    <div
        class="heading">
      <h1>Développement</h1>
      <img src="../../../public/images/Pages/Developpement/squareDev.svg" alt="Carré représentant le développement informatique">
    </div>
    <div>
      <div class="flexible">
        <aside class="textes">
          <h2>Étudier et concevoir</h2>
          <p>
            Le développement permet à l’étudiant d’acquérir des compétences techniques dans le web. Ils apprendront à
            développer des pages web, à intégrer des contenus multimédia (image, audio, vidéo...) tout en respectant
            les normes d’accessibilité et les standards web.
            Mais ils verront aussi comment travailler la sémantique pour un meilleur positionnement de leurs pages, ils
            étudieront la structuration des paragraphes, des titres, listes, tableaux...
          </p>
        </aside>
        <aside>
          <img src="../../../public/images/Pages/Developpement/computerDev.svg" alt="Ordinateur">
        </aside>
      </div>
      <div class="flexible reverse">
        <aside class="textes">
          <h3>
            Conception technique
          </h3>
          <p>Ils seront en mesure de gérer des formulaires (champs de saisie, label, nommage de champs, validation
            côté client) et obtiendront des connaissances dans l’installation et la configuration de serveurs.
            Ils feront appel aux bases de données et verront comment modéliser les données à travers des représentations
            logiques, tels que des diagrammes, organigrammes. Les outils de développement auxquels ils auront recours
            sont les langages de programmation HTML/ CSS, JavaScript, PHP.
          </p>
        </aside>
        <aside>
          <img src="../../../public/images/Pages/Developpement/codeDev.svg" alt="Code">
        </aside>
      </div>
    </div>
    <div class="skills">
      <h4>Compétences acquises</h4>
      <ul>
        <li><p>Production et intégration</p></li>
        <li><p>Administration des contenus</p></li>
        <li><p>Réalisation de Modèle de données conceptuels</p></li>
        <li><p>Tests et validation</p></li>
        <li><p>Connaissances des langages et des IDE</p></li>
        <li><p>Appréhender les facette du développement</p></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Communication"
}
</script>

<style lang="less" scoped>
#pole {
  background: url("../../../public/images/Pages/Developpement/dottedLineDev.svg") no-repeat center;
}

h1, h4 {
  text-align: center;
  font-weight: 800;
  font-size: 5.2rem;
  color: #0B4AC5;
}

.heading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.flexible {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10rem 0;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }

  h2 {
    font-size: 4rem;
    color: #2A61CC;
  }

  h3 {
    color: #2A61CC;
    font-size: 2.4rem;
  }

  p {
    font-family: Lato, sans-serif;
    font-size: 1.6rem;
  }

  .textes {
    width: 30%;
    margin-right: 16vw;
    @media screen and (max-width: 800px) {
      width: 80%;
      margin: 0;
    }
  }
}

.reverse {
  flex-direction: row-reverse;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }

  .textes {
    margin-right: 0;
    margin-left: 16vw;
    @media screen and (max-width: 800px) {
      width: 80%;
      margin-left: 0;
      margin-bottom: 6rem;
    }
  }
}

.skills {
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, 257px);
    grid-gap: 2.5rem;
    justify-content: center;
    margin: 0 8rem 8rem 8rem;

    li {
      background-color: black;
      color: #FFFFFF;
      font-weight: 500;
      font-family: Lato, sans-serif;
      font-size: 2.4rem;
      padding: 2rem 5rem 2rem 2rem;
    }
  }
}

</style>
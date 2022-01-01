<template>
  <div id="pole">
    <div
        class="heading">
      <h1>Communication</h1>
      <img src="../../../public/images/ellipseCom.svg" alt="Ellipse représentant la communication">
    </div>
    <div>
      <div class="flexible">
        <aside class="textes">
          <h2>Comprendre et exploiter</h2>
          <p>
            La communication met en avant les savoir-faire d’analyse, la capacité à établir des rapports d’audit
            concernant un produit interactif, d’une marque ou d’une organisation. A travers l’exploration d’outils
            d’étude
            de trafics, des sondages d’opinion et en se basant sur des données statistiques, des indicateurs, les
            étudiants seront en mesure d’évaluer l’efficacité d’un service.
          </p>
        </aside>
        <aside>
          <img src="../../../public/images/megaphone.svg" alt="Mégaphone">
        </aside>
      </div>
      <div class="flexible reverse">
        <aside class="textes">
          <h3>
            Réalisation d'études préalable
          </h3>
          <p>Cet axe vise à une meilleure compréhension de leur projet, pour ainsi pouvoir mettre en avant ses qualités
            sur un marché donné. Ils établiront une recommandation marketing , comprenant ciblage, positionnement
            stratégique, qui permettront d’ adapter leur message aux objectifs . Ils apprendront à produire du contenu
            rédactionnel optimisé pour le référencement, à rendre leur site rentable en travaillant la
            budgétisation. </p>
        </aside>
        <aside>
          <img src="../../../public/images/pageMegaphone.svg" alt="">
        </aside>
      </div>
    </div>
    <div class="skills">
      <h4>Compétences acquises</h4>
      <ul>
        <li><p>Veille sur les marchés</p></li>
        <li><p>Pilotage et coordination</p></li>
        <li><p>Relation Client</p></li>
        <li><p>Documentation</p></li>
        <li><p>Mercatique</p></li>
        <li><p>Rédactionnel</p></li>
        <li><p>Gestion de projet</p></li>
        <li><p>Juridique</p></li>
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
  background: url("../../../public/images/dottedLineCom.svg") no-repeat center;
}

h1, h4 {
  text-align: center;
  font-weight: 800;
  font-size: 5.2rem;
  color: #AE41B0;
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
    color: #97069A;
  }

  h3 {
    color: #990A9C;
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
    margin: 0 8rem 8rem 8rem ;
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
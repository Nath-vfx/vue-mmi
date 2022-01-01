<template>
  <div id="pole">
    <div
        class="heading">
      <h1>Design</h1>
      <img src="../../../public/images/Pages/Design/triangleDesign.svg" alt="Triangle représentant le design">
    </div>
    <div>
      <div class="flexible">
        <aside class="textes">
          <h2>S'inspirer et créer</h2>
          <p>
            Dans le pôle design, les étudiants créeront des interfaces de site web, leur parcours utilisateur et les
            interactions. Ils devront pallier des connaissances créatives et techniques, en veillant à l’ergonomie et à
            l’accessibilité pour un référentiel de qualité. Avant d’entreprendre toute démarche de conception, ils
            feront du brainstorming et de la recherche pour développer leur sensibilité artistique et plastique.
          </p>
        </aside>
        <aside>
          <img src="../../../public/images/Pages/Design/templateDesign.svg" alt="Portfolio">
        </aside>
      </div>
      <div class="flexible reverse">
        <aside class="textes">
          <h3>
            Réalisation d’identités visuelles
          </h3>
          <p>Ils constitueront une charte graphique pour chaque projet, en prêtant attention aux directives du client et
            en répondant aux besoins de leurs cibles. Ils travailleront également l'identité visuelle en restant
            cohérent et en respectant une démarche de communication.
            Par l’intermédiaire des logiciels Adobe, ils vont s’exercer dans le maquettage, mais aussi dans le design
            d’autres supports, de type print ou web.
          </p>
        </aside>
        <aside>
          <img src="../../../public/images/Pages/Design/lampDesign.svg" alt="idée">
        </aside>
      </div>
    </div>
    <div class="skills">
      <h4>Compétences acquises</h4>
      <ul>
        <li><p>Création de logos</p></li>
        <li><p>Colorimétrie</p></li>
        <li><p>Prints & Mockups</p></li>
        <li><p>Ergonomie</p></li>
        <li><p>Webdesign</p></li>
        <li><p>Histoire de l'art</p></li>
        <li><p>Utilisation de la suite Adobe</p></li>
        <li><p>UI/UX Design</p></li>
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
  background: url("../../../public/images/Pages/Design/dottedLineDesign.svg") no-repeat center;
}

h1, h4 {
  text-align: center;
  font-weight: 800;
  font-size: 5.2rem;
  color: #06D7B1;
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
    color: #06D7B1;
  }

  h3 {
    color: #06D7B1;
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
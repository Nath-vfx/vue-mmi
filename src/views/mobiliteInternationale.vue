<template>
  <div id="international">
    <heading-component
        v-for="(title, index) in getMetaData.titles"
        :main-proname="title.mainProname"
        :main-title="title.mainTitle"
        :main-text="title.mainText"
        :key="index"
        :style="getMetaData.mainBackground"/>
    <div class="first-international">
      <div>
        <h3><span>Partir en stage</span></h3>
        <p>Nous maintenons depuis plusieurs années des relations avec des partenaires extérieurs. Ainsi, nous offrons la
          possibilité à nos étudiants d'effectuer leur stage de fin d'étude à l'étranger. Cette expérience unique et
          enrichissante leur permet d’améliorer leurs compétences linguistiques tout en approfondissant leurs
          connaissances techniques.</p>
      </div>
      <aside>
        <img src="" alt="">
        <div>
          <h4>John Doe</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis sed donec facilisis magna amet, dolor augue
            lorem. Odio iaculis dui varius nisl. Nisl sit urna morbi faucibus fusce. Lectus viverra consequat,
            sollicitudin tortor diam libero. Blandit mattis neque ultrices ut sodales laoreet lacus. Quisque tempor
            consequat, urna, at. Diam et tellus fermentum molestie pharetra turpis vulputate semper cursus. Sagittis in
            turpis viverra in et pellentesque. In congue elit nibh pharetra facilisi amet, vel viverra mauris. Purus in
            adipiscing id est condimentum ac ornare. Mi urna, amet eros volutpat. Pellentesque elit sem elementum
            adipiscing tellus sapien eleifend.
          </p>
        </div>
      </aside>
    </div>
    <h3><span>Un semestre au Canada</span></h3>
    <div class="canada">
      <div>
        <p>Notre département est partenaire avec deux CEGEP canadiens. Chaque année, une dizaine d'étudiants MMI
          effectue son troisième ou quatrième semestre dans l'une de ces formations.
        </p>
        <p>À Montréal, Le CEGEP Vanier accueille nos étudiants pour un semestre de formation orienté vers les travaux
          d’impression.
        </p>
        <p>Au CEGEP de Matane, nos étudiants peuvent intégrer le programme "techniques d'intégration multimédia". </p>
      </div>
      <aside>
        <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="">
      </aside>
    </div>
    <h3>Festival OFF <span>Barcelone</span></h3>
    <div class="barcelona">
      <div>
        <p>Depuis peu, notre département organise un déplacement à Barcelone à l'occasion du OFFF, festival
          international d'art digital.
        </p>
        <p>
          Nos étudiants enrichissent leur culture artistique en découvrant, d'une part, le travail des acteurs majeurs
          de la scène numérique internationale et d'autre part, la richesse culturelle de cette ville.
        </p>
      </div>
      <aside>
        <img src="https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" alt="">
      </aside>
    </div>


  </div>
</template>

<script>
import headingComponent from '@/components/heading.component'

/* eslint-disable */
export default {
  name: "Mobilite",
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
h4 {
  font-size: 3.6rem;
}
p {
  font-family: Lato, sans-serif;
  font-weight: 500;
  font-size: 1.8rem;
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
  }
}
h3:not(:nth-child(1)) {
  text-align: center;
}

#international {
  div.first-international {
    display: flex;
    width: 100%;
    div:nth-child(1){
      width: 100%;
      padding-left: 30px;
      padding-right: 60px;
    }
    aside {
      width: 100%;
      padding: 60px;
      margin: 60px 30px 0 102px;
      box-shadow: 0 0 8px #9A9A9A;
      h4{
        text-align: center;
      }
    }
  }
  div.canada, div.barcelona {
    display: flex;
    align-items: center;
    img {
      width: 50vw;
      max-width: 960px;
    }
    div:nth-child(1){
      margin: 0 80px;
    }
  }
  div.barcelona {
    flex-direction: row-reverse;
    margin-bottom: 80px;
  }
}




</style>
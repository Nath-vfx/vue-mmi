<template>
    <div v-if="show">
      <main>
        <aside>
          <div>
            <h1>{{ mainProname }} <br> <span><nobr>{{ mainTitle }}</nobr></span></h1>
          </div>
          <div>
            <p>{{ mainText }}</p>
          </div>
        </aside>
      </main>
    </div>
</template>

<script>
export default {
  /* eslint-disable */
  name: "enteteComponent",
  props: {
    mainProname: {
      default: 'Le'
    },
    mainTitle: {
      default: 'Titre'
    },
    mainText: {
      default: 'Le text de description de la page doit apparaître ici !'
    }
  },
  data() {
    return {
      show:true
    }
  },
}
</script>

<style scoped lang="less">

main {
  height: 730px;
  aside {
    padding-left: 30px;
    height: 100%;
    width: 25%;
    margin-left: 12rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 872px) {
      height: auto;
      width: 100%;
      margin-left: 0;
    }

    div:first-child {
      flex-grow: 6;
      align-items: flex-end;

      h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 3.2rem;
        position: relative;
        span {
          font-weight: 700;
          font-size: 9.6rem;
          position: absolute;
          background: -webkit-linear-gradient(0deg, rgba(85, 242, 214, 1) 16%, rgba(227, 137, 229, 1) 78%);
          -webkit-background-clip: text;
          color: transparent;
          @media screen and (max-width: 872px){
            font-size: 5.2rem;
          }

        }
      }
    }

    div {
      display: flex;
    }

    div:last-child {
      margin-top: 3em;
      align-items: center;
      flex-grow: 3;
      @media screen and (max-width: 872px) {
        width: 100%;
      }

      p {
        @media screen and (max-width: 872px) {
          margin-top: 4rem;
          width: 90%;
        }
        font-family: Lato, sans-serif;
        font-weight: normal;
        font-size: 2.4rem;
      }
    }
  }
}

</style>
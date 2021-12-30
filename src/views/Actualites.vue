<template>
  <div>
    <heading-component
        v-for="(title, index) in getMetaData.titles"
        :main-proname="title.mainProname"
        :main-title="title.mainTitle"
        :main-text="title.mainText"
        :key="index"
        :style="getMetaData.mainBackground"/>
    <div class="actu">
      <aside class="gActu">
        <div>
          <img
              src="https://images.unsplash.com/photo-1640595556705-005e7b7ea2cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="">
          <div>
            <h2>Journée Portes Ouvertes 2022</h2>
            <span>29 Jan, 2022</span>
          </div>
        </div>
      </aside>
      <aside class="pActu">
        <div>
          <img
              src="https://images.unsplash.com/photo-1640595556705-005e7b7ea2cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="">
          <div>
            <h2>Remise des diplômes</h2>
            <span>29 Jan, 2022</span>
          </div>
        </div>
      </aside>
    </div>
    <h3>Dernières Nouvelles</h3>
    <newsComponent/>
  </div>
</template>

<script>
import headingComponent from '@/components/heading.component'
import newsComponent from "@/components/Actu/news.component";

/* eslint-disable */
export default {
  name: "Actualites",
  components: {
    headingComponent,
    newsComponent
  },
  computed: {
    getMetaData() {
      return this.$route.meta.data;
    }
  }
}
</script>

<style lang="less" scoped>

h2, h3 {
  font-weight: normal;
  background-color: #FFFFFF;
  font-size: 2.6rem;
  padding: 1rem 2rem;
}

.actu {
  display: flex;
  margin-bottom: 10rem;
  margin-top: 10rem;



  aside span {
    color: #FFFFFF;
    font-weight: 500;
    font-size: 1.8rem;
    margin-left: 2rem;
  }

  .gActu {
    margin: 0 auto;

    div {
      position: relative;

      img {
        width: 838px;
        height: 472px;
        object-fit: cover;
        position: relative;
      }

      div {
        position: absolute;
        bottom: 48px;
        left: 30px;
      }
    }

  }

  .pActu {
    margin: 0 auto;

    div {
      position: relative;

      img {
        width: 500px;
        height: 472px;
        object-fit: cover;
        position: relative;
        z-index: -1;
      }

      div {
        position: absolute;
        bottom: 48px;
        left: 30px;
      }
    }

  }
}



</style>
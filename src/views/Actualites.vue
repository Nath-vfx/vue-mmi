<template>
  <div>
    <heading-component
        v-for="(title, index) in getMetaData.titles"
        :main-proname="title.mainProname"
        :main-title="title.mainTitle"
        :main-text="title.mainText"
        :key="index"
        :style="getMetaData.mainBackground"/>

    <div class="main">
      <img src="https://cdn.pixabay.com/photo/2021/12/07/14/00/river-6853339_960_720.jpg" alt="">
      <h3>Journée Portes Ouvertes 2022</h3>
      <time datetime="2022-01-29">29 Janvier 2022</time>
    </div>

    <aside>
      <img src="https://cdn.pixabay.com/photo/2021/12/06/10/55/hamburg-6849995_960_720.jpg" alt="">
      <h3>Remise des diplômes</h3>
      <time datetime="2022-06-29">29 Juin 2022</time>
    </aside>

    <h2>Dernières nouvelles</h2>

    <ul class="articles">
      <li>
        <img src="https://cdn.pixabay.com/photo/2021/01/25/22/45/leaves-5949884__340.png" alt="">
        <time datetime="2021-11-07">7 Novembre 2021</time>
        <h4>Lorem ipsum</h4>
        <p>Lorem ipsum</p>
      </li>
      <li>
        <img src="https://cdn.pixabay.com/photo/2017/05/13/17/31/leaf-2310212__180.jpg" alt="">
        <time datetime="2021-11-08">8 Novembre 2021</time>
        <h4>Lorem ipsum</h4>
        <p>Lorem ipsum</p>
      </li>
      <li>
        <img src="https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__180.jpg" alt="">
        <time datetime="2021-11-09">9 Novembre 2021</time>
        <h4>Lorem ipsum</h4>
        <p>Lorem ipsum</p>
      </li>
    </ul>
  </div>
</template>

<script>
import headingComponent from '@/components/heading.component'

/* eslint-disable */
export default {
  name: "Actualites",
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

<style scoped>


</style>
<template>
<div>
  <heading-component
      v-for="(title, index) in getMetaData.titles"
      :main-proname="title.mainProname"
      :main-title="title.mainTitle"
      :main-text="title.mainText"
      :key="index"
      :style="getMetaData.mainBackground"/>
</div>
</template>

<script>
import headingComponent from '@/components/heading.component'

/* eslint-disable */
export default {
  name: "Departement",
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

h3 {
  font-family: 'Poppins', sans-serif;
  font-size: 3.2rem;
  font-weight: 400;
  color: #9A9A9A;
  margin-left: 120px;
  margin-right: 50px;
}

span {
  font-size: 6.4rem;
  font-weight: 600;
  background: -webkit-linear-gradient(0deg, #55f2d6 16%, #e389e5 78%);
  -webkit-background-clip: text;
  color: transparent;
}

.sous-titre {
  font-family: Poppins, sans-serif;
  font-size: 1.5rem;
  font-weight: bolder;
  font-style: italic;
  margin-left: 120px;
  margin-right: 50px;
  padding-bottom: 20px;

}
.rencontre{
  padding-top: 50px;
  padding-bottom: 150px;
}
aside {
  width: 80%;
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  padding-left: 50px;
  padding-right: 50px;
}

.forums-etudiants {
  font-family: Lato, sans-serif;
  font-size: 1.2rem;
  justify-content: center;
  padding-left: 50px;
  padding-right: 50px;
}

.JPO {
  padding-left: 60px;
  padding-right: 60px;
  font-family: Lato, sans-serif;
  font-size: 1.2rem;
}
</style>
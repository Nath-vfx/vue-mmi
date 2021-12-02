<template>
<div>
  <enteteComponent v-for="(title, index) in titles" :main-proname="title.mainProname" :main-title="title.mainTitle" :key="index" v-bind:style="mainBackground"/>
</div>
</template>

<script>

/* eslint-disable */
export default {
  name: "Departement",
  data: () => {
    return {
      titles: [{mainProname: 'Le', mainTitle: 'Département'}],
      mainBackground: {
        background: 'url(https://images.unsplash.com/photo-1543055131-ac87bf2f6ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)'
      }
    }
}
}
</script>

<style scoped>

</style>
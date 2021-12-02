<template>
<div>
  <enteteComponent v-for="(title, index) in titles" :main-proname="title.mainProname" :main-title="title.mainTitle" :key="index"/>
</div>
</template>

<script>

/* eslint-disable */
export default {
  name: "Departement",
  data: () => {
    return {
      titles: [{mainProname: 'Le', mainTitle: 'Département'}]
    }
}
}
</script>

<style scoped>

</style>
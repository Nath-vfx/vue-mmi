<template>
  <div>
    <main>
      <h1>{{mainProname}} <span>{{mainTitle}}</span></h1>
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
}
}
</script>

<style scoped>

</style>
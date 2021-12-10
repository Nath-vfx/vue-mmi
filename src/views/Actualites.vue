<template>
  <div>
    <h1>{{ msg }}</h1>

    <div class="main">
      <img src="" alt="">
      <h3>Journée Portes Ouvertes 2022</h3>
      <time>29 Janvier 2022</time>
    </div>

    <aside>
      <img src="" alt="">
      <h3>Remise des diplômes</h3>
      <time>29 Juin 2022</time>
    </aside>

    <h2>Dernières nouvelles</h2>

    <ul class="articles">
      <li>
        <img src="#" alt="">
        <time>7 Novembre 2021</time>
        <h4>Lorem ipsum</h4>
        <p>Lorem ipsum</p>
      </li>
      <li>
        <img src="#" alt="">
        <time>8 Novembre 2021</time>
        <h4>Lorem ipsum</h4>
        <p>Lorem ipsum</p>
      </li>
      <li>
        <img src="#" alt="">
        <time>9 Novembre 2021</time>
        <h4>Lorem ipsum</h4>
        <p>Lorem ipsum</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Actualites",
  data() {
    return {
      msg: 'Page actualités'
    }
  }
}
</script>

<style scoped>

</style>
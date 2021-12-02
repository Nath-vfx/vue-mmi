<template>
  <div>
    <main>
      <aside>
        <h1>{{ mainProname }} <br> <span>{{ mainTitle }}</span></h1>
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
  }
}
</script>

<style scoped lang="less">

main {
  height: 730px;

  aside {
    height: 100%;
    width: 25%;
    margin-left: 12rem;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 3.2rem;
      position: relative;

      span {
        font-weight: 700;
        font-size: 9.6rem;
        position: absolute;
      }
    }
  }
}

</style>
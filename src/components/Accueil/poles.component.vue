<template>
<div id="poles">
  <div>
    <h3>Développement</h3>
  </div>
  <div>
    <h3>Communication</h3>
  </div>
  <div>
    <h3>Design</h3>
  </div>
</div>
</template>

<script>
export default {
  name: "poles.component"
}
</script>

<style lang="less" scoped>
h3 {
  font-size: 2.4rem;
  font-weight: bold;
  writing-mode: vertical-lr;
  text-orientation: mixed;
  padding-top: 16rem;
  padding-left: 1rem;
  @media screen and (max-width: 725px) {
    writing-mode: initial;
    padding-top: 0;
  }
}
#poles {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 725px) {
    flex-direction: column;
  }
  div {
    background-color: black;
    width: 180px;
    height: 400px;
    margin: 3rem;
    transition: all .3s ease;
    color: #FFFFFF;
    @media screen and (max-width: 725px) {
      flex-direction: column;
      margin: 3rem -40px;
      height: 200px;
      width: 100vw;
    }
  }
  div:hover {
    width: 250px;
    color: black;
    background-color: #FFFFFF;
    @media screen and (max-width: 725px) {
      width: 100vw;
      height: 300px;
    }
  }
}


</style>
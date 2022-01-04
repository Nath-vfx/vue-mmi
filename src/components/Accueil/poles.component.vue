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
  color: #FFFFFF;
  writing-mode: vertical-lr;
  text-orientation: mixed;
  padding-top: 16rem;
  padding-left: 1rem;
}
#poles {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  div {
    background-color: black;
    width: 180px;
    height: 400px;
    margin: 3rem;
    transition: all .3s ease;
    position: absolute;
  }
  div:nth-child(1) {
    left: -350px;
  }
  div:nth-child(2) {
    left: 0px;
  }
  div:nth-child(3) {
    left: 350px;
  }
  div:hover {
    width: 250px;
  }
}


</style>
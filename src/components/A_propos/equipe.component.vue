<template>
<div>
  <ul>
    <li>
      <img src="../../../public/images/Nathan-van_bignoot.jpg" alt="Nathan Van Bignoot">
      <h5>Nathan <br><span>Van Bignoot</span></h5>
      <span>Développement</span>
    </li>
    <li>
      <img src="../../../public/images/Elora-perrin.jpg" alt="Elora Perrin">
      <h5>Elora <br><span>Perrin</span></h5>
      <span>Communication</span>
    </li>
    <li>
      <img src="../../../public/images/Eva-bourquin.jpg" alt="Eva Bourquin">
      <h5>Eva <br><span>Bourquin</span></h5>
      <span>Design</span>
    </li>
    <li>
      <img src="../../../public/images/Tania-andre.jpg" alt="Tania André">
      <h5>Tania <br><span>André</span></h5>
      <span>Design</span>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: "equipe.component"
}
</script>

<style lang="less" scoped>

ul {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  max-width: max-content;
  li {
    margin-left: 50px;
    margin-right: 50px;
    img {
      width: 200px;
      height: 300px;
    }
    h5, span {
      font-family: Lato, sans-serif;
      font-weight: 500;
      font-size: 18px;
      text-align: center;
      position: relative;
      span {
        font-weight: 700;
      }
    }
    span {
      display: block;
    }
    h5:after {
      content: url("../../../public/images/dotted-separator.svg");
      position: absolute;
      left: 60px;
    }
  }
}

</style>
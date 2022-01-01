<template>
<div>
  <ul>
    <li>
      <img src="../../../public/images/Team/Nathan-van_bignoot.jpg" alt="Nathan Van Bignoot">
      <h5>Nathan <br><span>Van Bignoot</span></h5>
      <span>Développement</span>
    </li>
    <li>
      <img src="../../../public/images/Team/Elora-perrin.jpg" alt="Elora Perrin">
      <h5>Elora <br><span>Perrin</span></h5>
      <span>Communication</span>
    </li>
    <li>
      <img src="../../../public/images/Team/Eva-bourquin.jpg" alt="Eva Bourquin">
      <h5>Eva <br><span>Bourquin</span></h5>
      <span>Design</span>
    </li>
    <li>
      <img src="../../../public/images/Team/Tania-andre.jpg" alt="Tania André">
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 20rem));
  grid-gap: 5rem;
  justify-content: center;
  li {
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
      content: url("../../../public/images/Decoration/dotted-separator.svg");
      position: absolute;
      width: 1vw;
      left: 60px;
    }
  }
}

</style>
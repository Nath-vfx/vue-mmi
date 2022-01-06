<template>
  <div id="poles">
    <router-link to="/pole-design">
      <div>
        <h3>Design</h3>
      </div>
    </router-link>
    <router-link to="/pole-developpement">
      <div>
        <h3>Développement</h3>
      </div>
    </router-link>
    <router-link to="/pole-communication">
      <div>
        <h3>Communication</h3>
      </div>
    </router-link>
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
  padding-top: 16rem;
  margin-left: 0;
  @media screen and (max-width: 725px) {

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
  a:nth-child(2) {
    div {
      background-color: #0B4AC5;
    }
    div:hover {
      background-image: url("../../../public/images/Pages/Developpement/squareDev.svg");

    }
  }
  a:nth-child(3) {
    div {
      background-color: #990A9C;
    }
    div:hover {
      background-image: url("../../../public/images/Pages/Communication/ellipseCom.svg");
    }
  }
  a:nth-child(1) {
    div {
      background-color: #06D7B1;
    }
    div:hover {
      background-image: url("../../../public/images/Pages/Design/triangleDesign.svg");
    }
  }

  div {
    width: 180px;
    height: 400px;
    margin: 3rem;
    transition: all .3s ease;
    text-orientation: mixed;
    writing-mode: vertical-lr;
    padding-left: 1rem;
    color: #FFFFFF;
    @media screen and (max-width: 725px) {
      writing-mode: initial;
      padding-top: 0;
      flex-direction: column;
      margin: 3rem -40px;
      height: 200px;
      width: 100vw;
    }
  }

  a {
    div:hover {
      width: 250px;
      color: black;
      background-color: #FFFFFF;
      background-size: 150px;
      background-position: center;
      background-repeat: no-repeat;
      box-shadow: lightgrey 0 0 8px;
      padding-left: -1rem;
      @media screen and (max-width: 725px) {
        width: 100vw;
        height: 300px;
      }
    }
  }

}


</style>
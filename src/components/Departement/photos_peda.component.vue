<template>
  <div id="photo-peda">
    <ul>
      <li v-for="photo_peda in liste" :key="photo_peda.id">
        <img :src="photo_peda.photo" alt="">
        <h5>{{photo_peda.prenom_photo}} <br><span>{{photo_peda.nom_photo}}</span></h5>
        <span class="role">{{photo_peda.role_photo}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import param from "@/param/param";

export default {
  /* eslint-disable */
  name: "photos_peda.component",
  data() {
    return {
      liste : []
    }
  },
  created() {
    axios.get(param.host_spe+"photo_peda/v1/"+"liste_photo_peda").then(response => {
      console.log("Reponse", response);
      this.liste = response.data;
    })
        .catch(error => console.log(error))
  },
}

</script>

<style lang="less" scoped>

#photo-peda {
  margin-top: 8rem;
}

ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 20rem));
  grid-gap: 5rem;
  justify-content: center;
  li {
    img {
      width: 200px;
      height: 300px;
      object-fit: cover;
    }
    h5, span {
      margin-top: 1rem;
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
    .role {
      padding-bottom: 2rem;
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
<template>
  <div>
    <img :src=article.acf.image.url :alt=article.acf.image.alt>
    <h1>{{ article.acf.titre }}</h1>
    <p v-html="article.acf.texte">
    </p>
    <span>Par {{article.acf.auteur.nickname}}</span>
    <router-link to="/actualites">
      <button>Plus d'articles</button>
    </router-link>

  </div>
</template>

<script>
import param from "@/param/param";

export default {
  /* eslint-disable */
  name: "article.view",
  data() {
    return {
      article: []
    }
  },
  created() {
    this.article.id = this.$route.params.id;
    console.log("id article", this.article.id);
    axios.get(param.host + "simplified/" + this.article.id)
        .then(response => {
          console.log("Response", response);
          this.article = response.data;
        })
        .catch(error => console.log(error))
  },
}
</script>


<style lang="less" scoped>
div {
  margin-bottom: 10rem;
  position: relative;
}
img {
  width: 100%;
  height: 475px;
  object-fit: cover;
}

h1 {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  text-align: center;
  font-size: 9.6rem;
  background: -webkit-linear-gradient(0deg, rgba(85, 242, 214, 1) 16%, rgba(227, 137, 229, 1) 78%);
  -webkit-background-clip: text;
  color: transparent;
  @media screen and (max-width: 872px) {
    font-size: 6.4rem;
  }
}

p {
  font-family: Lato, sans-serif;
  font-size: 1.8rem;
  font-weight: 300;
  margin-left: 10vw;
  margin-right: 10vw;
  margin-bottom: 1rem;
  padding-bottom: 3rem;
  border-bottom: 8px dashed black;
}

span {
  margin-left: 10vw;
  font-size: 1.6rem;
  color: #9A9A9A;
}

button {
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  padding: 5px 40px;
  font-weight: initial;
  border-color: transparent;
  background-color: #FFFFFF;
  box-shadow: 0 0 8px #9A9A9A;
  cursor: pointer;
  position: absolute;
  bottom: -80px;
  left: 50%;
  transform: translateX(-50%);

}

</style>
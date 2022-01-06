<template>

  <div class="lastNews">
    <ul>
      <li v-for="article in liste" :key="article.id">
        <router-link :to="{ name: 'Article', params : {id : article.id} }">
        <div>
          <img
              :src=article.acf.image.url
              :alt=article.acf.image.alt>
        </div>
        <div>
          <span class="author">{{article.acf.auteur.nickname | liteLiveSubstr(12)}}</span>
          <span class="date">{{article.acf.date}}</span>
          <h4>{{article.acf.titre}}</h4>
          <p>{{article.acf.texte | liveSubstr(100)}}</p>
        </div>
        </router-link>
      </li>
    </ul>
  </div>

</template>

<script>
import param from "@/param/param";

export default {
  /* eslint-disable */
  name: "newsComponent",
  data() {
    return {
      liste : []
    }
  },
  filters: {
    liveSubstr: function(string, nb) {
      return string.substring(0,nb) + '...';
    },
    liteLiveSubstr: function (string, nb) {
      return string.substring(0,nb) +'.';
    }
  },
  created: function () {
    axios.get(param.host + "simplified").then(response => {
      console.log("Response", response);
      this.liste = response.data;
    })
    .catch(error => console.log(error))
  }
}
</script>

<style lang="less" scoped>
.lastNews {
  margin-left: 5rem;
  margin-right: 5rem;

  ul {
    margin-top: 5rem;
    margin-bottom: 10rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, 350px);
    grid-gap: 3rem;
    justify-content: center;
    li:hover {
      transform: scale(1.1);
    }
    li {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.16);
      transition: all .3s ease;

      div:nth-child(2) {
        padding: 2.5rem;
      }

      div {
        img {
          width: 100%;
          height: 250px;
          object-fit: cover;
        }

        .author {
          background-color: #8D92FF;
          font-size: 1.8rem;
          color: #FFFFFF;
          padding: .5rem;
        }

        .date {
          margin-left: 2rem;
          font-size: 1.4rem;
          color: #9A9A9A;
        }

        h4 {
          font-size: 2.4rem;
          font-weight: 500;
          line-height: 50%;
        }

        p {
          font-size: 1.6rem;
        }
      }
    }
  }
}
</style>
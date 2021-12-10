<template>
  <div>
    <!--  <h1>-->
    <!--    {{msg}}-->
    <!--  </h1>-->
    <div class="stage">
      <h3>Nous vous <br><span>intéressons ?</span></h3>
      <p>Afin de valider leur quatrième semestre et obtenir leur diplôme, nos étudiants doivent effectuer un stage de 12
        semaines en milieu professionnel (pour les DUT) ou de 16 semaines (pour les Licences Professionnelles en
        formation initiale). Ils mettent en pratique l'ensemble leurs savoirs acquis durant la formation. Leur travail
        se développe dans un large champ d’action, de la start-up à l’entreprise plus traditionnelle en passant par les
        agences de communication digitale ou les associations régionales.
      </p>
      <p>Si leurs projets ont retenu votre attention, n’hésitez pas à nous soumettre vos offres grâce à notre
        formulaire.</p>
      <div class="boutons-espace-pro">
        <a href="">
          <button>Déposer une offre</button>
        </a>
      </div>
    </div>
    <div class="alternance">
      <h3>Le choix de <br><span>l'alternance</span></h3>
      <p>Vous pouvez également accueillir un étudiant de licence professionnelle webdesign en apprentissage. La licence
        professionnelle en alternance est conçue pour une immersion importante en entreprise. Son rythme est pensé sur 2
        semaines : 10 jours en entreprise, 3 jours au département. Sauf condition particulière, les congés sont de 5
        semaines.
      </p>
      <p>N’hésitez plus… Contactez-nous pour adopter un apprenti !</p>
      <div class="boutons-espace-pro">
        <a href="">
          <button>Déposer une offre</button>
        </a>
      </div>
    </div>
    <div class="projet">
      <h3>Un projet ? <br><span>Une application ?</span></h3>
      <p>Vous pouvez également accueillir un étudiant de licence professionnelle webdesign en apprentissage. La licence
        professionnelle en alternance est conçue pour une immersion importante en entreprise. Son rythme est pensé sur 2
        semaines : 10 jours en entreprise, 3 jours au département. Sauf condition particulière, les congés sont de 5
        semaines.
      </p>
      <p>N’hésitez plus… Contactez-nous pour adopter un apprenti !</p>
      <div class="boutons-espace-pro">
        <a href="">
          <button>Proposer un projet</button>
        </a>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "espacePro",
  data() {
    return {
      msg: 'Espace Pro'
    }
  }
}
</script>

<style scoped lang="less">
p {
  font-family: Lato, sans-serif;
  font-weight: 500;
  font-size: 18px;
  margin-left: 120px;
  width: 50%;
  line-height: 150%;
}

h3 {
  font-size: 3.2rem;
  font-weight: 400;
  color: #9A9A9A;
  margin-left: 120px;
  margin-right: 50px;

  span {
    font-size: 6.4rem;
    font-weight: 600;
    background: -webkit-linear-gradient(0deg, rgba(85, 242, 214, 1) 16%, rgba(227, 137, 229, 1) 78%);
    -webkit-background-clip: text;
    color: transparent;
  }
}

.alternance {
  background-color: #EEEEEE;
  padding-top: 50px;
  padding-bottom: 50px;
}

button {
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  padding: 5px 40px;
  margin-right: 350px;
  font-weight: initial;
  border-color: transparent;
  background-color: #FFFFFF;
  box-shadow: 0 0 8px #9A9A9A;
}

a {
  display: flex;
  justify-content: right;
  text-align: right;
}

.projet{
  padding-top: 50px;
  padding-bottom: 50px;
}
.stage{
  padding-top: 50px;
  padding-bottom: 50px;
}

</style>
<template>
  <div>
    <h3><span>Formulaire</span></h3>
    <p>Des idées de contenus, des messages à faire passer, des questions : ce formulaire est là pour vous</p>
    <form action="">
      <div>
        <label for="name">Votre nom :</label>
        <input type="text" id="name" name="user_name" required>
      </div>
      <div>
        <label for="mail">Votre e-mail:</label>
        <input type="email" id="mail" name="user_mail" required>
      </div>
      <div>
        <label> Sujet :</label>
        <input id="message" name="user_message">
      </div>
      <div>
        <label>Votre message</label>
        <textarea id="msg"></textarea>
      </div>
      <div class="button-envoyer">
        <button type="submit">Envoyer</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "formComponent"
}
</script>

<style scoped>
div {
  box-shadow: 0 0 8px #9A9A9A;
}
span {
  font-size: 6.4rem;
  font-weight: 600;
  background: -webkit-linear-gradient(0deg, #55f2d6 16%, #e389e5 78%);
  -webkit-background-clip: text;
  color: transparent;
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
</style>
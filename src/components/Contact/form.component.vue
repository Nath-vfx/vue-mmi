<template>
  <div>
    <div id="formulaire">
      <div class="formTitle">
        <h3>Formulaire</h3>
        <p>Des idées de contenus, des messages à faire passer, des questions : ce formulaire est là pour vous !</p>
      </div>
      <form action="send">
        <div class="contactForm">
          <div class="champs">
            <label for="name">Votre nom :</label>
            <input type="text" id="name" name="user_name" required>
            <label for="mail">Votre e-mail:</label>
            <input type="email" id="mail" name="user_mail" required>
            <label> Sujet :</label>
            <input id="message" name="user_message">
          </div>
          <div class="msg">
            <label>Votre message</label>
            <textarea id="msg"></textarea>
            <div class="button-envoyer">
              <button type="submit">Envoyer</button>
            </div>
          </div>

        </div>

      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "formComponent"
}
</script>

<style lang="less" scoped>
  #formulaire {
    font-family: Lato, sans-serif;
    font-size: 1.8rem;
    box-shadow: 0 0 8px #9A9A9A;
    .formTitle {
      display: flex;
      h3 {
        font-family: 'Poppins', sans-serif;
        margin: 0;
        font-size: 6.4rem;
        font-weight: 600;
        background: -webkit-linear-gradient(0deg, rgba(85, 242, 214, 1) 16%, rgba(227, 137, 229, 1) 78%);
        -webkit-background-clip: text;
        color: transparent;
        @media screen and (max-width: 730px) {
          font-size: 5.2rem;
        }
      }
    }
    .contactForm {
      display: flex;
      .champs {
        display: flex;
        flex-direction: column;
        input {
          width: 295px;
          height: 33px;
          border-radius: 20px;
        }
        label {
          margin-bottom: 2rem;
        }
        label:not(:first-child) {
          margin-top: 5rem;
        }
      }
      .msg {
        display: flex;
        flex-direction: column;
      }
    }

  }
</style>
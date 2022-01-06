<template>
  <div>
    <div id="formulaire">
      <div class="formTitle">
        <h3>Formulaire</h3>
        <p>Des idées de contenus, des messages à faire passer, des questions : ce formulaire est là pour vous !</p>
      </div>
      <form ref="form" @submit.prevent="sendEmail">
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
            <textarea id="msg" name="message"></textarea>
            <div class="sendButton">
              <button type="submit">Envoyer</button>
            </div>
          </div>

        </div>

      </form>
    </div>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  name: "formComponent",
  methods: {
    sendEmail() {
      emailjs.sendForm('service_zlzapk7', 'template_9n6xhso', this.$refs.form, 'user_YBH8eaO9gC7pCO7FvCEJ3')
          .then((result) => {
            console.log('SUCCESS!', result.text);
          }, (error) => {
            console.log('FAILED...', error.text);
          });
    }
  }
}
</script>

<style lang="less" scoped>
  #formulaire {
    font-family: Lato, sans-serif;
    font-size: 1.8rem;
    box-shadow: 0 0 8px #ddd;
    padding: 2rem 5rem;
    margin-top: 5rem;
    .formTitle {
      display: flex;
      @media screen and (max-width: 1000px) {
        flex-direction: column;
      }
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
      p {
        padding: 1rem 3rem;
      }
    }
    .contactForm {
      display: flex;
      @media screen and (max-width: 1000px) {
        flex-direction: column;
      }
      .champs {
        display: flex;
        flex-direction: column;
        margin-right: 5rem;
        @media screen and (max-width: 1000px) {
          margin-right: 0;
        }
        input {
          width: 295px;
          height: 33px;
          border-radius: 20px;
          border: #D197E4 1px solid;
          font-size: 2rem;
          padding-left: 1rem;
          @media screen and (max-width: 1000px) {
            width: 100%;
          }
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
        margin-left: 5rem;
        font-size: 2rem;
        @media screen and (max-width: 1000px) {
          margin-left: 0;
          margin-top: 3rem;
        }
        label {
          margin-bottom: 2rem;
        }
        #msg {
          border-radius: 20px;
          border: #D197E4 1px solid;
          resize: none;
          width: 520px;
          height: 284px;
          padding: 1rem;
          font-size: 1.4rem;
          @media screen and (max-width: 1300px) {
            width: 100%;
          }
        }
        .sendButton {
          margin: 4rem 0 5rem 0;
          text-align: right;
          @media screen and (max-width: 1000px) {
            text-align: center;
          }
          button {
            font-family: 'Poppins', sans-serif;
            font-size: 2rem;
            padding: 5px 40px;
            font-weight: initial;
            border-color: transparent;
            background-color: #FFFFFF;
            box-shadow: 0 0 8px #ddd;
            width: 320px;

          }
        }
      }
    }

  }
</style>
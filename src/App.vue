<template>
  <div id="app">
    <header>
      <nav id="navigation">
        <div id="brand">
          <router-link to="/">
            <img src="images/Logo%20MMi-black.svg" alt="Logo du département MMI de Montbéliard">
          </router-link>
        </div>
        <ul class="nav-centrale">
          <li>
            <a href="#">Département</a>
          </li>
          <li>
            <a href="#">BUT MMi</a>
          </li>
          <li>
            <a href="#">Mobilité Internationale</a>
          </li>
        </ul>
        <div id="extras" class="menu-deroulant">
          <div id="extra-nav" class="">
          <a href="#" class="extra-nav-entry" onclick="document.getElementById('sous-menu').classList.toggle('appear');
            document.getElementById('extra-nav').classList.toggle('underline-toggle')">Extras</a>
          </div>
          <ul class="appear" id="sous-menu">
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Espace Pro</a>
            </li>
            <li>
              <a href="#">Actualités</a>
            </li>
          </ul>
        </div>


      </nav>
    </header>

    <div class="growth">
      <router-view/>
    </div>

    <footer>
      <div class="footer-cat">
        <div class="footer-cat-column">
          <h5>La formation</h5>
          <ul>
            <li>But MMi</li>
            <li>Licence Pro</li>
            <li>But MMi</li>
          </ul>
        </div>
        <div class="footer-cat-column">
          <h5>A propos</h5>
          <ul>
            <li>Mentions légales</li>
            <li>CGU</li>
            <li>Politique de confidentialités</li>
          </ul>
        </div>
        <div class="footer-cat-column">
          <h5>La formation</h5>
          <ul>
            <li>Nous Contacter</li>
            <li>Espace Pro</li>
          </ul>
        </div>
        <div class="footer-cat-column"></div>
        <div class="footer-cat-column"></div>
      </div>
    </footer>
  </div>
</template>

<style lang="less">
@import "assets/style/style.css";

</style>

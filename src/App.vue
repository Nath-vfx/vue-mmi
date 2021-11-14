<template>
  <div id="app">
    <header>
      <nav id="nav">
        <div id="brand">
          <router-link to="/">
            <img src="images/Logo%20MMi-black.svg" alt="Logo du département MMI de Montbéliard">
          </router-link>
        </div>
        <ul>
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
          <a href="#">Extras</a>
          <ul class="sous-menu">
            <li>
              <a href="#">Contact</a>
              <a href="#">Espace Pro</a>
              <a href="#">Actualités</a>
            </li>
          </ul>
        </div>

      </nav>
    </header>

    <router-view/>
  </div>
</template>

<style lang="less">
@import "assets/style/style.css";

</style>

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Accueil.vue'
import About from '@/views/A_Propos'
import Actualites from "@/views/Actualites";
import espacePro from "@/views/espacePro";
import Contact from "@/views/Contact";
import mobiliteInternationale from "@/views/mobiliteInternationale";
import Butmmi from "@/views/Butmmi";
import Departement from "@/views/Departement";
import LicencePro from "@/views/LicencePro";
import MentionsLegales from "@/views/MentionsLegales";
import CGU from "@/views/CGU";
import PolitiqueConfidentialite from "@/views/PolitiqueConfidentialite";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/actualites',
    name: 'Actualites',
    component: Actualites
  },
  {
    path: '/espace-pro',
    name: 'espacePro',
    component: espacePro
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/mobilite',
    name: 'Mobilite',
    component: mobiliteInternationale
  },
  {
    path: '/but-mmi',
    name: 'Butmmi',
    component: Butmmi
  },
  {
    path: '/departement',
    name: 'Departement',
    component: Departement
  },
  {
    path: '/licence-pro',
    name: 'LicencePro',
    component: LicencePro
  },
  {
    path: '/mentions-legales',
    name: 'MentionsLegales',
    component: MentionsLegales
  },
  {
    path: '/cgu',
    name: 'CGU',
    component: CGU
  },
  {
    path: '/politique-confidentialite',
    name: 'PolitiqueConfidentialite',
    component: PolitiqueConfidentialite
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

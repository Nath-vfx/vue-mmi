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
    component: Home,
    meta: {noHeading: true}
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/actualites',
    name: 'Actualites',
    component: Actualites,
    meta: {
      noHeading: false,
      data: {
        titles: [{mainProname: 'Les', mainTitle: 'Actualités', mainText: 'Retrouvez les informations\n' +
              'complètes et à jour du département\n'}],
        mainBackground: {
          background: 'url(https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)'
        }
      }
    }
  },
  {
    path: '/espace-pro',
    name: 'espacePro',
    component: espacePro,
    meta: {
      noHeading: false,
      data: {
        titles: [{mainProname: 'Espace', mainTitle: 'Professionnel', mainText: 'Nos étudiants ont de l’avenir et du talent\n' +
              'complètes et à jour du département\n'}],
        mainBackground: {
          background: 'url(https://images.unsplash.com/photo-1639054098022-49f836a42e43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)'
        }
      }
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      noHeading: false,
      data: {
        titles: [{mainProname: 'Nous', mainTitle: 'Contacter', mainText: 'Contactez-nous pour rejoindre la communauté MMI\n'}],
        mainBackground: {
          background: 'url(https://images.unsplash.com/photo-1639054098022-49f836a42e43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)'
        }
      }
    }
  },
  {
    path: '/mobilite',
    name: 'Mobilite',
    component: mobiliteInternationale,
    meta: {
      noHeading: false,
      data: {
        titles: [{mainProname: 'Mobilité', mainTitle: 'Internationale', mainText: 'Représente ta formation à l\'internationale'}],
        mainBackground: {
          background: 'url(https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)'
        }
      }
    }
  },
  {
    path: '/but-mmi',
    name: 'Butmmi',
    component: Butmmi,
    meta: {
      noHeading: false,
      data: {
        titles: [{mainProname: 'Le', mainTitle: 'BUT MMI', mainText: 'À la découverte de la formation MMI à travers les différents pôles'}],
        mainBackground: {
          background: 'url(https://images.unsplash.com/photo-1588522943401-6ba285f692de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80)'
        }
      }
    }
  },
  {
    path: '/departement',
    name: 'Departement',
    component: Departement,
    meta: {
      noHeading: false,
      data: {
        titles: [{mainProname: 'Le', mainTitle: 'Département', mainText: 'Métiers du multimédia et de l’internet'}],
        mainBackground: {
          background: 'url(https://images.unsplash.com/photo-1543055131-ac87bf2f6ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)'
        }
      }
    }
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
  },
    /*Composants*/
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
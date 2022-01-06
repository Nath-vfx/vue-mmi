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
import PolitiqueConfidentialite from "@/views/PolitiqueConfidentialite";
import Communication from "@/views/Poles/Communication";
import Design from "@/views/Poles/Design";
import Developpement from "@/views/Poles/Developpement";
import ArticleView from "@/components/Actu/article.view";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        meta: {
            data: {
                titles: [{mainProname: 'A', mainTitle: 'Propos', mainText: 'Notre équipe'}],
                mainBackground: {
                    background: 'url(https://db-cms-montbeliard.nathanvanbignootvincler.fr/wp-content/uploads/2022/01/dos-campus.jpg)'
                }
            }
        }

    },
    {
        path: '/actualites',
        name: 'Actualites',
        component: Actualites,
        meta: {
            data: {
                titles: [{
                    mainProname: 'Les', mainTitle: 'Actualités et projets', mainText: 'Retrouvez les informations\n' +
                        'complètes et à jour du département\n'
                }],
                mainBackground: {
                    background: 'url(https://db-cms-montbeliard.nathanvanbignootvincler.fr/wp-content/uploads/2022/01/batiment-ciel.jpg) no-repeat center'
                }
            }
        }
    },
    {
        path: '/espace-pro',
        name: 'espacePro',
        component: espacePro,
        meta: {
            data: {
                titles: [{
                    mainProname: 'Espace',
                    mainTitle: 'Professionnel',
                    mainText: 'Nos étudiants ont de l’avenir et du talent'
                }],
                mainBackground: {
                    background: 'url(https://db-cms-montbeliard.nathanvanbignootvincler.fr/wp-content/uploads/2022/01/travail.jpg) no-repeat center'
                }
            }
        }
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
        meta: {
            data: {
                titles: [{
                    mainProname: 'Nous',
                    mainTitle: 'Contacter',
                    mainText: 'Contactez-nous pour rejoindre la communauté MMI\n'
                }],
                mainBackground: {
                    background: 'url(https://db-cms-montbeliard.nathanvanbignootvincler.fr/wp-content/uploads/2022/01/macBook.jpg) no-repeat center',
                }
            }
        }
    },
    {
        path: '/mobilite',
        name: 'Mobilite',
        component: mobiliteInternationale,
        meta: {
            data: {
                titles: [{
                    mainProname: 'Mobilité',
                    mainTitle: 'Internationale',
                    mainText: 'Représente ta formation à l\'internationale'
                }],
                mainBackground: {
                    background: 'url(https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80) no-repeat center'
                }
            }
        }
    },
    {
        path: '/but-mmi',
        name: 'Butmmi',
        component: Butmmi,
        meta: {
            data: {
                titles: [{
                    mainProname: 'Le',
                    mainTitle: 'BUT MMI',
                    mainText: 'À la découverte de la formation MMI à travers les différents pôles'
                }],
                mainBackground: {
                    background: 'url(https://db-cms-montbeliard.nathanvanbignootvincler.fr/wp-content/uploads/2022/01/logo-mur.jpg) no-repeat center',
                    backgroundSize: 'cover'
                }
            }
        }
    },
    {
        path: '/departement',
        name: 'Departement',
        component: Departement,
        meta: {
            data: {
                titles: [{
                    mainProname: 'Le',
                    mainTitle: 'Département',
                    mainText: 'Métiers du multimédia et de l’internet'
                }],
                mainBackground: {
                    background: 'url(https://db-cms-montbeliard.nathanvanbignootvincler.fr/wp-content/uploads/2022/01/departement.jpg) no-repeat center',
                    backgroundSize: 'cover'
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
        path: '/politique-confidentialite',
        name: 'PolitiqueConfidentialite',
        component: PolitiqueConfidentialite
    },
    {
        path: '/pole-communication',
        name: 'PoleCommunication',
        component: Communication
    },
    {
        path: '/pole-design',
        name: 'PoleDesign',
        component: Design
    },
    {
        path: '/pole-developpement',
        name: 'PoleDeveloppement',
        component: Developpement
    },
    {
        path: '/article/:id',
        name: 'Article',
        component: ArticleView
    }
    /*Composants*/
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
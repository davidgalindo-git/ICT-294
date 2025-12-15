import { createRouter, createWebHistory } from 'vue-router';

// 1. Importer les composants de vue que vous voulez utiliser comme pages
// Remplacez les chemins et les noms par vos propres composants.
import EventList from '../components/EventList.vue'
import About from "../components/About.vue";

// 2. Définir le tableau des routes
const routes = [
    {
        path: '/',
        name: 'Home',
        component: EventList
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

// 3. Créer l'instance du routeur
const router = createRouter({
    // Utilisation du mode History pour des URLs propres (sans #)
    history: createWebHistory(import.meta.env.BASE_URL),

    // Le tableau des routes défini ci-dessus
    routes
})

// 4. Exporter l'instance
export default router
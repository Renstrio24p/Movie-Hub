import Router from './assets/router/router.js';
import './css/app.css'
import Styles from './Movies.module.css'
import Footer from './pages/forest/components/Footer/Footer.js';
import Navbar from './pages/forest/components/Navbar/Navbar.js';
export default function Start(DOM) {

  DOM.innerHTML = (`
    <div class=${Styles.bg}>
        <nav class=${Styles.navbar} id='navbar'></nav>
        <div id='router'></div>
        <footer class=${Styles.footer} id='footer'></footer>
    </div>
  `);

    /** @type {HTMLDivElement} */
    
    const routes = document.getElementById('router')
    Router(routes)

    const nav = document.getElementById('navbar')
    Navbar(nav)

    const footer = document.getElementById('footer')
    Footer(footer)
}
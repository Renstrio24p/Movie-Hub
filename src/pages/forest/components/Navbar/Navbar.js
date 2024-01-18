import Styles from './Navbar.module.css'
/**
 * @param {HTMLDivElement} DOM 
 */

export default function Navbar(DOM) {

    DOM.innerHTML = (`
            <div class=${Styles.logo}>
                <h1>Movies</h1>
                <div class=${Styles.hub}>
                    <p>hub</p>
                </div>
            </div>
            <div class=${Styles.navlinks}>
                <a href='/'>Home</a>
                <a href='/movies'>Movies</a>
                <a href='/tv-series'>TV Series</a>
            </div>
    `)

}
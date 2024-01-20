import Styles from './Footer.module.css'
import { Drop, Lang, PHLang } from './Lang'

/**
 * 
 * @param {HTMLDivElement} DOM 
 */

export default function Footer(DOM){

    DOM.innerHTML = (`
    <div class=${Styles.logo}>
      <h3>Movies</h3>
      <span>
         hub
      </span>
    </div>
    <div class=${Styles.list}>
        <div class=${Styles.box}>
            <h3 class=${Styles.title}>FAQ's</h3>
            <ul>
                <li>
                    <a href='/faq'>FAQ</a>
                </li>
                <li>
                    <a href='/faq'>Support</a>
                </li>
                <li>
                    <a href='/faq'>Redeem Gift Cards</a>
                </li>
                <li>
                    <a href='/watch'>Ways to watch</a>
                </li>
            </ul>
        </div>
        <div class=${Styles.box}>
            <h3 class=${Styles.title}>My Account</h3>
            <ul>
                <li>
                    <a href='/login'>Login</a>
                </li>
                <li>
                    <a href='/faq'>History</a>
                </li>
                <li>
                    <a href='/faq'>Recent Watched</a>
                </li>
                <li>
                    <a href='/watch'>Account FAQ</a>
                </li>
            </ul>
        </div>
        <div class=${Styles.box}>
            <h3 class=${Styles.title}>Menu</h3>
            <ul>
                <li>
                    <a href='/login'>Media Center</a>
                </li>
                <li>
                    <a href='/faq'>Jobs</a>
                </li>
                <li>
                    <a href='/faq'>Terms of Use</a>
                </li>
                <li>
                    <a href='/watch'>Buy Gift Cards</a>
                </li>
            </ul>
        </div>
        <div class=${Styles.box}>
            <h3 class=${Styles.title}>Subscribe</h3>
            <ul class='${Styles.subscribe}'>
                <li>
                    <span>For more details.</span>
                    <div>
                        <input type='email' placeholder='Email' />
                        <input type='button' value='Subscribe'>
                    </div>
                    <span>&copy; Movie HUB PH &trade;</span>
                </li>
            </ul>
        </div>
    </div>
    <div class=${Styles['lang-container']}>
        <div id='drop' class=${Styles.lang}>
            <div class=${Styles.drop}>
                ${Lang}
                <span id='Lang'>English UK</span>
                ${Drop}
            </div>
            <div id='droplist' class=${Styles.drop_list}>
                <li> ${Lang}English UK</li>
                <li> ${PHLang}Tagalog PH</li>
            </div>
        </div>
    </div>
    `)

    const drop = document.getElementById('drop');
    const list = document.getElementById('droplist');
    const dropIcon = document.getElementById('drops')
    const values = document.getElementById('Lang')

    drop.addEventListener('click', (event) => {
        event.stopPropagation(); 
        list.classList.toggle(Styles.show);
        list.style.animation = 'fadeInUp 1s 0s ease-in-out';
        dropIcon.style.transform = 'rotate(50%)'
    });

    document.addEventListener('click', () => {
        list.classList.remove(Styles.show);
    });

    list.addEventListener('click', (event) => {
        event.stopPropagation(); 

    });

}
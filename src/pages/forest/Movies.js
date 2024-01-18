import Styles from '../../Movies.module.css'

/**
 * @param {HTMLDivElement} DOM 
 */
export default function Movies(DOM){
    
    document.title = 'Movies HUB'

    DOM.innerHTML = (`
        <div class=${Styles.movies}>
            <div class=${Styles.overlay}>
                <div class=${Styles.desc}>
                    <p>Unlimited movies,TV shows, and <br>
                    more. <br>
                    Watch anywhere. Cancel anytime.
                    </p>
                    <div class=${Styles.buttons}>
                        <a href='/login'>Login</a>
                        <a href='/signup'>Sign up</a>
                    </div>
                </div>
                <div class=${Styles.video}>
                    <h2>AI Video</h2>
                </div>
            </div>
        </div>
        <div class=${Styles.description}>
            <p>
                Unlimited movies, TV shows, and more. <br>
                Watch anywhere. Cancel anytime.
            </p>
        </div>
        <div class=${Styles.divider}></div>
    `)
    
  
}

import { Google } from './Images'
import Styles from './Login.module.css'

/**
 *  @param {HTMLDivElement} DOM
 */

export default function Login(DOM){

    DOM.innerHTML = (`
    
        <div class=${Styles.login}>
        <div class=${Styles.overlay}></div>
            <div class=${Styles.container}>
                <h1>Sign in</h1>
                <form>
                    <input type='text' id='email' placeholder='Email address or Phone' />
                    <input type='password' id='pass' placeholder='••••••••' />
                    <div class=${Styles.remember}>
                        <div>
                            <input type='checkbox' name='checkbox' />
                            <label for='checkbox'>Remember me</label>
                        </div>
                        <div>
                            <a href='/help'>Need help?</a>
                        </div>
                    </div>
                    <button>Sign in</button>
                    <button>
                        <div class=${Styles.google}>
                            <img src=${Google} alt='google'>
                        </div>
                    Sign in with Google
                    </button>
                    <a class=${Styles.signup} href='/signup'>No Account yet?, Sign up here.</a>
                </form>
            </div>
        </div>

    `)

}
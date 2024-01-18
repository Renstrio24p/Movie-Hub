import Styles from '../login/Login.module.css'

/**
 *  @param {HTMLDivElement} DOM
 */

export default function SignUp(DOM){

    DOM.innerHTML = (`
    
        <div class=${Styles.login}>
        <div class=${Styles.overlay}></div>
            <div class=${Styles.container}>
                <h1>Register</h1>
                <form>
                    <input type='text' id='email' placeholder='Email address or Phone' />
                    <input class=${Styles.confirm} type='password' id='pass' placeholder='••••••••' />
                    <input type='password' id='cpass' placeholder='••••••••' />
                    <div class=${Styles.remember}>
                        <div>
                            <input type='checkbox' name='checkbox' />
                            <label for='checkbox'>Remember me</label>
                        </div>
                        <div>
                            <a href='/help'>Need help?</a>
                        </div>
                    </div>
                    <button>Sign up</button>
                    <a class=${Styles.signup} href='/login'>Already have an Account?, login here.</a>
                </form>
            </div>
        </div>

    `)

}
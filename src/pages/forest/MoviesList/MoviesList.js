import { JSEffect } from '../../../hooks/JSEffect'
import Styles from './MoviesList.module.css'

/**
 * @param {HTMLDivElement} DOM
 */

export default function MoviesList(DOM){

    document.addEventListener('DOMContentLoaded',()=>{

        JSEffect(()=>{

        },[])

        DOM.innerHTML = (`
    
        <div class=${Styles.container}>
            <h1>Movies List</h1>
            <div>
                <h4>Top Ratings</h4>
                <div class=${Styles.items}>
                </div>
            </div>
        </div>
        
    `)

    })

}
import NotFound from "../../pages/NotFound.js";
import Movies from "../../pages/forest/Movies.js";
import Login from "../../pages/forest/components/login/Login.js";
import SignUp from "../../pages/forest/components/signup/Signup.js";
import { JSRouter } from "./router.class.js";

export default function Router(DOM) {

const router = new JSRouter([
    {
      path: '/',
      element: () => {
        Movies(DOM)
      },
      errorElement: ()=>{},
      children: [
        {
          path: '/about',
          element: () => {
            Movies(DOM)
          },
          errorElement: ()=>{},
        }
      ]
    },
     {
       path: '/login',
       element: () => {Login(DOM)},
       errorElement: ()=>{},
     },
     {
       path: '/signup',
       element: () => {SignUp(DOM)},
       errorElement: ()=>{},
     },
    {
        path: '*',
        element: () => {
            NotFound(DOM)
        }
    }
  ]);
  router.navigate('');
}
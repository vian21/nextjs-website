
import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

import Cookies from 'js-cookie'

function MyApp({ Component, pageProps }) {
  var jwt = require("jsonwebtoken");

  //Login component initial text if user is not authenticated
  let userName = "Login";
  let isLoggedIn = false;

  //check if user is authenticated and has token
  if (Cookies.get('token')) {

    var decodeCookie = jwt.verify(Cookies.get('token'), 'passKey123');

    userName = decodeCookie.name;
    isLoggedIn = true
  }

  return <Layout name={userName} isLoggedIn={isLoggedIn}>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
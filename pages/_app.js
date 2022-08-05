import '../styles/globals.css'
//import bootstrap css
import 'bootstrap/dist/css/bootstrap.css';
 // import Font Awesome CSS
 import "@fortawesome/fontawesome-svg-core/styles.css";
 import { config } from "@fortawesome/fontawesome-svg-core";
 config.autoAddCss = false;
import Navbar from './src/nav/Navbar'


function MyApp({ Component, pageProps }) {
  return<>
  <Navbar></Navbar>
  
  <Component {...pageProps} />
  </>
   
}

export default MyApp

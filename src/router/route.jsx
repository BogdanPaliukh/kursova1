import {Route, Routes} from "react-router-dom";
import App from '../App'
import News from '../news'
import Gallery from "../gallery";
import AboutUs from "../aboutUs";
import Contact from "../contact";
function Router(){
    return(
        <Routes>
            <Route path="/" element={ <App/> }/>
            <Route path="/news" element={ <News/> }/>
            <Route path="/gallery" element={ <Gallery/> }/>
            <Route path="/aboutUs" element={ <AboutUs/> }/>
            <Route path="/contact" element={ <Contact/> }/>
        </Routes>
    )
}
export default Router;
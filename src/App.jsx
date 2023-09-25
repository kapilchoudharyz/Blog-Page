import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import AboutPage from "./Pages/AboutPage/AboutPage.jsx";
import CategoriesPage from "./Pages/CategoriesPage/CategoriesPage.jsx";
import ContactPage from "./Pages/ContactPage/ContactPage.jsx";
import PublishPage from "./Pages/PublishPage/PublishPage.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";

function App() {

    return<div className={'app'}>
      <NavBar></NavBar>
    <Routes>
        <Route index element={<Navigate to={"home"} replace/>}/>
        <Route index={true} path={'home'} element={<HomePage></HomePage>}></Route>
        <Route path={'about'} element={<AboutPage></AboutPage>}> </Route>
        <Route path={'categories'} element={<CategoriesPage></CategoriesPage>}> </Route>
        <Route path={'contact'} element={<ContactPage></ContactPage>}> </Route>
        <Route path={'publish'} element={<PublishPage></PublishPage>}> </Route>
    </Routes>
    </div>
}

export default App;

import './NavBar.css'
import NavBtns from "../Navigation Buttons/NavBtns.jsx";
function NavBar() {

    return (
        <nav className={'app__nav'}>
            <div className="logo">Open Blogs</div>
            <NavBtns/>
        </nav>

    );
}

export default NavBar;

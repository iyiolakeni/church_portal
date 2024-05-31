import { useEffect } from "react";

const Navbar=()=>{
    useEffect(() =>{
        const handleScroll =()=>{
            const navbar = document.querySelector('.navbar');
            if(window.pageYOffset > 0){
                navbar.classList.add('scrolled');
            }
            else{
                navbar.classList.remove('scrolled');
            
            }
        };
        window.addEventListener('scroll', handleScroll);
        return()=>{
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    return(
        <nav className="navbar">
            <div className="navbut">
                <button>CTL.lc</button>
            </div>
            <div>
                <ul>
                    <li>WATCH</li>
                    <li>ABOUT</li>
                    <li>RESOURCES</li>
                    <li>BIBLE</li>
                    <li>GIVE</li>
                    <li>JESUS</li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;
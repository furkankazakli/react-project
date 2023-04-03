import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import {ReactComponent as KsrLogo} from '../../assets/logo1.svg';

import './navigation.component.css';


const Navigation = () => {
    return (
        <Fragment>
           <nav className="nav">
           <div>
            <Link to="/"> <KsrLogo to="/" className="logo"/> 
            </Link>
           </div>
            <h1>FURKAN SÜT ÜRÜNLERİ HOŞGELDİNİZ</h1>
            <ul>
            <Link className="nav-link" to="/yoresel">
                        Yöresel Ürünler
             </Link>
          <Link className="nav-link" to="/sepet">
                       Sepet
                 </Link>
            </ul>
            </nav>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;


            
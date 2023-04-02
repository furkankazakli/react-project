import { Link, useMatch, useResolvedPath } from "react-router-dom"
import image from  '../assets/logo2.png';
export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" >
      <img  className='l1' src={image} alt=""/>
      </Link>
      <h1>FURKAN SÜT ÜRÜNLERİ HOŞGELDİNİZ</h1>
      <ul>
        <CustomLink to="/yoresel">Yöresel Ürünler</CustomLink>
        <CustomLink to="/sepet">Sepet</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

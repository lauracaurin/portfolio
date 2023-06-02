// import { NavLink } from "react-router-dom";
// import MenuIcon from "./MenuIcon";

// const Header = () => {
//   return (
//     <header className='header'>
//         <NavLink to='/' className='header__logo'>L·C</NavLink>
//         <MenuIcon className='header__menu'/>
//       </header>
//   )
// }
//  export default Header;
import { NavLink } from "react-router-dom";
import MenuList from "./MenuList"; // Componente alternativo para tablet
import MenuIcon from "./MenuIcon";
import { useEffect } from "react";
import { useState } from "react";

const Header = () => {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth >= 768); // Actualizar el estado en función del ancho de la ventana
    };
    handleResize(); // Verificar el tamaño inicial al cargar el componente
    window.addEventListener("resize", handleResize); // Agregar el evento de cambio de tamaño de la ventana

    // Limpieza del efecto cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className='header'>
      <NavLink to='/' className='header__logo'>L·C</NavLink>
      {isTablet ? (
        <MenuList className='header__menu_list' />
      ) : (
        <MenuIcon className='header__menu' />
      )}
    </header>
  )
}

export default Header;

import '../styles/App.scss';
import Menu from "./Menu";
// Ej img: import logoMenu from '../images/ico-menu.svg';

function App() {
  return (
    <div className='body'>
      <header className='header'>
        {/* <NavLink to='/' >
          L·C
        </NavLink> */}
        <p>L·C</p>
        <Menu></Menu>
      </header>
      <main>
        <section></section>
      </main>

    </div>
  );
}
export default App;

import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import ThemeToggle from '../components/ThemeToggle';
import Footer from '../components/Footer';

function Layout() {
  return (
    <div>
      <header className="topbar">
        <div className="nav-left">
          <Sidebar></Sidebar>
        </div>
        <div className="nav-right">
          <ThemeToggle></ThemeToggle>
        </div>
      </header>
      <main className="main">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Layout;

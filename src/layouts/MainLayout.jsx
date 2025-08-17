import { NavLink, Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div>
      <nav>
        <div>Dhakad Mart</div>
        {/* Nav Links */}

        <NavLink to="/">Home</NavLink>

        <NavLink to="/main/cart">Cart</NavLink>
        <NavLink to="/">Sale</NavLink>
        <NavLink to="/">Profile</NavLink>
      </nav>

      <main>
        <Outlet />
          </main>
          
    </div>
  );
}

export default MainLayout
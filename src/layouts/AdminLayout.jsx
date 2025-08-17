import React from 'react'
import { Outlet } from 'react-router';

const AdminLayout = () => {
  return (
    <div>
          <nav>AdminLayout here</nav>
          <div><Outlet/></div>
    </div>
  );
}

export default AdminLayout
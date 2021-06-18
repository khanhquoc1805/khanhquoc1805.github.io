import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div className="home">
        <NavLink to="/htql">Đăng nhập CTU</NavLink>
    </div>
  )
}

export default Home;
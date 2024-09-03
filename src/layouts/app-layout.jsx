import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      App Layout
      <Outlet />
    </div>
  )
}

export default AppLayout

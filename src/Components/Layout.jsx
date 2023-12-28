
import { Outlet } from 'react-router-dom'
import { Footer, NavBar } from '../Pages/Test'

export const Layout = () => {
  return (
    <div>
    <NavBar />
    <main>
      <Outlet />
    </main>
    <Footer />
    </div>
  )
}


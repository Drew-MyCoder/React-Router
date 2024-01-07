import './App.css'
import { Home, Abouts } from './Pages/Test'
import { Routes, Route, Link } from "react-router-dom"
import "../src/Pages/Server"
import { Vans } from './Pages/Vans'
import { VanDetail } from './Pages/vanDetail'
import { Layout } from './Components/Layout'
import { Dashboard } from './Pages/Host/Dashboard'
import { Income } from './Pages/Host/Income'
import { Reviews } from './Pages/Host/Reviews'
import { HostLayout } from './Components/HostLayout'
import { HostVan } from './Pages/Host/HostVan'
import { HostVanDetail } from './Pages/Host/HostVanDetail'
import { HostVanInfo } from './Pages/Host/HostVanInfo'
import { HostVanPricing } from './Pages/Host/HostVanPricing'
import { HostVanPhotos } from './Pages/Host/HostVanPhotos'
import { NotFound } from './Pages/notFound'



function App() {

  return (
 <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<Abouts />} />
        <Route path="vans" element={<Vans />} />
        <Route path="vans/:id" element={<VanDetail />} />

        <Route path="host" element={<HostLayout  />}>
         <Route index  element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="vans" element={<HostVan />} />
          <Route path="vans/:id" element={<HostVanDetail />}>
            <Route index element={<HostVanInfo />} />
            <Route path='pricing' element={<HostVanPricing />} />
            <Route path='photos' element={<HostVanPhotos />} />
          </Route>
        </Route> 
        <Route path='*' element={<NotFound />} />
      </Route>
  </Routes>
  )
}

export default App

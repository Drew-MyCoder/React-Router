import './App.css'
import { Home, Abouts } from './Pages/Test'
import { createBrowserRouter, 
          createRoutesFromElements,
          Route, 
          RouterProvider} from "react-router-dom"
import "../src/Pages/Server"
import { Vans, loader as vansLoader } from './Pages/Vans'
import { VanDetail, loader as VanDetailLoader } from './Pages/vanDetail'
import { Layout } from './Components/Layout'
import { Dashboard } from './Pages/Host/Dashboard'
import { Income } from './Pages/Host/Income'
import { Reviews } from './Pages/Host/Reviews'
import { HostLayout } from './Components/HostLayout'
import { HostVan, loader as hostVansLoader } from './Pages/Host/HostVan'
import { HostVanDetail, loader as HostVanDetailLoader } from './Pages/Host/HostVanDetail'
import { HostVanInfo } from './Pages/Host/HostVanInfo'
import { HostVanPricing } from './Pages/Host/HostVanPricing'
import { HostVanPhotos } from './Pages/Host/HostVanPhotos'
import { NotFound } from './Pages/notFound'
import { Error } from './Components/Error'
import Login from './Pages/login'
import { requiredAuth } from '../utils'




const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<Layout />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path="about" element={<Abouts />} />
        <Route
          path="login"
          element={<Login />}
        />
        <Route path="vans" element={<Vans />} 
               loader={vansLoader}
                />
        <Route path="vans/:id" element={<VanDetail />}
               loader={VanDetailLoader} />

        <Route path="host" element={<HostLayout  />}>
         <Route index element={<Dashboard />} loader={async () => {await requiredAuth
          return null}} />
          <Route path="income" loader={async () => {await requiredAuth()
          return null}} element={<Income />} />
          <Route path="reviews" loader={async () => {await requiredAuth()
          return null}} element={<Reviews />} />
          <Route path="vans" loader={hostVansLoader} element={<HostVan />} />
          <Route path="vans/:id" loader={HostVanDetailLoader} element={<HostVanDetail />}>
            <Route index loader={async () => {await requiredAuth()
          return null}} element={<HostVanInfo />} />
            <Route path='pricing' loader={async () => {await requiredAuth()
          return null}} element={<HostVanPricing />} />
            <Route path='photos' loader={async () => {await requiredAuth()
          return null}} element={<HostVanPhotos />} />
          </Route>
        </Route> 
        <Route path='*' element={<NotFound />} />
      </Route>

  )
)

function App() {

  return (
 <RouterProvider router={router}/>
  )
}

export default App

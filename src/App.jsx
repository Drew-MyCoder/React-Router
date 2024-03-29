import './App.css'
import { Home, Abouts } from './Pages/Test'
import { createBrowserRouter, 
          createRoutesFromElements,
          Route, 
          RouterProvider} from "react-router-dom"
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
import Login, { loader as loginLoader, action as loginAction} from './Pages/login'
import { requiredAuth } from '../utils'
localStorage.removeItem("Loggedin")
import "../src/Pages/Server"




const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="about" element={<Abouts />} />
        <Route
          path="login"
          element={<Login />}
          loader={loginLoader}
          action={loginAction}
        />
        <Route path="vans" element={<Vans />} 
               loader={vansLoader}
               errorElement={<Error />}
                />
        <Route path="vans/:id" element={<VanDetail />}
               loader={VanDetailLoader} />

        <Route path="host" element={<HostLayout  />}>
         <Route index element={<Dashboard />} loader={async ({ request }) => {await requiredAuth(request)
          return null}} />
          <Route path="income" loader={async ({ request }) => {await requiredAuth(request)
          return null}} element={<Income />} />
          <Route path="reviews" loader={async ({ request }) => {await requiredAuth(request)
         return null }} element={<Reviews />} />
          <Route path="vans" loader={hostVansLoader} element={<HostVan />} errorElement={<Error />} />
          <Route path="vans/:id" loader={HostVanDetailLoader} element={<HostVanDetail />} errorElement={<Error />} >
            <Route index loader={async ({ request }) => {await requiredAuth(request)
          return null}} element={<HostVanInfo />} />
            <Route path='pricing' loader={async ({ request }) => {await requiredAuth(request)
          return null}} element={<HostVanPricing />} />
            <Route path='photos' loader={async ({ request }) => {await requiredAuth(request)
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

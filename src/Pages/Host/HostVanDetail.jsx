import { useState, useEffect } from 'react'
import { useParams, Link, Outlet, NavLink, useLoaderData } from 'react-router-dom'
import { getHostVans, getVans } from '../../../api'
import { requiredAuth } from '../../../utils'




export async function loader ({ params }) {
  await requiredAuth
  return getHostVans(params.id)
}


export const HostVanDetail = () => {
  // const params = useParams()
  // const [currentVan, setCurrentvan] = useState(null)
  const currentVan = useLoaderData()

//   useEffect(() => {
//     fetch(`/api/host/vans/${params.id}`)
//         .then(res => res.json())
//         .then(data => setCurrentvan(data.vans))
// }, [])

  
  const activeSite ={
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616'
  }


  return (
    <section className='hostVan'> 
    <Link
      // we need the back button to take us a step back to vans page
      // relative is used
        to=".."
        relative='path'
        className="back-button"
    >&larr; <span>Back to all vans</span></Link>

    <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
            <img src={currentVan.imageUrl} />
            <div className="host-van-detail-info-text">
                <i
                    className={`van-type van-type-${currentVan.type}`}
                >
                    {currentVan.type}
                </i>
                <h3>{currentVan.name}</h3>
                <h4>${currentVan.price}/day</h4>
            </div>
        </div>

        <nav className='host-van-detail-nav'>
          <NavLink
          to='.'
          end
          style={({isActive}) => isActive ? activeSite : null}>
            Info
          </NavLink>
          <NavLink
          to='photos'
          style={({isActive}) => isActive ? activeSite : null}>
            Photos
          </NavLink>
          <NavLink
          to='pricing'
          style={({isActive}) => isActive ? activeSite : null}>
            Pricing
          </NavLink>
        </nav>

        <Outlet context={{ currentVan }}/>
    </div>
</section>
)
}

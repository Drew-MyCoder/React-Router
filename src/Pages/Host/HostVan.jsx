import { Link, useLoaderData } from "react-router-dom"
import { useState, useEffect } from "react"
import { getHostVans } from "../../../api"
import { requiredAuth } from '../../../utils'


export async function loader() {
    await requiredAuth()
    return getHostVans()
}

export const HostVan = () => {
//   const [vans, setVans] = useState([])
  const vans = useLoaderData( )

//   useEffect(() => {
//         fetch("/api/host/vans")
//             .then(res => res.json())
//             .then(data => setVans(data.vans))
//     }, [])

    const hostVansEls = vans.map(van => (
      <Link
          to={van.id}
          key={van.id}
          className="host-van-link-wrapper"
      >
          <div className="host-van-single" key={van.id}>
              <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
              <div className="host-van-info">
                  <h3>{van.name}</h3>
                  <p className="txt">${van.price}/day</p>
              </div>
          </div>
      </Link>
  ))

  return (
    <section className="hostVan">
    <h1 className="host-vans-title">Your listed vans</h1>
    <div className="host-vans-list">
                <section className="hVan">
                    {hostVansEls}
                </section>
    </div>
</section>
  )
}

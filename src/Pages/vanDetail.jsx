import { useEffect, useState } from 'react'
import { useParams, Link, useLocation, useLoaderData } from 'react-router-dom'
import { getVans } from '../../api'


export function loader({ params }) {
    return getVans(params.id)
}

export const VanDetail = () => {
    // const params = useParams()
    const location = useLocation()
    const van = useLoaderData()
    
 

    // const [van, setVan] = useState(null)

    // useEffect(() => {
    //     fetch(`/api/vans/${params.id}`)
    //         .then(res => res.json())
    //         .then(data => setVan(data.vans))
    // }, [params.id])

    // if location.state is a thing, give the search property
    // otherwise an empty string
    // this is optional chaining
    const search = location.state?.search || "";
    const type = location.state?.type || "all"; 

  return (
    <div className="van-detail-container">
        <Link
      // we need the back button to take us a step back to vans page
      // relative is used
        to={`..${search}`}
        relative='path'
        className="back-button"
    >&larr; <span>Back to {type} vans</span></Link>

            
                <div className="van-detail">
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2 className='txt'>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p className='txt'>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            
        </div>
    )
}
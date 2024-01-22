import { useEffect, useState } from "react"
import { Link, useLoaderData, useSearchParams } from "react-router-dom"
import { getVans } from "../../api"


export function loader() {
    return getVans()
} 

export const Vans = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    // const [vans, setVans] = useState([])
    // const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const vans = useLoaderData()
    // console.log(data)

    const typeFilter = searchParams.get("type")

    // no longer using useEfect because im now
    // using useLoader
    // useEffect(() => {
    //     async function loadVans() {
    //         setLoading(true)
    //         try {
    //             const data = await getVans()
    //             setVans(data)
    //         } catch(err) {
    //             setError(err)
    //         } finally {
    //             setLoading(false)
    //         }
    //     }

    //     loadVans()
    // }, [])

    // we are applying the filter 
    // based on van type
    const displayedType = typeFilter
        ? vans.filter(van => van.type === typeFilter)
        : vans
    
    const vanElements = displayedType.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={van.id} state={{ search: `?${searchParams.toString()}` ,
                    type: typeFilter }}>
            <img src={van.imageUrl} />
            <div className="van-info">
                <h3>{van.name}</h3>
                <p className="txt">${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    // changing the hard coded setSearchParams
    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    // if (loading) {
    //     return <h1>Loading</h1>
    // }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    // this is another way of using the searchparams to filter 
    // <Link to='?type=simple' className="van-type simple">Simple</Link>
    //         <Link to='?type=luxury' className="van-type luxury">Luxury</Link>
    //         <Link to='?type=rugged' className="van-type rugged">Rugged</Link>
    //         <Link to='.' className="van-type clear-filters">Clear</Link>

    return (
      <>
      <div className="van-list-container">
        <h1>Explore Our Van Options</h1>
        <div className="van-list-filter-buttons">
            <button onClick={() => handleFilterChange('type', 'simple')} className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}>Simple</button>
            <button onClick={() => handleFilterChange('type', 'luxury')} className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}>Luxury</button>
            <button onClick={() => handleFilterChange('type', 'rugged')}  className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`}>Rugged</button>
            
            {typeFilter ?
                (<button onClick={() => handleFilterChange('type', null)} className="van-type clear-filters">Clear</button>
                ) : null }
        </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
      </>
    )
  }

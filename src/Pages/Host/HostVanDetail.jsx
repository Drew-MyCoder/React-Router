import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'


export const HostVanDetail = () => {
  const params = useParams()
  const [currentVan, setCurrentvan] = useState(null)

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setCurrentvan(data.vans))
}, [])

  if (!currentVan) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
    <img src={currentVan.imageUrl} width={150} alt="" />
    <h2 className='txt'>{currentVan.name}</h2>
    <p className='txt'>{currentVan.price}</p>
    <p className='txt'>{currentVan.type}</p>
</div>
)
}

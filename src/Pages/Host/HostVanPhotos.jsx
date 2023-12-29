import { useOutletContext } from 'react-router-dom'

export const HostVanPhotos = () => {
  const { currentVan } = useOutletContext()
  return (
    <img src={currentVan.imageUrl} className='host-van-detail-image' alt="" />
  )
}

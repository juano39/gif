import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem'

export const GifGrid = ({ categoria }) => {

  const {gifImages, isLoading } = useFetchGifs(  categoria )
 
  return (
    <>
        <h3>{ categoria }</h3>

        {
          isLoading && ( <h2>Cargando...</h2>   )
          
        }

        <div className='card-grid'>
          
            {gifImages.map((img) => (

              <GifItem
                key={img.id}
                {...img}
              />
              
              ))}
          
        </div>
    </>
  )
}

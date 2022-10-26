import { useEffect, useState } from "react";

import { getGif } from "../helpers/getGifs";


export const useFetchGifs = ( categoria ) => {
    
    const [gifImages, setGifImages] = useState([])
    const [isLoadin, setIsLoadin] = useState( true )

  const newImages = async() => {
    const imagenGif = await getGif(categoria)
    setGifImages(imagenGif)
    setIsLoadin( false )
    
  }

  useEffect( () => {
    newImages()

  }, [])


  return {
    gifImages,
    isLoadin
  }
}

'use client';
import { Template, ImageCard } from '../components';
  import { Image } from '../resource/Image';
  import { ImageService, useImageService } from '../resource/service'
  import { useState } from 'react'

export default function Galeria() {


  const useService = useImageService();
  const [images, setImages] = useState<ImageService[]>([])

   async function searchImages(){
      const result = await useService.buscar();
      setImages(result);
      console.table(result)
    }

  return (
    //<main>
      <Template>
        <button className="bg-purple-800 hover:bg-purple-950 text-white font-bold py-2 px-4 rounded" onClick={searchImages}>
          Mudar Imagem </button>
        <section className="grid grid-cols-4 gap-4  p-4">
          <ImageCard  imageName='{images[0]?.name}'/>
        {
          
     }
        </section>
      </Template>
    //</main>
  )
}
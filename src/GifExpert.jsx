import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpert = () => {

const [ categorias, setCategorias ] = useState(['One Punch']);


const onAddCategori = (NewCategori) => {
  if (categorias.includes(NewCategori)) return;

  setCategorias([NewCategori, ...categorias])
}



console.log(categorias);
  return (
    <>

    {/* Titulo */}

    <h1>GifExpertApp</h1>

    {/* Input */}
    <AddCategory  
      onNewCategori={(valor) => onAddCategori(valor)}
    />

    {/* Listado de Gif */}

    {categorias.map(categoria => (
      <GifGrid 
        key={ categoria }
        categoria={categoria}

      />
    ))

    }
    
    {/* <ol>
      {categorias.map(item => {
        return <li key={ item } >{ item }</li>
      })}
    </ol> */}
      {/* Gif Item */}

    </>
  )
}


// lxNF8coDKnFfTVDiaYUzQkZkheEXNsLq
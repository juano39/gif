import { useState } from "react"





export const AddCategory = ({ onNewCategori }) => {

  const [valorInput, setValorInput] = useState('')

  const oonChange = ({ target }) => {
    console.log(target.value)
    setValorInput(target.value)
  }

  const oraleQue = () => {
    console.log('object');
    event.preventDefault()
    
    if (valorInput.trim().length <= 1) return;
    // setCategorias(categorias => [valorInput, ...categorias])
    onNewCategori(valorInput.trim())
    setValorInput('')
  }


  return (
    <form 
      onSubmit={oraleQue}
    >
      <input 
        placeholder="Buscar el Gif"
        type="text" 
        value={ valorInput }
        onChange={ oonChange }
      />
    </form>
  )
}


























// import { useState } from 'react'




// export const AddCategory = ({ setCategorias }) => {

//     const [inputValue, setInputValue] = useState('One Puch')

//     const onInputChange = (event) => {
//       console.log(event.target.value)
//         setInputValue(event.target.value)
//     }

//     const onSubmit = (e) => {
//       e.preventDefault()
//       console.log(inputValue);

//       if (inputValue.trim().length <= 1) return;

//       setCategorias( categorias => [inputValue, ...categorias] );
//       setInputValue('');
//     }

//   return (
//     <form
//       onSubmit={onSubmit}
//     >
//       <input
//           type='text'
//           placeholder="Buscar Gif"
//           value={ inputValue }
//           onChange={ (event) => onInputChange(event) }
//       />
//     </form>
//   )
// }

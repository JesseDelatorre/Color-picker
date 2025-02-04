import ColorButton from "./ColorButton.jsx";
import { useState } from 'react';


const App = () => {
  const [allColors, setAllColors] = useState([
    {
      id: 1,
      type: 'Purple',
    },
    {
      id: 2,
      type: 'Green',
    },
    {
      id: 3,
      type: 'Red',
    }
  ])

  return (
    <>
    <h1>Color Picker</h1>

    <ColorButton colorName="purple"/>
    <ColorButton colorName="green"/>
    <ColorButton colorName="red"/>

    </>
  )
}

export default App

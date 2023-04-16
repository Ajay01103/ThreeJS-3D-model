import React from 'react'
import { SketchPicker } from "react-color"
import { useSnapshot } from 'valtio'
import state from '../store'



const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker 
      color={snap.color}
      disableAlpha
      onChange={(color) => state.color = color.hex}
      presetColors={[
        "#CCC", "#EFBD4E", "#2CCCE4", "#FF5A5F", "#FC642D", "#726DE8", "#353934", "#2CCC94", "#FF8A65", "#7098DA",
        "#FF2052", "#FC8C84", "#512314", "#CC99FF", "#A1251B"
      ]}
      />
    </div>
  )
}

export default ColorPicker
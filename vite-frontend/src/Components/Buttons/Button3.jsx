import React from 'react'
import { Star, ShoppingCart, Heart } from "lucide-react";

function Button3(onClick) {
  return (
    <button className='button3'
        onClick={onClick}
    ><Heart className="icon heart" /></button>
  )
}

export default Button3
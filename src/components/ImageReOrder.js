import  GridProvider  from "./GridContext";
import React from "react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import ImageReOrderComponent from './ImageReOrderComponent'

const ImageReOrder = (props)=>{

return(
    
    <DndProvider backend={HTML5Backend}>
    <GridProvider>
      <ImageReOrderComponent />
    </GridProvider>
  </DndProvider>
)

}

export default ImageReOrder;


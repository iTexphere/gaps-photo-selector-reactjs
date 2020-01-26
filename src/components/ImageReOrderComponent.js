import React, { useContext } from "react";
import DragItem from "./DragItem";
import { Grid, GridImage, GridItem } from "./Grid";
import {GridContext} from "./GridContext";
import {useDispatch} from 'react-redux'
import {updateSelectedPhtoes} from '../api/BestPhotosApi'

function ImageReOrderComponent() {

  let { items, moveItem } = useContext(GridContext);
   const dispatch=useDispatch();

dispatch(updateSelectedPhtoes(items))

  return (
    <div className="App">
      <Grid>
        {Array.isArray(items) && items.map(item => (
          <DragItem key={item.id} id={item.id} onMoveItem={moveItem}>
            <GridItem>
              <GridImage src={item.src}></GridImage>
            </GridItem>
          </DragItem>
        ))}
      </Grid>
    </div>
  );
}

export default ImageReOrderComponent;

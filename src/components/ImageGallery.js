import React , {useEffect, useState} from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {updateSelectedPhtoes} from '../api/BestPhotosApi'
import {useDispatch, useSelector} from 'react-redux'

const ImageGallery = (props)=>{

  const dispatch=useDispatch();


const [selectImages, setSelectImages] = useState([])
const images=props.images;
const galleryImages=images.map(image => {return {id: image.id,img: image.picture, title:'Passbook Image', cols : 1}})

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
  }),
);

const classes = useStyles();



const handleOnClickImages = (img) =>{

    if(!selectImages.find(sImage=> sImage.id===img.id))
      {
        if(selectImages.length<9)
        setSelectImages([...selectImages,img]) 
      }
      
    else{
       setSelectImages(selectImages.filter((sImage)=>sImage.id!==img.id))
    }  
    
}

useEffect(()=>{
  dispatch(updateSelectedPhtoes(selectImages))
},[selectImages])

return(
    <GridList cellHeight={160} className={classes.gridList} cols={3}>
              {galleryImages.map(tile => (
                <GridListTile key={tile.img} cols={tile.cols || 1} onClick={()=>handleOnClickImages(tile)}>
                  {
                     selectImages.find(sImage=> sImage.id===tile.id) ?
                       <img style={{opacity: 0.5}} src='https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Dark-512.png'></img>
                      : null
                  
                  }
                  <img width={150} height={150} src={tile.img} alt={tile.title}
                   />
                </GridListTile>
              ))}
            </GridList>
)

}

export default ImageGallery
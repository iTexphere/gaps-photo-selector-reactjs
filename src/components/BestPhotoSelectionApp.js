import React , {useEffect, useState} from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import {Container, Row, Col, Image, Button} from 'react-bootstrap'
import ImageGallery from './ImageGallery'
import ImageReOrder from './ImageReOrder'
import {
    getAllPhtoes,
    SavedSelectedPhtoesList,
    getSelectedPhtoesList,
    updateSelectedPhtoes,
} from '../api/BestPhotosApi'
import {useDispatch, useSelector} from 'react-redux'
import BestPhotoesContext  from '../contextApi/BestPhotoesContext';
import PreSelectedPhotoes from '../components/PreSelectedPhotoes'
import {BestPhotoesHelper} from '../helpers/BestPhotoesHelper'

import Spinner from 'react-spinner-material';

const BestPhotoSelectionApp = ()=>{

    const dispatch=useDispatch();

    const images = useSelector(
        state=> state.bestPhotoSelection.getPhotoesSuccess.entries
    )

    const selectImages = useSelector(
        state=> state.bestPhotoSelection.selectedImages
    )

    const saveSelectedImages = useSelector(
        state=> state.bestPhotoSelection.getSavedSelectedSuccess
    )

    const isLoading = useSelector(
        state=> state.bestPhotoSelection.isLoading
    )

    const [isSaved, setSave] = useState(false)

    useEffect(()=>{
        dispatch(getAllPhtoes())
        dispatch(getSelectedPhtoesList())
    },[])

    useEffect(()=>{
        dispatch(updateSelectedPhtoes(saveSelectedImages))
        
    },[saveSelectedImages])
   

    const [isGridDisplay, setGridDisplay] = useState(false)
    const handleClick = () => setGridDisplay(!isGridDisplay);

    const handleSave = () => {

        const params ={
            "selectedImages": selectImages
        }
        setSave(true)
        dispatch(SavedSelectedPhtoesList(params))
        
    }

        return (
                <BestPhotoesContext.Provider value={{
                    ...BestPhotoesContext,
                    selectImages,
                }
                }
                >
                 <>
                <Container>
                    <Row>
                            <Col>
                                <h1>
                                    {BestPhotoesHelper.appName}
                                </h1>
                            </Col>
                        </Row>
                </Container>

                <Container>
                    <Row>
                         <Col>{BestPhotoesHelper.appInstructions} </Col>
                    </Row>
                </Container>

                    <PreSelectedPhotoes
                    preSelected={saveSelectedImages}
                    />
                <Container>
                     <Row>
                        <Col>
                        {
                            isGridDisplay ? (
                                <Button
                                variant="primary"
                                onClick={handleClick}
                                >
            
                            {BestPhotoesHelper.viewGridText}
                            </Button>
                            ) : (
                                <>
                            <Button
                            variant="primary"
                            onClick={handleClick}
                            >
                              {BestPhotoesHelper.viewGalleryText}
                        </Button>
                            <Button 
                            disabled={selectImages.length >= 9 ? false : true}
                            variant="primary"
                            onClick={handleSave}
                            >
                             {BestPhotoesHelper.saveText}
                           
                        </Button>
                        </>
                            )
                        }
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col><hr/></Col>
                    </Row>
                </Container>
       
                {
                    isSaved ? (
                        <Container>
                        <Row>
                                <Col>Order is saved - You can reload and verify  Or Select Again</Col>
                        </Row>
                </Container>
                    ) : null
                }
         
                <Container>
                {isGridDisplay ? 
                    (
                <Row>
                    <Col>
                        <ImageGallery
                            images={images}
                        />
                    </Col>
                    <Col>
                    {Array.isArray(selectImages) && (9-selectImages.length)>0 ?`Select ${9-selectImages.length} more image(s)` : 'Max selected. Go to Grid view and Re-Order'}
                
                        
                    </Col>
                    </Row>
                    )
                    :
                    <Row>
                    <Col>
                        <ImageReOrder
                        images={images}
                        />
                    </Col>
                    <Col>
                    
                    </Col>
                </Row>          
                }
            </Container>
              <Spinner size={120} spinnerColor={"#333"} spinnerWidth={2} visible={isLoading} />
              </>
               </BestPhotoesContext.Provider>
   
          
        );
      }

 export default BestPhotoSelectionApp;
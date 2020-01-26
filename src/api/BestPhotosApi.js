import axios from 'axios';
import {
    BestPhotoesHelperApi,
} from '../helpers/BestPhotoesHelper'
import {
    getPhotoes,
    getPhotoesSuccess,
    getPhotoesError,
    updatedSelectedImages,
    getSavedSelectedSuccess,
    getSavedSelected,
    getSavedSelectedError,
} from '../actions/actions'

export const getAllPhtoes = () => {
     return dispatch => {
        dispatch(getPhotoes({}))
        axios.get(`${BestPhotoesHelperApi.getAllPhotoesApi}`).then(response => {
          if (response.status == 200) {
            dispatch(getPhotoesSuccess(response.data));
          } else {
            // if any server errors Internal
            dispatch(getPhotoesError(response.data.message));
          }
        })
        .catch(exception => {
            // if any other issues
          dispatch(getPhotoesError(exception));
        });
     }  
};

export const updateSelectedPhtoes = (params) => {
  return dispatch => {
    dispatch(updatedSelectedImages(params))
  }  
};

export const SavedSelectedPhtoesList = (params) => {
  return dispatch => {
     dispatch(getSavedSelected({}))
     axios.post(`${BestPhotoesHelperApi.saveSelectedImages}`,params).then(response => {
       if (response.status == 200) {
         dispatch(getSavedSelectedSuccess(response.data));
       } else {
         // if any server errors Internal
         dispatch(getSavedSelectedError(response.data.message));
       }
     })
     .catch(exception => {
         // if any other issues
       dispatch(getSavedSelectedError(exception));
     });
  }  
};

export const getSelectedPhtoesList = (params) => {
  return dispatch => {
     dispatch(getSavedSelected({}))
     axios.get(`${BestPhotoesHelperApi.getSavedSelectedImages}`,params).then(response => {
       if (response.status == 200) {
         dispatch(getSavedSelectedSuccess(response.data));
       } else {
         // if any server errors Internal
         dispatch(getSavedSelectedError(response.data.message));
       }
     })
     .catch(exception => {
         // if any other issues
       dispatch(getSavedSelectedError(exception));
     });
  }  
};

export const GET_PHOTOES = 'GET_PHOTOES';
export const GET_PHOTOES_SUCCESS = 'GET_PHOTOES_SUCCESS';
export const GET_PHOTOES_ERROR = 'GET_PHOTOES_ERROR';
export const UPDATE_SELECTED_IMAGES='UPDATE_SELECTED_IMAGES'

export const SAVE_SELECTED_SUCCESS = 'SAVE_SELECTED_SUCCESS';
export const SAVE_SELECTED = 'SAVE_SELECTED';
export const SAVE_SELECTED_ERROR = 'SAVE_SELECTED_ERROR';

export const GET_SAVED_SELECTED_SUCCESS = 'GET_SAVED_SELECTED_SUCCESS';
export const GET_SAVED_SELECTED = 'GET_SAVED_SELECTED';
export const GET_SAVED_SELECTED_ERROR = 'GET_SAVED_SELECTED_ERROR';

export const getPhotoes = request => ({
    type: GET_PHOTOES,
    payload: request
  });
  
  export const getPhotoesSuccess = response => ({
    type: GET_PHOTOES_SUCCESS,
    payload: response
  });
  
  export const getPhotoesError = error => ({
    type: GET_PHOTOES_ERROR,
    payload: error
  });

  export const getSavedSelected = request => ({
    type: GET_SAVED_SELECTED,
    payload: request
  });
  
  export const getSavedSelectedSuccess = response => ({
    type: GET_SAVED_SELECTED_SUCCESS,
    payload: response
  });
  
  export const getSavedSelectedError = error => ({
    type: GET_SAVED_SELECTED_ERROR,
    payload: error
  });

  
  export const SaveSelected = request => ({
    type: SAVE_SELECTED,
    payload: request
  });
  
  export const SaveSelectedSuccess = response => ({
    type: SAVE_SELECTED_SUCCESS,
    payload: response
  });
  
  export const SaveSelectedError = error => ({
    type: SAVE_SELECTED_ERROR,
    payload: error
  });

  export const updatedSelectedImages = response => ({
    type: UPDATE_SELECTED_IMAGES,
    payload: response
  });


export const actions = {
    getPhotoes,
    getPhotoesSuccess,
    getPhotoesError,

    getSavedSelectedSuccess,
    getSavedSelected,
    getSavedSelectedError,

    SaveSelected,
    SaveSelectedSuccess,
    SaveSelectedError,

    updatedSelectedImages,

}

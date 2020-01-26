import {
    GET_PHOTOES,
    GET_PHOTOES_SUCCESS,
    GET_PHOTOES_ERROR,

    GET_SAVED_SELECTED_SUCCESS,
    GET_SAVED_SELECTED_ERROR,
    GET_SAVED_SELECTED,
    UPDATE_SELECTED_IMAGES,

    SAVE_SELECTED,
    SAVE_SELECTED_SUCCESS,
    SAVE_SELECTED_ERROR,

} from '../actions/actions'


export const selectors = {
    getPhotoes : state => state.getPhotoes,
    getPhotoesSuccess : state => state.getPhotoesSuccess,
    getPhotoesError : state => state.getPhotoesError,

    updatedSelectedImages : state => state.updatedSelectedImages,

    isLoading : state => state.isLoading,
}

const initialState = {
    getPhotoes: {},
    getPhotoesSuccess :{},
    getPhotoesError :{},

    selectedImages:{},

    getSavedSelectedSuccess :[],
    getSavedSelected:{},
    getSavedSelectedError:{},

    isLoading: false,
}

export const reducer = function (state= initialState, action){
    switch(action.type){
        case GET_PHOTOES:
            return {
                ...state,
                isLoading: true
            }
        case GET_PHOTOES_SUCCESS:
            return {
                ...state,
                getPhotoesSuccess:action.payload,
                isLoading: false,
            }
        case GET_PHOTOES_ERROR:
            return {
                ...state,
                getPhotoesError:action.payload,
                isLoading: false,
            }

            case GET_SAVED_SELECTED:
                return {
                    ...state,
                    isLoading: true
                }
            case GET_SAVED_SELECTED_SUCCESS:
                return {
                    ...state,
                    getSavedSelectedSuccess:action.payload,
                    isLoading: false,
                }
            case GET_SAVED_SELECTED_ERROR:
                return {
                    ...state,
                    getSavedSelectedError:action.payload,
                    isLoading: false,
                }

                case SAVE_SELECTED:
                    return {
                        ...state,
                        isLoading: true
                    }
                case SAVE_SELECTED_SUCCESS:
                    return {
                        ...state,
                        saveSelectedSuccess:action.payload,
                        isLoading: false,
                    }
                case SAVE_SELECTED_ERROR:
                    return {
                        ...state,
                        saveSelectedError:action.payload,
                        isLoading: false,
                    }

        case UPDATE_SELECTED_IMAGES:
            return{
                ...state,
                selectedImages:action.payload,
                isLoading: false,
            }

            default:
                return state

    }
}
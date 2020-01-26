import {combineReducers} from 'redux'

import {
  reducer as bestPhotoSelectionReducer
} from './reducer'

export const rootReducer =  combineReducers({
    bestPhotoSelection : bestPhotoSelectionReducer
});


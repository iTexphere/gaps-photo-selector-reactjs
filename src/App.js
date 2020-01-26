import React from 'react';
import './App.css';
import BestPhotoSelectionApp from './components/BestPhotoSelectionApp'
import {Provider} from 'react-redux'
import {store} from './store/store'



function App() {

  const BestPhotoesContext = {   }

  return (
    <Provider store={store}>

    <div className="App">
    


        <BestPhotoSelectionApp/>
   
          


    </div>
    
    </Provider>

  );
}

export default App;

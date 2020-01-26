import React from 'react'

const BestPhotoesContext = React.createContext({})

export const BestPhotoesProvider = BestPhotoesContext.Provider
export const BestPhotoesConsumer = BestPhotoesContext.Consumer
export default BestPhotoesContext
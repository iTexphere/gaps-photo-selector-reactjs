import React, { Component, createContext} from "react";
import {connect} from 'react-redux'
// Helper functions
function move(array, oldIndex, newIndex) {
  if (newIndex >= array.length) {
    newIndex = array.length - 1;
  }
  array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);
  return array;
}

function moveElement(array, index, offset) {
  const newIndex = index + offset;
  return move(array, index, newIndex);
}

// Context
const GridContext = createContext({ items: [] });

class GridProvider extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      images: Array.isArray(this.props.selectedImages) ? this.props.selectedImages.map(photo=> {return {id:photo.id, src: photo.img} } ): [],
      items: Array.isArray(this.props.selectedImages) ? this.props.selectedImages.map(photo=> {return {id:photo.id, src: photo.img} } )  : [],
      moveItem: this.moveItem,
      setItems: this.setItems
    };
  }

  render() {
    return (
      <>
      <GridContext.Provider value={this.state}>
        {this.props.children}
      </GridContext.Provider>
      </>
    );
  }

  setItems = items => this.setState({ items });
  moveItem = (sourceId, destinationId) => {
    const sourceIndex = this.state.items.findIndex(
      item => item.id === sourceId
    );
    const destinationIndex = this.state.items.findIndex(
      item => item.id === destinationId
    );

    // If source/destination is unknown, do nothing.
    if (sourceId === -1 || destinationId === -1) {
      return;
    }

    const offset = destinationIndex - sourceIndex;

    this.setState(state => ({
      items: moveElement(state.items, sourceIndex, offset)
    }));
  };
}

const mapStateToProps = state => {
  return {
      selectedImages :state.bestPhotoSelection.selectedImages,
      saveselectedImages :state.bestPhotoSelection.getSavedSelectedSuccess,
  };
};

export  {GridContext};

export default connect(mapStateToProps,null)(GridProvider)



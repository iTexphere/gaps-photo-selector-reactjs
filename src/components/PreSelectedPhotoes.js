import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {BestPhotoesHelper} from '../helpers/BestPhotoesHelper'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

export default function PreSelectedPhotoes(props) {

  const saveSelectedImages=props.preSelected;
  const classes = useStyles();

  
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={9}>
        {saveSelectedImages.map((tile,index) => (
          <GridListTile key={tile.id}>
            <img src={tile.src} alt={tile.id} />
          </GridListTile>
        ))}
      </GridList>
        <p>{BestPhotoesHelper.preSelectedText}</p>
    </div>
  );
}

import React from 'react'
import './body.css';
import { useDataLayerValue } from './DataLayer';
import Header from './Header';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './SongRow';

function Body({spotify}) {
    const[{discover_weekly},dispatch] = useDataLayerValue();
  return (
    <div className='body'>
        <Header spotify={spotify}/>
        <div className='body-info'>
            <img src={discover_weekly?.images[0].url} alt=''/>
            <div className='body-info-text'>
            <strong> PLAYLIST </strong>
            <h2>Discover Weekly</h2>
            <p>{discover_weekly?.description}</p>
            </div>
        </div>
        <div className='body-songs'>
            <div className='body-icon'>
                <PlayCircleFilledIcon className='body-icon-shuffle'/>
                <FavoriteIcon fontSize='large'/>
                <MoreHorizIcon/>
            </div>
            {discover_weekly?.tracks.items.map( item => (
                <SongRow track={item.track}/>
            ))};
        </div>
    </div>
  )
}

export default Body
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

    const playPlaylist = (id) => {
        spotify
          .play({
            context_uri: `spotify:playlist:37i9dQZEVXcLPS32WAtlJv`,//need to change
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };
    
      const playSong = (id) => {
        spotify
          .play({
            uris: [`spotify:track:${id}`],
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };
      
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
                <PlayCircleFilledIcon className='body-icon-shuffle' onClick={playPlaylist}/>
                <FavoriteIcon fontSize='large'/>
                <MoreHorizIcon/>
            </div>
            {discover_weekly?.tracks.items.map( item => (
                <SongRow playSong={playSong} track={item.track}/>
            ))};
        </div>
    </div>
  )
}

export default Body
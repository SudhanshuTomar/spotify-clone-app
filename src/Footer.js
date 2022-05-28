import React from 'react'
import "./Footer.css"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Grid, Slider } from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-left'> 
            <img src="" alt="" className='footer-album-logo'/>
            <div className='footer-songinfo'>
                 
            </div>
        </div>

        <div className='footer-center'> 
            <ShuffleIcon className='footer-icon'/>
            <SkipPreviousIcon className='footer-icon'/>
            <PlayCircleOutlineIcon className='footer-icon' fontSize='large'/>
            <SkipNextIcon className='footer-icon'/>
            <RepeatIcon className='footer-icon'/>
        </div>

        <div className='footer-right'> 
            <Grid container spacing={2}>
            <Grid item>
                <PlaylistPlayIcon className='footer-icon' />
            </Grid>
            <Grid item>
                <VolumeDownIcon className='footer-icon'/>
            </Grid>
            <Grid item xs>
                <Slider aria-labelledby="continuous-slider" />
            </Grid>
            </Grid>
        </div>
    </div>
  )
}

export default Footer
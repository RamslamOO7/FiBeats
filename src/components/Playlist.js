import React from 'react'
import Channels from './Channels';
import { IoPlayOutline, IoPauseOutline } from 'react-icons/io5';

function Playlist({playing, isPlaying, onVideoSelect}) {

  const ListItem = ({video, onVideoItemClick}) => {
    const handleItemClick = (video) => {
      console.log('onVideoItemClick')
      onVideoItemClick(video);
    };

    var classes = `PlayListItem  ${ video.videoID === playing.videoID  && isPlaying ? 'active' : ''} `
    return (
      <div className={classes} onClick={ () => handleItemClick(video)}>
        <div className='PlayListItemImageContainer'>
          <img 
            src={'https://img.youtube.com/vi/'+video.videoID+'/hq720.jpg'}
            alt={video.name}
            width={250}
          />
          <span>
            { video.videoID === playing.videoID  && isPlaying ? < IoPauseOutline /> : < IoPlayOutline /> }
          </span>
        </div>
        <h4>{video.name}</h4>
      </div>
    )
  }
  
  const handleVideoItemClick = (video) =>  {
    onVideoSelect(video);
  }

  return (
    <div className='PlayListContainer'>
      <h1>Playlist</h1>
      <div className='PlayListItems'>
        {
          Channels.map((channel, index) => {
            return <ListItem key={index} video={channel} onVideoItemClick={handleVideoItemClick} />
          })
        }
      </div>
    </div>
  )
}

export default Playlist
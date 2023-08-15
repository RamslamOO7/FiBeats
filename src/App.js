import './App.css';
import { useState } from 'react';
import ReactPlayer from 'react-player'
import Channels from './components/Channels';
import Header from './components/Header';
import Qoutes from './components/Qoutes';
import { IoList, IoPlayOutline, IoPauseOutline, IoPlaySkipForwardOutline, IoPlaySkipBackOutline, IoVolumeMediumOutline, IoVolumeMuteOutline, IoOpenOutline} from "react-icons/io5";
import Playlist from './components/Playlist';

function App() {
  const [video, setVideo] = useState(Channels[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlayListOpen, setIsPlayListOpen] = useState(false);

  function nextVideo() {
    const index = Channels.indexOf(video);
    if (index === Channels.length - 1) {
      setVideo(Channels[0]);
    } else {
      setVideo(Channels[index + 1]);
    }
    setIsPlaying(true);
  }

  function previousVideo() {
    const index = Channels.indexOf(video);
    if (index === 0) {
      setVideo(Channels[Channels.length - 1]);
    } else {
      setVideo(Channels[index - 1]);
    }
    setIsPlaying(true);
  }

  function togglePlay() {
    if(isPlaying){
      setIsPlaying(false);
    }else if(video){
      setIsPlaying(true);
    }else {
      setVideo(Channels[0]);
      setIsPlaying(true);
    }
  }

  function handleVideoSelection(video) {
    setVideo(video);
    setIsPlaying(true);
  }

  const documentHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
   }
   window.addEventListener('resize', documentHeight)
   documentHeight()

  return (
    <div className="App">
      <div className="container" style={{  backgroundImage: "url(" + video.gif + ")" }}>
        <Header/>
        {
          isBuffering ? ( <p className='bufferingText'>Bufferring..!</p> ) : null
        }
        {/* <Qoutes/> */}
        <div>
          {
            video.videoID ? (
                <p className='playingText'>{video.name} <a href={video.url} target='_blank'><IoOpenOutline/></a></p>
            ) : <p className='playingText'>Click the Play button to start listening.</p>
          }
          <ReactPlayer
            url={"https://www.youtube.com/watch?v=" + video.videoID}
            controls={true}
            width='0'
            height='0'
            playing={isPlaying}
            onPlay={ () => {
                setIsPlaying(true)
                setIsBuffering(false)
              }
            }
            onBuffer={() => setIsBuffering(!isBuffering)}
            loop={true}
            muted={isMuted}
          />
        </div>
        <div className="controls">
            <button className='btn-player' onClick={()=> setIsPlayListOpen(!isPlayListOpen)}>
              <IoList />
            </button>
            <button className='btn-player' onClick={() => previousVideo()}>< IoPlaySkipBackOutline /></button>
            <button className='btn-player' onClick={() => togglePlay()}>
              {isPlaying ? < IoPauseOutline /> : < IoPlayOutline /> }
            </button>
            <button className='btn-player' onClick={()=> nextVideo()}>< IoPlaySkipForwardOutline /></button>
            <button className='btn-player' onClick={()=> setIsMuted(!isMuted)}>
              { isMuted ? < IoVolumeMediumOutline /> : < IoVolumeMuteOutline /> }
            </button>
        </div>
        {
          isPlayListOpen ? <Playlist playing={video} isPlaying={isPlaying} onVideoSelect={handleVideoSelection} /> : null
        }
      </div>                
    </div>
  );
}

export default App;

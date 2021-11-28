import { useState, useEffect } from 'react';
import axios from 'axios';
import TopBar from './components/topBar/TopBar';
import MainArea from './components/mainArea/MainArea';
import SideBar from './components/sideBar/SideBar';
import styles from './app.module.css';

function App() {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState();

  useEffect(() => {
    setCurrentVideo(videos[0]);
  }, [videos])

  const search = async (text) => {
    if (text === '') {
      return;
    } 
    // I am aware that it isn't secure way for passing the api key. Normally I would use some bff to hide the key and also restrict the key for the specific domain
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${text}&key=${process.env.REACT_APP_API_KEY}`;
    const result = await axios.get(url);

    setVideos(result.data?.items);
  }

  return (
    <div className={styles.container}>
      <TopBar search={search}/>
      <div className={styles.contentContainer}>
        <MainArea video={currentVideo || null}/>
        <SideBar videos={videos} setCurrentVideo={setCurrentVideo}/>
      </div>
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TopBar from './components/topBar/TopBar';
import MainArea from './components/mainArea/MainArea';
import SideBar from './components/sideBar/SideBar';
import { fetchVideos, videosSelector } from './slices/videos';
import styles from './app.module.css';

function App() {
  const [currentVideo, setCurrentVideo] = useState();

  const { videos, isLoading } = useSelector(videosSelector);

  useEffect(() => {
    setCurrentVideo(videos[0]);
  }, [videos])

  const dispatch = useDispatch();

  const search = async (text) => {
    if (text === '') {
      return;
    } 
    dispatch(fetchVideos(text));
  }

  return (
    <div className={styles.container}>
      <TopBar search={search}/>
      <div className={styles.contentContainer}>
        {
          isLoading ? (
            <div className={styles.loading}>Loading...</div>
          ) : (
            <>
              <MainArea video={currentVideo || null}/>
              <SideBar videos={videos} setCurrentVideo={setCurrentVideo}/>
            </>
          )
        }
      </div>
    </div>
  );
}

export default App;

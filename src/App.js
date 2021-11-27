import { useState, useEffect } from 'react';
import axios from 'axios';
import TopBar from './components/topBar/TopBar';
import styles from './app.module.css';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // I am aware that it isn't secure way for passing the api key. Normally I would use some bff to hide the key and also restrict the key for the specific domain
      const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=random&key=${process.env.REACT_APP_API_KEY}`;
      const result = await axios.get(url);

      setVideos(result.data);
    }

    fetchData();
  }, [])

  console.log('videos: ', videos);

  return (
    <div className={styles.container}>
      <TopBar></TopBar>
    </div>
  );
}

export default App;

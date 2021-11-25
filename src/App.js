import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=random&key=${process.env.REACT_APP_API_KEY}`;
      const result = await axios.get(url);

      setVideos(result.data);
    }

    fetchData();
  }, [])

  console.log('videos: ', videos);

  return (
    <div>

    </div>
  );
}

export default App;

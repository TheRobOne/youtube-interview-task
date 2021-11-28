import styles from './sideBar.module.css';

function SideBar(props) {
    const videosList = props.videos.map((video, idx) => (
        <div key={idx} className={styles.listItem}>
            <img
                className={styles.img}
                src={video.snippet.thumbnails.medium.url}
                width={video.snippet.thumbnails.medium.width}
                height={video.snippet.thumbnails.medium.height}
                alt="video thumbnail"
                onClick={() => props.setCurrentVideo(video)}
            />
            <span className={styles.title}>{video.snippet.title}</span>
        </div>
    ));

    return (
        <div className={styles.container}>
            {videosList}
        </div>
    )
}

export default SideBar;

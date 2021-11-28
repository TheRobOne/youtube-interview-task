import styles from './mainArea.module.css';

function MainArea({ video }) {
    return (
        <div className={styles.container} data-testid="container">
            {
                video &&
                <div className={styles.videoContainer} data-cy="main-video-container">
                    <div className={styles.embedContainer}>
                        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.id.videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className={styles.textContainer}>
                        <span className={styles.title}>{video.snippet.title}</span>
                        <span className={styles.description}>{video.snippet.description}</span>
                    </div>
                </div>
            }
        </div>
    )
}

export default MainArea;

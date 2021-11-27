import backArrowIcon from '../../assets/backArrow.svg';
import searchIcon from '../../assets/search.svg';
import microphoneIcon from '../../assets/microphone.svg';
import styles from './searchModal.module.css';

function SearchModal(props) {
    const clickContainer = (e) => {
        if (e.target !== e.currentTarget) {
            return;
        }

        props.closeModal();
    }

    const search = (e) => {
        if (e) {
            e.preventDefault();
        }
        console.log('test');
    }

    return (
        <div className={styles.container} onClick={(e) => clickContainer(e)}>
            <div className={styles.searchBar}>
                <button className={styles.button} onClick={props.closeModal}>
                    <img
                        src={backArrowIcon}
                        className={styles.icon}
                        alt="go back"
                    />
                </button>
                <form className={styles.form} onSubmit={(e) => search(e)}>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="Search YouTube"
                    />
                </form>
                <button className={styles.button} onClick={() => search()}>
                    <img
                        src={searchIcon}
                        className={styles.icon}
                        alt="search"
                    />
                </button>
                <img
                    src={microphoneIcon}
                    className={styles.icon}
                    alt="voice search"
                />
            </div>
        </div>
    )
}

export default SearchModal;
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
                <form className={styles.form} onSubmit={(e) => props.search(e)}>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="Search YouTube"
                        value={props.searchText}
                        onChange={props.setSearchText}
                        autoFocus
                    />
                     <input type="image" src={searchIcon} alt="Submit Form" className={styles.submitButton}/>
                </form>
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
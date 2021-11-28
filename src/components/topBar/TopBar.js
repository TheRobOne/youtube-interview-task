import { useState } from 'react';
import classnames from 'classnames';
import SearchModal from '../searchModal/SearchModal';
import searchIcon from '../../assets/search.svg';
import youtubeLogo from '../../assets/YouTube.svg';
import avatarIcon from '../../assets/avatar.svg';
import styles from './topBar.module.css';

function TopBar(props) {
    const [isSearch, setSearch] = useState(false);
    const [searchText, setSearchText] = useState('');

    const search = (e) => {
        if (e) {
            e.preventDefault();
        }
        props.search(searchText);
        setSearch(false);
    }

    return (
        <div className={styles.container}>
            <img src={youtubeLogo} className={styles.logo} alt='logo'/>
            <div className={classnames(styles.desktop, styles.searchContainer)}>
                <form className={styles.form} onSubmit={(e) => search(e)}>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="Search"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <input type="image" src={searchIcon} alt="Submit Form" className={styles.submitButton}/>
                </form>
            </div>
            <div className={styles.rightContainer}>
                <button className={classnames(styles.mobile, styles.button)} onClick={() => setSearch(prevState => !prevState)}>
                    <img src={searchIcon} alt='search modal'/> 
                </button>
                <img src={avatarIcon} className={styles.avatar} alt='avatar'/>
            </div>
            {
                isSearch && 
                <SearchModal
                    closeModal={() => setSearch(false)}
                    search={search}
                    searchText={searchText}
                    setSearchText={(e) => setSearchText(e.target.value)}
                />
            }
        </div>
    )
}

export default TopBar;
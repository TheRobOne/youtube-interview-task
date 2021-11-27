import { useState } from 'react';
import classnames from 'classnames';
import SearchModal from '../searchModal/SearchModal';
import searchIcon from '../../assets/search.svg';
import youtubeLogo from '../../assets/YouTube.svg';
import avatarIcon from '../../assets/avatar.svg';
import styles from './topBar.module.css';

function TopBar() {
    const [isSearch, setSearch] = useState(false);



    return (
        <div className={styles.container}>
            <img src={youtubeLogo} className={styles.logo} alt='logo'/>
            <div className={classnames(styles.desktop, styles.searchContainer)}>
                <form className={styles.form}>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="Search"
                    />
                </form>
                <button className={styles.button}>
                    <img src={searchIcon} alt='search'/> 
                </button>
            </div>
            <div className={styles.rightContainer}>
                <button className={classnames(styles.mobile, styles.button)} onClick={() => setSearch(prevState => !prevState)}>
                    <img src={searchIcon} alt='search modal'/> 
                </button>
                <img src={avatarIcon} className={styles.avatar} alt='avatar'/>
            </div>
            {
                isSearch && <SearchModal closeModal={() => setSearch(false)}/>
            }
        </div>
    )
}

export default TopBar;
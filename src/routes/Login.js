import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { login } from '../slices/user';
import styles from './login.module.css';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loginUser = (e) => {
        e.preventDefault();
        
        dispatch(login());
        navigate('/', { replace: true });
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={(e) => loginUser(e)}>
                <input type="text" className={styles.input} placeholder="email"/>
                <input type="password" className={styles.input} placeholder="password"/>
                <input type="submit" value="Login"/>
            </form>
        </div>
    )
}

export default Login;

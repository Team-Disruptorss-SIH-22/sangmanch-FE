import styles from '../styles/page404.module.css';
import { Link } from 'react-router-dom';

const Page404 = () => {

  return (
    <div className={styles.container}>
        <div className={styles.headline}>404</div>
        <div className={styles.content}>
            This Page does not exist or is unavailable!
        </div>
        <Link to='/' className={styles.button}>Go Back to Home Page</Link>
    </div>
  );
};

export default Page404;

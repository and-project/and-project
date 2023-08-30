import { Link } from "react-router-dom";
import styles from "./_nav.module.scss";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <Link to={"/home"} className={styles.title}>오이오이</Link>
      <Link to={"/home"} className={styles.custom_link}>Home</Link>
      <Link to={"/notice"} className={styles.custom_link}>Notice</Link>
      <Link to={"/profile"} className={styles.custom_link}>Profile</Link>
    </div>
  );
}

export default Nav;

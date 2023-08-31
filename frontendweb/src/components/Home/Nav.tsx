import { Link } from "react-router-dom";
import styles from "./_nav.module.scss";

const Nav = () => {
  return (
    <div className={styles.nav}>
      
      <Link to={"/home"} className={styles.custom_link}>Home</Link>
      <Link to={"/notice"} className={styles.custom_link}>공지별</Link>
      <Link to={"/profile"} className={styles.custom_link}>커뮤니티</Link>
    </div>
  );
}

export default Nav;

import NoticePage from "./NoticePage";
import Nav from "./Nav";
import styles from "./_home.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [showMenu, setShowMenu] = useState<Boolean>(false);

  const menupop = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <Link to={"/home"} className={styles.title}>
          오이오이
        </Link>
        <section className={styles.sort_list}>
          <div>
            <div>
              <Nav />
            </div>
          </div>
          <div onClick={menupop}>
            <FontAwesomeIcon icon={faBars} size="2x" />
            <div className={styles.menu}>
              <div
                className={`${
                  showMenu ? ` ${styles.open}` : ` ${styles.close}`
                }`}
              >
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </header>

      <div className={styles.list}>
        <NoticePage />
      </div>
      <div>리모콘</div>
    </div>
  );
};

export default Home;

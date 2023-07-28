import React, { useEffect, useState, useRef } from "react";
import NoticePage from "./NoticePage";
import styles from "./_home.module.scss";

const Home = () => {
  const intersectingRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const handleIntersecting = () => {
    setIsIntersecting(true);
  };

  useEffect(() => {
    if (isIntersecting) {
      // 추가 로직 작성
    }
  }, [isIntersecting]);

  return (
    <div>
      <header className={styles.header}>
        <h1>오이오이</h1>
        <nav className={styles.nav}>
          <a>Home</a>
          <a>Notice</a>
          <a>Board</a>
        </nav>
      </header>

      {/* <Remocon /> */}
      {/* 썸네일에 넣어야할 요소들 */}
      <div>
        <NoticePage ref={intersectingRef} onIntersecting={handleIntersecting} />
      </div>
    </div>
  );
};

export default Home;

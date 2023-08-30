import React, { useEffect, useState, useRef } from 'react';
import NoticePage from './NoticePage';
import Nav from './Nav';
import styles from './_home.module.scss'
import Test from './Test';

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
    <div className={styles.home}>
      <header className={styles.header}>
        <Nav />
      </header>
      <div>asd</div>
      <div className={styles.list}>
        <NoticePage />
      </div>
      <div>리모콘</div>
    </div>
  );
};

export default Home;

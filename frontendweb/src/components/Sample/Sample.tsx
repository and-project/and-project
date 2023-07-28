import React from "react";
import styles from "./_sample.module.scss";

const Sample = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.title}>제목</div>
        <div className={styles.link}>
          <div>home</div>
          <div>notice</div>
          <div>community</div>
        </div>
      </header>

      <div className={styles.body}>
        <div>
          <div className={styles.content_info}>최신순</div>
          <div className={styles.content_container}>콘텐츠 묶음</div>
        </div>
        <div className={styles.remote}>리모콘</div>
      </div>
    </div>
  );
};

export default Sample;

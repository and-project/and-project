import { useEffect, useState, useRef } from 'react';
import { API, PAGE_SIZE } from '../../constant';
import styles from './_noticePage.module.scss';

const NoticePage = () => {
  type Notice = {
    id: number;
    title: string;
    content: string;
    creationTime: string;
    noticeRange: [];
    // Other properties of a Notice object
  };

  const [notices, setNotices] = useState<Notice[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const observer = useRef<IntersectionObserver | null>(null);

  const fetchData = async (page: number, pageSize: number) => {
    try {
      const response = await fetch(`${API}/api/home/${page}/${pageSize}`);
      const data = await response.json();
      return data.items;
    } catch (error) {
      console.error('Error fetching notices:', error);
      return [];
    }
  };

  const loadMoreData = async () => {
    if (isLoading) return;
    const nextPage = currentPage + 1;
    const newNotices = await fetchData(nextPage, PAGE_SIZE);
    setNotices((prevNotices) => [...prevNotices, ...newNotices]);
    setCurrentPage(nextPage);
    setTimeout(() => setIsLoading(false), 1000);
  };

  useEffect(() => {
    fetchData(currentPage, PAGE_SIZE).then((initialData) => {
      setNotices(initialData);
    });
  }, []);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
          setIsLoading(true);
          setTimeout(() => loadMoreData(), 1000);
        }
      },
      { threshold: 0.1 }
    ); // Adjust threshold value as needed

    if (observer.current) {
      observer.current.observe(document.querySelector('#loading-indicator'));
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return (
    <div
      className={`${styles.cardContainer} ${
        notices.length > 1 ? styles.multiColumn : ''
      }`}
    >
      {notices.map((item) => (
        <div className={styles.card} key={item.id}>
          <div className={styles.noticeRange}>{item.noticeRange}</div>
          <div className={styles.title}>{item.title}</div>
          <div className={styles.content}>{item.content}</div>
          <div className={styles.creationTime}>{item.creationTime}</div>
        </div>
      ))}

      <div id="loading-indicator">
        {isLoading && <p>Loading more data...</p>}
      </div>
    </div>
  );
};

export default NoticePage;

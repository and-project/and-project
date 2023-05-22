import {
  useEffect,
  useState,
  forwardRef,
  ForwardRefRenderFunction,
} from "react";
import useIntersect from "./useIntersect";
import { API, PAGE_SIZE } from "../../constant";
import styles from "./_noticePage.module.scss";

interface Notice {
  content: string;
  creationTime?: string;
  emotion?: Array<string>;
  id: number;
  noticeRange: Array<number>;
  pin: boolean;
  state: boolean;
  tag?: string;
  title: string;
}

interface Props {
  onIntersecting: () => void;
}

const NoticePage: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { onIntersecting },
  ref
) => {
  const [page, setPage] = useState(1);
  const [notices, setNotices] = useState<Notice[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  const fetchData = async (page: number, pageSize: number) => {
    try {
      const response = await fetch(`${API}/api/home/${page}/${pageSize}`);
      const data = await response.json();
      const newNotices = data.items;
      setNotices((prevNotices) => [...prevNotices, ...newNotices]);

      setIsFetching(false);

      console.log(newNotices);
    } catch (error) {
      console.error("Error fetching notices:", error);
    }
  };

  useEffect(() => {
    if (isFetching) {
      fetchData(page, PAGE_SIZE);
      setPage((prev) => prev + 1);
    }
  }, [isFetching, page]);

  const intersectRef = useIntersect({ onIntersecting });

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const contentHeight = document.documentElement.scrollHeight;
    const threshold = contentHeight - viewportHeight - 100;

    if (scrollY >= threshold) {
      if (!isFetching) {
        setIsFetching(true);
        setPage((prevPage) => prevPage + 1);
      }
    }

  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {notices.map((item) => (
        <div className={styles.card} key={item.id}>
          title = {item.title}, id = {item.id}
          content = {item.content}
          creationTime = {item.creationTime}
          noticeRange = {item.noticeRange}
        </div>
      ))}
      <div ref={intersectRef.ref} />
    </div>
  );
};

export default forwardRef(NoticePage);

import { useCallback, useEffect, useRef } from "react";

interface Props {
  onIntersecting: () => void;
}

const useIntersect = ({ onIntersecting }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const callback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onIntersecting();
        }
      });
    },
    [onIntersecting]
  );

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(callback, {
      rootMargin: "0px",
      threshold: 0.1,
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [callback, ref]);

  return {
    ref,
  };
};

export default useIntersect;

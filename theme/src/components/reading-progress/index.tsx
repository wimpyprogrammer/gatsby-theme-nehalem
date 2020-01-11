import React, {FunctionComponent, RefObject, useEffect, useState} from "react";
import {ReadingProgressBar} from "./style";

export interface ReadingProgressProps {
  target: RefObject<HTMLElement>;
  color?: string;
}

const ReadingProgress: FunctionComponent<ReadingProgressProps> = ({color, target}) => {
  const [readingProgress, setReadingProgress] = useState<number>(0);
  const scrollListener                        = () => {
    if (!target.current) {
      return;
    }

    const element         = target.current;
    const totalHeight     = element.clientHeight - element.offsetTop - (window.innerHeight);
    const windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (windowScrollTop === 0) {
      return setReadingProgress(0);
    }

    if (windowScrollTop > totalHeight) {
      return setReadingProgress(100);
    }

    setReadingProgress((windowScrollTop / totalHeight) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  });

  return (
    <ReadingProgressBar style={{width: `${readingProgress}%`}} color={color}/>
  );
};

export default ReadingProgress;

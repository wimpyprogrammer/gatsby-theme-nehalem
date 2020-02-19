import React, {FunctionComponent, useEffect} from "react";
import tocbot from 'tocbot';
import {StyledNav} from "./style";

export interface TocProps {
  /**
   * Callback triggered whenever the TOC is clicked. Used for
   * hiding the mobile toc overlay when clicking on a link.
   */
  onClick: () => void;
}


const Toc: FunctionComponent<TocProps> = ({onClick}) => {
  useEffect(() => {
    tocbot.init({
      tocSelector: `.toc`,
      contentSelector: `.post`,
      headingSelector: `h2,h3`,
      scrollSmooth: true,
      scrollSmoothDuration: 1,
    });

    return () => tocbot.destroy();
  });

  return (
    <StyledNav className={`toc`} onClick={onClick} />
  );
};

export default Toc;

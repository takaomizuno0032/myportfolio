import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// To prevent the page from scrolling to the bottom when the user clicks on a link
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
export default ScrollToTop;

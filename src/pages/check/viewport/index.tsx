import React, { useState, useEffect } from 'react';

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default function Viewport() {
  const size = useWindowSize();

  return (
    <div className='uk-container uk-height-large uk-margin-large-top'>
      <div className='uk-flex uk-flex-middle uk-flex-center'>
        <div className='uk-card uk-card-secondary uk-card-large'>
          <div
            className='uk-flex uk-align-center uk-text-justify uk-margin-top uk-padding-large'
          >
            Width: {size.width}px
          </div>
          <div
            className='uk-flex uk-align-center uk-text-justify uk-padding-large'
          >
            Height: {size.height}px
          </div>
        </div>
      </div>
    </div>
  )
};
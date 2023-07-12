import React, { useEffect, useState } from 'react';
import { Animated } from 'react-animated-css';
import './Home.css';
import Galaxy from './Galaxy';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="home">
      <Galaxy />
      <h1 className={`name ${isLoaded ? 'animate' : ''}`}>
        Sanya
      </h1>
      {isLoaded && (
        <Animated animationIn="fadeIn" animationInDelay={1000} isVisible={true}>
          <p className="typed-text">
            a budding developer
          </p>
        </Animated>
      )}
    </div>
  );
};

export default Home;

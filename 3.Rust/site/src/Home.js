import React, { useState } from 'react';
import logo from './react.svg';
import './Home.css';

function Home() {
  const [circle, setCircle] = useState();
  const [radius, setRadius] = useState();
  import('circle').then(circle => setCircle(circle));

  if (!circle) {
    return <></>;
  }

  return (
    <div className="Home">
      <input onChange={({ target: { value } }) => setRadius(value)} />
      <div>
        Area: {circle.area(radius)}
      </div>
      <div>
        Circumference: {circle.circumference(radius)}
      </div>
    </div>
  );
}

export default Home;

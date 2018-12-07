import React from 'react'

function Divider({ direction, color1, color2 }) {
  const vertices = direction === 'up' ? [[0,100],[50,0],[100,100]] : [[0,0],[50,100],[100,0]]
  const line = direction === 'up' ? [[1,100],[50,2],[99,100]] : [[1,0],[50,98],[99,0]]

  const pathData = [
    'M', vertices[0][0], vertices[0][1],
    'L', vertices[1][0], vertices[1][1],
    'L', vertices[2][0], vertices[2][1],
    'Z'
  ].join(' ');

  const lineData = [
    'M', line[0][0], line[0][1],
    'L', line[1][0], line[1][1],
    'L', line[2][0], line[2][1],
    'Z'
  ].join(' ');

  return (
    <svg width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none" >
      <rect width="100%" height="100%" fill={ color2 }/>
      <path d={ pathData } fill={ color1 }/>
      {/* <path d={ lineData } fill='#2F3238'/> */}
      {/* <path d={ pathData } fill='#2F3238'/>
      <path d={ lineData } fill={ color1 }/> */}
    </svg>
  );
};

export default Divider
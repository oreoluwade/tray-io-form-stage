import React from 'react';

const Spacer = ({ width, height }) => {
  const getNormalizedWidth = () => {
    if (typeof width === 'string') {
      return width.endsWith('px') ? width : `${width}px`;
    }
    if (typeof width === 'number') {
      return `${width}px`;
    }
    return '0px';
  };

  const getNormalizedHeight = () => {
    if (typeof height === 'string') {
      return height.endsWith('px') ? height : `${height}px`;
    }
    if (typeof height === 'number') {
      return `${height}px`;
    }
    return '0px';
  };
  return (
    <div
      style={{ width: getNormalizedWidth(), height: getNormalizedHeight() }}
    />
  );
};

export default Spacer;

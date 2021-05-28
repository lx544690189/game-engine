import React, { useEffect, useState } from 'react';
import { init } from './bootstrap';
import './index.less';

function App() {

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="index-page">
      <canvas className="canvas" id="canvas"/>
    </div>
  );
}

export default App;

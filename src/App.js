import React from 'react';
import Palette from './Palette'
import SourceColors from './SourceColors'


function App() {
  return (
    <div>
      <Palette {...SourceColors[4]}/>
    </div>
  );
}

export default App;
 
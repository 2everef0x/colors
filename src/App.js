import React from 'react';
import Palette from './Palette'
import SourceColors from './SourceColors'


function App() {
  return (
    <div>
      <Palette {...SourceColors[7]}/>
    </div>
  );
}

export default App;
 
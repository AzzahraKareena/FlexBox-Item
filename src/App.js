import React from 'react';
import './App.css'; // File CSS utama
import AlignItems from './Components/AlignItems'; 
import AlignSelf from './Components/AlignSelf'; 
import AlignContent from './Components/AlignContent';
import FlexWrap from './Components/FlexWrap';
import FlexBasis from './Components/FlexBasis-Grow-Shrink';
import Gap from './Components/GapRowandColumn';
import Layout from './Components/AbsoluteRelativeLayout';

function App() {
  return (
    <div className="App">
      <h1>Contoh Penerapan Flexbox Align Items</h1>
      <AlignItems />
      <h1>Contoh Penerapan Flexbox Align Self</h1>
      <AlignSelf />
      <h1>Contoh Penerapan Flexbox Align Content</h1>
      <AlignContent />
      <h1>Contoh Penerapan Flexbox Flex Wrap</h1>
      <FlexWrap />
      <h1>Contoh Penerapan Flexbox Flex Basis, Grow, dan Shrink</h1>
      <FlexBasis/>
      <h1>Contoh Penerapan Flexbox Row Gap, Column Gap, dan Gap</h1>
      <Gap/>
      <h1>Contoh Penerapan Flexbox Flex Absolute dan Relative Layout</h1>
      <Layout/>
      {/* Komponen-komponen lain */}
    </div>
  );
}

export default App;

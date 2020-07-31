import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container" title="dell lee" data-test='container'> 
      {/* 为了代码不耦合，就可以不用代码级的选择器， 用 data-test  */}
      hello world
    </div>
  );
}

export default App;

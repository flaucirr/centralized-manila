import React from 'react';
import ReactDOM from 'react-dom/client';
import Demo1 from './Demo1.jsx';
import Demo2 from './Demo2.jsx';
import Demo3 from './Demo3.jsx';
import Demo4 from './Demo4.jsx';
import Demo5 from './Demo5/Demo5.jsx';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Demo1 />
    <Demo2 />
    <Demo3 />
    <Demo4 />
    <Demo5 />
  </React.StrictMode>
);

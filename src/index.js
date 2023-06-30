import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DragDropContext } from 'react-beautiful-dnd';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DragDropContext>
    <React.StrictMode>
      
        <App />
      
    </React.StrictMode>
  </DragDropContext>
  
);


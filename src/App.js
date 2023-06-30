import './App.css';
import Board from './components/board';
import { useState } from 'react';
import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';




function App() {
  const [newBoard, setNewBoard]=useState(false)
  const [count, setCount] = useState([])
  
  const addClick = ()=>{
   
    setNewBoard(true)
    setCount(prev => [...prev, count])
    
  }
  
  return (
    
    <div className="App">

      <header><div className='heading'>
        <div id='logo'>
          <PlaylistAddCheckCircleIcon sx={{fontSize: "50px", color:'#823967'}}/>
        </div>
        <div id='head'>
             Pioneer!
        </div>
      </div></header>
      
      <div className='render'>
      
        {newBoard && 
          count.map((_, index) => (
            
              <Board key={index}  id={index} />
            
          ))
          }
        <button className='add_board' value="Add" onClick={addClick} > Add Board</button>
      </div>

     
    </div>
    
  );
}

export default App;

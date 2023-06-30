import React, { useState } from 'react'
import './style.css'


function Board(props) {
    const [newCard, setNewCard] = useState(false)
    const [title, setTitle] =useState("Title")
    const [viewCard, setViewCard] = useState(false)
    const [cardDetails, setCardDetails] =  useState("")
    const [content , setContent] = useState([])


    const cardChange = (e)=>{
        setCardDetails(e.target.value)
   
    }


    const detailsSubmit = ()=>{
        setNewCard(false)
        setViewCard(true)
        
        setContent(prev => [...prev, cardDetails])    
    }


    const cardAdd = (e)=>{
        e.preventDefault()
       
        newCard ? setNewCard(false) : setNewCard(true)
    }


    const onChange = (e)=>{
        setTitle(e.target.value)
        
    }


    const dragStart = (e)=>{    
        e.target.className = "dragging"
    }


    const dragStop = (e)=>{
        e.target.className = "card"
    }


    // getting all the boards in the app
    const elements = document.querySelectorAll('.board');

    elements.forEach((element) => {
      // Perform actions on each element
      element.addEventListener("dragover", (e)=>{
      e.preventDefault()

      //getting all the cards that are being dragged
      const d = document.querySelector(".dragging")
      const firstChild = element.firstChild
      
      element.insertBefore(d, firstChild.nextSibling)
      
      })
    });
       

  return (
    
    <div >  
        <div className='board'>
        
        <div>
            <label>
                <input type='text' value = {title} onChange={onChange} className='title'/>
            </label>
        </div>
        <div className='render'>
        {viewCard && 
          content.map((item, index) => ( 
            
            <div key={index} id = {index}  className='card' draggable ='true' onDragStart={dragStart} 
             onDragEnd={dragStop}>
                {item}
            </div>
    
          ))
          }
          </div>
          
       {/* area to fill info fro new card */}
          {newCard && 
          <div className='create_card'>
                <textarea onChange={cardChange} className='cardEntry' style={{}}>
                    
                </textarea>
                <input type='submit' className='submitButton' onClick={detailsSubmit} />
          </div>
          }
            
            <div>
                <button className = 'add_btn' type='submit'  onClick={cardAdd}>Add Items</button> 
            </div>      
        </div>
       
    </div>
    
  )
}

export default Board
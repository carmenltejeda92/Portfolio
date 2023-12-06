import React from 'react'
import { useNavigate } from 'react-router-dom'
import Ships from '../models/Ships'

function Home() {
    // document.addEventListener("keydown", this.keydown)
    // document.addEventListener("keyup", this.keyup)

    const nav = useNavigate()

    function randomNum(){
        let rando = Math.random().toFixed(2)
        return rando
    }

    function shootThem(){
        let humanShips = 4
        if(randomNum() > Ships[0].accuracy){
            Ships[1].hull -= 5
            console.log(Ships[1].hull)
        }else{
            console.log('Humans missed')
        }
    }





  return (
    <div>
        <div className='text'>
            <h1>Alien Attack!!!</h1>
            <p>Destroy the aliens to access my page, but be careful, they shoot back!</p>
        </div>
        <div className="board">
                <div className="leftSide">
                    <div className="them">
                        <div className='alien'><img src ="https://media.tenor.com/Re9FSRZKfN8AAAAi/mom-powerful.gif" alt="" 
                            height='100px' width='100px'/></div>  
                        <div className='alien'><img src ="https://media.tenor.com/Re9FSRZKfN8AAAAi/mom-powerful.gif" alt="" className="alien" 
                            height='100px' width='100px'/></div>
                        <div className='alien'><img src ="https://media.tenor.com/Re9FSRZKfN8AAAAi/mom-powerful.gif" alt="" className="alien" 
                            height='100px' width='100px'/></div> 
                        <div className='alien'><img src ="https://media.tenor.com/Re9FSRZKfN8AAAAi/mom-powerful.gif" alt="" className="alien" 
                            height='100px' width='100px'/></div>   
                    </div>
                    <div className="alienStats">
                        
                    </div>
                </div>
                <button className="shoot" onClick={()=>shootThem()}>Shoot</button>
                <div className="rightSide">
                    <div className="us">
                        <img src ="https://media.tenor.com/jG3CfbW1f6oAAAAi/buccaneer-swashbuckler.gif" alt="" className="assembly" />
                        <img src ="https://media.tenor.com/jG3CfbW1f6oAAAAi/buccaneer-swashbuckler.gif" alt="" className="assembly" />  
                        <img src ="https://media.tenor.com/jG3CfbW1f6oAAAAi/buccaneer-swashbuckler.gif" alt="" className="assembly" />  
                        <img src ="https://media.tenor.com/jG3CfbW1f6oAAAAi/buccaneer-swashbuckler.gif" alt="" className="assembly" />    
                    </div>
                    <div className="humanStats">
                        
                    </div>
                </div>
        </div>
        <div className='buttons'>
            <button className='btn' onClick={()=>nav('about-me')}>About Me</button>
            <button className='btn' onClick={()=>nav('baseball')}>Fun Fact</button>
        </div>

    </div>
  )
}

export default Home

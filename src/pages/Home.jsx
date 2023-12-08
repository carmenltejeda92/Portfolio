import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useState} from 'react'
import Ships from '../models/Ships'


function Home() {
    // document.addEventListener("keydown", this.keydown)
    // document.addEventListener("keyup", this.keyup)
    const nav = useNavigate()
    const [ships, setShip] = useState(Ships)

    function randomNum(){
        let rando = Math.random().toFixed(2)
        return rando
    }


    function shootThem(){
        let pOneTurn = true
        const alienHull = document.querySelector('.lblAlienHull')
        const humanHull = document.querySelector('.lblHumanHull')

        let humanShips = 4
        let alienShips = 4
        if(pOneTurn){
            if(randomNum() > Ships[0].accuracy){
                if(Ships[1].hull === 0){
                    alienShips--
                    alienHull.textContent = ('One of our ships were destroyed! We have ' + alienShips + ' ships left!')
                    Ships[1].hull = 15
                }
                Ships[1].hull -= 5
                alienHull.textContent = ('We were hit! Our ships health is now: ' + Ships[1].hull)
                humanHull.textContent = 'We hit them!'
            }else if(randomNum() === Ships[0].accuracy){
                alienHull.textContent = 'Direct Hit!'
                alienShips --
            }else if(randomNum() < Ships[0].accuracy){
                humanHull.textContent = 'Oh no, we missed! Aliens turn!'
                alienHull.textContent = ''
            }

            pOneTurn = false
        }

        if(alienShips === 0) alienHull.textContent ='All ships destroyed'


        if(!pOneTurn){
            if(randomNum() > Ships[1].accuracy){

            }
        }
    }





  return (
    <div className='game'>
        <div className='text'>
            <h1>Alien Attack!!!</h1>
            <p>Destroy the aliens to access my page, but be careful, they shoot back!</p>
        </div>
        <div className="board">
                <div className="leftSide">
                    <div className="them">
                        <div id="alienOne" className='alien'><img src ="https://media.tenor.com/Re9FSRZKfN8AAAAi/mom-powerful.gif" alt="" 
                            height='100px' width='100px'/></div>  
                        <div className='alien'><img src ="https://media.tenor.com/Re9FSRZKfN8AAAAi/mom-powerful.gif" alt="" className="alien" 
                            height='100px' width='100px'/></div>
                        <div className='alien'><img src ="https://media.tenor.com/Re9FSRZKfN8AAAAi/mom-powerful.gif" alt="" className="alien" 
                            height='100px' width='100px'/></div> 
                        <div className='alien'><img src ="https://media.tenor.com/Re9FSRZKfN8AAAAi/mom-powerful.gif" alt="" className="alien" 
                            height='100px' width='100px'/></div>   
                    </div>
                    <div className="alienStats">
                        <label className='lblAlienHull'></label>
                    </div>
                </div>
                    <button id="shoot" onClick={()=>shootThem()}>Shoot</button>
                <div className="rightSide">
                    <div className="humanStats">
                        <label className='lblHumanHull'></label>
                    </div>
                    <div className="us">
                        <img src ="https://media.tenor.com/jG3CfbW1f6oAAAAi/buccaneer-swashbuckler.gif" alt="" className="assembly" />
                        <img src ="https://media.tenor.com/jG3CfbW1f6oAAAAi/buccaneer-swashbuckler.gif" alt="" className="assembly" />  
                        <img src ="https://media.tenor.com/jG3CfbW1f6oAAAAi/buccaneer-swashbuckler.gif" alt="" className="assembly" />  
                        <img src ="https://media.tenor.com/jG3CfbW1f6oAAAAi/buccaneer-swashbuckler.gif" alt="" className="assembly" />    
                    </div>
                </div>
        </div>
        <div className='buttons'>
            <button className='btn' onClick={()=>nav('about-me')}>About Me</button>
            <button className='btn' onClick={()=>nav('baseball')}>Fun Fact</button>
        </div>
        <div>
        </div>
    </div>
  )
}

export default Home

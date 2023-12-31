import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useState, useRef, useEffect } from 'react'
import Ships from '../models/Ships'



function Home() {
    const nav = useNavigate()
    const [ships, setShip] = useState(4)
    const shootRef = useRef()
    
    useEffect(()=>{
        const applyAnimation = () => {
            shootRef.current.classList.add("bulletContainer")
        }

        const onClick = () => {
            shootRef.current.classList.remove("active")
            shootRef.current.classList.add("active")
        }

        applyAnimation()
        shootRef.current.addEventListener("click", onClick)
        const reset = shootRef.current;

        return () => {
            reset.removeEventListener("click", onClick)
        }

    })


    let pOneTurn = true
    

    function shootThem(){
        const alienHull = document.querySelector('.lblAlienHull')
        const humanHull = document.querySelector('.lblHumanHull')
        let rando = Math.random().toFixed(2)
        let humanShips = ships
        let alienShips = ships


        if(pOneTurn == true){
            pOneTurn = false
            if(rando > Ships[0].accuracy){
                if(Ships[1].hull === 0){
                    setShip(alienShips--)
                    alienHull.textContent = ('One of our ships were destroyed! We have ' + alienShips + ' ships left!')
                    humanHull.textContent = 'We hit them!'
                    Ships[1].hull = 15
                }else{
                    Ships[1].hull -= 5
                    alienHull.textContent = ('We were hit! Our ships health is now: ' + Ships[1].hull)
                    humanHull.textContent = 'We hit them!'
                    setShip(alienShips--)
                }
            }else if(rando === Ships[0].accuracy){
                setShip(alienShips--)
                humanHull.textContent = 'Direct Hit!'
                alienHull.textContent = ('One of our ships have been destroyed! ' + alienShips + ' left!')
            }else if(rando < Ships[0].accuracy){
                humanHull.textContent = 'Oh no, we missed! Aliens turn!'
                alienHull.textContent = 'Our turn! Yay!'
            }

            if(alienShips === 0) humanHull.textContent ='All alien ships destroyed!! Earth wins!!'
        } else if(pOneTurn == false){
            pOneTurn = true
            if(rando > Ships[1].accuracy){
                if(Ships[0].hull === 0){
                    setShip(humanShips--)
                    humanHull.textContent = ('One of our ships were destroyed! We have ' + humanShips + ' ships left!')
                    alienHull.textContent = 'We hit them!'
                    Ships[0].hull = 20
                }else{
                    Ships[0].hull -= 5
                    humanHull.textContent = ('We were hit! Our ships health is now: ' + Ships[0].hull)
                    alienHull.textContent = 'We hit them!'
                    setShip(humanShips--)
                }
            }else if(rando === Ships[1].accuracy){
                alienHull.textContent = 'Direct Hit!'
                setShip(humanShips--)
            }else if(rando < Ships[1].accuracy){
                alienHull.textContent = 'Oh no, we missed! Humans turn!'
                humanHull.textContent = 'Our turn! Yay!'
            }

            if(humanShips === 0) alienHull.textContent ='We defeated the humans! Invade!!'

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
                    <div className="bulletContainer"></div>
                    <div className="them">
                        <img src ="https://media.tenor.com/Re9FSRZKfN8AAAAi/mom-powerful.gif" alt="" className='alien'/>
                        <img src ="https://media.tenor.com/Re9FSRZKfN8AAAAi/mom-powerful.gif" alt="" className="alien" />
                        <img src ="https://media.tenor.com/Re9FSRZKfN8AAAAi/mom-powerful.gif" alt="" className="alien" />
                        <img src ="https://media.tenor.com/Re9FSRZKfN8AAAAi/mom-powerful.gif" alt="" className="alien" /> 
                    </div>
                    <div className="alienStats">
                        <label className='lblAlienHull'></label>
                    </div>
                </div>
                    <button id="shoot" ref={shootRef} onClick={()=>shootThem()}>Shoot</button>
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
            <button className='btn' onClick={()=>nav('songs')}>Fun Fact</button>
        </div>
        <div>
        </div>
    </div>
  )
}

export default Home

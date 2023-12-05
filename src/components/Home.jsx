import React from 'react'

function Home() {



  return (
    <div className="board">
            <div className="leftSide">
                <div>
                    <h1>Alien Ship</h1>
                </div>
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
            <button className="shoot">Shoot</button>
            <div className="rightSide">
                <div>
                    <h1>USS assembly</h1>
                </div>
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
  )
}

export default Home

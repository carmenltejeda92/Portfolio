import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {

    const nav = useNavigate()
   
  return (
    <div>
      <div className='aboutMe'>
        <div>
          <img className='me' src='https://lh3.googleusercontent.com/pw/ADCreHes9aWZA7WcX2cd_nivqH8GaQkoJ94LdkxLWxg2yMdKdes6sfsiCSIrD3VY8Ur1rtACymFJFE6UQTHLj_mU9oiNzTuC8k79Uitqf8JdAjzgbSlQrIqg6gyyRDxFioAId_16lzT7nI-4zlw7SvLzospOPZX0JTBgsWGdebemO1YJTB8erQ6RBq5qzAXHgkZ8mMiFUf1FYfdolS6vi7L8UhhfS1hLVa_bpSBW1RY-ByTtjStn1GpfLzt3-gnwOY5WytllrzUo7pTekOuphCwXnip0zX9Rs8NGwU5Wt4ULbb9KZX_8sRoIwjvrRhUdq9oLqVxtd0Q-Ix4eNq8bJBgv-tq2z0dKY1vbVxqbyhjXt8d4XHBwg1JZwsBRym-7X1ULitb_7q3qSWMxEVZhTyFmW-4FBqYfZiBAfGx4oCIbwujX-laN0d9OeENUOyF_D1wToBWi2qzamJZg-4-WRuQ8Doxl0_6pK9zGJNmOF16quwshPOrcATsCGlNRufIyaqYfP4zo3e9PQNLkeB818cNufhW6gpsViOce7LtGBuRLIo4dDNTmAKDIBW4KUYVe0mXhIBzSJy9TALVhmO6KNer1AAhfQN4YjCNso6-BCWpGVNfVN7rbEbOr_YTd65rmu2-l1MAC0jd8zzBU1MCgA0XAM3KqhQfe_Yf3KjdhRQFfU7qfTkYV6B-FetAK5_ycfMrc_TaFejzFLbTktvH2hYFK2NTHTAp204NVOlyD6SnGhgj8jOHxv4R5EDRLcAq1Nm3Z30_QW9-bsXezfwtyj8vLTj0VzojRB7YbL4_Wt_9mk5H-LgM_xDtg9NuSoUzGcPqkzfAM5-LCKNeJDXk0YFqGWTVu7-tudrGtaEJL6yJSFHcABTjG1HuvdJGFZ40J2x2z86qTsIBvv29o-qTIiF4TEy67lEgMtTTSoNEvhwwJ_M1ZTkEHXHCNXTi2es39W_RXc42OyeOU3WM8Yg=w468-h873-s-no-gm?authuser=0'></img>
        </div>
        <div className='summary'>
          <h1>PROFESSIONAL SUMMARY</h1>
          <p>An experienced IT Professional with 2+ years of IT experience and 5+ years of 
            customer service and client relations experience. Possesses extensive training in troubleshooting desktops, laptops, 
            printers, and peripherals. Able to convey complex technical information in a language users can understand as well as 
            deploy images and software following all company standards. Adept at executing service level agreements (SLA) in a 
            timely manner.
          </p>
          <a href="https://www.linkedin.com/in/carmenltejeda91/"><h2>Look at my LinkedIn</h2></a>
        </div>
      </div>
      <div>
        <div className='bTN'>
          <button className='btn' onClick={()=>nav('/')}>Home</button>
        </div>
      </div>
    </div>
  )
}

export default About

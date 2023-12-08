import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {

    const nav = useNavigate()
   
  return (
    <div className='aboutMe'>
      <div>
        <img className='me' src='https://lh3.googleusercontent.com/pw/ADCreHfK3Ri_bvw8YxQ3RX9Wh9O1jaCbqTAyq8U3CppSSNwRh8lZxYIMunPf7nzDIkf1d3oVw_2nOCmZBT58KbGLVuee5xhllZ-z_aRt6hd2ehlis10gxOUXwvSSaRLRenLU42yKzv-ptwzrIDHeAYR9w12LVR_DOCCAvIr1BHGsgQrP-9NZiRRdzVqDCrK-GqWT5AFmVc9axLQUWWfwYO0cJQ0c955GuNiVJ8XiZA2qI3ejFuIoYiWpb0xwkCPZx__mzgWd3TsHZSAQ3dvk_D18HDEoTDCfjbfY3WT-R2d2sWjls_EEbr9ZBtdIxhof85vgYhd2Q6j-HYGpIsWagmuKhx-f0g3dEGUmIoBUUMIZobBbCWE7QTFIHQ8HU9M2IXa2xJCHS4Pnjcn0o5MMXsfYhwtUiM1sPaoarX0RvnVJYbcnU6ASaIR3SC9JdNTKnZ7RS4om3MDWqFFAKwB2BTJNxsApHHoz7s97Qfg83aiQ3OcebGk-SAizGTwdum7I4OJ9Rcx9NuCrHBelvtzhPMCup3G2wsygLKxwNCy9RWLHk3FSrZM7VdmLU4oP-Na34ajdX1H7FlILPBkk65isoV2i2M9sUq3OxnC1a8RUXdzMwWhRftA74jTPUBgsngYe_Cl6MqN17gST2XsCiyvSkLCWs-qTYsWXn7DZ-CWzQjZ4JkSKHClwlFNqou19boxqTzlsQJ2peTR2YDcj48nAKfLqDac5_P_jcaW4R7fRPZlGAM63VIWKqnKGtN37qC-_0jdeGKFDDX28YcmG3y7k4CGFX2dDI_DbZemWFv_Z0Q5KEHmzQM7FNmKgBUqpFPm9p1s2Fjc6CkIf_gYqgtdS9eLPkKHicjpC2CC0myiA_9j_Pni3pZP9iOA9gJa1LEUjtoy7OhatotYLCbuSKQpDE0DgxMDoVpLVoMucVFJuB-ZzY9PKLfku6LU9o0yRg5PHKuh6EfZZQxK5zhgDNA=w474-h884-s-no-gm?authuser=0'
          height='450px' width='250px'></img>
      </div>
      <div>
        <h1>PROFESSIONAL SUMMARY</h1>
        <p>An experienced IT Professional with 2+ years of IT experience and 5+ years of 
          customer service and client relations experience. Possesses extensive training in troubleshooting desktops, laptops, 
          printers, and peripherals. Able to convey complex technical information in a language users can understand as well as 
          deploy images and software following all company standards. Adept at executing service level agreements (SLA) in a 
          timely manner.
        </p>
        <a href="https://www.linkedin.com/in/carmenltejeda91/"><h2>Look at my LinkedIn</h2></a>
      </div>
      <div className='bTN'>
        <button className='btn' onClick={()=>nav('/')}>Home</button>
      </div>
    </div>
  )
}

export default About

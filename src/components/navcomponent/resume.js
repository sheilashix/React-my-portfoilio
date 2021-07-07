import React, { Component } from 'react'
import {Grid,Cell} from 'react-mdl'
import { Progress } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
 class Resume extends Component {
  render() {
    return (
      
        <Grid className="demo-grid-2">
        
        <Cell col={4} style={{ background:'#fff' }}>
        <div className="left">
        <img src="profile.png" alt=""/>
        <h2 className="mt-4">Sheila Chepkemoi</h2>
        <span className='text-info '>Full Stack Developer</span>
        <hr style={{ borderTop:'3px solid yellow' }}/>
        <p style={{ textTransform:'capitalize' }}>The only way to do great work is to love what you do. If you haven't found it yet, keep looking, don't settle.I have made it this far because i'm a great beleiver in luck, and find the harder i work, the more i have of it. </p>


        </div>
        </Cell>
        <Cell col={8}>
        <div className="right" >
        <h4>Education</h4>
        <div className=""></div>
        <hr/>
        <h4>Skills</h4>
       
         <Progress animated color="success" value={95}>HTML5 & Css3</Progress><br/>
         <Progress animated color="info" value={80}>JavaScript</Progress><br/>
         <Progress animated color="warning" value={75}>React</Progress><br/>
         <Progress animated color="danger" value={65}>PHP</Progress><br/>
         <Progress animated color="warning" value={70}>Angular</Progress>

       
        </div>
        </Cell>
        
    </Grid>
      
    )
  }
}

export default Resume

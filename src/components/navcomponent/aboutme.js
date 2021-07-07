import React, { Component } from 'react'


class aboutme extends Component {
  render() {
    return (
     <React.Fragment>
       <div className='about row mt-4 pt-4'>
       <div className='col-8'>
       <img src="me.jpg" alt='me'/>
       </div>
       <div className='col-5'>
       <h5>This is me</h5>
       <h2>Sheila  Chepkemoi</h2>
       <p>start by doing whats necessary, then whats possible, and suddenly you are doing the impossible.</p>
       <a href='http:google.com' className="btn btn-info text-white">Discover Now</a>
       
       </div>

       
       </div>

     </React.Fragment>
    )
  }
}

export default aboutme

import React, { Component } from 'react'

export default class Heder extends Component {
  render() {
    return (
      <div>
         <nav className='navbar navbar-expand-md navbar-dark d-flex justify-content-around'>
            <a  className='navbar-brand' href='#'>Start Bootstrap</a>
            <button className='navbar-toggler' type='button' data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse flex-row-reverse' id='collapsibleNavbar'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <a className='nav-link active' href='#'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='#'>About</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='#'>Contact</a>
                    </li>
                </ul>
            </div>
         </nav>
  </div>
    )
  }
}

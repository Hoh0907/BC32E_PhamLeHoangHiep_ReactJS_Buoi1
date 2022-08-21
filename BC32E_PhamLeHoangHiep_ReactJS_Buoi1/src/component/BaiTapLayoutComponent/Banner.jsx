import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
        <div className='px-lg-5' >
            <div className='p-4 p-lg-5 bg-light text-center'  style={{boderRadius:'0.3rem'}}>
                <div className='m-4 m-lg-5'>
                    <h1 className='display-5' style={{fontWeight:"700"}}>A warm welcome!</h1>
                    <p style={{fontSize: "1.5rem"}}>
                        Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?
                    </p>
                    <div>
                        <button className='btn btn-primary btn-lg'>Call to action</button>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

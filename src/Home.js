import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
          <div className='set_color_nav'>
            <div className='icons' style={{verticalAlign:"middle",height:"40px"}}>
                    <i class="fa-brands fa-facebook" style={{fontSize:"2.5vw",color:"blue"}}></i>
                <i class="fa-brands fa-instagram-square" style={{fontSize:"2.5vw"}}></i>
            </div>
          </div>
          <div className='main_container'>
              <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Deep_learning_algorithm.jpg" alt="abc" style={{width:"100%",height:"100vh"}}></img>
          </div>
      </div>
    )
  }
}

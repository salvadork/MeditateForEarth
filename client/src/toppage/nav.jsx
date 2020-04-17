import React, { Component } from 'react'
import {Navbar, Divider} from 'rbx'
import {Link} from "react-router-dom"
import "./nav.scss"


export default class Nav extends Component {
    render() {
        return (
          
      <div>
        <Navbar color="black">               
              <Navbar.Burger />
            <Navbar.Menu >
            <Navbar.Segment align="end">
              
              <Navbar.Item><Link to="/">Home</Link></Navbar.Item>
              <Navbar.Item dropdown hoverable className="wholink">
                <Navbar.Link arrowless>Who we are</Navbar.Link> 
                  <Navbar.Dropdown>
                    <Navbar.Item><Link to="/about">About us</Link></Navbar.Item> 
                    <Navbar.Item><Link to="/educators">Educators</Link></Navbar.Item>
                    <Navbar.Item><Link to="/contact">Contact</Link></Navbar.Item>
                  </Navbar.Dropdown>
                </Navbar.Item>
      
                  <Divider vertical color={"warning"}></Divider>
       
                <Navbar.Item>English</Navbar.Item>
            </Navbar.Segment>
          </Navbar.Menu>
        </Navbar>



        
</div>

        )
    }
}

import React, { Component } from 'react'
import {Navbar, Hero, Column, Title, Level} from 'rbx'
import "./aboutus.scss"
import Nav from "../toppage/nav.jsx";  
import Bottom from "../footer/footer.jsx"; 
import SvgTop from "../assets/logotop.js";

export default class Aboutus extends Component {
    render() {
     
        return (
        <div>  
 
                <Nav/>

            <Hero className="about" >
                <Column.Group>
                    <Column size={1} offset={1} >
                       <Level>
                           <Level.Item>
                                
                                <SvgTop/>
                                                
                            </Level.Item>
                        </Level>
                    </Column>
                
                    <Column size={4} offset={2}> 
                        <Title>

                            About Us
                            
                            <Navbar.Divider className="line"></Navbar.Divider>
    
                        </Title>
                    
                        <Title subtitle>
    
                            The mission of <strong>Meditate for Earth</strong> is to enable as many loving minds and loving souls to connect together in this decisive moment of our history. We believe meditation has a profound effect on the individual and moslty on society as a <strong>whole</strong>. Therefore our vision was to create an opportunity for people from all around the world, to engage <strong>simultaneously</strong>, in one of the purist experiences known to man: 
                            <h1><strong>Meditate as One</strong>.</h1>
                            <br/><br/><br/>
                            Special Thanks to everyone who has commited their time and love at no cost to make this project happen:
                            <br/><br/>
                            <h1>Leonie Garand : Web Design 
                             <br/> <a href="https://en.picotatoo.com/" target="_blank" rel="noopener noreferrer">www.en.picotatoo.com</a>{''}</h1>
                            <h1>Chi Hung Ly      : Web Developement</h1>
                            <h1>Karl Anthony Salvador    : Web Developement</h1>
                            <h1>Jake Lockhart  : Translation <a href="https://www.youtube.com/channel/UCpy6fnxfGhtAK6ql9BYPWww" target="_blank" rel="noopener noreferrer">www.youtube.com/channel/UCpy6fnxfGhtAK6ql9BYPWww</a>{''}</h1>
                            <h1>Olivier Dionne Coutya : Content Creator</h1>
    
                        </Title>
                    </Column>   
                </Column.Group>
            </Hero>

                    <Bottom/>

        </div>



        )
    }
}


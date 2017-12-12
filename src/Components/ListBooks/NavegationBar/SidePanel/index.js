import React, {Component} from 'react'
import './style.css'

class SidePanel extends Component {
    render() {
        return (
            <ul className="sidenav front-element" id="slide-out">
                <li><div className="user-view">
                        <div className="background">
                            <img src="http://lorempixel.com/300/300/abstract/" />
                        </div>
                        <a href="#!user"><img className="circle" src="http://lorempixel.com/300/300/people/" /></a>
                        <a href="#!name"><span className="white-text name">Jurema Jacutinga</span></a>
                        <a href="#!email"><span className="white-text email">jjacutinga@gmail.com</span></a>
                </div></li>
                <li><a href="#filter" className="waves-effect"><i className="fa fa-filter icon-menu"/>Filter</a></li>
                <li><a href="#import" className="waves-effect"><i className="fa fa-cloud-download icon-menu"/>Import</a></li>
                <li><a href="#signin" className="waves-effect"><i className="fa fa-sign-in icon-menu icon-menu"/>Sign In</a></li>
            </ul>
        )
    }
}

export default SidePanel
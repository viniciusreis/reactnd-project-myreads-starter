import React, { Component } from 'react'
import SidePanel from './SidePanel'
import './style.css'

class Navegation extends Component {

    render(){
        return(
            <div className="navbar-fixed">
                <nav className="default-primary-color">
                    <div className="nav-wrapper">
                        <a href="#!" className="brand-logo"><i className="fa fa-book icon-menu hide-on-small-only"/>MyReads</a>
                        <a href="#" className="sidenav-trigger" data-target="slide-out">
                            <i className="fa fa-bars icon-menu"></i>
                        </a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="#filter" className="waves-effect"><i className="fa fa-filter icon-menu"/>Filter</a></li>
                            <li><a href="#import" className="waves-effect"><i className="fa fa-cloud-download icon-menu"/>Import</a></li>
                            <li><a href="#signin" className="modal-trigger" data-target="modal1"><i className="fa fa-sign-in icon-menu"/>Sign In</a></li>
                        </ul>
                        <SidePanel />
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navegation
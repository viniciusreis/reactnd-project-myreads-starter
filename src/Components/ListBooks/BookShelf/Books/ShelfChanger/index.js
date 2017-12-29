import React,{ Component } from "react";
import './style.css'

class ShelfChanger extends Component{
    render(){
        return(
            <div className="fixed-action-btn horizontal anchor-to-element">
                <a className="btn-floating waves-effect waves-light orange"><i className="material-icons small">mode_edit</i></a>
                <ul>
                    <li key='want' ><a className="btn-floating red"><i className="material-icons">shopping_basket</i></a></li>
                    <li key='reading' ><a className="btn-floating yellow darken-1"><i className="material-icons">rowing</i></a></li>
                    <li key='done' ><a className="btn-floating green"><i className="material-icons">check</i></a></li>
                </ul>
            </div>
        )
    }
}

export default ShelfChanger
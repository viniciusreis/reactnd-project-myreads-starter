import React, {Component} from 'react'
import ShelfChanger from "./ShelfChanger"
import './style.css'

class Books extends Component {

    render() {
        return (

            <div className="card spacer">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" alt={this.props.book.title} src={this.props.book.image.url}/>
                </div>
                <ShelfChanger/>
                <div className="card-content"></div>
                <div className="card-reveal">
                    <span className="card-title primary-text">{this.props.book.title}</span>
                    <p className="secondary-text-color">{this.props.book.author}</p>
                </div>
            </div>
        )
    }
}

export default Books
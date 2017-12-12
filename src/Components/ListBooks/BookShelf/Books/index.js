import React, {Component} from 'react'
import BookShelfChanger from "../../BookShelfChanger";
import ShelfChanger from "./ShelfChanger"
import './style.css'

class Books extends Component {

    render() {
        return (
            <div className="row book-spacer">
                {this.props.books.map((book) => (
                        <div key={book.id} className="card spacer">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src={book.image.url}/>
                            </div>
                            <ShelfChanger/>
                            <div className="card-content"></div>
                            <div className="card-reveal">
                                <span className="card-title primary-text">{book.title}</span>
                                <p className="secondary-text-color">{book.author}</p>
                            </div>
                        </div>
                    ))}
            </div>
        )
    }
}

export default Books
import React, {Component} from 'react'
import BookShelfChanger from "../../BookShelfChanger";
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
                            <div className="fixed-action-btn horizontal blah">
                                <a className="btn-floating waves-effect waves-light orange"><i className="material-icons small">mode_edit</i></a>
                                <ul>
                                    <li><a className="btn-floating red"><i className="material-icons">shopping_basket</i></a></li>
                                    <li><a className="btn-floating yellow darken-1"><i className="material-icons">rowing</i></a></li>
                                    <li><a className="btn-floating green"><i className="material-icons">check</i></a></li>
                                </ul>
                            </div>
                            <div className="card-content"></div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">{book.title}</span>
                                <p>{book.author}</p>
                            </div>
                        </div>
                    ))}
            </div>
        )
    }
}

export default Books
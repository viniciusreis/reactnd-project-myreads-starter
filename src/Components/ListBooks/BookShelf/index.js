import React, {Component} from "react"
import Books from './Books'
import './style.css'

class BookShelf extends Component {

    render() {
        return (
            <div className="bookshelf">
                <h5>{this.props.shelfTitle}</h5>
                <div className="divider"></div>
                <div className="row book-spacer">
                    {this.props.bookList.map((b) => (<Books key={b.id} book={b}/>))}
                </div>
            </div>
        )
    }
}

export default BookShelf
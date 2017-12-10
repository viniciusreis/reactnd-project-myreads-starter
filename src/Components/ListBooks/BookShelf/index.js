import React, {Component} from "react"
import Books from './Books'
import './style.css'

class BookShelf extends Component {

    render() {
        return (
            <div className="bookshelf">
                <h5>{this.props.shelfTitle}</h5>
                <div className="divider"></div>
                <Books books={this.props.bookList}/>
            </div>
        )
    }
}

export default BookShelf
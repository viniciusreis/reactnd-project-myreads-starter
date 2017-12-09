import React, {Component} from "react"
import Books from './Books'

class BookShelf extends Component {

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
                <div className="bookshelf-books">
                    <Books books={this.props.bookList} />
                </div>
            </div>
        )
    }
}

export default BookShelf
import React, {Component} from 'react'
import BookShelfChanger from "../../BookShelfChanger";

class Books extends Component {

    render() {
        return (
            <ol className="books-grid">
                {this.props.books.map((book) => (
                        <li key={book.id}>
                            <div className="book">
                                <div className="book-top">
                                    <div
                                        className="book-cover"
                                        style={{
                                        width: book.image.width,
                                        height: book.image.height,
                                        backgroundImage: 'url(' + book.image.url + ')'
                                    }}></div>
                                    <BookShelfChanger/>
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{book.author}</div>
                            </div>
                        </li>
                    ))}
            </ol>
        )
    }

}

export default Books
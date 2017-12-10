import React, {Component} from 'react'
import BookShelf from './BookShelf'
import OpenSearch from '../OpenSearch'

const CurrentlyReading = [
    {
        "id": 0,
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "image": {
            "width": 128,
            "height": 193,
            "url": "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&" +
                    "zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx" +
                    "92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source" +
                    "=gbs_api"
        }
    }, {
        "id": 1,
        "title": "Ender's Game",
        "author": "Orson Scott Card",
        "image": {
            "width": 128,
            "height": 188,
            "url": "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&" +
                    "zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6" +
                    "RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source" +
                    "=gbs_api"
        }
    }
]

const WantToRead = [
    {
        "id": 2,
        "title": "1776",
        "author": "David McCullough",
        "image": {
            "width": 128,
            "height": 193,
            "url": "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&" +
                    "zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_" +
                    "qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source" +
                    "=gbs_api"
        }
    }, {
        "id": 3,
        "title": "Harry Potter and the Sorcerer's Stone",
        "author": "J.K. Rowling",
        "image": {
            "width": 128,
            "height": 192,
            "url": "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&" +
                    "zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9" +
                    "f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source" +
                    "=gbs_api"
        }
    }
]

const Read = [
    {
        "id": 4,
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "image": {
            "width": 128,
            "height": 192,
            "url": "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&" +
                    "zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy" +
                    "9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source" +
                    "=gbs_api"
        }
    }, {
        "id": 5,
        "title": "Oh, the Places You'll Go!",
        "author": "Seuss",
        "image": {
            "width": 128,
            "height": 174,
            "url": "http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&" +
                    "zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6Kmz" +
                    "MmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source" +
                    "=gbs_api"
        }
    }, {
        "id": 6,
        "title": "The Adventures of Tom Sawyer",
        "author": "Mark Twain",
        "image": {
            "width": 128,
            "height": 192,
            "url": "http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&" +
                    "zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-p" +
                    "gv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source" +
                    "=gbs_api"
        }
    }
]

class ListBooks extends Component {

    render() {
        return (
            <div>
                <div className="navbar-fixed">
                    <nav className="default-primary-color">
                        <div className="nav-wrapper">
                            <a href="#!" className="brand-logo"><i className="fa fa-book icon-menu hide-on-small-only"/>MyReads</a>
                            <a href="#" className="sidenav-trigger" data-target="mobile-demo">
                                <i className="fa fa-bars icon-menu"></i>
                            </a>
                            <ul className="right hide-on-med-and-down">
                                <li><a href="#"><i className="fa fa-filter icon-menu"/>Filter</a></li>
                                <li><a href="#"><i className="fa fa-search icon-menu"/>Search</a></li>
                            </ul>
                            <ul className="sidenav" id="mobile-demo">
                                <li><a href="#"><i className="fa fa-filter"/>Filter</a></li>
                                <li><a href="#"><i className="fa fa-search"/>Search</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div>
                    <BookShelf shelfTitle='Currently Reading' bookList={CurrentlyReading}/>
                    <BookShelf shelfTitle='Want to Read' bookList={WantToRead}/>
                    <BookShelf shelfTitle='Read' bookList={Read}/>
                </div>
                <OpenSearch/>
            </div>
        )
    }
}

export default ListBooks
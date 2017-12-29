import React from 'react'
import { Switch, Route } from 'react-router-dom'

import SearchBooks from './Components/SearchBooks'
import ListBooks from './Components/ListBooks'

import * as BooksAPI from './services/BooksAPI'
import './App.css'


class BooksApp extends React.Component {
  state = {

    books: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  constructor(){
    super()

    BooksAPI.getAll().then( function(result) {
      //this.setState({books : []})
      console.log(result)
    })
  }

  render() {

    return (

      <div className="app">
        <Switch>
            <Route exact path='/' component={ListBooks} />
            <Route exact path='/search' component={SearchBooks} />
        </Switch>
      </div>
    )
  }
}

export default BooksApp

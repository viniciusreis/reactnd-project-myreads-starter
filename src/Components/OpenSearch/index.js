import React, {Component} from 'react'
import { Link } from 'react-router-dom';

class OpenSearch extends Component {
    render() {
        return (
            <div className="fixed-action-btn">
            <Link to="/search">
                <a className="btn-floating btn-large waves-effect waves-light light-primary-color">
                    <i className="material-icons">search</i>
                </a>
            </Link>
            </div>
        )
    }
}

export default OpenSearch
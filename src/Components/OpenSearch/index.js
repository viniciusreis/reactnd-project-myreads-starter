import React, {Component} from 'react'

class OpenSearch extends Component {
    render() {
        return (
            <div className="fixed-action-btn">
                <a className="btn-floating btn-large waves-effect waves-light light-primary-color">
                    <i className="material-icons">search</i>
                </a>
            </div>
        )
    }
}

export default OpenSearch
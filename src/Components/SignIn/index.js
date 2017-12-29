import React, {Component} from 'react'

class SignIn extends Component {
    render() {
        return (
            <div id="modal1" className="modal">
                <div className="modal-content">
                    <div className="g-signin2" data-onsuccess="onSignIn"></div>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Dismiss</a>
                </div>
            </div>
        )
    }
}

export default SignIn
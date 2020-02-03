import * as React from 'react';

/** Stylesheet Imports */
import './login.component.css';
import { LoginState } from '../../containers/login.container';

export type LoginProps = {
    loginFormSubmitted: boolean,
    login: () => void
}

export default class LoginComponent extends React.Component<LoginProps, LoginState> {
    login() {
        this.props.login();
    }

    checkIfDisplayInputError(control: string) {
        return false;
    }

    hasError(control: string, error: string) {
        return false;
    }

    renderError(control: string) {
        if (this.hasError(control, 'required')) {
            return <em>Name cannot be empty</em>;
        }
    }

    renderErrors(control: string) {
        if (this.checkIfDisplayInputError(control)) {
            return <div className="invalid-form-errors">
                {this.renderError(control)}
            </div>
        }
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <div className="form">
                        <div className="form-group mb-2">
                            <label htmlFor="inputUserName">Name</label>
                            <input type="text" className="form-control" id="inputUserName" placeholder="User Name" />
                            {this.renderErrors('name')}
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="inputPassword">Password</label>
                            <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                            {this.renderErrors('password')}
                        </div>
                        <input type="button" className="btn btn-primary mb-2" value="Log in" onClick={(e) => this.login()} />
                    </div >
                </div >
            </div>
        )
    }
}

import React from 'react'
import { connect } from 'react-redux'
import { LoginAccountRequestView } from '../../shared/entities/account.views/requests/login-account.request.view'
import { RouteComponentProps } from "react-router-dom";
import * as LoginActions from '../actions/login.actions'
import LoginComponent from '../components/login/login.component';

type LoginProps = LoginContainerProps & RouteComponentProps;

export type LoginState = {
    loginFormSubmitted: boolean,
    modelRequest: LoginAccountRequestView,
}

export type LoginContainerProps = {
    login: () => void
}

class HeaderContainer extends React.Component<LoginProps, LoginState> {
    readonly state: LoginState = {
        loginFormSubmitted: false,
        modelRequest: new LoginAccountRequestView()
    }

    componentDidMount() {

    }

    async login() {
        this.setState({ loginFormSubmitted: true });
        let result = await this.props.login();
        this.setState({ loginFormSubmitted: false });
    }

    render() {
        return <LoginComponent
            loginFormSubmitted={this.state.loginFormSubmitted}
            login={this.login} />
    }
}

const mapStateToProps = (store: any) => {
    return {
        login: store.login
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        login: (modelRequest: LoginAccountRequestView) => dispatch(LoginActions.login(modelRequest))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)

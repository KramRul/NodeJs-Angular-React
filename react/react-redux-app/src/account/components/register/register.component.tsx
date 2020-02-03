import * as React from 'react';

/** Stylesheet Imports */
import './register.component.scss';

export interface Props {
    children?: React.ReactNode
}

export interface State {
}

export default class RegisterComponent extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <div>{ this.props.children }</div>
        )
    }
}

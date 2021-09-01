import React from 'react';
import IdleTimer from 'react-idle-timer';

class Layout extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            timeout: 1000 * 60 * 15,
            isTimedOut: false
        }

        this.IdleTimer = null
        this.onAction = this._onAction.bind(this)
        this.OnActive = this._onActive.bind(this)
        this.onIdle = this._onIdle.bind(this)
    }

    _onAction(e) {
        console.log('user did something', e)
        this.setState({isTimeOut: false})
    }

    _onActive(e) {
        console.log('user is active', e)
        this.setState({isTimedOut: false})
    }

    _onIdle(e) {
        console.log('user is idle', e)
        const isTimedOut = this.state.isTimedOut
        if (isTimedOut) {
           console.log("YOU HAVE BEEN IDLE!")
        } else {
            console.log("TIMED OUT!")
            this.IdleTimer.reset();
            this.setState({isTimedOut: true})
        }
    }

    render() {
        return (
            <IdleTimer
                ref={ref => { this.IdleTimer = ref }}
                element={document}
                onActive={this.onActive}
                onIdle={this.onIdle}
                onAction={this.onAction}
                debounce={250}
                timeout={this.state.timeout} />
        )
    }
}

export default Layout
import React, { Component } from 'react'

import { connect } from 'react-redux'

import { loadDataUARequest } from './actions'

class UserAgent extends Component {

    render() {
        return (
            <div>
                Olá UA,
                <br/>
                {this.props.data}
                <br/>
                <br/>
                <button type="button" onClick={() => this.props.loadData()}>Click UA</button>
                

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.ua.isFetching,
        data: state.ua.data,
        error: state.ua.error
    }
}

const mapDispachToProps = (dispach) => {
    return {
        loadData: () => dispach(loadDataUARequest())
    }
}

export default connect(mapStateToProps, mapDispachToProps)(UserAgent)
import React, { Component } from 'react'

import { connect } from 'react-redux'

import { loadDataUARequest } from './redux/actions'

class UserAgent extends Component {

    render() {
        return (
            <div className="container">
                <button className="btn btn-success" type="button" onClick={() => this.props.loadData()}>Meu Navegador</button>
                <br />
                <br />
                {
                    this.props.data.length !== 0 &&
                    <div className="alert alert-primary" role="alert">
                        {this.props.data}
                    </div>
                }
                <br />
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
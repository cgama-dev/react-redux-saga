import React, { Component } from 'react'

import { connect } from 'react-redux'

import { loadDataRequest } from './redux/actions'

class Info extends Component {

    render() {
        return (
            <div className="container">
                <br/>
                <br/>
                <button className="btn btn-primary" type="button" onClick={() => this.props.loadData()}>MEU IP</button>
                <br/>
                <br/>
                {
                    this.props.data.length !== 0 &&
                    <div className="alert alert-primary" role="alert">
                        {this.props.data}
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.ip.isFetching,
        data: state.ip.data,
        error: state.ip.error
    }
}

const mapDispachToProps = (dispach) => {
    return {
        loadData: () => dispach(loadDataRequest())
    }
}

export default connect(mapStateToProps, mapDispachToProps)(Info)
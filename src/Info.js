import React, { Component } from 'react'

import { connect } from 'react-redux'

import { loadDataRequest } from './actions'

class Info extends Component {

    teste =()=> {
        console.log('teste')
    }

    render() {
        return (
            <div>
                Olá INFO,
                <br/>
                {this.props.data}
                <br/>
                <br/>
                <button type="button" onClick={() => this.props.loadData()}>Click me</button>
                

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
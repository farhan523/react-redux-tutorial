import React from 'react'
import { buyCakes } from '../redux'
import { connect } from 'react-redux'

function CakeContainer(props) {
    console.log(props)
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes} </h2>
            <button onClick={props.buyCake}>buy cakes </button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => { dispatch(buyCakes()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)

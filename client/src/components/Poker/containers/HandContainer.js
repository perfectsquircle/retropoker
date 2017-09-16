import { connect } from 'react-redux'
import { playCard } from '../actions'
import Hand from '../components/Hand'

const mapDispatchToProps = dispatch => {
    return {
        onClick: card => {
            console.log("dispatch: play card", card)
            dispatch(playCard(card))
        }
    }
}

const HandContainer = connect(
    state => state,
    mapDispatchToProps
)(Hand);

export default HandContainer
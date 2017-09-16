import { connect } from 'react-redux'
import Field from '../components/Field'

const mapStateToProps = state => {
    return state;
}

const FieldContainer = connect(
    mapStateToProps
)(Field);

export default FieldContainer;
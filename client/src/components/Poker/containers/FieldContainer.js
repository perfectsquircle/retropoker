import { connect } from 'react-redux'
import Field from '../components/Field'

const FieldContainer = connect(
    state => state
)(Field);

export default FieldContainer;
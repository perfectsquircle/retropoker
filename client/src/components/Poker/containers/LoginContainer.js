import { connect } from 'react-redux'
import { addUser } from '../actions'
import Login from '../components/Login'
import uid from 'uid'

const mapDispatchToProps = dispatch => {
    return {
        onLogin: username => {
            dispatch(addUser(uid(), username, true))
        }
    }
}

const LoginContainer = connect(
    state => state,
    mapDispatchToProps
)(Login);

export default LoginContainer
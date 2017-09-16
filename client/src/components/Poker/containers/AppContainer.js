import { connect } from 'react-redux'
import App from '../components/App'

const AppContainer = connect(
    state => {
        return {
            currentUser: state.users.find(u => u.currentUser)
        }
    }
)(App);

export default AppContainer;
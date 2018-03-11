import {connect} from 'react-redux';
import UserPage from './UserPage';
import UserPageActions from "../../actions/UserPageActions";

const mapDispatchToProps = dispatch => {
    return {
        userValueChange: (newValue, changedField) => dispatch(
            UserPageActions.userValueChange(newValue, changedField)
        ),
        userTopicChange: (newValues) => dispatch (
            UserPageActions.userTopicChange(newValues)
        ),
        initialize: () => dispatch(
            UserPageActions.initialize()
        )
    }
};
const mapStateToProps = state => {
    return {
        user: state.UserReducer
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
import {initializeAction, itemClickedAction} from '../../actions/MainPageActions';
import {connect} from 'react-redux';
import MainPage from './HomePage';

const mapDispatchToProps = dispatch => {
    return {
        initialize: () => dispatch(
            initializeAction()
        ),
        itemClicked: (itemId) => dispatch(
            itemClickedAction(itemId)
        )
    }
};
const mapStateToProps = state => {
    return {
         homeMenu:  state.HomeMenuReducer
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

import MainPageActions from '../../actions/MainPageActions';
import {connect} from 'react-redux';
import MainPage from './HomePage';

const mapDispatchToProps = dispatch => {
    return {
        initialize: () => dispatch(
            MainPageActions.initialize()
        ),
        itemClicked: (itemId) => dispatch(
            MainPageActions.itemClicked(itemId)
        )
    }
};
const mapStateToProps = state => {
    return {
        homeMenu: state.HomeMenuReducer,
        content: state.HomeContentReducer
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

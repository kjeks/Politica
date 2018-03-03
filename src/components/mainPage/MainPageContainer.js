import MainPageTypes from "../../constants/actionTypes/MainPageTypes";
import {connect} from 'react-redux';
import MainPage from './MainPage';

const mapDispatchToProps = dispatch => {
    return {
        initialize: () => dispatch({
            type: MainPageTypes.MAIN_PAGE_INITIALIZE
        })
    }
};
const mapStateToProps = state => {
    return {
         mainPageIndex:  state.MainPageReducer
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

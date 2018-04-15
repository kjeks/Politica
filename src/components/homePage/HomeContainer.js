import MainPageActions from '../../actions/MainPageActions';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import MainPage from './HomePage';

class Home extends Component {
    componentWillMount = () => {
        this.props.initialize();
    };
    render () {
        return (
            <MainPage {...this.props}/>
        )
    }
}

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
export default connect(mapStateToProps, mapDispatchToProps)(Home);

import MainPageActions from '../HomePageActions';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import MainPage from './HomePage';

class Home extends Component {
    componentWillMount = () => {
        this.props.initialize();
    };
    render () {
        return (
            <MainPage
                homeMenuItem={this.props.homeMenuItem}
                content={this.props.content}
                itemClicked={this.props.itemClicked}
            />
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
        homeMenuItem: state.get('HomeMenuReducer'),
        content: state.get('HomeContentReducer')
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);

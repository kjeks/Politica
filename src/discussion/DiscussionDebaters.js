import React, {PureComponent} from 'react';

export default class DiscussionDebaters extends PureComponent {
    changeForDebaters =(event) => {
        this.props.onChangeNumberOfDebaters(event.target.value, 'for');
    };
    changeAgainstDebaters =(event) => {
        this.props.onChangeNumberOfDebaters(event.target.value, 'against');
    };
    render() {
        return (
            <div className="number-of-debaters-block">
                <div className="number-of-debaters__title">Number of debaters</div>
                <div className="number-of-debaters">
                    <div className="number-of-debaters__label">for</div>
                    <input type="number" max={100} value={this.props.forDebaters} onChange={this.changeForDebaters} className="number-of-debaters__value"/>
                </div>
                <div className="number-of-debaters">
                    <div className="number-of-debaters__label">against</div>
                    <input type="number"  max={100} value={this.props.againstDebaters} onChange={this.changeAgainstDebaters} className="number-of-debaters__value"/>
                </div>
            </div>
        )
    }
}
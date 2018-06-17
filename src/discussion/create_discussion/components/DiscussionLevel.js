import React, {PureComponent} from 'react';

export default class DiscussionLevel extends PureComponent {
    changeMaxLevel =(event) => {
        this.props.onChangeLevelRange(event.target.value, 'max');
    };
    changeMinLevel =(event) => {
        this.props.onChangeLevelRange(event.target.value, 'min');
    };
    render() {
        return (
            <div className="level-range-block">
                <div className="level-range-block__title">Level Range</div>
                <div className="level-range">
                    <div className="level-range__label">min</div>
                    <input type="number" min={1} value={this.props.minLevel} onChange={this.changeMinLevel} className="level-range__value"/>
                </div>
                <div className="level-range">
                    <div className="level-range__label">max</div>
                    <input type="number"  max={100} value={this.props.maxLevel} onChange={this.changeMaxLevel} className="level-range__value"/>
                </div>
            </div>
        )
    }
}
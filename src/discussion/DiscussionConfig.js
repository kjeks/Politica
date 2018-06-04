import React, {PureComponent} from 'react';
import DiscussionLevel from "./DiscussionLevel";
import DiscussionDebaters from "./DiscussionDebaters";
import Checkbox from "../common/components/Checkbox";

export default class DiscussionConfig extends PureComponent {
    render () {
        return(
           <div className="discussion-config">
               <div className="discussion-config__title">configuration</div>
               <div className="discussion-config__question">Discussion question</div>
               <textarea value={this.props.config.get('questionText')}  rows="2" cols="35" onChange={this.props.onQuestionTextChange}/>
               <DiscussionLevel
                   onChangeLevelRange={this.props.onChangeLevelRange}
                   minLevel={this.props.config.get('minLevel')}
                   maxLevel={this.props.config.get('maxLevel')}
               />
               <DiscussionDebaters
                   forDebaters={this.props.config.get('forDebaters')}
                   againstDebaters={this.props.config.get('againstDebaters')}
                   onChangeNumberOfDebaters={this.props.onChangeNumberOfDebaters}
               />
               <div className="discussion-config__options">
                   <Checkbox label="allow spectators" selected={this.props.config.get('spectatorsAllowed')} onClick={this.props.onToggleSpectatorsAllowed}/>
               </div>
           </div>
        )
    }
}
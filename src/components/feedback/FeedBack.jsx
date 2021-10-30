import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';

class FeedbackOptions extends Component {
    static defaultProps = {
      options: [],
    };
    static propTypes = {
      options: PropTypes.array.isRequired,
      onLeaveFeedback: PropTypes.func.isRequired,
    };


      
          render(){
         return(
            <div>
            {this.props.options.map(btn => (
              <button
                value={btn}
                key={btn}
                type="button"
                onClick={e => this.props.onLeaveFeedback(e)}
              >
                {btn}
              </button>
            ))}
          </div>
         ); 
        }
        
    
}
export default FeedbackOptions;
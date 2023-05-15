import React, { Component } from 'react';
import Button from '@mui/material/Button';

 export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <div>
        {options.map((option) => (
          <Button variant="outlined" key={option} onClick={() => onLeaveFeedback(option)}>
            {option}
          </Button>
        ))}
      </div>
    );
  }
}
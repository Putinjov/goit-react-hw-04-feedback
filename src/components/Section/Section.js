import React, { Component } from 'react';
import Container from '@mui/material/Container';

export class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <Container>
        <h2>{title}</h2>
        {children}
      </Container>
    );
  }
}
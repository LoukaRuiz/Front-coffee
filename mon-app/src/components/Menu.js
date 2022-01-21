import React from 'react';

const e = React.createElement;

function Test() {
    return e(
        'button',
        { onClick: () => this.setState({ liked: true }) },
        'J’aime'
    );
} 

export default Test;
import React from 'react';
import PropTypes from 'prop-types';

const FirstApp = ({greet, subtitle}) => {
    return (
        <>
            <h1>{ greet }</h1>
            <p>{ subtitle }</p>
        </>
    )
}

FirstApp.propTypes = {
    greet: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    subtitle: 'I am a subtitle.'
}

export default FirstApp;
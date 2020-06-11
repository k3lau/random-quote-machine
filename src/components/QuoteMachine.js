import React from 'react';
import Button from './Button';

const QuoteMachine = (props) => (
    <>
        { props.selectedQuote !== 'Error' ? `${props.selectedQuote.quote} - ${props.selectedQuote.author}` : "" }
        <Button buttonDisplayName="Next Quote" clickHandler={props.assignNewQuoteIndex} />
    </>
);

export default QuoteMachine;
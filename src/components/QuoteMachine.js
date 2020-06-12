import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const QuoteMachine = (props) => (
    <Card>
        <CardContent>
            { 
                <Typography id="text">
                    {props.selectedQuote.quote}
                </Typography>
            }
            {
                <Typography id="author">
                     - {props.selectedQuote.author}
                </Typography>
            }
        </CardContent>
        <CardActions>
            <Button id="new-quote" size="small" onClick={props.assignNewQuoteIndex}>Next Quote</Button>
            <IconButton
                id="tweet-quote"
                target="_blank"
                href={`http://twitter.com/intent/tweet?text=${props.selectedQuote.quote}&hastags=thewebdevcoach`}>
                <FontAwesomeIcon icon={faTwitter} size="md"></FontAwesomeIcon>
            </IconButton>
        </CardActions>
    </Card>
);

export default QuoteMachine;
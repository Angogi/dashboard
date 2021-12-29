import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import GavelIcon from '@material-ui/icons/Gavel';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import PostAddIcon from '@material-ui/icons/PostAdd';
import ShareIcon from '@material-ui/icons/Share';
import EventIcon from '@material-ui/icons/Event';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import ProgressIndicator from './ProgressIndicator';



export default function RecipeReviewCard(props) {

    const useStyles = makeStyles((theme) => ({
        root: {
          maxWidth: 500,
          
        },
        media: {
          height: 0,
          paddingTop: '56.25%', // 16:9
        },
        expand: {
          transform: 'rotate(0deg)',
          marginLeft: 'auto',
          transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
          }),
        },
        expandOpen: {
          transform: 'rotate(180deg)',
        },
       
      }));
        
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <GavelIcon/>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <ProgressIndicator />
          </IconButton>
        }
        title={props.title}
        subheader={props.date}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.initialText}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <PostAddIcon />
        </IconButton>
        <IconButton aria-label="share">
          <EventIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ContactPhoneIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{props.subTitle}</Typography>
         
          <Typography paragraph>
           {props.principalContent}
          </Typography>
          <Typography>
            {props.footContent}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
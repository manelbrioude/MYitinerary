import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import ActivitiesComp from "../components/activitycomponent";
import CommentsComp from "./commentcomponent";
const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));
function ItineraryStructure(props) {
  const classes = useStyles();

  const handleExpandClick = itineraryid => {
    if (itineraryid === props.selectedItinerary) {
      props.changeSelectedItinerary("");
    } else {
      props.changeSelectedItinerary(itineraryid);
    }
  };

  return (
    <Card key={props.itinerary._id}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <img src={props.itinerary.userpic} alt="userpic" />
          </Avatar>
        }
        title={props.itinerary.title.toUpperCase()}
        subheader={props.itinerary.usernick}
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <span className="itiDetails">
            <span>Duration: {props.itinerary.duration}</span>
            <span> Price:{props.itinerary.price}</span>
            <span> Rate: {props.itinerary.rate}</span>
          </span>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]:
              props.selectedItinerary === props.itinerary._id
          })}
          onClick={() => handleExpandClick(props.itinerary._id)}
          aria-expanded={props.changeSelectedItinerary === props.itinerary._id}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse
        in={props.selectedItinerary === props.itinerary._id}
        timeout="auto"
        mountOnEnter
        unmountOnExit
      >
        <CardContent>
          <ActivitiesComp itineraryid={props.itinerary._id}></ActivitiesComp>
          <CommentsComp itineraryid={props.itinerary._id} />
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default ItineraryStructure;

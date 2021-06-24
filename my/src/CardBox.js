import React, {Fragment} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 150,
    height: 242,
    backgroundColor: "salmon",
    borderRadius: "16px",
    margin: "auto",
    border: "3px solid black",
    padding: "6px",
  },
  media: {
    height: 65,
    borderRadius: "8px",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(6, 200px)",
    gridRowGap: "24px",
    justifyContent: "space-between",
    alignItems: "center",
    // padding: "auto",
    width: "100%",
    margin: "auto"
  }
});


function CardBox({filteredWorkoutCollection, searchWorkouts}) {
    const classes = useStyles();

    const handleChange = (event) => {
      searchWorkouts(event.target.value)
    }

    return (  
      <Fragment>
      <input type="text" placeholder="Search Workouts" onChange={(e) => handleChange(e)}></input>
     <Grid container className={classes.gridContainer}>
         {filteredWorkoutCollection.map(workout =>
            <Card key={workout.name} className={classes.root} variant="outlined">
                <CardActionArea>
                 <CardMedia 
                 className={classes.media}
                 image={workout.image} style={{display: "auto"}}
                 title="Exercise Logo"
                 />
                 <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    {workout.name}
                    </Typography>
                    <hr></hr>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Level: {workout.difficulty}
                    <br></br>
                    Duration: {workout.duration}
                    </Typography>
                 </CardContent>
                </CardActionArea>
                <CardActions text-align="center">
                    <Button onClick={() => console.log("Working!")} size="small" color="primary" style={{backgroundColor: "lightgreen"}}>
                        Sign Up
                    </Button>
                    <Button onClick={() => console.log("Also Working!")}size="small" color="primary" style={{backgroundColor: "pink"}}>
                        Dismiss
                    </Button>
                </CardActions>
            </Card>)}
     </Grid>
     </Fragment>
    )
}

export default CardBox;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Paper } from '@material-ui/core';
// import ImageIcon from '@material-ui/icons/Image';
// import WorkIcon from '@material-ui/icons/Work';
// import BeachAccessIcon from '@material-ui/icons/BeachAccess';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '180px',
      maxWidth: "200px",
    //   backgroundColor: theme.palette.background.paper,
      padding: "6px",
      borderRadius: "16px",
      justifyContent: "space-around",
      backgroundColor: "lightgreen",
      margin: "auto"
    },
    paper: {
        borderRadius: "16px",
        alignItems: "center",
        justifyItems: "center",
        minWidth: "250px",
        backgroundColor: "salmon"
    }
  }));

function CompletedWorkouts( {completedWorkouts } ) {
    const classes = useStyles();

    return (
        // <ul style={{listStyleType: "none"}} className="completed-div">
        <Paper className={classes.paper}>
            <h1 style={{color: "green", textAlign: "center"}}>Completed</h1>
            {completedWorkouts.map(workout =>  
            <p>
                 <List className={classes.root}>
                 <ListItem>
                   <ListItemAvatar>
                     <Avatar size="small" style={{color: "green", backgroundColor: "green"}}>
                     </Avatar>
                   </ListItemAvatar>
                   <ListItemText primary={<strong>{workout.name}</strong>} secondary={workout.date} />
                 </ListItem>
               </List>
               </p> )}   
        </Paper>
    )
}

export default CompletedWorkouts

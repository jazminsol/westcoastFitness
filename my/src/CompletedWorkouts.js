import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
// import ImageIcon from '@material-ui/icons/Image';
// import WorkIcon from '@material-ui/icons/Work';
// import BeachAccessIcon from '@material-ui/icons/BeachAccess';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
    //   backgroundColor: theme.palette.background.paper,
      padding: "6px",
      borderRadius: "16px",
      justifyContent: "space-around",
      backgroundColor: "salmon"
    },
  }));

function CompletedWorkouts( {completedWorkouts } ) {
    const classes = useStyles();

    return (
        // <ul style={{listStyleType: "none"}} className="completed-div">
        <div>
            <h1 style={{color: "white", textAlign: "center"}}>Completed</h1>
            {completedWorkouts.map(workout =>  
            <li>
                 <List className={classes.root}>
                 <ListItem>
                   <ListItemAvatar>
                     <Avatar style={{color: "green", backgroundColor: "white"}}>
                       [X]
                     </Avatar>
                   </ListItemAvatar>
                   <ListItemText primary={<strong>{workout.name}</strong>} secondary={workout.date} />
                 </ListItem>
               </List>
               </li> )}   
        </div>
    )
}

export default CompletedWorkouts

// import React from 'react'
// // import 'semantic-ui-css/semantic.min.css'
// // import {Card, Image, Button} from "semantic-ui-react"
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import { Grid } from '@material-ui/core'

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 148,
//     height: 242
//   },
//   media: {
//     height: 60,
//   },
// });

// export default function MediaCard( {workoutCollection } ) {
//   const classes = useStyles();

//     return (
//     <Grid>
//       {workoutCollection.map(workout =>
//       <Grid item xs={8}>
//       <Card key={workout.name} className={classes.root} variant="outlined">
//         <CardActionArea>
//           <CardMedia 
//             className={classes.media}
//             image={workout.image} style={{display: "auto"}}
//             title="Exercise Logo"
//             />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="h2">
//                 {workout.name}
//               </Typography>
//               <Typography variant="body2" color="textSecondary" component="p">
//                 Challenge Level: {workout.difficulty}
//                 <br></br>
//                 Duration: {workout.duration}
//               </Typography>
//             </CardContent>
//         </CardActionArea>
//         <CardActions text-align="center">
//           <Button size="small" color="primary" style={{backgroundColor: "lightgreen"}}>
//             Sign Up
//           </Button>
//           <Button size="small" color="primary" style={{backgroundColor: "pink"}}>
//             Dismiss
//           </Button>
//         </CardActions>
//       </Card> 
//       </Grid>)}
//     </Grid>
//     )
// }



/* <Card.Group itemsPerRow={4}>
{workoutCollection.map(workout => 
   <Card key={workout.name}>
       <Image src={workout.image} className="workout-picture"/>
       <Card.Content className="card-bottom">
           <Card.Header>{workout.name}</Card.Header>
           <Card.Meta>
               <span className="duration">Duration: {workout.duration}</span>
           </Card.Meta>
           <Card.Description>
               Challenge Level: {workout.difficulty}
           </Card.Description>
       </Card.Content>
   </Card>)}
</Card.Group> */


            //    <div key={workout.name} className="workout-card">
            //        <img className="card-image" alt="workout" src={workout.image} />
            //        <hr></hr>
            //        <div>
            //        <h5>Activity: {workout.name}</h5>
            //        <h5>Level: {workout.difficulty}</h5>
            //        <h5>Time Spent:{workout.duration}</h5>
            //        </div>
            //        <hr></hr>
            //        <div className="sign-me-up-button">
            //        <button>Sign me up!</button>
            //        </div>
            //    </div>


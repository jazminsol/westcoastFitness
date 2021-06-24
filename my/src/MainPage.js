import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    borderRadius: "16px",
    padding: "1em",
    backgroundColor: "salmon"
  },
  media: {
    height: 200,
  },
});

export default function MainPage( {addWorkout } ) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const [formData, setFormData] = useState({
      name: "",
      difficulty: "",
      duration: ""
  })

  const handleFormChange = (event) => {
      console.log(event.target.value)
      setFormData(
          {...formData,
        [event.target.name]: event.target.value}
      );
  }

  const submitWorkoutForm = (event) => {
      event.preventDefault();
      alert("Submitted Workout!")
      fetch(`http://localhost:3000/completed-workouts`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
      })
      .then(res => res.json())
      .then(newWorkout => addWorkout(newWorkout))
  }

  return (
    <div className="main-page-div">
        <div className="available-workouts-card">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://i.pinimg.com/originals/6a/3d/2e/6a3d2e7f41c7cd81a7905087df1e19fd.jpg"
          title="Exercising Man"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Available Workouts
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Click here for the current workouts WestCoast Fitness is offering, we hope you enjoy!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleClickOpen}>
            <NavLink
            to="/available-workouts"
            exact
            >Explore
            </NavLink>
        </Button>
      </CardActions>
    </Card>
    </div>



    <div className="enter-workouts-card">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://png.pngtree.com/png-vector/20190116/ourmid/pngtree-bme-style-cartoon-hand-drawn-notebook-pen-and-paper-png-image_378866.jpg"
          title="Noteboard ClipArt"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Enter A Workout
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            For when you complete an "at-home" workout, but don't want to miss
            out on tracking those gains!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button style={{textDecoration: "underline"}} size="small" color="primary" onClick={handleClickOpen}>
            Enter
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" useref="entry-form">
        <DialogTitle id="form-dialog-title">Enter Your Workout!</DialogTitle>
        <form onSubmit={(e) => submitWorkoutForm(e)}>
        <DialogContent>
          <DialogContentText>
            Please make sure to include what exercise you did, how long it took, and
            how difficult others might find it.
          </DialogContentText>
          <TextField
            autoFocus
            name="name"
            margin="dense"
            label="Exercise"
            type="text"
            fullWidth
            // value={formData.name}
            onChange={handleFormChange}
          />
            <TextField
            autoFocus
            name="duration"
            margin="dense"
            label="Duration"
            type="text"
            fullWidth
            // value={formData.duration}
            onChange={handleFormChange}
          />
            <TextField
            autoFocus
            name="difficulty"
            margin="dense"
            label="Difficulty"
            type="text"
            fullWidth
            // value={formData.difficulty}
            onChange={handleFormChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} type="submit" color="primary">
            Submit
          </Button>
        </DialogActions>
        </form>
      </Dialog>
      </CardActions>
    </Card>
    </div>



    <div className="workout-folder-card">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://i.pinimg.com/originals/5a/61/c8/5a61c8022e00df65106f931360d93da0.png"
          title="Heart Folder"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Workout Folder
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Check in with your Workout Folder to see upcoming workouts and completed workouts!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        <NavLink
            to="/completed-workouts"
            exact
            >Enter
            </NavLink>
        </Button>
      </CardActions>
    </Card>
    </div>
    </div>
  );
}


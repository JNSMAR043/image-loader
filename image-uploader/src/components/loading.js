import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './loading.css';

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
}));

const Loading = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const displayLoader = () => {
        setOpen(true);
    }
    console.log('Open: ', open);
    console.log('Classes: ', classes.backdrop)
    return (
            <div className="progress-bar-wrapper">
                <Backdrop className={classes.backdrop} open={open}>
                    <CircularProgress color="primary" className="progress-spinner"/>
                </Backdrop>
                <h1>Uploading image</h1>
            </div>
        )
}

export default Loading;
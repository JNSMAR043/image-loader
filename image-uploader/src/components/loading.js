import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import './loading.css';

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
    spinner:{
        zIndex: theme.zIndex.drawer + 1,
        display: 'block',
        margin: 'auto',
        paddingTop: '20px',
        paddingBottom: '20px',
    }
}));

const Loading = () => {
    const classes = useStyles();

    return (
        <div className={classes.spinner}>
            <CircularProgress color="primary"/>
        </div>
        )
}

export default Loading;
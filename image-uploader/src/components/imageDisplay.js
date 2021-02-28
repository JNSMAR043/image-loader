import React from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import CloudDoneIcon from '@material-ui/icons/CloudDone';
import './imageDisplay.css';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
    },
    icon: {
        display: 'block',
        margin: 'auto',
    },
    heading: {
        textAlign: 'Center'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    iconWrapper: {
        padding: '20px 0'
    },
    textWrapper: {
        marginTop: '5px',
        float: 'left',
        width: '80%',
    },
    buttonWrapper: {
        marginTop: '5px',
        float: 'right',
        width: '15%',
    }
}));

const ImageDisplay = () => {
    const classes = useStyles();


    return (
        <Card className={classes.root}>
            <div className={classes.iconWrapper}>
                <CloudDoneIcon
                    className={classes.icon}
                    colour="primary"
                />
            </div>
            <h4
                className={classes.heading}
            >
                Uploaded Successfully!
            </h4>
            <CardMedia
                className={classes.media}
                image="../Nunes.jpg"
                title="User Image"
            />
            <div>
                <TextField
                    className={classes.textWrapper}
                    id="url-text"
                    defaultValue="Image URL"
                    variant="filled"
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <Button
                    className={classes.buttonWrapper}
                    variant="contained"
                    color="primary">
                    Copy
                </Button>
            </div>
        </Card>
    )
}

export default ImageDisplay;
import React from "react";
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import CloudDoneIcon from '@material-ui/icons/CloudDone';

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

function ImageDisplay(props) {
    const classes = useStyles();

    const copyUrl =() => {
        var urlText = document.getElementById('url-text');
        urlText.select();
        urlText.setSelectionRange(0, 99999);

        document.execCommand('copy');
    }

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
                image={props.imageUrl}
                title="User Image"
            />
            <div>
                <TextField
                    className={classes.textWrapper}
                    id="url-text"
                    defaultValue={props.imageUrl}
                    variant="filled"
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <Button
                    className={classes.buttonWrapper}
                    variant="contained"
                    color="primary"
                    onClick={copyUrl}>
                    Copy
                </Button>
            </div>
        </Card>
    )
}

export default ImageDisplay;

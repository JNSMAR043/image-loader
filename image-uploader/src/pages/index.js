import React, { useCallback } from 'react'
import AWS from 'aws-sdk';
import Layout from '../components/layout'
import SEO from '../components/seo'
import Dropzone from '../components/dropzone'

import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: '100%',
//     backgroundColor: theme.palette.background.paper,
//   },
//   nested: {
//     paddingLeft: theme.spacing(4),
//   },
// }));

const IndexPage = () => {

  //const classes = useStyles()
  const [features, setFeatures] = React.useState(true)
  const [info, setInfo] = React.useState(true)
  var bucketName = "imageuploaderbucket";

  function handleClick(id) {
    switch (id) {
      case "features":
        setFeatures(!features)
        break;
      case "info":
        setInfo(!info)
        break
    }
  }

  function addPhoto(acceptedFiles, image) {
      // var file = files[0];
      // var fileName = file.name;

      var imageKey = encodeURIComponent(acceptedFiles[0].name.toString());
      var photoKey = 'ImageUploader6/' + imageKey;
      console.log(photoKey);

      // Use S3 ManagedUpload class as it supports multipart uploads
      var upload = new AWS.S3.ManagedUpload({
          params: {
            Bucket: bucketName,
            Key: photoKey,
            Body: image
          }
      });
      //set loader to show here
      var promise = upload.promise();

      promise.then(
          function(data) {
            alert("Successfully uploaded photo.");
            console.log(data.location);
          },
          function(err) {
          return alert("There was an error uploading your photo: ", err.message);
          }
      );
  };

  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        const binaryStr = reader.result;
        console.log('Binary String');
        console.log(binaryStr);
        addPhoto(acceptedFiles, binaryStr);
      }
      reader.readAsArrayBuffer(file);
    });

    console.log(acceptedFiles);
    var bucketRegion = "eu-west-1";
    var IdentityPoolId = "eu-west-1:394f4cff-dc30-4709-80c5-04d85a7e08c0";

    AWS.config.update({
    region: bucketRegion,
    credentials: new AWS.CognitoIdentityCredentials({
            IdentityPoolId: IdentityPoolId
        })
    });

    var s3 = new AWS.S3({
        apiVersion: "2006-03-01",
        params: { Bucket: bucketName }
    });

  }, []);

  return (
    <Layout>
      <SEO title="Home" />
          <h1>Image Uploader Tool</h1>
          <br/>
          <br/>
          <h1 className="text-center">Drag and drop images</h1>
          <Dropzone onDrop={onDrop} accept={"image/*"}/>
      <Divider />
    </Layout>
  )
}

export default IndexPage

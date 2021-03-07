import React, { useCallback } from 'react'
import AWS from 'aws-sdk';
import Layout from '../components/layout'
import SEO from '../components/seo'
import Dropzone from '../components/dropzone'
import ImageDisplay from '../components/imageDisplay'
import Loading from '../components/loading'
import Divider from '@material-ui/core/Divider'


const IndexPage = () => {
  // determine which page to render
  const [showDropozone, toggleShowDropozone] = React.useState(true);
  const [showSpinner, toggleShowSpinner] = React.useState(false);
  const [showImagePage, toggleShowImagePage] = React.useState(false);
  const [locationImage, setLoacationImage] = React.useState('');


  var bucketName = "imageuploaderbucket";

  function addPhoto(acceptedFiles, image) {
      var imageKey = encodeURIComponent(acceptedFiles[0].name.toString());
      var photoKey = 'ImageUploader6/' + imageKey;

      // Use S3 ManagedUpload class as it supports multipart uploads
      var upload = new AWS.S3.ManagedUpload({
          params: {
            Bucket: bucketName,
            Key: photoKey,
            Body: image
          }
      });
      //set loader to show
      var promise = upload.promise();

      toggleShowSpinner(true);
      toggleShowDropozone(false);

      promise.then(
          function(data) {
            setLoacationImage(data.Location)

            toggleShowSpinner(false);
            toggleShowImagePage(true);
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
        addPhoto(acceptedFiles, binaryStr);
      }
      reader.readAsArrayBuffer(file);
    });

    var bucketRegion = "eu-west-1";
    var IdentityPoolId = "eu-west-1:394f4cff-dc30-4709-80c5-04d85a7e08c0";

    AWS.config.update({
    region: bucketRegion,
    credentials: new AWS.CognitoIdentityCredentials({
            IdentityPoolId: IdentityPoolId
        })
    });

  }, []);

  return (
    <Layout>
      <SEO title="Home" />
          <h1>Image Uploader Tool</h1>
          <br/>
          <br/>
          <h1 className="text-center">Drag and drop images</h1>
          { showDropozone ? <Dropzone onDrop={onDrop} accept={"image/*"}/> : '' }
          { showSpinner ? <Loading /> : '' }
          { showImagePage ? <ImageDisplay imageUrl={locationImage} /> : '' }
      <Divider />
    </Layout>
  )
}

export default IndexPage

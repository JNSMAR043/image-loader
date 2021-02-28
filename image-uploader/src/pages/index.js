import React, { useCallback } from 'react'

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

  const onDrop = useCallback(acceptedFiles => {
    debugger;
    console.log(acceptedFiles)
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

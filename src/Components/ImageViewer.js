import React, { useState } from 'react'
import { FileUploader } from 'react-drag-drop-files';
import { Box, Typography, Container, Card, CardContent, Stack, Button } from '@mui/material'


const ImageViewer = () => {
  const [file, setFile] = useState();
  const [image, setImage] = useState();

  const viewHandler = async () => {
    //console.log('view clicked')
    const reader = new FileReader();
    //console.log("reader:", reader);

    reader.readAsDataURL(file);

    await new Promise((resolve) => setTimeout(resolve, 3000))

    // console.log("viewHandler...", reader.result);
    setImage(reader.result)

    // reader.onLoad = () => {
    //     let result = reader.result
    //     console.log("read result:", result);
    // //   setImage(reader.result);
    // //   console.log("test",reader.result)
    // }
    console.log("after load....");
  }

  const clearHandler = () => {
    setFile(null);
    setImage(null);
  }

  console.log(file)
  return (
    <Box sx={{ height: '50vh', bgcolor: '#5f9ea0' }}>
      <Container sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'left'}}>
        <Typography variant='h5' gutterBottom pt={2} color="lightpink">
          Image Viewer
        </Typography>

        <Card sx={{maxWidth:'600px', bgcolor: '#fff8dc'}}>
          <CardContent>
            <Stack direction="row" justifyContent="center">
              <FileUploader 
                multiple={false}
                name="file"
                type={['jpeg', 'png', 'gif']}
                handleChange={(file) => setFile(file)}
                />
            </Stack>
            <Typography align="center">
              {file? `File name: ${file.name}`: 'No file uploaded yet!'}
            </Typography>
            <Stack direction="row" justifyContent="space-between" mt={2}>
              <Button variant="contained" onClick={viewHandler} disabled={!file}>View</Button>
              <Button variant="contained" color="error" onClick={clearHandler} disabled={!file}>Clear</Button>
            </Stack>
          </CardContent>
        </Card>

        {image && <img src={image} style={{width:'90%', marginTop:'20px', paddingBottom:'40px'}} />}
      </Container>
     </Box>
  )
}

export default ImageViewer;
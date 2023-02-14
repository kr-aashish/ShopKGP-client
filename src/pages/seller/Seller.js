import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  IconButton,
  makeStyles,
  TextField,
  Typography
} from "@material-ui/core";
import {
  AddCircleOutline as AddCircleOutlineIcon,
  PhotoCamera as PhotoCameraIcon
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: theme.palette.secondary.main
  },
  imageWrapper: {
    position: "relative"
  },
  imagePreview: {
    width: "100%",
    paddingTop: "100%"
  },
  imagePlaceholder: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.grey[300]
  },
  iconButton: {
    position: "absolute",
    bottom: theme.spacing(1),
    right: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white
  },   
  input: {
    height: 60,
  },
  addIcon: {
    fontSize: "48px",
    backgroundColor: "var(--orange)",
    borderRadius: "50%",
    color: "white",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  addButton: {
    marginTop: theme.spacing(3),
    color: "white",
    backgroundColor: "orange",
    "&:hover": {
      backgroundColor: "darkorange",
    },
  },
}));

function SellerInterface() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleAddProduct = () => {
    // TODO: Implement product upload logic
  };

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" align="center">
          Add a Product
        </Typography>
      </Box>
      <Card>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              <AddCircleOutlineIcon className={classes.addIcon}/>
            </Avatar>
          }
          title="Product Information"
        />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Title"
                fullWidth
                value={title}
                onChange={handleTitleChange}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Price"
                type="number"
                fullWidth
                value={price}
                onChange={handlePriceChange}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                fullWidth
                value={description}
                onChange={handleDescriptionChange}
                margin="normal"
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box mt={2} mb={1}>
                <Typography variant="subtitle1">
                  Add Image
                </Typography>
              </Box>
              <Card className={classes.imageWrapper}>
                {image ? (
                  <CardMedia
                    className={classes.imagePreview}
                    image={image}
                    title="Product Preview"
                  />
                ) : (
                  <Box className={classes.imagePlaceholder}>
                    <Typography >add</Typography>
                  </Box>
                )}
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  type="file"
                  onChange={handleImageChange}
                />
                <label htmlFor="contained-button-file">
                <IconButton
                    className={classes.iconButton}
                    component="span"
                    style={{ fontSize: 24, 
                        backgroundColor: "var(--orange)",}}
                    >
                    <PhotoCameraIcon />
                </IconButton>
                </label>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} />
          </Grid>
        </CardContent>
      </Card>
      <Box display="flex" justifyContent="flex-end" my={4}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddProduct}
          disabled={!title || !description || !price || !image}
          className={classes.addButton}
        >
          Add Product
        </Button>
      </Box>
    </Container>
  );
}  

export default SellerInterface;
import { Box, Rating, Typography } from "@mui/material";
import React from "react";
import { useStateValue } from "../../../StateProvider";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, image, title, price, rating, hideButton, description, category, sellerId }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
      <Box
          display={"flex"}
          alignItems="center"
          mt={3}
          mb={3}
          mr={4}
          border={1}
          p={5}
          borderRadius={5}
          borderColor="#ABA9A9"
      >
        <img
            src={image}
            alt=""
            style={{
              height: "auto",
              maxHeight: "200px",
              objectFit: "cover",
              marginRight: "30px",
            }}
        />
        <Box>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            {title}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {description}
          </Typography>
          <Box
              bgcolor="#F4F4F4"
              display="inline-block"
              borderRadius={10}
              p={1}
              mt={1}
              mb={1}
          >
            <Typography variant="subtitle2">{category}</Typography>
          </Box>
          <Typography variant="h6" fontWeight="bold">
              ₹{price}
          </Typography>
          {/*<Rating*/}
          {/*  name="read-only"*/}
          {/*  value={rating}*/}
          {/*  readOnly*/}
          {/*  style={{ marginTop: "10px" }}*/}
          {/*/>*/}

          {!hideButton && (
              <SecondaryButton onClick={removeFromBasket} text="Remove from cart" />
          )}
        </Box>
      </Box>
  );
}

export default CheckoutProduct;

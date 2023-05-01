import { Button, Rating } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import "./Product.css";
import seller from "../../pages/seller/Seller";

function Product({ id, title, image, price, rating, description, sellerId, category}) {
    const [{ basket }, dispatch] = useStateValue();
    const navigate = useNavigate();

    const goToPath = (path) => {
        navigate(path);
    };

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
                description: description,
                category: category,
                sellerId:sellerId,
            },
        });
    };

    return (
        <div className="product">
            <div className="product__info">
                <p className="product__title">{title}</p>
                <p>{description}</p>
                <p className="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
            </div>

            <img src={image} alt={title} />
            <div className="product__category"><p>{category}</p></div>

            {/*<Rating name="read-only" value={rating} readOnly />*/}
            <Box
                display={"flex"}
                marginTop="15px"
                alignItems="center"
                justifyContent={"space-evenly"}
                width="100%"
            >
                <PrimaryButton onClick={addToBasket} text="add to cart" />
                <SecondaryButton
                    onClick={() => goToPath(`/detail/${id}`)}
                    text="details"
                />
            </Box>
        </div>
    );
}

export default Product;

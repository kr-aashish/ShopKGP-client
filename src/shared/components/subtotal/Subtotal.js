import React, {useContext} from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../../StateProvider";
import { getBasketTotal } from "../../../reducer";
import { Box, Divider, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PrimaryButton from "../buttons/PrimaryButton";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';
import Swal from 'sweetalert2';
import { loadStripe } from '@stripe/stripe-js';
import {UserContext} from "../../../context/authContext/Context";
// import dotenv from 'dotenv';
// dotenv.config();
const stripePromise = loadStripe('pk_test_51MuCNiSBkSkzOkBhFpBbWVmbisUCRctfozyelUn9MXSaZj4SwIaqDZfoJoBpPpl0i8cYcAXzc0bKNdMBqIaQxSVb00KYjmav0K');

function ElementTable({ data }) {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent="space-between"
        pt={"15px"}
        pb={"15px"}
      >
        <p>{data?.first}</p>
        <strong>{data?.second}</strong>
      </Box>
      <Divider />
    </>
  );
}

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    const { user_dispatch, state } = useContext(UserContext);

    const userMetadata = state.data.metadata;
    const stripeItems = basket.map(item => ({
        quantity: 1,

        price_data: {
            currency: "inr",
            unit_amount: item.price * 100,
            product_data: {
                name: item.title,
                images: [item.image],
                description: item.description,
            }
        }
    }));
    const createCheckoutSession = async () => {
        const stripe = await stripePromise;

        const response = await axios.post(`${process.env.REACT_APP_API_URL}/checkout`, {
            userMetadata,
            stripeItems,
            basket
        });
        console.log(response);

        const result = await stripe.redirectToCheckout({sessionId: response.data.id});
        if (result.error)
            alert(result.error.message);
    }

  return (
    <Box
      style={{
        backgroundColor: "#EFF5F5FB",
        borderRadius: "20px",
        padding: "20px",
        width: "100%",
      }}
    >
      <ElementTable
        data={{
          first: "Subtotal",
          second: `Rs. ${getBasketTotal(basket).toFixed(2)}`,
        }}
      />
      <ElementTable
        data={{
          first: "Shipping Charges",
          second: `Rs. ${(getBasketTotal(basket) * 0.03).toFixed(2)}`,
        }}
      />
      <ElementTable
        data={{
          first: "Total",
          second: `Rs. ${(
            getBasketTotal(basket) +
            getBasketTotal(basket) * 0.03
          ).toFixed(2)}`,
        }}
      />
      <p style={{ marginTop: "10px", fontSize: "12px" }}>
        *Total price excludes shipping, and service charges
      </p>

    <PrimaryButton
        text={"Checkout"}
        onClick = {createCheckoutSession } />
    </Box>
  );
}

export default Subtotal;

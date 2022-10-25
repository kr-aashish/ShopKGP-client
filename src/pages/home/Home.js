import React from "react";
import "./Home.css";
import Product from "../../components/product/Product";
import { Grid } from "@mui/material";
import { data } from "../../data/products";
import { Box } from "@mui/system";
import PrimarySearchAppBar from "../../components/appbar/Appbar";

function Home() {
  return (
    <>
      <Grid container paddingTop={"5px"}>
        {data.map((v, index) => (
          <Grid
            key={index}
            xs={12}
            sm={6}
            md={4}
            display={"flex"}
            alignItems="center"
            justifyContent={"center"}
          >
            <Product
              id={v.id}
              title={v.title}
              price={v.price}
              rating={v.rating}
              image={v.image}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Home;

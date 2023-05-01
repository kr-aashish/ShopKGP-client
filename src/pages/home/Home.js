import React, {useContext} from "react";
import "./Home.css";
import Product from "../../components/product/Product";
import { Grid, CircularProgress } from "@mui/material";
import { data } from "../../data/products";
import Footer from "../../components/footer/Footer";

// import devConfig from '../../config/dev';
import { useState, useEffect} from 'react';
import axios from 'axios';
import SearchIcon from "@mui/icons-material/Search";
import {alpha, styled} from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
// import { UserContext } from "../../user_context/Context";

const Search = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
}));

const SearchBox = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius + 5,
    borderColor: theme.palette.divider,
    borderWidth: 1,
    backgroundColor: alpha(theme.palette.primary.main, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.primary.green, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 10,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
    },
    maxWidth: 500, // Set a maximum width for the search box
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
        fontSize: "1.1rem", // Increase the font size of the input text
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 1), // Reduce the horizontal padding of the search icon
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1, // Increase the z-index of the search icon to make it visible over the input text
}));

export const Loading = () => {
    return (
        <div
            style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}
        >
            <CircularProgress />
        </div>
    );
};

function Home() {
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(allProducts);

    // const { state } = useContext(UserContext);
    // console.log("This is the state", state);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await axios.get(`${process.env.REACT_APP_API_URL}/product/all`).then((response) => {
                    setAllProducts(response.data);
                    // setAllProducts(data);

                    setFilteredProducts(response.data);
                });

            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    if (loading) {
        // return <CircularProgress /> // Show the spinner while loading
        return <Loading />;
    }

    if (error) {
        // return <>Error: {error.message}</>
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "100vh",
                }}
            >
                <h1>Oops! Something went wrong</h1>
                {/*<p>{error.message}</p>*/}
            </div>
        );
    }

    const handleSearch = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        setSearchTerm(searchTerm);
        const filteredProducts = allProducts.filter(
            (product) =>
                product.description.toLowerCase().includes(searchTerm)
            || product.category.toLowerCase().includes(searchTerm)
                // ||
            // product.brand.toLowerCase().includes(searchTerm) ||
            // product.color.toLowerCase().includes(searchTerm) ||
            // product.size.toLowerCase().includes(searchTerm)
        );
        setFilteredProducts(filteredProducts);
    };

    return (
        <>
            <Search>
                <SearchBox
                    style={{
                        backgroundColor: "white",
                        border: "0.1px solid rgb(110, 110, 110)",
                    }}
                >
                    <SearchIconWrapper>
                        <SearchIcon style={{ color: "black" }} />
                    </SearchIconWrapper>
                    <StyledInputBase
                        sx={{
                            borderColor: "black",
                            color: "black",
                        }}
                        placeholder="Search…"
                        inputProps={{ "aria-label": "search" }}
                        onChange={handleSearch}
                    />
                </SearchBox>
            </Search>

      <Grid container paddingTop={"5px"}>
        {filteredProducts.map((v, index) => (
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
              id={v.itemId}
              title={v.name}
              price={parseInt(v.price)}
              rating={5}
              image={v.imageUrl}
              description={v.description}
              category={v.category}
              sellerId={v.sellerId}
            />
          </Grid>
        ))}
      </Grid>
      <Footer/>
    </>
  );
}

export default Home;

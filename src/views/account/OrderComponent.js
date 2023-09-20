import React, {useContext } from 'react';
import { useState, useEffect} from 'react';
import Box from "@mui/material/Box";
import {Grid, Paper, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import {makeStyles} from "@material-ui/core";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import axios from "axios";
import {UserContext} from "../../context/authContext/Context";
import WhatsAppImg from '../../assets/WhatsApp.svg.webp';
import { Loading } from '../home/Home'


const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: theme.spacing(1),
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2),
        backgroundColor: '#F2F2F2',
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(3),
        },
    },
    orderHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            marginBottom: theme.spacing(3),
        },
    },
    orderNumber: {
        fontWeight: 'bold',
        fontSize: '1rem',
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.25rem',
        },
    },
    orderDate: {
        fontSize: '0.875rem',
        color: '#565959',
        [theme.breakpoints.up('sm')]: {
            fontSize: '1rem',
        },
    },
    orderPrice: {
        fontWeight: 'bold',
        fontSize: '1rem',
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.25rem',
        },
    },
    orderProducts: {
        marginTop: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing(3),
        },
    },
    productImage: {
        // maxHeight: '200px',
        // width: "20%",
        maxWidth: '100%',
        maxHeight: '200px',
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            marginRight: theme.spacing(3),
        },
    },
    productName: {
        fontWeight: 'bold',
        fontSize: '1rem',
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.25rem',
        },
    },
    productDescription: {
        fontSize: '0.875rem',
        color: '#565959',
        [theme.breakpoints.up('sm')]: {
            fontSize: '1rem',
        },
    },
    productQuantity: {
        fontSize: '0.875rem',
        fontWeight: 'bold',
        color: '#565959',
        marginTop: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
            fontSize: '1rem',
            marginTop: theme.spacing(2),
        },
    },
    productPrice: {
        fontSize: '1rem',
        fontWeight: 'bold',
        marginTop: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.25rem',
            marginTop: theme.spacing(2),
        },
    },
    chatIcon: {
        color: '#25D366',
        cursor: 'pointer',
        width: '30px',
        height: '30px',
        marginLeft: '10px',
    },
}));
const OrderComponent = () => {
    const classes = useStyles(); // call useStyles and store the result in a variable

    const { state } = useContext(UserContext);
    const userId = state.data.metadata.userId;

    const [allOrders, setAllOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);
    // setAllOrders(allOrdersSample);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await axios.get(`${process.env.REACT_APP_API_URL}/order/user/${userId}`).then((response) => {
                    // setAllOrders(response.data);
                    setAllOrders(response.data.reverse());
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
        return <Loading/>;
    }

    const openWhatsAppChat = (number) => {
        const message = `Hello, I am interested in your products listed on ShopKGP. Please provide me with more details.`;
        const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    // console.log(allOrders[0].products[0].seller.contactNumber);

    return (
        <Box flex={4} p={2}>
            {allOrders.map((order) => (
                <Paper key={order.orderId} className={classes.root}>
                    <div className={classes.orderHeader}>
                        <Typography variant="h6" className={classes.orderNumber}>
                            {new Date(order.createdAt).toLocaleString('en-US', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: 'numeric',
                                minute: 'numeric'
                            })
                            }
                        </Typography>
                        <Typography >
                            {/*<a href={`https://wa.me/${order.sellerContactNumber}`} target="_blank">*/}
                            {/*    <WhatsAppIcon className={classes.chatIcon}/>*/}
                            {/*</a>*/}

                            {/*<WhatsAppIcon className={classes.chatIcon}*/}
                            {/*              onClick={() =>*/}
                            {/*                  // openWhatsAppChat(order.sellerContactNumber)*/}
                            {/*                  openWhatsAppChat(8084662242)*/}
                            {/*                } />*/}

                            <Typography>
                                <img src={WhatsAppImg} alt="WhatsApp" className={classes.chatIcon} onClick={() =>
                                    openWhatsAppChat(order.products[0].seller.contactNumber)
                                }style={{width: '40px', height: '40px'}}
                                />
                            </Typography>
                        </Typography>
                        <Typography variant="h6" className={classes.orderPrice}>
                            {order.price}
                        </Typography>
                    </div>
                    <div className={classes.orderProducts}>
                        <Grid container spacing={3}>
                            {order.products.map((product) => (
                                <Grid item xs={12} sm={6} key={product.id}>
                                    <Box display="flex" alignItems="center">
                                        <img src={product.imageUrl} alt={product.name} className={classes.productImage} />
                                        <div>
                                            <Typography variant="h6" className={classes.productName}>
                                                {product.name}
                                            </Typography>
                                            <Typography variant="body1" className={classes.productDescription}>
                                                {product.description}
                                            </Typography>
                                            {/*<Typography variant="body1" className={classes.productQuantity}>*/}
                                            {/*    Quantity: {1}*/}
                                            {/*</Typography>*/}
                                            <Typography variant="body1" className={classes.productPrice}>
                                                Price: {product.price}
                                            </Typography>
                                            {/*<Typography className={classes.chatIcon}>*/}
                                            {/*    <a href="https://wa.me/1234567890" target="_blank">*/}
                                            {/*        <WhatsAppIcon className={classes.chatIcon}/>*/}
                                            {/*    </a>*/}
                                            {/*</Typography>*/}
                                        </div>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </Paper>
            ))}
            {allOrders.length === 0 &&
                <Typography variant="h4" align="center" style={{marginTop: '2rem'}}>
                    You have not placed any orders yet!
                </Typography>
            }
        </Box>
    );
};

export default OrderComponent;

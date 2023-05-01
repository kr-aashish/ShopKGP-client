import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: '#f6f6f6',
    },
    icon: {
        fontSize: '6rem',
        color: theme.palette.success.main,
        marginBottom: theme.spacing(2),
    },
    message: {
        fontSize: '2rem',
        fontWeight: 600,
        marginBottom: theme.spacing(2),
    },
    link: {
        fontSize: '1.5rem',
        color: theme.palette.primary.main,
        textDecoration: 'none',
        marginTop: theme.spacing(2),
    },
}));

function OrderConfirmationPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CheckCircleIcon className={classes.icon} />
            <div className={classes.message}>
                Thank you! Your order has been placed.
            </div>
            <Link to="/" className={classes.link}>
                Continue Shopping
            </Link>
            <Link to="/account/:id" className={classes.link}>
                Go to my orders
            </Link>
        </div>
    );
}

export default OrderConfirmationPage;
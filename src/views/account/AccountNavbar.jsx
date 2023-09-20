import React, {useState} from 'react';
import {List, ListItemButton, ListItemIcon, ListItemText, Stack, useTheme} from "@mui/material";
import Box from "@mui/material/Box";
import {LocationOnTwoTone, Person, Settings, ShoppingCart} from "@mui/icons-material";
import AccountContent from "./AccountContent";
import OrderComponent from "./OrderComponent";
import Typography from "@mui/material/Typography";
import PrimaryButton from "../../shared/components/buttons/PrimaryButton";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../../context/authContext/Context";
import {Logout} from "../../context/authContext/Action";

function AccountNavbar() {
    const [selectedIndex, setSelectedIndex] = useState(1);
    const theme = useTheme();
    const navigate = useNavigate();

    const { user_dispatch } = React.useContext(UserContext);

    const handleLogout = () => {
        user_dispatch(Logout());
        navigate('/');
    }

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        // console.log(theme.palette);
    };

    const customStyle = {
        borderRadius: theme.shape.borderRadius,
    }

    let componentToRender;
    if (selectedIndex === 1) {
        componentToRender = <OrderComponent/>;
    } else if (selectedIndex === 2) {
        componentToRender = <AccountContent/>;
    }

    return (
        <Box>
            <Typography variant={"h5"} fontWeight={"bold"} pl={5} pt={4} pb={2}>My Account </Typography>

        <Box display="flex" flexDirection="row">
            <Box flex={1.5} p={1} ml={2} sx={{
                display: {"xs": "none", "sm": "block"},
            }}>
                <List>
                    <ListItemButton selected={selectedIndex === 1} onClick={(e) => handleListItemClick(e, 1)}
                                    style={customStyle}>
                        <ListItemIcon>
                            <ShoppingCart/>
                        </ListItemIcon>
                        <ListItemText primary="My Orders"/>
                    </ListItemButton>

                    <ListItemButton selected={selectedIndex === 2} onClick={(e) => handleListItemClick(e, 2)}
                                    style={customStyle}>
                        <ListItemIcon>
                            <Person/>
                        </ListItemIcon>
                        <ListItemText primary="My Details"/>
                    </ListItemButton>

                    <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                        <PrimaryButton text="Logout" onClick={handleLogout}/>
                    </Box>

                    {/*<ListItemButton selected={selectedIndex === 3} onClick={(e) => handleListItemClick(e, 3)}*/}
                    {/*                style={customStyle}>*/}
                    {/*    <ListItemIcon>*/}
                    {/*        <LocationOnTwoTone/>*/}
                    {/*    </ListItemIcon>*/}
                    {/*    <ListItemText primary="My Addresses"/>*/}
                    {/*</ListItemButton>*/}
                </List>
            </Box>

            <Box flex={8} p={1} ml={2} sx={{
                display: {"xs": "none", "sm": "block"},
            }}>
                <Stack direction="row" justifyContent="space-between">
                    {componentToRender}
                </Stack>
            </Box>

        </Box>

        </Box>
    );
}

export default AccountNavbar;

import React from 'react';
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import Box from "@mui/material/Box";
import {LocationOnTwoTone, Person, Settings, ShoppingCart} from "@mui/icons-material";
import {styled} from "@mui/material/styles";


const StyledListItemButton = styled(ListItemButton)(({theme}) => ({
    color: theme.palette.text.primary,
    borderRadius: theme.shape.borderRadius,

    "&:hover": {
        backgroundColor: theme.palette.primary,
        elevation: 2,
    },
}));

const AccountNavBar = () => {
    return (
        <Box flex={1} p={1} ml={2} sx={{
            display: {"xs": "none", "sm": "block"},
        }}>
            <List>
                <ListItem disablePadding>
                    <StyledListItemButton>
                        <ListItemIcon>
                            <Person/>
                        </ListItemIcon>
                        <ListItemText primary="My Details"/>
                    </StyledListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <StyledListItemButton>
                        <ListItemIcon>
                            <ShoppingCart/>
                        </ListItemIcon>
                        <ListItemText primary="My Orders"/>
                    </StyledListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <StyledListItemButton>
                        <ListItemIcon>
                            <LocationOnTwoTone/>
                        </ListItemIcon>
                        <ListItemText primary="My Address"/>
                    </StyledListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <StyledListItemButton>
                        <ListItemIcon>
                            <Settings/>
                        </ListItemIcon>
                        <ListItemText primary="Settings"/>
                    </StyledListItemButton>
                </ListItem>

            </List>

        </Box>
    );
};

export default AccountNavBar;

import React from 'react';
import Box from "@mui/material/Box";
import {Paper, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";

const AccountContent = () => {
    return (
        <Box flex={4} p={2}>
            <Paper sx={{padding: 4, borderRadius: 3, marginRight: 2}} variant={"outlined"}>
                <Typography variant={"h5"} pb={2} pt={2} fontWeight={"bolder"}>
                    My Account Details
                </Typography>
                <Typography variant={"body2"} borderBottom={.5} pb={1} borderColor={"gray"} pt={2}
                            fontWeight={"bold"}>
                    Personal Information
                </Typography>
                <Typography pt={4} color={"gray"} fontWeight={"bold"} fontSize={11}>
                    FIRST NAME
                </Typography>
                <TextField variant={"outlined"} disabled size={"small"} margin={"dense"} placeholder={"First Name"}
                           value={"SAI CHANDAN"}/>

            </Paper>
        </Box>
    );
};

export default AccountContent;

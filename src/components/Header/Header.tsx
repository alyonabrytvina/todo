import React from "react";
import {AppBar, Box, Toolbar, Typography} from "@mui/material";

const Header: React.FC = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Todo List
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
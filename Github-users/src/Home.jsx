import React from "react";
import {Button} from "@mui/material";
import {Box} from "@mui/material";
import {Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

const Home= () =>{
    const navigate = useNavigate();
    return(
        <Box sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
      }}>
        <Typography variant="h3" align="center">Github Users App</Typography>
        <Button variant="contained" size="large"
        onClick ={()=> navigate("/cards")}>
            Github Users
        </Button>
        <Button variant="contained" size="large"
        onClick ={()=> navigate("/table")}>
            Github Users Table
        </Button>

        </Box>
    )

}
export default Home;
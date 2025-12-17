import React, {useContext} from "react";
import { GithubusersContext } from "./GithubusersProvider";
import Grid from "@mui/material/Grid";
import '@fontsource/roboto/300.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';


const Githubusers = () =>{
  const{users, followers, showFollowers, showFollowersHandler} = useContext(GithubusersContext)
    
    return(
        <Box sx={{minHeight: "100vh", p:3}}>
            <Typography sx={{ m:0, marginTop:"10px",align:"center"}}variant = "h3">Github Users</Typography>
            <Grid container spacing={3} justifyContent="center">
                {users.map((user) => (
            <Grid item key={user.id}>
            <Card sx={{ minWidth: 200, textAlign: "center" }}>
              <CardContent>
                <Typography variant="h6">name: {user.login}</Typography>
                <Typography variant="h6">Type: {user.type}</Typography>
                <Avatar alt="user image" src={user.avatar_url}/>
                <Button variant="contained" onClick={()=> showFollowersHandler(user.id, user.followers_url)}>
                  {showFollowers[user.id]? "Hide Followers" : "Show Followers"}
                </Button>
                  {showFollowers[user.id] && (
                    <ul>
                      {followers[user.id]?.map((follower) =>(
                        <li key={follower.id}>{follower.login}</li>
                      ))}
                    </ul>
                )
              }     
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>


        </Box>
    );
}
export default Githubusers;

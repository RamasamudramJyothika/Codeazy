import React, {useContext} from "react";
import {GithubusersContext} from "./GithubusersProvider"
import { TableContainer, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import '@fontsource/roboto/300.css';
import { TableHead } from '@mui/material';
import { TableRow } from '@mui/material';
import { Table } from '@mui/material';
import { TableCell } from '@mui/material';
import { TableBody } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
const GithubusersTable = ()=>{
    const {users, followers, showFollowers, showFollowersHandler}=useContext(GithubusersContext);
    return(
        <TableContainer>
            <Typography variant="h4">Github Users</Typography>
                <Table>
                <TableHead>
                    <TableRow>
                        <TableCell >Avatar</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Followers</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {users.map((user)=>(
                        <React.Fragment key={user.id}>
                            <TableRow>
                                <TableCell>
                                    <Avatar src={user.avatar_url}/>
                                </TableCell>
                                <TableCell>{user.login}</TableCell>
                                <TableCell>{user.type}</TableCell>
                                <TableCell>
                                    <Button size="small" variant="contained" 
                                    onClick={()=>showFollowersHandler(user.id,user.followers_url)}>
                                    {showFollowers[user.id] ? "Hide Followers" : "Show Followers"}
                                    </Button>
                                </TableCell>
                            </TableRow>
                            {showFollowers[user.id] && (
                                <TableRow>
                                    <TableCell colSpan={4}>
                                        {followers[user.id]?.map((follower)=>(
                                            <Chip
                                            key = {follower.id}
                                            label={follower.login}
                                            sx={{mr:1, mb:1}}
                                            />

                                        ))}
                                    </TableCell>
                                </TableRow>
                            )}
                        </React.Fragment>
                    ))}
                </TableBody>
            </Table>
          
        </TableContainer>

    )
}
export default GithubusersTable;
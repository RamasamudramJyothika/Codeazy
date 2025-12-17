import {createContext, useState, useEffect} from "react";
export const GithubusersContext = createContext();

const GithubusersProvider = ({children}) => {
    const[users, setUsers] = useState([]);
    const[followers,setFollowers] = useState({});
    const[showFollowers, setShowFollowers] = useState({});

    useEffect(()=> {
        const fetchUsers = async()=>{
            const reponse = await fetch("https://api.github.com/users")
            const data = await reponse.json();
            setUsers(data);
        };fetchUsers();
    }, []);

    const showFollowersHandler=async(userId, followers_url)=>{
        setShowFollowers((prev) => ({
            ...prev,
            [userId]: !prev[userId],
        }));
        if(followers[userId]) return;

        const reponse = await fetch(followers_url);
        const data = await reponse.json();

        setFollowers((prev)=> ({
            ...prev,
            [userId]:data.slice(0, 3),
        }));
    };


return (
        <GithubusersContext.Provider value={{ users, setUsers, followers, showFollowers, showFollowersHandler }}>
            {children}
        </GithubusersContext.Provider>
)
}
export default GithubusersProvider;

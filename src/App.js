import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from "./components/User/User";
import UserInfo from "./components/UserInfo/UserInfo";

const App = () => {
    const [items,setItems] = useState([]);
    const [isLoaded,setisLoaded] = useState(false);
    const [userId,setUserId] = useState(null);

    useEffect(()=>{
        fetch('https://reqres.in/api/users?page=1')
            .then(res => res.json())
            .then(json => {
               setItems(json.data);
               setisLoaded(true);
            }).catch((err) => {
                console.log(err);
            });
    },[])


        if (!isLoaded)
            return <div>Loading...</div>;

        return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<User setUserId={setUserId} items={items}/>} />    
                <Route path="/user" element={<UserInfo userID={userId}  items={items} /> }/>
            </Routes>
            {/* <div className="App">             
                <User items={items} /> 
            </div> */}
        </BrowserRouter>
        );

}

export default App;
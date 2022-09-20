import React,{ useState } from 'react'
import "./User.css";
import Card from 'react-bootstrap/Card';
import UserInfo from "../UserInfo/UserInfo";
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

const User = ({items,setUserId}) => {


  const setUserIdHandler=(id)=>{
    setUserId(id);
  }

  return (
    <div id='User'>
        
        <div className="p-3 mb-2 bg-primary text-white text-center">
            Single Page Application
        </div>
        <div className="container " id="usersection">

          <div className="topic text-left">
              <p className='text-left fw-bold my-5 fs-5'>Users</p>
          </div>

          <div className="row">
            <div div className="itemshow grid " id='itemshow'>

                {items.map(item => (
  
                        <div className="row singleitem" id={item.id} key={item.id} >
                        
                              <div className="col-lg-12 p-4">
                                <Link to={"/user"}>
                                <Card style={{ width:'20rem' }} onClick={()=>{setUserIdHandler(item.id)}}>
                                  <Card.Img variant="top" src={item.avatar} />
                                  <Card.Body>
                                    <Card.Title>{item.first_name}</Card.Title>
                                    <Card.Text> {item.email} </Card.Text>
                                  </Card.Body>
                                </Card>  
                                </Link>
                              </div> 
                        </div>  
                    
                ))} 
            </div>
          </div>
          
        </div>                   
    </div>

    
  )
}

export default User
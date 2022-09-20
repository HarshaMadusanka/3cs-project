import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import "./UserInfo.css";
import { BrowserRouter } from 'react-router-dom';


const Userinfo = ({userID,items}) =>
 {


  return (
    
    <div id='UserInfomation'>
        <div className="w-100 text-left bg-primary">
        <Link to='/' smooth>
            <p className='Backbutton text-left  my-5 fs-5 p-1 text-white '>         
                 Back
            </p>
         </Link>
        </div>
        <div className="container userinfo m-5 ">
            
            <div className="row">
                <div className="col-lg-6 userimg">
                    <img src= {  items[userID-1].avatar } alt="" style={{ width:'20rem'}}/>
                    
                </div>
                <div className="col-lg-4 userinfosection">
                    <div className="userdetails">
                        <div className="row">
                            <div className="col-md-4">
                                <p>First Name </p>
                                <p>Last Name </p>
                                <p>Email </p>
                            </div>
                            <div className="col-md-8">
                                <p><span  style={{ 'margin-left':'2rem'}}> { items[userID-1].first_name }</span></p>
                                <p><span  style={{ 'margin-left':'2rem'}}> { items[userID-1].last_name }</span></p>
                                <p><span  style={{ 'margin-left':'2rem'}}> { items[userID-1].email }</span></p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Userinfo
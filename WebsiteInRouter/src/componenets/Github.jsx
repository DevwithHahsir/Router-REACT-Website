/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import { Await } from "react-router-dom";


export default function Github() {

    const [Data,SetData]=useState([])

    // useEffect(() => {
    //     fetch("https://api.github.com/users/DevwithHahsir")
    //         .then(response => { return response.json()})
    //         .then(data => {
    //             console.log(data)
    //             SetData(data)})
    //         .catch(error => console.error(error)); // Handle errors here
    // }, []);

    const [instaData,instaSetData]=useState([])

    useEffect(() => {
        fetch("https://api.instagram.com/thugsofmehboob/")
            .then(response => { return response.json()})
            .then(data => {
                console.log(data)
                SetData(data)})
            .catch(error => console.error(error)); // Handle errors here
    }, []);
        
    

  return (
    <>

    <div className="main-container">
        <h1>Github Info</h1>
        <div className="name">
            <p>Name :  {Data.login}</p>
           <p> Followers : {Data.followers} </p>
           <p>ID : {Data.id} </p>
           <p> Number of Repositories : {Data.public_repos} </p>
        </div>

        <div className="img">
            <img src={Data.avatar_url} alt="" />
        </div>

    </div>
               
    </>
  )
}

import React, {useState} from "react";
import {Link} from "react-router-dom"
import {axiosWithAuth} from "../utils/axiosWithAuth"

const initialState = {
  username: "",
  password: "",
  isFetching: false //we only want it to fetch data after they log in
}

const Login = props => {

  const [login, setLogin] = useState(initialState);

  const handleChange = event => {
    setLogin({...login, [event.target.name]: event.target.value});
  }

  const handleSubmit = event => {
    event.preventDefault(); //prevent reload
    setLogin({...login, isFetching: true });
    axiosWithAuth()
    .post("/api/login", { username: 'Lambda School', password: 'i<3Lambd4' }) //our login credentials
    .then(res => {
      console.log(res)
      //look for the data.message (like the guided project, or res.data.payload)
      localStorage.setItem("token", res.data.payload);
      props.history.push("/bubble-page"); //once logged in, you can go into the bubble page which is the protected page
    })
    //must add in your error catcher
    .catch( err => {
      console.log(err);
      alert("Your login was invalid, please try again.")
    })
  }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <div className="LoginForm">
      <h1>Welcome to the Bubble App!</h1>
      <h2>Login for full experience!</h2>
      <form onSubmit={handleSubmit}>
          <input 
          type="text" 
          name="username" 
          placeholder="Username Here" 
          value={login.username}
          onChange={handleChange}
          />
          <input 
          type="password" 
          name="password" 
          placeholder="Password Here" 
          value={login.password}
          onChange={handleChange}
          />
      </form>
    </div>
  );
};

export default Login;

//done with login i think


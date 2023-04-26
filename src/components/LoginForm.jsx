import React, {useState, useEffect} from "react";
import {encryptData} from "../utils/hash";
import {useDispatch, useSelector} from "react-redux";
import {signInRequest} from "../redux/actions/signInAction";

const projectID = process.env.REACT_APP_ProjectID;

const LoginForm = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const res = useSelector((state) => state.signIn?.data);

  useEffect(() => {
    if (res.status === 200) {
      localStorage.setItem("username", userName);
      const pass = encryptData(password);
      localStorage.setItem("password", pass);
      window.location.reload();
    } else {
      console.error(error);
      setError("Oops, incorrect credentials");
    }
    return () => {};
  }, [res]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": projectID,
      "User-Name": userName,
      "User-Secret": password,
    };

    dispatch(signInRequest(authObject));
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

import React from "react";
import { styles } from "./LoginCss";

const Login = () => {
  return (
    <div style={styles}>
      <h1>Login</h1>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <div class="social-login">
        <p>Or login with:</p>
        <a class="facebook-button" href="/">
          <i class="fab fa-facebook"></i> Continue with Facebook
        </a>

        <button class="google">Google</button>
      </div>
      <p>
        Don't have an account? <a href="/">Sign up</a>
      </p>
    </div>
  );
};

export default Login;

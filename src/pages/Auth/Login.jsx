import AuthBranding from "../../components/auth/AuthBranding";
import LoginForm from "../../components/auth/LoginForm";

function Login() {
  return (
    <div className="flex min-h-screen">
      <AuthBranding />
      <LoginForm />
    </div>
  );
}

export default Login;
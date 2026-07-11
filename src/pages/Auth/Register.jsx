import AuthBranding from "../../components/auth/AuthBranding";
import RegisterForm from "../../components/auth/RegisterForm";

function Register() {
  return (
    <div className="flex min-h-screen">
      <AuthBranding />
      <RegisterForm />
    </div>
  );
}

export default Register;
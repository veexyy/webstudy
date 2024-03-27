import { LoginForm } from "../../widgets/login/LoginForm";
import { Helmet } from "react-helmet";

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>WebStudy | Вход</title>
      </Helmet>
      <LoginForm />
    </>
  );
}

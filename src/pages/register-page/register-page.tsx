import RegisterForm from "../../widgets/Register-form/RegisterForm";
import { Helmet } from "react-helmet";

export default function RegisterPage() {
  return (
    <>
      <Helmet>
        <title>WebStudy | Регистрация</title>
      </Helmet>
      <RegisterForm />
    </>
  );
}

import { useValues } from "../../Providers/ValueContext";
import { useForm } from "react-hook-form";
import { Container, Logo, Content, Form, Inputs, RegisterBtn } from "./style";
import { Link } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const { setUser } = useValues();

  const handleOnSubmit = (e) => {
    setUser({
      name: e.name,
      email: e.email,
      password: e.password,
    });
  };

  return (
    <Container>
      <Content>
        <Logo src="./images/logo.png" alt="logo" />
        <h1>VexPro wather</h1>
        <Form onSubmit={handleSubmit(handleOnSubmit)}>
          <Inputs {...register("name")} placeholder="Nome" />
          <Inputs type="email" {...register("email")} placeholder="Email" />
          <Inputs {...register("password")} placeholder="Senha" />
          <RegisterBtn type="submit" title="registrar" value="Registrar" />
        </Form>
        <Link to="/">Login</Link>
      </Content>
    </Container>
  );
};

export default Register;

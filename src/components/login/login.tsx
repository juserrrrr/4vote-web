import InputCustom from '../InputCustom/InputCustom';
import Butao from '../buttons/button';

function Login() {
  return (
    <>
      <InputCustom
        label="Título"
        type="text"
        error={true}
        helperText="Campo obrigatório"
      />

      <Butao texto="Fazer Login" />
    </>
  );
}

export default Login;

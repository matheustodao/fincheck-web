import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { HeaderAuth } from "../../components/HeaderAuth";

export function Login() {
  return (
    <>
      <HeaderAuth
        title="Entre em sua conta"
        description="Novo por aqui?"
        linkTo="/register"
        linkLabel="Crie uma conta"
      />

      <form className="flex flex-col gap-4 mt-[60px]">
        <Input type="email" className="bg-white" placeholder="E-mail" />
        <Input type="password" placeholder="Senha" />

        <Button type="submit" className="mt-2">
          Entrar
        </Button>
      </form>
    </>
  );
}

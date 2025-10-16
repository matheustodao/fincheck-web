import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { HeaderAuth } from "../../components/HeaderAuth";

export function Register() {
  return (
    <>
      <HeaderAuth
        title="Crie sua conta"
        description="Já possui uma conta?"
        linkTo="/login"
        linkLabel="Fazer Login"
      />

      <form className="flex flex-col gap-4 mt-[60px]">
        <Input type="text" className="bg-white" placeholder="Nome" />
        <Input type="email" className="bg-white" placeholder="E-mail" />
        <Input type="password" placeholder="Senha" />

        <Button type="submit" className="mt-2">
          Criar Conta
        </Button>
      </form>
    </>
  );
}

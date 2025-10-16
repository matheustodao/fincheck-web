import { Outlet } from "react-router-dom";
import illustration from "../../assets/images/illustration.png";
import { Logo } from "../components/Logo";

export function AuthLayout() {
  return (
    <div className="flex w-full h-full">
      <div className="w-full sm:w-1/2 px-8 sm:px-0 h-full flex flex-col items-center justify-center gap-16">
        <Logo className="text-gray-500" />

        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>

      <div className="w-1/2 h-full justify-center items-center relative max-w-[656px] hidden sm:flex">
        <img
          src={illustration}
          className="object-cover w-full h-full max-w-[656px] max-h-[960px] rounded-[32px] select-none"
        />

        <div className="max-w-[656px] w-full bg-white p-10 absolute bottom-9 rounded-b-[32px] select-none">
          <Logo className="text-teal-900 h-8" />

          <p className="text-gray-700 font-medium mt-4">
            Gerencie suas finanças pessoais de uma forma simples com o fincheck,
            e o melhor, totalmente de graça!
          </p>
        </div>
      </div>
    </div>
  );
}


import RegisterForm from "@/components/auth/RegisterForm";


const RegisterPage = () => {
  return (
    <div className="container mx-auto mt-5 min-h-[80vh] flex justify-center items-center ">
      <div className="p-5 rounded-2xl bg-slate-100">
        <h2 className="font-bold text-2xl text-center mb-4">
          Register your account
        </h2>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;

  
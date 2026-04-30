import LoginForm from "@/components/auth/LoginForm";



const LogInPage = () => {
  return (
    <div className="container mx-auto mt-5 min-h-[80vh] flex justify-center items-center ">
      <div className="p-5 rounded-2xl bg-slate-100">
        <h2 className="font-bold text-2xl text-center mb-4">
          Log into your account
        </h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default LogInPage;
import { Outlet } from "react-router";

function AuthPage() {
  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-cover bg-primary bg-no-repeat bg-fixed text-white hidden xl:block">
        <div className="flex w-[75%] h-full justify-center items-start flex-col mx-auto gap-4">
          {/* <img src={nuriLogo} alt="NURI logo" /> */}
          <h2 className="text-4xl font-semibold font-playfair pt-4">
            Curate
          </h2>
          <p className="font-medium font-montserrat">
            Easy Website making application 
          </p>
          
        </div>
      </div>
      <div className="flex-1 h-full flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthPage;

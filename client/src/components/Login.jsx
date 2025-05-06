import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";

const Login = () => {
    const {setShowUserLogin, setUser} = useAppContext();
    
  const [state, setState] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setUser({
        email: "test@gmail.com",
        name: "123456",
    });
    setShowUserLogin(false);
  };

  return (
    <div onClick={() => setShowUserLogin(false)} className="fixed top-0 bottom-0 left-0 right-0 z-30 flex items-center text-sm text-gray-600 bg-black/50">
    <form onSubmit={onSubmitHandler} onClick={(e) => e.stopPropagation()} className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white">
      <p className="text-2xl font-medium m-auto">
        {state === "login" ? "Inicio de" : "Registro de"}
        <span className="text-primary"> Usuario</span>{" "}
      </p>
      {state === "register" && (
        <div className="w-full">
          <p>Nombre</p>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="escribe aquí"
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
            type="text"
            required
          />
        </div>
      )}
      <div className="w-full ">
        <p>Email</p>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="escribe aquí"
          className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
          type="email"
          required
        />
      </div>
      <div className="w-full ">
        <p>Contraseña</p>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="escribe aquí"
          className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
          type="password"
          required
        />
      </div>
      {state === "register" ? (
        <p>
          ¿Ya tienes cuenta?{" "}
          <span
            onClick={() => setState("login")}
            className="text-primary cursor-pointer"
          >
            click aquí
          </span>
        </p>
      ) : (
        <p>
          ¿No tienes cuenta?{" "}
          <span
            onClick={() => setState("register")}
            className="text-primary cursor-pointer"
          >
            click aquí
          </span>
        </p>
      )}
      <button className="bg-primary hover:bg-primary-dull transition-all text-white w-full py-2 rounded-md cursor-pointer">
        {state === "register" ? "Registrarse" : "Iniciar Sesión"}
      </button>
    </form>
    </div>
  );
};

export default Login;

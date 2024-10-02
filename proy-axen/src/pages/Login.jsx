import React from 'react';

const Login = () => {
  return (
    <div className="flex justify-center pt-36">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-900 dark:border-gray-700">
        <form className="space-y-6" action="#">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in</h5>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo Electronico</label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Ej. nombre@gmail.com" required />
          </div>

          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
          </div>

          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
              </div>
              <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Recordar</label>
            </div>
            <a href="#" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">¿Has olvidado tu contraseña?</a>
          </div>

          <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Iniciar Sesión</button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            <span>¿No tienes una cuenta?</span> <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Crear Cuenta</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

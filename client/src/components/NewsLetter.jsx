import React from 'react'

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 mt-24 pb-14">
    <h1 className="md:text-4xl text-2xl font-semibold">¡Nunca te pierdas un trato!</h1>
    <p className="md:text-lg text-gray-500/70 pb-8">
    Suscríbase para obtener las últimas ofertas, recién llegados y descuentos exclusivos
    </p>
    <form className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12">
        <input
            className="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"
            type="text"
            placeholder="Ingrese su ID de correo electrónico"
            required
        />
        <button type="submit" className="md:px-12 px-8 h-full text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer rounded-md rounded-l-none">
            Suscribir
        </button>
    </form>
</div>
  )
}

export default NewsLetter
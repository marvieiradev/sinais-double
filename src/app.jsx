import { useState } from "react";

export function App() {

  return (
    <>
      <header className="bg-darker border-b-2 border-blue-300 sticky top-0 z-50 w-full px-2 py-2">
        <div>
          <div className="sugestao text-xl text-white text-center w-full">Teste</div>
          <div className="flex flex-row justify-center items-center space-x-6">
            <div className="preto bg-black text-xl text-white text-center w-[400px] rounded-md border-2">A</div>
            <div className="vermelho bg-red text-xl text-white text-center w-[400px] rounded-md border-2">B</div>
          </div>
          <div className="ultimo text-md text-white text-center">Outra coisa</div>
        </div>
      </header>
      <section className="flex flex-row justify-center items-center w-[100%]">
        <iframe width="80%" height="600" src="https://blaze.com/pt/games/double" ></iframe>
      </section>
    </>
  )
}

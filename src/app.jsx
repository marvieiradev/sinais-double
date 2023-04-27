import { useState } from "react";

export function App() {

  return (
    <>
      <header className="bg-darker border-b-2 border-blue-300 sticky top-0 z-50 w-full px-2 py-2">
        <div>
          <div className="sugestao text-lg text-white text-center w-full">Teste</div>
          <div className="flex flex-row justify-center items-center space-x-6">
            <div className="preto bg-black text-lg text-white text-center w-[300px] rounded-md border-2">A</div>
            <div className="vermelho bg-red text-lg text-white text-center w-[300px] rounded-md border-2">B</div>
          </div>
          <div className="ultimo text-md text-white text-center">ULTIMOS RESULTADOS:</div>
          <div className="ultimos-numeros flex flex-row justify-center">

            <div className="line1 flex flex-row justify-center">
              <div className="n15 w-[25px] h-[25px] bg-white rounded-md m-1 text-md text-white text-center"></div>
              <div className="n14 w-[25px] h-[25px] bg-white rounded-md m-1 text-md text-white text-center"></div>
              <div className="n13 w-[25px] h-[25px] bg-white rounded-md m-1 text-md text-white text-center"></div>
              <div className="n12 w-[25px] h-[25px] bg-white rounded-md m-1 text-md text-white text-center"></div>
              <div className="n11 w-[25px] h-[25px] bg-white rounded-md m-1 text-md text-white text-center"></div>
            </div>

            <div className="line1 flex flex-row justify-center">
              <div className="n10 w-[25px] h-[25px] bg-white rounded-md m-1 text-md text-white text-center"></div>
              <div className="n9 w-[25px] h-[25px] bg-white rounded-md m-1 text-md text-white text-center"></div>
              <div className="n8 w-[25px] h-[25px] bg-white rounded-md m-1 text-md text-white text-center"></div>
              <div className="n7 w-[25px] h-[25px] bg-white rounded-md m-1 text-md text-white text-center"></div>
              <div className="n6 w-[25px] h-[25px] bg-white rounded-md m-1 text-md text-white text-center"></div>
            </div>

            <div className="line1 flex flex-row justify-center">
              <div className="n5 w-[25px] h-[25px] bg-white rounded-md m-1 text-md text-white text-center"></div>
              <div className="n4 w-[25px] h-[25px] bg-white rounded-md m-1 text-md text-white text-center"></div>
              <div className="n3 w-[25px] h-[25px] bg-white rounded-md m-1 text-md text-white text-center"></div>
              <div className="n2 w-[25px] h-[25px] bg-white rounded-md m-1 text-md text-white text-center"></div>
              <div className="n1 w-[25px] h-[25px] bg-white rounded-md m-1 text-md text-white text-center"></div>
            </div>

          </div>
        </div>
      </header>
      <section className="flex flex-row justify-center items-center w-[100%]">
        <iframe width="80%" height="600" src="https://blaze.com/pt/games/double" ></iframe>
      </section>
    </>
  )
}

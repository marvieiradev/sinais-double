import { useState } from "react";

export function App() {

  return (
    <>
      <div className="container flex flex-row bg-dark">
        <section className="container flex bg-dark border-r-2 border-white justify-center max-w-[320px]">
          <div>
            <div className="justify-center items-center m-3">
              <img src="src/assets/logo.svg" className="w-[250px]" />
            </div>
            <div className="sugestao text-lg text-white text-center mb-4 mt-4">AGUARDANDO SINAIS...</div>
            <div className="flex flex-row justify-center items-center space-x-6">
              <div className="preto bg-black text-lg text-white text-center w-[120px] rounded-md border-2">0%</div>
              <div className="vermelho bg-red text-lg text-white text-center w-[120px] rounded-md border-2">0%</div>
            </div>

            <div className="frase text-md text-white text-center mb-4 mt-4">FRASE</div>

            <div className="border-2 rounded-lg border-white mt-5 m-2">
              <div className="ultimo text-lg text-white text-center mb-5 mt-2">ULTIMOS RESULTADOS:</div>
              <div className="ultimos-numeros flex flex-col justify-center">
                <div className="line1 flex flex-row justify-center">
                  <div className="n1 w-[35px] h-[35px] bg-white rounded-md m-1.5 text-xl text-white text-center"></div>
                  <div className="n2 w-[35px] h-[35px] bg-white rounded-md m-1.5 text-xl text-white text-center"></div>
                  <div className="n3 w-[35px] h-[35px] bg-white rounded-md m-1.5 text-xl text-white text-center"></div>
                  <div className="n4 w-[35px] h-[35px] bg-white rounded-md m-1.5 text-xl text-white text-center"></div>
                  <div className="n5 w-[35px] h-[35px] bg-white rounded-md m-1.5 text-xl text-white text-center"></div>
                </div>
                <div className="line1 flex flex-row justify-center">
                  <div className="n6 w-[35px] h-[35px] bg-white rounded-md m-1.5 text-xl text-white text-center"></div>
                  <div className="n7 w-[35px] h-[35px] bg-white rounded-md m-1.5 text-xl text-white text-center"></div>
                  <div className="n8 w-[35px] h-[35px] bg-white rounded-md m-1.5 text-xl text-white text-center"></div>
                  <div className="n9 w-[35px] h-[35px] bg-white rounded-md m-1.5 text-xl text-white text-center"></div>
                  <div className="n10 w-[35px] h-[35px] bg-white rounded-md m-1.5 text-xl text-white text-center"></div>
                </div>
                <div className="line1 flex flex-row justify-center mb-2">
                  <div className="n11 w-[35px] h-[35px] bg-white rounded-md m-1.5 text-xl text-white text-center"></div>
                  <div className="n12 w-[35px] h-[35px] bg-white rounded-md m-1.5 text-xl text-white text-center"></div>
                  <div className="n13 w-[35px] h-[35px] bg-white rounded-md m-1.5 text-xl text-white text-center"></div>
                  <div className="n14 w-[35px] h-[35px] bg-white rounded-md m-1.5 text-xl text-white text-center"></div>
                  <div className="n15 w-[35px] h-[35px] bg-white rounded-md m-1.5 text-xl text-white text-center"></div>
                </div>
              </div>

            </div>

          </div>
        </section>
        <section className="container flex flex-row justify-center items-center w-[100%]">
          <iframe width="95%" height="800" src="https://blaze.com/pt/games/double" ></iframe>
        </section>

      </div>

    </>
  )
}

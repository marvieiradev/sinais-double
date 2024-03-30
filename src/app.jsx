export function App() {

  return (
    <>
      <div className="container flex flex-row bg-dark justify-center">
        <section className="container flex bg-dark border-r-2 border-dark justify-center max-w-[300px]">
          <div>
            <div className="flex justify-center items-center m-3 max-w-[320px]">
              <img src="../logo.svg" className="w-[200px] " />
            </div>
            <div className="sugestao text-[20px] text-white text-center mb-4 mt-4">AGUARDANDO SINAIS...</div>
            <div className="flex flex-row justify-center items-center space-x-6">
              <div className="preto bg-black text-lg text-white text-center w-[118px] rounded-md border-2">0%</div>
              <div className="vermelho bg-red text-lg text-white text-center w-[118px] rounded-md border-2">0%</div>
            </div>

            <div className="frase text-md text-white text-center mb-4 mt-4">Conectando...</div>

            <div className="border-2 rounded-lg border-white mt-5 m-2 w-[260px]">
              <div className="ultimo text-lg text-white text-center mb-5 mt-2">ULTIMOS RESULTADOS:</div>
              <div className="ultimos-numeros flex flex-col justify-center mb-5">

                <div className="line1 flex flex-row justify-center">
                  <div className="items-center justify-center flex flex-col">
                    <div className="n10 w-[35px] h-[35px] bg-dark rounded-md mx-1.5 text-xl text-white text-center"></div>
                    <p className="h10 text-white text-sm"></p>
                  </div>

                  <div className="items-center justify-center flex flex-col">
                    <div className="n9 w-[35px] h-[35px] bg-dark rounded-md mx-1.5 text-xl text-white text-center"></div>
                    <p className="h9 text-white text-sm"></p>
                  </div>

                  <div className="items-center justify-center flex flex-col">
                    <div className="n8 w-[35px] h-[35px] bg-dark rounded-md mx-1.5 text-xl text-white text-center"></div>
                    <p className="h8 text-white text-sm"></p>
                  </div>

                  <div className="items-center justify-center flex flex-col">
                    <div className="n7 w-[35px] h-[35px] bg-dark rounded-md mx-1.5 text-xl text-white text-center"></div>
                    <p className="h7 text-white text-sm"></p>
                  </div>

                  <div className="items-center justify-center flex flex-col">
                    <div className="n6 w-[35px] h-[35px] bg-dark rounded-md mx-1.5 text-xl text-white text-center"></div>
                    <p className="h6 text-white text-sm"></p>
                  </div>
                </div>

                <div className="line1 flex flex-row justify-center mt-4">
                  <div className="items-center justify-center flex flex-col">
                    <div className="n5 w-[35px] h-[35px] bg-dark rounded-md mx-1.5 text-xl text-white text-center"></div>
                    <p className="h5 text-white text-sm"></p>
                  </div>

                  <div className="items-center justify-center flex flex-col">
                    <div className="n4 w-[35px] h-[35px] bg-dark rounded-md mx-1.5 text-xl text-white text-center"></div>
                    <p className="h4 text-white text-sm"></p>
                  </div>

                  <div className="items-center justify-center flex flex-col">
                    <div className="n3 w-[35px] h-[35px] bg-dark rounded-md mx-1.5 text-xl text-white text-center"></div>
                    <p className="h3 text-white text-sm"></p>
                  </div>

                  <div className="items-center justify-center flex flex-col">
                    <div className="n2 w-[35px] h-[35px] bg-dark rounded-md mx-1.5 text-xl text-white text-center"></div>
                    <p className="h2 text-white text-sm"></p>
                  </div>

                  <div className="items-center justify-center flex flex-col">
                    <div className="n1 w-[35px] h-[35px] bg-dark rounded-md mx-1.5 text-xl text-white text-center"></div>
                    <p className="h1 text-white text-sm"></p>
                  </div>
                </div>
              </div>

            </div>

            <div className="border-2 rounded-lg border-white mt-4 m-2 flex flex-col items-center">
              <p className="text-white text-center text-md p-2">
                <span className="text-red">ATENÇÃO: </span>
                Para o menor risco de<br />perdas, siga seu gerenciamento.
              </p>
            </div>

          </div>

        </section>
        <section className="container flex flex-row justify-center items-center w-[100%] hidden md:flex" >
          <iframe width="95%" height="800" src="https://blaze1.space/pt/games/double" ></iframe>
        </section>
      </div>

    </>
  )
}

import Link from "next/link";
import { PrimeiroComponente } from "./components/PrimeiroComponente";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-black text-white flex items-center justify-center">
      <main className="flex flex-col items-center gap-6 text-center px-6">
        <h1 className="text-9xl font-extrabold tracking-tight text-[#39ff14] drop-shadow-[0_0_12px_rgba(57,255,20,0.7)]">
          Bem vind@
        </h1>

     {/*    <PrimeiroComponente mensagem="Hello world" mensagemBotao="Clicou!" /> */}

        <Link
          href="/galeria"
          className="mt-4 px-6 py-3 rounded-lg font-bold uppercase tracking-wide
                     bg-purple-700 border border-[#7C0CBD] text-white
                     shadow-[0_0_12px_rgba(57,255,20,0.6)]
                     hover:bg-purple-700 hover:shadow-[0_0_20px_rgba(162, 0, 255, 0.9)]
                     transition-all duration-300"
        >
          Ir para Galeriaaah
        </Link>
      </main>
    </div>
  );
}

/* export default function Home(){
  <div>
  <main>
    <h1>Welcome to Next.js!</h1>
    <PrimeiroComponente mensagem="Olá mundo!" mensagemBotao={""}/>
    <PrimeiroComponente mensagemBotao="Segundo botão clicadoooo!!" mensagem={""} />
  </main>
  </div>
} */
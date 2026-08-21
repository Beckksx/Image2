import { PrimeiroComponente } from "./components/PrimeiroComponente";

export default function Home() {
  return (
    <div>
      <main>
        <h1>Welcome babys</h1>
         <PrimeiroComponente mensagem="Hello world" mensagemBotao={""}/>
           <PrimeiroComponente mensagemBotao="Clicou bb" mensagem={""}/>
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
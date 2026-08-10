import Image from "next/image";
import { PrimeiroComponente } from "./components/PrimeiroComponente";

export default function Home() {
  return (
    <div>
      <main>
        <h1>Welcome babys</h1>
        <PrimeiroComponente/>
      </main>
    </div>
  );
}
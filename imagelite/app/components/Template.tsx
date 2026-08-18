import React from "react";
interface TemplateProps{
  children: React.ReactNode;
}

export const Template: React.FC<TemplateProps> = ({ children }: TemplateProps) => {
  return(
    <>
    <Header/>
      {children}
    <Footer/>
    </>

  );
}

const Header:React.FC = () => {
  return(
    <header className="bg-purple-700 py-4 text-lime-400">
      <div className="container mx-auto px-4 flex justify-between items-center px-4">
        <h1>ImageLite</h1>
      </div>
    </header>

  );
}

const Footer:React.FC = () => {
  return(
    <footer className="bg-lime-400 text-purple-700">
      <div className="container mx-auto px-4 flex justify-between items-center px-4">
        <h1>Desenvolvido por Beckksx</h1>
      </div>
    </footer>
  );
}
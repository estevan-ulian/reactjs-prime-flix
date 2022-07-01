import { Link } from "react-router-dom";

export default function Erro() {
    return (
        <div className={`w-full min-h-screen m-[-64px] flex flex-col items-center justify-center`}>
            <h1 className={`text-8xl mb-3 font-bold`}>ERRO 404!</h1>
            <h2 className={`my-2 text-3xl`}>Página não encontrada!</h2>
            <Link to="/" className={`text-white bg-blue-500 px-2 py-2 rounded-sm mt-4 transition-all duration-200 ease-in-out hover:scale-105`}>Veja todos os filmes!</Link>
        </div>
    )
}
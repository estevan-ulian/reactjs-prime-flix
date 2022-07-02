import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function Favoritos() {
    const [filmes, setFilmes] = useState([])

    useEffect(() => {

        const minhaLista = localStorage.getItem('@primeFlix')
        setFilmes(JSON.parse(minhaLista) || [])

    }, [])

    function excluirFilme(id) {
        let filtroFilmes = filmes.filter((item) => {
            return (item.id !== id)
        })
        setFilmes(filtroFilmes)
        localStorage.setItem('@primeFlix', JSON.stringify(filtroFilmes))
        toast.success('Filme removido com sucesso!')
    }

    return (
        <div className={`mt-6 flex flex-col items-center`}>
            <h1 className={`mb-6 text-3xl`}>Meus Filmes</h1>
            {filmes.length === 0 && <span>{`Nenhum filme salvo na sua lista! :(`}</span>}
            <ul className={`
            w-full px-3 md:max-w-5xl text-sm md:text-base
            `}>
                {filmes.map((item) => {
                    return (
                        <li key={item.id}
                        className={`flex justify-between items-center mb-3`}
                        >
                            <span>{item.title}</span>
                            <div className={`flex justify-center items-center`}>

                                <Link to={`/filme/${item.id}`}
                                className={`text-blue-500 ml-4 mr-2`}
                                >Detalhes</Link>

                                <button onClick={() => excluirFilme(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
            
        </div>
    )
}
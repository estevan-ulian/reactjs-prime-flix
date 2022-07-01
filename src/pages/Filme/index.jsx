import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import api from '../../services/api'

export default function Filme() {
    const { id } = useParams();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilm() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: '76419fdb04dcca38da1926103f6451ae',
                    langague: 'pt-BR',
                }
            })
            .then((response) => {
                setFilme(response.data)
                setLoading(false)
            })
            .catch(() => {
                console.log('filme nao encontrado')
            })
        }

        loadFilm()

        return () => {
            console.log('componente desmontado')
        }

    }, [])

    if(loading) {
        return (
            <div className={``}>
                <h1>Carregando detalhes...</h1>
            </div>
        )
    }

    return (
        <div className={`
        flex flex-col mt-5 gap-3 mx-3
        sm:max-w-3xl
        `}>

            <h1 className={`text-3xl font-light`}>{filme.title}</h1>

            <div className={`relative`}>
                <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}
                className={``}
                />
                <span
                    className={`
                    absolute right-0 top-2 mt-2 px-3 py-2
                    text-sm font-light bg-blue-500 text-white rounded-l-md `}
                    >
                        Avaliação: {filme.vote_average} / 10
                </span>
            </div>
            
            <div className={`flex flex-col gap-2 p-2`}>
                <h3 className={`text-xl font-bold`}>Sinopse</h3>
                <span className={`text-sm`}>{filme.overview}</span>

            </div>
            <div className={`flex px-2`}>
                <button className={`
                mr-4 text-lg cursor-pointer rounded-md bg-blue-500  py-2 px-4
                transition-all duration-500 ease-in-out text-white
                border-2 border-blue-500 hover:border-blue-500 hover:text-blue-500 hover:bg-white
                `}>
                    Salvar
                </button>
                <button className={`
                text-lg cursor-pointer rounded-md border-2 border-blue-500 text-blue-500 py-2 px-4
                transition-all duration-500 ease-in-out hover:bg-blue-500 hover:text-white
                `}>
                    <a href="#" className={`w-full h-full`}>Trailer</a>
                </button>

            </div>
        </div>
    )
}
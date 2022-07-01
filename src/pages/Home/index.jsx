import { useEffect, useState } from "react"
import api from "../../services/api";
import { Link } from 'react-router-dom'

export default function Home() {
    const [filmes, setFilmes] = useState();

    useEffect(() => {
        async function loadFilmes() {
            const res = await api.get('movie/now_playing', {
                params: {
                    api_key: '76419fdb04dcca38da1926103f6451ae',
                    langague: 'pt-BR',
                    page: 1
                }
            })

            const results = res.data.results.slice(0,10)
            console.log(results)
            setFilmes(results)
        }

        loadFilmes()
    }, [])

    function renderFilmes() {
        return (
            filmes
            .map(filme => {
                return (

                    <article 
                    key={filme.id}
                    className={`w-full bg-white p-2`} 
                    >
                        <h2 className={`mb-3 text-center`}>{filme.title}</h2>

                        <img 
                        src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} 
                        alt={filme.title}
                        className={`max-w-full w-[90rem] max-h-80 object-cover rounded-t-xl`}                                
                        />

                        <Link 
                        to={`/filme/${filme.id}`}
                        className="flex items-center justify-center py-3 text-2xl bg-blue-600 text-white rounded-b-xl"
                        >Acessar</Link>

                    </article>
                )
            })
        )
    }

    return (

        <div className="">
            <div className="w-full grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {renderFilmes()}
            </div>
        </div>
    )
}
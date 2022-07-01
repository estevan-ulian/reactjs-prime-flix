import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className={`flex items-center justify-around w-full h-16 bg-gray-900`}>
            <Link to='/' 
            className={`text-xl font-bold cursor-pointer text-white`}>
                PrimeFlix
            </Link>

            <Link to='/favoritos' 
            className={`cursor-pointer bg-gray-300 px-4 py-2 text-gray-900`}>
                Meus Filmes
            </Link>
        </header>
    )
}
import { UserIcon } from '@heroicons/react/24/outline'

const NavBar = () => {
    return (
        <nav className='fixed top-0 z-50 w-full'>
            <div className="flex flex-row justify-between content-center p-7 border-b border-b-inherit">
                <div>Untitled</div>
                <div><UserIcon className='w-6 h-6'/></div>
            </div>
        </nav>
    )
}

export default NavBar
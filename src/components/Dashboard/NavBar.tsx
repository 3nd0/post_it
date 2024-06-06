import { UserIcon } from '@heroicons/react/24/outline'

const NavBar = () => {
    return (
      <nav>
        <div className="w-screen flex flex-row justify-between p-6 border-b border-b-inherit">
            <div>Untitled</div>
            <div><UserIcon className='w-6 h-6'/></div>
        </div>
      </nav>
    )
}

export default NavBar
import Anchor from './Anchor'
import Accordion from './Accordion'

const SideBar = (): JSX.Element => {
  return (
    <nav className="w-64 h-screen px-3 bg-zinc-800/75">
      <Anchor text="top" path="/" />
      <Accordion
        subtitle="task"
        items={[{ name: 'task1' }, { name: 'task2' }, { name: 'task3' }]}
      />
    </nav>
  )
}

export default SideBar

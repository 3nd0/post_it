import React from "react"
import Link from "next/link"
import type { MenuItems } from "./types/SideBar"

const items: MenuItems[] = [
  {
    name: "item1",
    path: "#",
  },
  {
    name: "item2",
    path: "#",
  },
]

const SideBar = () => {
  return (
    <aside className="fixed top-0 left-0 mt-20 w-64 h-screen z-40 bg-white border-r border-inherit">
      <div className="h-full px-3 py-4 bg-white overflow-y-auto">
        <ul className="space-y-2 font-medium">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <li>
                <Link
                  href={item.path}
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
                >
                  <span className="ms-3">{item.name}</span>
                </Link>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default SideBar

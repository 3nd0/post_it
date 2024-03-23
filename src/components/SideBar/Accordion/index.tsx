'use client'

import { Disclosure } from '@headlessui/react'
import React from 'react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const Accordion = ({
  subtitle,
  items,
}: {
  subtitle: string
  items: { name: string }[]
}): JSX.Element => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full justify-between items-center px-3 py-1 text-base text-zinc-500 hover:text-zinc-200">
            {subtitle}
            <ChevronUpIcon
              className={`w-5 h-5 ${open ? 'rotate-180 transform' : ''}`}
            />
          </Disclosure.Button>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <Disclosure.Panel className="flex w-52 ml-6 px-3 py-1 text-base text-zinc-500 hover:text-zinc-200 relative border-s border-zinc-500 hover:border-zinc-200">
                {item.name}
              </Disclosure.Panel>
            </React.Fragment>
          ))}
        </>
      )}
    </Disclosure>
  )
}

export default React.memo(Accordion)

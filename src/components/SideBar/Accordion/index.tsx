'use client'

import { Disclosure } from '@headlessui/react'
import React from 'react'

const Accordion = ({
  subtitle,
  items,
}: {
  subtitle: string
  items: { name: string }[]
}): JSX.Element => {
  return (
    <Disclosure>
      <Disclosure.Button className="flex w-60 px-3 py-1 rounded text-base hover:bg-zinc-700/75">
        {subtitle}
      </Disclosure.Button>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <Disclosure.Panel>{item.name}</Disclosure.Panel>
        </React.Fragment>
      ))}
    </Disclosure>
  )
}

export default React.memo(Accordion)

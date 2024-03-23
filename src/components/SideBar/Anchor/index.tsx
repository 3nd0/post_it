import React from 'react'
import Link from 'next/link'

const Anchor = ({
  text,
  path,
}: {
  text: string
  path: string
}): JSX.Element => {
  return (
    <Link
      href={path}
      className="flex w-full justify-between items-center px-3 py-1 text-base text-zinc-500 hover:text-zinc-200"
    >
      {text}
    </Link>
  )
}

export default React.memo(Anchor)

import React from 'react'

export const Layout: React.FC<React.HTMLProps<HTMLDivElement>> = props => {
  return (
    <div className="container h-full px-4 pt-20 mx-auto text-white">
      <div className="flex items-center justify-center h-2/4">{props.children}</div>
    </div>
  )
}

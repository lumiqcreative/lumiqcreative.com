import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

const Container = ({ children, className = '' }: Props) => {
  const padding = 20

  return (
    <div
      className={className}
      css={{
        margin: '0 auto',
        maxWidth: 1080 + 2 * padding,
        padding: `0 ${padding}px`
      }}
    >
      {children}
    </div>
  )
}

export default Container

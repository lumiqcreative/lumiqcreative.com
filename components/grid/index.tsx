import { ReactNode } from 'react'
import { media } from 'theme'

type Props = {
  children: ReactNode
  className?: string
  rowGap: 'sm' | 'lg'
}

const Grid = ({ children, className, rowGap }: Props): JSX.Element => {
  return (
    <div
      css={[
        {
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridColumnGap: 24,
          gridRowGap: 48,
          [media[0]]: { gridTemplateColumns: 'repeat(8, 1fr)' },
          [media[1]]: { gridTemplateColumns: 'repeat(12, 1fr)' }
        },
        rowGap === 'sm' && { gridRowGap: 32 },
        rowGap === 'lg' && { gridRowGap: 48 }
      ]}
      className={className}
    >
      {children}
    </div>
  )
}

export default Grid

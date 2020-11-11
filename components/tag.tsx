import { colors, textStyles } from 'theme'
import { MouseEvent } from 'react'

type Props = {
  active: boolean
  children: string
  data: string
  onClick: (e: MouseEvent<HTMLElement>) => void
}

const Tag = ({ active, children, data, onClick }: Props) => (
  <div
    css={{
      alignItems: 'center',
      cursor: 'pointer',
      display: 'inline-flex',
      height: 32
    }}
    data-text={data}
    onClick={onClick}
  >
    <div
      css={[
        {
          border: `1px solid ${colors.onSurface.primary}`,
          borderRadius: 6,
          height: 10,
          transition: 'border-color 0.2s ease, border-width 0.2s ease',
          width: 10
        },
        active && {
          borderColor: colors.accent,
          borderWidth: 5
        }
      ]}
      data-text={data}
    />
    <span
      css={[
        textStyles.button.primary,
        {
          color: colors.onSurface.primary,
          marginLeft: 8,
          transition: 'color 0.2s ease'
        },
        active && {
          color: colors.accent,
          transition: 'color 0.2s ease'
        }
      ]}
      data-text={data}
    >
      {children}
    </span>
  </div>
)

export default Tag

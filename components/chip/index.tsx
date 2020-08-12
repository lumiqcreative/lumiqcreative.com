import { colors } from 'theme'

type Props = {
  className?: string
  value?: string
  active: boolean
  onClick: (e: React.MouseEvent<HTMLElement>) => void
  children: React.ReactNode
}

const Chip = ({ className, value, active, onClick, children }: Props): JSX.Element => {
  return (
    <div
      css={{
        alignItems: 'center',
        cursor: 'pointer',
        fontWeight: 400,
        display: 'inline-flex',
        height: 24
      }}
      className={className}
      data-value={value}
      onClick={onClick}
    >
      <div
        css={[
          {
            border: `1px solid ${colors.onSurface}`,
            borderRadius: 6,
            height: 10,
            width: 10,
            margin: 'auto 0',
            transition: 'border-color 0.2s ease, border-width 0.2s ease'
          },
          active && {
            borderColor: colors.accent,
            borderWidth: 5,
            transition: 'border-color 0.2s ease, border-width 0.2s ease'
          }
        ]}
        data-value={value}
      />
      <span
        css={[
          {
            fontFamily: '"Inter"',
            color: colors.onSurface,
            fontSize: 17,
            fontWeight: 500,
            letterSpacing: '-0.01em',
            lineHeight: '24px',
            margin: '0 0 0 8px',
            transition: 'color 0.2s ease'
          },
          active && {
            color: colors.accent,
            transition: 'color 0.2s ease'
          }
        ]}
        data-value={value}
      >
        {children}
      </span>
    </div>
  )
}

export default Chip

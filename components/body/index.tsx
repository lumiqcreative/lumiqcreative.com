type Props = {
  className?: string
  children: React.ReactNode
  size: 'small' | 'large'
}

const Body = ({ className, children, size }: Props): JSX.Element => {
  return (
    <p
      className={className}
      css={[
        {
          fontFamily: '"Inter", "Helvetica Neue", "Helvetica", sans-serif',
          fontWeight: 400,
          margin: 0
        },
        size === 'small' && { fontSize: 15, lineHeight: '20px' },
        size === 'large' && {
          fontSize: 20,
          lineHeight: '26px',
          letterSpacing: '-0.01em'
        }
      ]}
    >
      {children}
    </p>
  )
}

export default Body

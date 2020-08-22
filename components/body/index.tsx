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
          margin: 0,
          lineHeight: '20px'
        },
        size === 'small' && { fontSize: 15 },
        size === 'large' && { fontSize: 17 }
      ]}
    >
      {children}
    </p>
  )
}

export default Body

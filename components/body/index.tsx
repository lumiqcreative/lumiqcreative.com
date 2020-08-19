type Props = {
  className?: string
  children: React.ReactNode
}

const Body = ({ className, children }: Props): JSX.Element => {
  return (
    <p
      className={className}
      css={{
        fontFamily: '"Inter", "Helvetica Neue", "Helvetica", sans-serif',
        fontWeight: 400,
        margin: 0,
        fontSize: 15,
        lineHeight: '20px'
      }}
    >
      {children}
    </p>
  )
}

export default Body

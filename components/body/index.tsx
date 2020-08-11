type Props = {
  className?: string
  children: React.ReactNode
}

const Body = ({ className, children }: Props) => {
  return (
    <p
      className={className}
      css={{
        fontFamily: '"Inter"',
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

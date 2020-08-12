type Props = {
  children: React.ReactNode
}

const Container = ({ children }: Props): JSX.Element => {
  return (
    <div css={{ maxWidth: 1000, margin: '0 auto', padding: '0 20px' }}>
      {children}
    </div>
  )
}

export default Container

type Props = {
  children: React.ReactNode
}

const Container = ({ children }: Props): JSX.Element => {
  return (
    <div
      css={{
        maxWidth: 1080,
        margin: '0 auto',
        padding: '0 20px',
        boxSizing: 'content-box'
      }}
    >
      {children}
    </div>
  )
}

export default Container

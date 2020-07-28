const Container = (props) => {
  return (
    <div css={{ maxWidth: 1000, margin: '0 auto', padding: '0 20px' }}>
      {props.children}
    </div>
  )
}

export default Container

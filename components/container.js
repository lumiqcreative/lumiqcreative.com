const Container = ({ children, className, narrow }) => (
  <div
    className={className}
    css={{
      maxWidth: narrow ? 600 + 2 * 20 : 1080 + 2 * 20,
      width: '100%',
      padding: '0 20px',
      margin: '0 auto'
    }}
  >
    {children}
  </div>
)

export default Container

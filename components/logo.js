import { colors, media } from '../utils/theme'

const Logo = () => (
  <>
    <svg
      css={{
        fill: colors.onSurface[0],
        height: 24,
        margin: 'auto 0',
        [media[0]]: { height: 28 }
      }}
      className='logo'
      viewBox='0 0 16 20'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        d='M6 2h3a5 5 0 010 10H6V2zm3 12H6v6H0V2h2v16h2V0h5a7 7 0 110 14z'
        clipRule='evenodd'
      />
    </svg>
  </>
)

export default Logo

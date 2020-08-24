import FigureType from 'types/figure-type'
import Body from 'components/body'
import { media } from 'theme'

const Figure = ({ image, caption }: FigureType): JSX.Element => {
  return (
    <figure
      css={{
        gridColumn: 'span 4',
        margin: 0,
        [media[1]]: { gridColumn: 'span 6' },
        '&:first-child': { gridColumn: '1/-1' }
      }}
    >
      <img
        src={image}
        css={{
          width: '100%',
          display: 'flex'
        }}
      />
      <Body size="small" css={{ marginTop: 16 }}>
        {caption}
      </Body>
    </figure>
  )
}

export default Figure

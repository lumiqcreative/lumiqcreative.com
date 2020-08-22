import FigureType from 'types/figure-type'
import Body from 'components/body'
import { media } from 'theme'

const Figure = ({ image, caption }: FigureType): JSX.Element => {
  return (
    <figure
      css={{
        gridColumn: 'span 4',
        margin: 0,
        [media[1]]: { gridColumn: 'span 6' }
      }}
    >
      <img
        src={image}
        css={{
          width: '100%',
          display: 'flex',
          borderRadius: 4
        }}
      />
      <Body size="small" css={{ marginTop: 12 }}>
        {caption}
      </Body>
    </figure>
  )
}

export default Figure

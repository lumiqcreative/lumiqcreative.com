import FigureType from 'types/figure-type'
import Typography from 'components/typography'
import { colors, media } from 'theme'

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
      <picture
        css={{
          background: colors.surfaceOverlay,
          height: 0,
          paddingBottom: (9 / 16) * 100 + '%',
          display: 'block',
          overflow: 'hidden'
        }}
      >
        <img src={image} css={{ width: '100%', display: 'flex' }} />
      </picture>
      <Typography
        as="figcaption"
        category="body"
        variant={2}
        css={{ marginTop: 16 }}
      >
        {caption}
      </Typography>
    </figure>
  )
}

export default Figure

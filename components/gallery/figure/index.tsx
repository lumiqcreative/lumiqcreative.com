import FigureType from 'types/figure-type'
import Typography from 'components/typography'
import { colors, media } from 'theme'
import Image from 'next/image'

const Figure = ({ image, caption }: FigureType): JSX.Element => {
  return (
    <figure
      css={{
        gridColumn: 'span 4',
        margin: 0,
        [media[1]]: { gridColumn: 'span 6' },
        '&:first-of-type': { gridColumn: '1/-1' }
      }}
    >
      <Image
        width={1920}
        height={1080}
        src={image}
        css={{ background: colors.surfaceOverlay }}
      />
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

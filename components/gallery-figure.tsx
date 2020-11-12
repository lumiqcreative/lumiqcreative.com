import { colors, media } from 'theme'
import Image from 'next/image'
import Text from 'components/text'

type Props = {
  caption: string
  image: string
}

const GalleryFigure = ({ caption, image }: Props): JSX.Element => (
  <figure
    css={{
      gridColumn: 'span 4',
      margin: 0,
      [media[1]]: { gridColumn: 'span 6' },
      '&:first-of-type': { gridColumn: '1/-1' }
    }}
  >
    <Image
      alt={caption}
      css={{ background: colors.surface.secondary }}
      height={1080}
      layout='responsive'
      src={image}
      width={1920}
    />
    <Text as='figcaption' style='body2' css={{ marginTop: 16 }}>
      {caption}
    </Text>
  </figure>
)

export default GalleryFigure

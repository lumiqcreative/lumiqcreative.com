import { GalleryFigureType } from 'types'
import { media } from 'theme'
import { ReactNode } from 'react'
import Container from 'components/container'
import GalleryFigure from './gallery-figure'

type Props = {
  figures: GalleryFigureType[]
}

const Gallery = ({ figures }: Props): JSX.Element => {
  const items: ReactNode[] = []

  figures.map(figure => {
    items.push(
      <GalleryFigure
        image={figure.image}
        caption={figure.caption}
        key={figure.caption}
      />
    )
  })

  return (
    <Container>
      <div
        css={{
          display: 'grid',
          gridColumnGap: 24,
          gridRowGap: 32,
          gridTemplateColumns: 'repeat(4, 1fr)',
          [media[0]]: { gridTemplateColumns: 'repeat(8, 1fr)' },
          [media[1]]: { gridTemplateColumns: 'repeat(12, 1fr)' }
        }}
      >
        {items}
      </div>
    </Container>
  )
}

export default Gallery

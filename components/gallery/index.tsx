import Container from 'components/container'
import FigureType from 'types/figure-type'
import Figure from './figure'
import { media } from 'theme'

type Props = {
  figures: FigureType[]
}

const Gallery = ({ figures }: Props): JSX.Element => {
  const cells: React.ReactNode[] | null = []
  figures.forEach((figure) => {
    cells.push(
      <Figure
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
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridColumnGap: 16,
          gridRowGap: 24,
          [media[0]]: { gridTemplateColumns: 'repeat(8, 1fr)' },
          [media[1]]: { gridTemplateColumns: 'repeat(12, 1fr)' }
        }}
      >
        {cells}
      </div>
    </Container>
  )
}

export default Gallery

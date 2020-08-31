import Container from 'components/container'
import FigureType from 'types/figure-type'
import Figure from './figure'
import Grid from 'components/grid'

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
      <Grid rowGap="sm">{cells}</Grid>
    </Container>
  )
}

export default Gallery

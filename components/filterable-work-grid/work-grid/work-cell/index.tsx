import Link from 'next/link'
import WorkDetails from './work-details'
import { css } from '@emotion/core'

type Props = {
  location: 'internal' | 'external'
  published: string
  slug?: string
  summary: string
  title: string
  link?: string
  cover: string
}

const styles = css({
  gridColumn: 'span 4',
  display: 'block',
  textDecoration: 'none'
})

const WorkCell = ({
  location,
  published,
  slug,
  summary,
  title,
  link,
  cover
}: Props): JSX.Element => {
  let element
  if (location === 'internal') {
    element = (
      <Link href={`/deliverables/${slug}`} passHref={true}>
        <a css={styles}>
          <WorkDetails
            cover={cover}
            title={title}
            summary={summary}
            published={published}
          />
        </a>
      </Link>
    )
  } else {
    element = (
      <a href={link} css={styles}>
        <WorkDetails
          cover={cover}
          title={title}
          summary={summary}
          published={published}
        />
      </a>
    )
  }
  return element
}

export default WorkCell

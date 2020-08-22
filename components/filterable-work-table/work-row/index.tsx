import Link from 'next/link'
import WorkDetails from './work-details'
import { colors } from 'theme'
import { css } from '@emotion/core'

type Props = {
  location: 'internal' | 'external'
  published: string
  slug?: string
  summary: string
  title: string
  link?: string
}

const styles = css({
  display: 'block',
  textDecoration: 'none',
  padding: '24px 0',
  borderTop: `1px solid ${colors.border}`,
  '&:last-child': {
    borderBottom: `1px solid ${colors.border}`
  }
})

const WorkRow = ({
  location,
  published,
  slug,
  summary,
  title,
  link
}: Props): JSX.Element => {
  let element
  if (location === 'internal') {
    element = (
      <Link
        href="/deliverables/[slug]"
        as={'/deliverables/' + slug}
        passHref={true}
      >
        <a css={styles}>
          <WorkDetails title={title} summary={summary} published={published} />
        </a>
      </Link>
    )
  } else {
    element = (
      <a href={link} css={styles}>
        <WorkDetails title={title} summary={summary} published={published} />
      </a>
    )
  }
  return element
}

export default WorkRow

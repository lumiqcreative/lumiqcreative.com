import { colors } from 'theme'
import { forwardRef } from 'react'
import Image from 'next/image'
import Text from 'components/text'
import formatDate from 'utils/format-date'

type Props = {
  cover: string
  datePublished: string
  href?: string
  onClick?: () => void
  summary: string
  title: string
}

const WorkCell = forwardRef<HTMLAnchorElement, Props>(
  (
    {
      cover,
      datePublished,
      href = '',
      onClick = () => null,
      summary,
      title
    }: Props,
    ref
  ): JSX.Element => (
    <a
      css={{ gridColumn: 'span 4', display: 'block', textDecoration: 'none' }}
      href={href}
      onClick={onClick}
      ref={ref}
    >
      <Image
        layout='responsive'
        css={{ background: colors.surface.secondary }}
        height='1080'
        src={cover}
        width='1920'
        alt={title}
      />
      <Text
        as='h2'
        css={{ color: colors.onSurface.primary, marginTop: 24 }}
        style='title2'
      >
        {title}
      </Text>
      <Text
        as='p'
        css={{ marginTop: 12, color: colors.onSurface.primary }}
        style='body2'
      >
        {summary}
      </Text>
      <Text
        as='p'
        css={{ marginTop: 12, color: colors.onSurface.secondary }}
        style='body2'
      >
        {formatDate(datePublished)}
      </Text>
    </a>
  )
)

export default WorkCell

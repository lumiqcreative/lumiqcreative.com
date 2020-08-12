import Title from 'components/title'
import Body from 'components/body'
import { colors } from 'theme'

type Props = {
  href: string
  title: string
  subtitle: string
  meta: string
}

const WorkRow = ({ href, title, subtitle, meta }: Props): JSX.Element => {
  return (
    <a
      href={href}
      css={{
        display: 'block',
        textDecoration: 'none',
        padding: '24px 0',
        borderTop: `1px solid ${colors.border}`,
        '&:last-child': { borderBottom: `1px solid ${colors.border}` }
      }}
    >
      <Title as="h3" variant={3} css={{ color: colors.onSurface }}>
        {title}
      </Title>
      <Body css={{ marginTop: 8, color: colors.onSurface }}>
        {subtitle}
        <span
          css={{
            display: 'inline',
            color: colors.onSurfaceMedium
          }}
        >
          {' '}
          – {meta}
        </span>
      </Body>
    </a>
  )
}

export default WorkRow

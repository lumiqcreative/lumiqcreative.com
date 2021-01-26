import { colors } from 'theme'
import { ReactNode } from 'react'
import Text from 'components/text'

type Props = {
  detail: ReactNode
  subtitle: string
  title: string
}

const ListRow = ({ detail, subtitle, title }: Props) => (
  <div
    css={{
      alignItems: 'center',
      borderBottom: `1px solid ${colors.border}`,
      display: 'flex',
      justifyContent: 'space-between',
      padding: '18px 0',
      '&:first-of-type': {
        borderTop: `1px solid ${colors.border}`
      }
    }}
  >
    <div css={{ display: 'grid', gridRowGap: 4, marginRight: 8 }}>
      <Text
        as='h2'
        style='subtitle'
        css={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}
      >
        {title}
      </Text>
      <Text
        as='p'
        style='body2'
        css={{
          color: colors.onSurface[1]
        }}
      >
        {subtitle}
      </Text>
    </div>
    {detail}
  </div>
)

export default ListRow

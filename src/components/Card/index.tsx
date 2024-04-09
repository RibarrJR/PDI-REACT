import * as S from './styles'
import { PageIcon } from '../../../public/img/htmlcssjs'

export type CardProps = {
  title: string
  icon: JSX.Element
  subtitle: string
  color?: 'greenIcon' | 'blueIcon' | 'redIcon'
}

const Card = ({
  icon = <PageIcon />,
  subtitle = '',
  title = '',
  color = 'greenIcon'
}: CardProps) => (
  <S.Wrapper>
    {/* img */}
    <S.WrapperImage color={color}>
      <S.Image>{icon}</S.Image>
    </S.WrapperImage>
    {/* title */}
    <S.Title>{title}</S.Title>
    {/* traço */}
    <S.Dash />
    {/* subtitle */}
    <S.Subtitle>{subtitle}</S.Subtitle>
  </S.Wrapper>
)

export default Card

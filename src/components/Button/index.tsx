import * as S from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  color?: 'primary' | 'secondary' | 'transparent'
  iconPosition?: 'left' | 'right'
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  withIcon?: boolean
  icon?: JSX.Element
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({
  children,
  icon,
  iconPosition = 'right',
  size = 'medium',
  color = 'primary',
  fullWidth = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper
    size={size}
    color={color}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    {...props}
  >
    {iconPosition === 'left' && icon}
    {!!children && <span>{children}</span>}
    {iconPosition === 'right' && icon}
  </S.Wrapper>
)

export default Button

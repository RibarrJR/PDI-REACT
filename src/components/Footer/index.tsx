import * as S from './styles'
import { FacebookCircle } from '@styled-icons/boxicons-logos/FacebookCircle'
import { Instagram } from '@styled-icons/bootstrap/Instagram'
import { Twitter } from '@styled-icons/boxicons-logos/Twitter'

const Footer = () => (
  <S.Wrapper>
    <S.Content>
      <S.Social>
        <h1>Siga nas Redes</h1>
        <span>{'Segue a gente nas redes ;)'}</span>
        <S.IconsBox>
          <a href="#">
            <FacebookCircle />
          </a>
          <a href="#">
            <Instagram />
          </a>
          <a href="#">
            <Twitter />
          </a>
        </S.IconsBox>
      </S.Social>
      <S.Column>
        <h1>Framework</h1>
        <a href="">
          <span>Sobre nós</span>
        </a>
        <a href="">
          <span>Clientes</span>
        </a>
        <a href="">
          <span>Contato</span>
        </a>
      </S.Column>
      <S.Column>
        <h1>Tecnologias</h1>
        <a href="">
          <span>React</span>
        </a>
        <a href="">
          <span>Angular</span>
        </a>
        <a href="">
          <span>Vue</span>
        </a>
      </S.Column>
      <S.Column>
        <h1>Responsáveis</h1>
        <a href="">
          <span>Ernesto Junior Ribarr</span>
        </a>
        <a href="">
          <span>Matheus Souto</span>
        </a>
      </S.Column>
    </S.Content>
  </S.Wrapper>
)

export default Footer

import * as S from './styles'
import Card from '../Card'
import { ChevronRight } from '@styled-icons/bootstrap/ChevronRight'
import { PageIcon } from '../../../public/img/htmlcssjs'
import { ReactLogo } from '@styled-icons/boxicons-logos/ReactLogo'
import { TestTube } from '@styled-icons/boxicons-regular/TestTube'

const MainContent = () => (
  <S.Wrapper>
    <S.BoxContent>
      <S.Dash />
      <S.Title>O que você vai aprender?</S.Title>
      <S.Subtitle>
        Neste projeto aprenderemos html, CSS, JS, Algoritmos, fundamentos do
        react, conexão com api, react hooks, react router, react forms,
        typescript, styled component e mais...
      </S.Subtitle>
      <S.Link href="#">
        Veja mais
        <ChevronRight />
      </S.Link>
    </S.BoxContent>
    <S.Cards>
      <Card
        icon={<PageIcon />}
        color="greenIcon"
        title="HTML CSS JavaSCript"
        subtitle="O básico da programação web em seus respectivos papéis"
      ></Card>
      <Card
        icon={<TestTube />}
        color="redIcon"
        title="Testes"
        subtitle="Testes e padrões de código e projeto para sempre desenvolver de forma profissional"
      ></Card>
      <Card
        icon={<ReactLogo />}
        color="blueIcon"
        title="Fundamentos  do React"
        subtitle="Os principais recuros do react para utilizar  em seus projetos"
      ></Card>
    </S.Cards>
  </S.Wrapper>
)

export default MainContent

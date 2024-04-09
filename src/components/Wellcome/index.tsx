import Button from 'components/Button'
import * as S from './styles'
import MediaMatch from 'components/MediaMatch'

const Wellcome = () => (
  <S.Wrapper>
    <S.WellcomeText>Bem vindo</S.WellcomeText>
    <S.TitleWrapper>
      <S.Title>Projeto Simples em React</S.Title>
    </S.TitleWrapper>
    <S.Subtitle>
      Vamos Começar a aprender React com este site por favor divirta-se no
      processo !
    </S.Subtitle>
    <S.BoxButton>
      <MediaMatch lessThan="medium">
        <Button color="primary" fullWidth size="small">
          Faça o teste de nivelmaneto
        </Button>
        <Button color="transparent" fullWidth size="small">
          Quer aprender mais ?
        </Button>
      </MediaMatch>
      <MediaMatch greaterThan="medium">
        <Button color="primary" size="medium">
          Faça o teste de nivelmaneto
        </Button>
        <Button color="transparent" size="medium">
          Quer aprender mais ?
        </Button>
      </MediaMatch>
    </S.BoxButton>
  </S.Wrapper>
)

export default Wellcome

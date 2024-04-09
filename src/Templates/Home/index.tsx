import * as S from './styles'
import Menu from 'components/Menu'
import Wellcome from 'components/Wellcome'
import MainContent from 'components/MainContent'
import Footer from 'components/Footer'

const Home = () => (
  <S.Wrapper>
    <Menu />
    <S.WellcomeSection>
      <Wellcome />
    </S.WellcomeSection>
    <S.ContentSection>
      <MainContent />
    </S.ContentSection>
    <S.FooterSection>
      <Footer />
    </S.FooterSection>
  </S.Wrapper>
)

export default Home

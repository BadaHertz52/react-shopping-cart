import Header from './Header';
import Footer from './Footer';

import * as Styled from './styles';

const Layout = ({ children }) => (
  <Styled.Container>
    <Header />
    <main className="container">{children}</main>
    <Footer />
  </Styled.Container>
);

export default Layout;

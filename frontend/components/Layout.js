import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PostIndex from './PostIndex';

const layoutStyle = {
  margin: 20,
  padding: 20,
};

const mainLayout = {
  display: `grid`,
  gridTemplateColumns: `70% 30% 70%`,
}

const Layout = props => {
  const { children, index, mainNav, footerNav } = props;
  return (
    <div style={layoutStyle}>
      <Header mainNav={mainNav} />
      <main style={mainLayout}>
        <section>
          {children}
        </section>
        <aside>
        {index && <PostIndex /> }
        </aside>
      </main>
      <Footer footerNav={footerNav}/>
    </div>
  );
};

Layout.defaultProps = {
      index: true,
    }

export default Layout;


import React from 'react';
import fetch from 'isomorphic-unfetch';
import  Config  from '../config';

const PageWrapper = Comp =>
  class extends React.Component {
    static async getInitialProps(args) {
      const mainNavRes = await fetch(
        `${Config.apiUrl}/menus/v1/menus/main-nav`
      );
      const mainNav = await mainNavRes.json();
      const footerNavRes = await fetch(
        `${Config.apiUrl}/menus/v1/menus/footer-nav`
      );
      const footerNav = await footerNavRes.json();
      return {
        mainNav,
        footerNav,
        ...(Comp.getInitialProps ? await Comp.getInitialProps(args) : null)
      };
    }

    render() {
      return <Comp {...this.props} />;
    }
  };

export default PageWrapper;

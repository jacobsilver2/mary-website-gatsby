import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import stylesheet from '../src/styles/style.scss';
import Menu from './Menu';


const Header = ({mainNav}) => (
  <div>
    <Head>
      <style
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: stylesheet }}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>WordPress + React Starter Kit Frontend by Postlight</title>
    </Head>
    <header>
      <Link
        href="/"
      >
      <a><h1>WordPress Blog</h1></a>
      </Link>      
    </header>
    <Menu menu={mainNav}/>
  </div>
);

export default Header;

import React from 'react';
import Menu from './Menu';

const hrStyle = {
  marginTop: 75,
};

const Footer = ({footerNav}) => (
  <div>
    <Menu menu={footerNav}/>
    <hr style={hrStyle} />
  </div>
);

export default Footer;

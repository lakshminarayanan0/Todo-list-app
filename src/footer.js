
import React from 'react';

function Footer({companyName}) {
  const year = new Date().getFullYear();

  return (
    <div className='footer'>
      {companyName} &copy; {year} || All rights are reserved
    </div>
  );
}

export default Footer;
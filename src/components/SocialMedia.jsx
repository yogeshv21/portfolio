import React from 'react';
import { BsInstagram } from 'react-icons/bs';

const SocialMedia = () => {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <div className="app__social">
      {/* <div onClick={() => openInNewTab('https://www.linkedin.com/in/yogeshv-dev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')} style={{ cursor: 'pointer' }}>
        <BsLinkedin />
      </div> */}
      <div onClick={() => openInNewTab('https://www.instagram.com/yogesh_21_?igsh=MWxiaDd5Z2V0dHhpdQ==')} style={{ cursor: 'pointer' }}>
        <BsInstagram />
      </div>
    </div>
  );
};

export default SocialMedia;

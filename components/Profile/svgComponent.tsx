import React, { useState } from 'react';
import copy from '../../utils/clipBoard';
import './Profile.module.scss';

const GithubIcon = () => {
  return (
    <div
      style={{
        cursor: 'pointer',
        width: '24px',
        height: '24px',
      }}
      onClick={() => { location.href = 'http://github.com/kwt1326' }}
    >
      <svg
        height="24"
        aria-hidden="true"
        viewBox="0 0 16 16"
        version="1.1"
        width="24"
        data-view-component="true"
        className="octicon octicon-mark-github v-align-middle">
        <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
      </svg>
    </div>
  )
}

const EmailIcon = () => {
  const [hover, setHover] = useState(false);
  return (
    <div
      style={{
        cursor: 'pointer',
        width: '24px',
        height: '24px',
        position: 'relative',
      }}
      onClick={() => copy('u1326@hotmail.com')}
      onMouseEnter={(e) => setHover(true)}
      onMouseLeave={(e) => setHover(false)}
    >
      <svg version="1.1" viewBox="0 0 24 24" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g id="info" />
        <g id="icons">
          <path d="M20,3H4C1.8,3,0,4.8,0,7v10c0,2.2,1.8,4,4,4h16c2.2,0,4-1.8,4-4V7C24,4.8,22.2,3,20,3z M21.6,8.8l-7.9,5.3   c-0.5,0.3-1.1,0.5-1.7,0.5s-1.2-0.2-1.7-0.5L2.4,8.8C2,8.5,1.9,7.9,2.2,7.4C2.5,7,3.1,6.9,3.6,7.2l7.9,5.3c0.3,0.2,0.8,0.2,1.1,0   l7.9-5.3c0.5-0.3,1.1-0.2,1.4,0.3C22.1,7.9,22,8.5,21.6,8.8z" id="email" />
        </g>
      </svg>
      <div
        style={{
          visibility: hover ? "visible" : "hidden",
          position: "absolute",
          top: 25,
          left: 0,
          padding: 10,
          border: '1px solid #aaa',
          borderRadius: 10,
          background: '#fff',
        }}
      >u1326@hotmail.com</div>
    </div>
  )
}

export default {
  GithubIcon,
  EmailIcon,
}
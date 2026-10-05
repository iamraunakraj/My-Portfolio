import React, { createContext, useContext, useState } from 'react';

const DEFAULT_AVATAR_URL = '/raunak-photo.svg';

const AvatarContext = createContext(null);

export function AvatarProvider({ children }) {
  const [avatarUrl, setAvatarUrlState] = useState(() => {
    return localStorage.getItem('raunak_portfolio_avatar') || DEFAULT_AVATAR_URL;
  });

  const [active3DMode, setActive3DMode] = useState('photo');

  const setAvatarUrl = (url) => {
    setAvatarUrlState(url);
    try {
      localStorage.setItem('raunak_portfolio_avatar', url);
    } catch {
      // ignore storage quota error for large base64
    }
  };

  const resetAvatar = () => {
    setAvatarUrlState(DEFAULT_AVATAR_URL);
    localStorage.removeItem('raunak_portfolio_avatar');
  };

  return (
    <AvatarContext.Provider
      value={{
        avatarUrl,
        setAvatarUrl,
        resetAvatar,
        active3DMode,
        setActive3DMode,
      }}
    >
      {children}
    </AvatarContext.Provider>
  );
}

export function useAvatar() {
  const context = useContext(AvatarContext);
  if (!context) {
    throw new Error('useAvatar must be used within an AvatarProvider');
  }
  return context;
}

import React from 'react';

const AvatarSelector = ({ selectedAvatar, onAvatarSelect }) => {
  const avatars = [
    // Girl avatars
    {
      id: 'girl1',
      name: 'Emma',
      svg: (
        <svg viewBox="0 0 100 100" className="avatar-svg">
          <circle cx="50" cy="35" r="25" fill="#fdbcb4"/>
          <circle cx="45" cy="30" r="2" fill="#333"/>
          <circle cx="55" cy="30" r="2" fill="#333"/>
          <path d="M45 40 Q50 45 55 40" stroke="#ff69b4" strokeWidth="2" fill="none"/>
          <path d="M25 20 Q50 10 75 20 Q75 35 50 35 Q25 35 25 20" fill="#8b4513"/>
          <rect x="40" y="60" width="20" height="30" fill="#ff69b4" rx="10"/>
          <circle cx="35" cy="75" r="8" fill="#fdbcb4"/>
          <circle cx="65" cy="75" r="8" fill="#fdbcb4"/>
        </svg>
      )
    },
    {
      id: 'girl2',
      name: 'Sophia',
      svg: (
        <svg viewBox="0 0 100 100" className="avatar-svg">
          <circle cx="50" cy="35" r="25" fill="#f4c2a1"/>
          <circle cx="45" cy="30" r="2" fill="#333"/>
          <circle cx="55" cy="30" r="2" fill="#333"/>
          <path d="M45 40 Q50 45 55 40" stroke="#ff1493" strokeWidth="2" fill="none"/>
          <path d="M20 15 Q30 5 50 15 Q70 5 80 15 Q75 35 50 35 Q25 35 20 15" fill="#daa520"/>
          <rect x="40" y="60" width="20" height="30" fill="#9370db" rx="10"/>
          <circle cx="35" cy="75" r="8" fill="#f4c2a1"/>
          <circle cx="65" cy="75" r="8" fill="#f4c2a1"/>
        </svg>
      )
    },
    {
      id: 'girl3',
      name: 'Ava',
      svg: (
        <svg viewBox="0 0 100 100" className="avatar-svg">
          <circle cx="50" cy="35" r="25" fill="#deb887"/>
          <circle cx="45" cy="30" r="2" fill="#333"/>
          <circle cx="55" cy="30" r="2" fill="#333"/>
          <path d="M45 40 Q50 45 55 40" stroke="#ff6347" strokeWidth="2" fill="none"/>
          <path d="M30 20 Q50 5 70 20 Q70 35 50 35 Q30 35 30 20" fill="#2f4f4f"/>
          <rect x="40" y="60" width="20" height="30" fill="#20b2aa" rx="10"/>
          <circle cx="35" cy="75" r="8" fill="#deb887"/>
          <circle cx="65" cy="75" r="8" fill="#deb887"/>
        </svg>
      )
    },
    {
      id: 'girl4',
      name: 'Mia',
      svg: (
        <svg viewBox="0 0 100 100" className="avatar-svg">
          <circle cx="50" cy="35" r="25" fill="#ffdbac"/>
          <circle cx="45" cy="30" r="2" fill="#333"/>
          <circle cx="55" cy="30" r="2" fill="#333"/>
          <path d="M45 40 Q50 45 55 40" stroke="#ff4500" strokeWidth="2" fill="none"/>
          <path d="M25 25 Q35 10 50 20 Q65 10 75 25 Q75 35 50 35 Q25 35 25 25" fill="#cd853f"/>
          <rect x="40" y="60" width="20" height="30" fill="#ffa500" rx="10"/>
          <circle cx="35" cy="75" r="8" fill="#ffdbac"/>
          <circle cx="65" cy="75" r="8" fill="#ffdbac"/>
        </svg>
      )
    },
    {
      id: 'girl5',
      name: 'Luna',
      svg: (
        <svg viewBox="0 0 100 100" className="avatar-svg">
          <circle cx="50" cy="35" r="25" fill="#f5deb3"/>
          <circle cx="45" cy="30" r="2" fill="#333"/>
          <circle cx="55" cy="30" r="2" fill="#333"/>
          <path d="M45 40 Q50 45 55 40" stroke="#da70d6" strokeWidth="2" fill="none"/>
          <path d="M25 18 Q40 8 50 18 Q60 8 75 18 Q75 35 50 35 Q25 35 25 18" fill="#4b0082"/>
          <rect x="40" y="60" width="20" height="30" fill="#ba55d3" rx="10"/>
          <circle cx="35" cy="75" r="8" fill="#f5deb3"/>
          <circle cx="65" cy="75" r="8" fill="#f5deb3"/>
        </svg>
      )
    },
    // Boy avatars
    {
      id: 'boy1',
      name: 'Alex',
      svg: (
        <svg viewBox="0 0 100 100" className="avatar-svg">
          <circle cx="50" cy="35" r="25" fill="#fdbcb4"/>
          <circle cx="45" cy="30" r="2" fill="#333"/>
          <circle cx="55" cy="30" r="2" fill="#333"/>
          <path d="M45 40 Q50 43 55 40" stroke="#333" strokeWidth="2" fill="none"/>
          <path d="M30 25 Q50 15 70 25 Q70 35 50 35 Q30 35 30 25" fill="#8b4513"/>
          <rect x="40" y="60" width="20" height="30" fill="#4169e1" rx="10"/>
          <circle cx="35" cy="75" r="8" fill="#fdbcb4"/>
          <circle cx="65" cy="75" r="8" fill="#fdbcb4"/>
        </svg>
      )
    },
    {
      id: 'boy2',
      name: 'Max',
      svg: (
        <svg viewBox="0 0 100 100" className="avatar-svg">
          <circle cx="50" cy="35" r="25" fill="#f4c2a1"/>
          <circle cx="45" cy="30" r="2" fill="#333"/>
          <circle cx="55" cy="30" r="2" fill="#333"/>
          <path d="M45 40 Q50 43 55 40" stroke="#333" strokeWidth="2" fill="none"/>
          <path d="M35 20 Q50 10 65 20 Q65 35 50 35 Q35 35 35 20" fill="#daa520"/>
          <rect x="40" y="60" width="20" height="30" fill="#32cd32" rx="10"/>
          <circle cx="35" cy="75" r="8" fill="#f4c2a1"/>
          <circle cx="65" cy="75" r="8" fill="#f4c2a1"/>
        </svg>
      )
    },
    {
      id: 'boy3',
      name: 'Leo',
      svg: (
        <svg viewBox="0 0 100 100" className="avatar-svg">
          <circle cx="50" cy="35" r="25" fill="#deb887"/>
          <circle cx="45" cy="30" r="2" fill="#333"/>
          <circle cx="55" cy="30" r="2" fill="#333"/>
          <path d="M45 40 Q50 43 55 40" stroke="#333" strokeWidth="2" fill="none"/>
          <path d="M32 22 Q50 12 68 22 Q68 35 50 35 Q32 35 32 22" fill="#2f4f4f"/>
          <rect x="40" y="60" width="20" height="30" fill="#ff6347" rx="10"/>
          <circle cx="35" cy="75" r="8" fill="#deb887"/>
          <circle cx="65" cy="75" r="8" fill="#deb887"/>
        </svg>
      )
    },
    {
      id: 'boy4',
      name: 'Noah',
      svg: (
        <svg viewBox="0 0 100 100" className="avatar-svg">
          <circle cx="50" cy="35" r="25" fill="#ffdbac"/>
          <circle cx="45" cy="30" r="2" fill="#333"/>
          <circle cx="55" cy="30" r="2" fill="#333"/>
          <path d="M45 40 Q50 43 55 40" stroke="#333" strokeWidth="2" fill="none"/>
          <path d="M28 24 Q50 14 72 24 Q72 35 50 35 Q28 35 28 24" fill="#cd853f"/>
          <rect x="40" y="60" width="20" height="30" fill="#9932cc" rx="10"/>
          <circle cx="35" cy="75" r="8" fill="#ffdbac"/>
          <circle cx="65" cy="75" r="8" fill="#ffdbac"/>
        </svg>
      )
    },
    {
      id: 'boy5',
      name: 'Ethan',
      svg: (
        <svg viewBox="0 0 100 100" className="avatar-svg">
          <circle cx="50" cy="35" r="25" fill="#f5deb3"/>
          <circle cx="45" cy="30" r="2" fill="#333"/>
          <circle cx="55" cy="30" r="2" fill="#333"/>
          <path d="M45 40 Q50 43 55 40" stroke="#333" strokeWidth="2" fill="none"/>
          <path d="M33 23 Q50 13 67 23 Q67 35 50 35 Q33 35 33 23" fill="#4b0082"/>
          <rect x="40" y="60" width="20" height="30" fill="#ff8c00" rx="10"/>
          <circle cx="35" cy="75" r="8" fill="#f5deb3"/>
          <circle cx="65" cy="75" r="8" fill="#f5deb3"/>
        </svg>
      )
    }
  ];

  return (
    <div className="avatar-selector">
      <h3 className="avatar-title">Choose Your Avatar</h3>
      <div className="avatar-grid">
        {avatars.map((avatar) => (
          <div
            key={avatar.id}
            className={`avatar-option ${selectedAvatar === avatar.id ? 'selected' : ''}`}
            onClick={() => onAvatarSelect(avatar.id)}
            title={avatar.name}
          >
            {avatar.svg}
            <span className="avatar-name">{avatar.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvatarSelector;
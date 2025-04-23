import React from 'react';

import UserDropdown from './UserDropdown';
import LoginDropdown from './LoginDropdown';
import useAuthStore from '@/store/useAuthStore';

export default function Users () {
   const { isAuthenticated } = useAuthStore();

  return (
    <div>
       {isAuthenticated ? (
        <UserDropdown />
      ) : (
        <LoginDropdown/>
      )}
    </div>
  );
}
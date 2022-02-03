import React from 'react';
import { Auth } from '../../components/Auth';


export function AuthManager ({role}) { 

return (
    <Auth role={role} />
    );
}
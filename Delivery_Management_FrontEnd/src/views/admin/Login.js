import React from 'react';
import { Auth } from '../../components/Auth';



export function AuthAdmin ({role}) { 

return (
    <Auth  role={role}  />
    );
}
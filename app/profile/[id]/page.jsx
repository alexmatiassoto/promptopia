'use client';

import { useState,useEffect } from 'react';

import { useSearchParams } from 'next/navigation';

import Profile from '@components/Profile';

const UserProfile = ({params}) => {
    
    const searchParams = useSearchParams();
    const userName = searchParams.get("name");
    const [ userPosts, setUserPosts ] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${session?.user.id}/posts`);
            const data = await response.json();
                
            setUserPosts(data);
        }

        if(params?.id) 
            fetchPosts();
        },[params.id]);

  
  return (
    <Profile name={userName}
        desc="Welcome to your personalized profile page"
        data={userPosts}
       
        
    />
  )
}

export default UserProfile;
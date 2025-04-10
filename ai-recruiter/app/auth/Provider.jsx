"use client"; // This is a client component that handles user authentication using Supabase and Google OAuth
import React from 'react';
import { supabase } from '../../Services/SupabaseClient'; // Ensure the correct path to SupabaseClient

function Provider({ children }) {

    const[user,setuser]=useState();
    UseEffect(() => {
        CreateNewUser();
    }, []);

    const CreateNewUser = () => {

        supabase.auth.getUser().then(({ data:user }) => {
            //check if user existed
            let{data: Users, error}=await supabase
            .from('users')
            .select("*")
            .eq('email', user?.email)

        console.log(Users);
        //if not then create new user
        if(users?.length==0){
            //create new user
            const{data, error}=await supabase
            .from('users')
            .insert([
                {
                    name:user?.user_metadata.full_name,
                    email:user?.email,
                    picture:user?.user_metadata.avatar_url,
                }
            ])
            console.log(data);
            setuser(data);
            return;
        }

        setuser(Users[0]);
        });
    };

    return (
        <UserDeatilsContext.Provider value={{ user, setuser }}>
            <div>{children}</div>
        </UserDeatilsContext.Provider>
    );
}

export default Provider

export const useUser()=> {
    const context = useContext(UserDeatilsContext);
    return context;
}
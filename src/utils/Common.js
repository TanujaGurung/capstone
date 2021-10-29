// export  const getUserNewTab =() =>{
//  const userStr1= localStorage.getItem("user1")
//  if(userStr1)
// {return  JSON.parse(userStr1);} 
//  else
//  {return null;}
  
// }

export  const getUser =() =>{
    const userStr=localStorage.getItem("user")
    if(userStr)
   {return  JSON.parse(userStr);} 
    else
    {return null;}
     
   }

export const getToken =() =>{
    return localStorage.getItem("token") || null;
}

export const getEmail =() =>{
    return localStorage.getItem("email") || null;
}
export const setUserSession =(token, user,address,mobile,id,roles,email) =>{
    localStorage.setItem("token" ,token);
    localStorage.setItem("id" ,id);
    localStorage.setItem("mobile" ,mobile);
    localStorage.setItem("address", JSON.stringify(address));
    localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("email",email);
    localStorage.setItem("roles", JSON.stringify(roles));
   
}
export const getMobile =() =>{
    return localStorage.getItem("mobile") || null;
}
export const getAddress =() =>{
    return localStorage.getItem("address") || null;
}
export const getId =() =>{
    return localStorage.getItem("id") || null;
}
export  const getRoles =() =>{
    const rolesStr=localStorage.getItem("roles")
    if(rolesStr === "ROLE_NGO")
   {return  JSON.parse(rolesStr);} 
    else
    {return null;}
     
   }


export const removeUserSession=() =>{
    localStorage.removeItem("token");
    localStorage.removeItem("user");
localStorage.removeItem("email");
localStorage.removeItem("id");
localStorage.removeItem("roles");
localStorage.removeItem("mobile");
localStorage.removeItem("address");
localStorage.removeItem("user1");
}

export  const getUser =() =>{
 const userStr= sessionStorage.getItem("user")
 if(userStr)
{return  JSON.parse(userStr);} 
 else
 {return null;}
  
}

export const getToken =() =>{
    return sessionStorage.getItem("token") || null;
}
export const setUserSession =(token, user,address,mobile,id,roles) =>{
    sessionStorage.setItem("token" ,token);
    sessionStorage.setItem("id" ,id);
    sessionStorage.setItem("mobile" ,mobile);
    sessionStorage.setItem("address", JSON.stringify(address));
    sessionStorage.setItem("user", JSON.stringify(user));
    sessionStorage.setItem("roles", JSON.stringify(roles));

}
export const getMobile =() =>{
    return sessionStorage.getItem("mobile") || null;
}
export const getAddress =() =>{
    return sessionStorage.getItem("address") || null;
}
export const getId =() =>{
    return sessionStorage.getItem("id") || null;
}
export const getRoles =() =>{
    return sessionStorage.getItem("roles") || null;
}

export const removeUserSession=() =>{
sessionStorage.removeItem("token");
sessionStorage.removeItem("user");
}

import {POST} from "./Backend";

export async function Signin(body){
    const result = await POST("User/Login", JSON.stringify(body));
    if(!result.isError){
        localStorage.setItem("access", result.body.token);
    }
    return{
        isError : result.isError,
        body : result.body,
    };
}
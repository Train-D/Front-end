const url ="https://traind.azurewebsites.net/api/";

function getHeaders(){
    var access = localStorage.getItem("access");

    return{
        "Content-Type":"application/json",
        "Accept":"application/json",
        Authorization: access ? `Bearer ${access}` : null, 
    }
}

export async function POST(endpoint, body){
    try{
        var response = await fetch(`${url}/${endpoint}`,{
            method:'POST',
            headers:getHeaders(),
            body:body,
        });

        var responseBody = null;

        if(response.status !== 204){
            responseBody = await response.json();
        }
        if(response.ok){
            return{
                isError:false,
                body:responseBody
            }
        } else{
            return{
                isError:true,
                body:responseBody,
            }
        }
    }
    catch(error){
        return{
            isError:true,
            body:error,
        }
    }
}

export async function GET(endpoint) {
    try {
    var expiryDate = localStorage.getItem("tokenExpiry")
  
    const response = await fetch(`${url}/${endpoint}`, {
        headers: getHeaders(),
    });
  
      var responseBody = null;
  
      if (response.status !== 204) {
        responseBody = response.data;
      }
  
      if (response.status >= 200 && response.status < 300) {
        return {
          isError: false,
          body: responseBody,
        };
      } else {
        return {
          isError: true,
          body: responseBody,
        };
      }
  
    } catch (error) {
      return {
        isError: true,
        body: error,
      };
    }
  }
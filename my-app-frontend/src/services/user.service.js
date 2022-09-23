import axios from 'axios'

 const Users_Rest_url_getUser = 'http://localhost:8080/api/user/login';

 const Users_Rest_Url_RegisterUser = 'http://localhost:8080/api/user';

 const Users_Rest_Url_GetAllUsers = 'http://localhost:8080/api/user';

 const User_Rest_Url_getUserDetail = 'http://localhost:8080/api/user';

class userService {

  getUserAuthenticated(user){
    return axios.post(Users_Rest_url_getUser, user);
  }

  getUserRegistered(user){
    return axios.post(Users_Rest_Url_RegisterUser, user);
  }

  getAllUsers(){
    return axios.get(Users_Rest_Url_GetAllUsers);
  }

  getUserDetail(id){
    return axios.get(User_Rest_Url_getUserDetail + "/" + id);
  }

}

export default new userService();
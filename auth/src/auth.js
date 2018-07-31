export default {
  loggedIn() {
    // localStorage token!
    return localStorage.token;
    // const storage = window.localStorage;
    // if (storage.getItem('token')) return false
  },
  login(email, pass, cb){
    // return (email == 'joe@example.com' && pass =="1111")
    setTimeout(()=>{
        //密码正确 种一个token
        const token =  Math.random().toString(36).substring(7);
        localStorage.setItem('token', token);
        if(email === 'joe@example.com' && pass === "111111"){
            cb(true);
        }else{
            cb(false)
        }
    },500)
  }
}

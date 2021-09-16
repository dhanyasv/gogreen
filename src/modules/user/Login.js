const Login = (username,pword) => {
    const dummyuser = {
        name:'Dhanya',
        password:'dhanya'
    }
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            if(username === 'dhanya' && pword === 'dhanya') {
                resolve()
            } else {
                reject()
            }
        },1000)
    })
}
export default  Login
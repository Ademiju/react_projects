import React, {useState}from 'react'


const Register = ({setAlert}) => {
    const [userDetails, setuserDetails] = useState({username: "", email: "", password: ""})

    const handleUserInput = (e) =>{
        setuserDetails({...userDetails,[e.target.name]: e.target.value})
    }

    const handleRegistration = () => {
        let {username, email} = userDetails


        //validate that all fields are valid
        let isFieldsIncomplete = Object.keys(userDetails).some((details) => details === "")
        if(isFieldsIncomplete){
            setAlert({ ishow: true, status:"error", message:"field Incomplete"})
            return
        }

        //validate user Email
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        let isEmailCorrect = email.match(validRegex)
        if(!isEmailCorrect){
            setAlert({ ishow: true, status:"error", message:"Email Incorrect"})
            return
        }

        //validate username entered doesnot exist

          try {
          let usersDatabase;
          usersDatabase = JSON.parse(localStorage.getItem("users"));
          let isUserExist = usersDatabase.some(
            (users) => users.username === username
          )
          if (isUserExist) {
            setAlert({
              ishow: true,
              status: "error",
              message: "Username Already Exist",
            });
            return;
          }

          let newUserDatabase = [userDetails, ...usersDatabase];
          localStorage.setItem("users", JSON.stringify(newUserDatabase));
          setAlert({
            ishow: true,
            status: "success",
            message: "Registration Successful",
          });
        } catch (error) {
            localStorage.setItem('users',JSON.stringify([userDetails]))
          setAlert({
            ishow: true,
            status: "success",
            message: "Registration Successful",
          });
        }

        //  //validate email entered doesnot exist


         try {
           let emailDatabase;
           emailDatabase = JSON.parse(localStorage.getItem("emails"));
           let isEmailExist = emailDatabase.some(
             (emails) => emails.email === email
           );
           if (isEmailExist) {
             setAlert({
               ishow: true,
               status: "error",
               message: "Email Already Exist",
             });
             return;
           }
           let newEmailDatabase = [userDetails, ...emailDatabase];
           localStorage.setItem("emails", JSON.stringify(newEmailDatabase));
           setAlert({
             ishow: true,
             status: "success",
             message: "Registration Successful",
           });
         } catch (error) {
           localStorage.setItem("emails", JSON.stringify([userDetails]));
           setAlert({
             ishow: true,
             status: "success",
             message: "Registration Successful",
           });
         }
         console.log([userDetails])
        }
    
  return (
    <div className='auth-register'> 
        <label>Username</label>
        <input name='username' onChange={handleUserInput}/>
        <label>Email</label>
        <input name='email' onChange={handleUserInput}/>
        <label>Password</label>
        <input name='password' onChange={handleUserInput}/>
        <button onClick={handleRegistration}>Register</button>
       
        
    </div>
  )

    }

export default Register
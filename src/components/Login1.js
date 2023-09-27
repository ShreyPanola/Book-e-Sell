// // import { Button, TextField } from "@mui/material"
// // import { MenuItem } from '@mui/material';
// // import { Select } from '@mui/material';
// // import { useState, useEffect } from "react";
// // import { Formik } from "formik"
// // import * as Yup from "yup"
// // import axios from "axios";
// // import { toast } from 'react-toastify';
// // import { useNavigate } from "react-router-dom";


// // export const Login1 = () => {

// // const Navigate = useNavigate();

// // const [user, setUser] = useState([]);

// // const onRegisterPageClick = () => {
// //     Navigate("/Register");
// // }

// // const onHomePageClick = () => {
// //     Navigate("/");
// // }

// //     useEffect(() => {
// //         console.log("Site is Loaded!!!");

// //         axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
// //             // console.log("User detail: ", res.data);
// //             setUser(res.data);
// //         })
// //     }, []);

// //     const initialValues = {
// //         firstname: "",
// //         lastname: "",
// //         email: "",
// //         role: "",
// //         password: "",
// //         confirmpassword: ""
// //     }
// //     const validationSchema = Yup.object().shape({
// //         firstname: Yup.string().min(3, "Firstname should atleast contain 3 characters"),
// //         lastname: Yup.string().min(3, "Lastname should atleast contain 3 characters"),
// //         email: Yup.string().email("Please enter a valid email"),
// //         password: Yup.string().min(5, "Password must contain 5 character"),
// //         confirmpassword: Yup.string().oneOf([Yup.ref('password'), null], "Password must be same")
// //     })

// //     const onFormSubmit = (values) => {
// //         console.log(values);

// //         const requestData = {
// //             userFirstName: values.firstname,
// //             userLastName: values.lastname,
// //             userEmail: values.email,
// //             userRole: values.role,
// //             userPassword: values.password,
// //             userConfirmPassword: values.confirmpassword,
// //         }

// //         axios.post("https://jsonplaceholder.typicode.com/posts", requestData)
// //             .then((res) => {
// //                 if (res.status === 201) {
// //                     console.log(res.data.id);
// //                     toast.success('Registered Successfully', {
// //                         position: "top-center",
// //                         autoClose: 3000,
// //                         hideProgressBar: false,
// //                         closeOnClick: true,
// //                         pauseOnHover: true,
// //                         draggable: true,
// //                         progress: undefined,
// //                         theme: "light",
// //                     });
// //                 }
// //             });

// //     }
// //     return (
// //         <div>
// //             <Formik
// //                 initialValues={initialValues}
// //                 validationSchema={validationSchema}
// //                 onSubmit={onFormSubmit}
// //             >
// //                 {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
// //                     <form onSubmit={handleSubmit}>
// //                         <div style={{
// //                             display: "flex",
// //                             flexDirection: "column",
// //                             justifyContent: "center",
// //                             alignItems: "center",
// //                             rowGap: 10,
// //                         }}>
// //                             <div style={{
// //                                 fontSize: 40,
// //                                 fontWeight: "bolder",
// //                                 color: "#2E2E2E",
// //                             }}>
// //                                 {/* Login or Create an Account */}
// //                                 Login Account
// //                             </div>

// //                             <div style={{
// //                                 marginLeft: 239,
// //                                 marginRight: "auto",
// //                                 fontSize: 20,
// //                                 fontWeight: "bold",
// //                                 color: "rgb(94,94,94)",
// //                             }}>New Customer
// //                                 <div><span style={{
// //                                     fontSize: 14,
// //                                     color: "rgb(94,94,94)",
// //                                     fontWeight: "lighter",
// //                                     marginTop: 50
// //                                 }}>Registration is free and easy.</span></div>
// //                             </div>
// //                             <div style={{
// //                                 marginLeft: 215,
// //                                 marginRight: "auto",
// //                                 fontSize: 14,
// //                             }}>
// //                                 <ul>
// //                                     <li>Faster checkout</li>
// //                                     <li>Save multiple shipping addresses</li>
// //                                     <li>View and track orders and more</li>
// //                                 </ul>
// //                             </div>


// // <div style={{
// //     marginTop: -158,
// //     marginLeft:500,
// //     fontSize: 20,
// //     fontWeight: "bold",
// //     color: "rgb(94,94,94)",
// // }}>
// //     Registered Customers
// //     <div><span style={{
// //         fontSize: 14,
// //         color: "rgb(94,94,94)",
// //         fontWeight: "lighter",
// //         marginTop: 50
// //     }}>If you have an account with us, please log in.</span></div>
// // </div>

// //                             <div style={{
// //                                 marginLeft: 300,
// //                             }}>Email*<br></br>
// //                             <TextField
// //                                 // id="outlined-basic" 
// //                                 name="email"
// //                                 // label="Email" 
// //                                 variant="outlined"
// //                                 value={values.email}
// //                                 onChange={handleChange}
// //                                 onBlur={handleBlur}
// //                                 size="small"
// //                                 style={{
// //                                     width: 250,
// //                                 }}
// //                             />
// //                             <span style={{
// //                                 color: "red",
// //                                 fontSize: 13

// //                             }}
// //                             >
// //                                 {touched.email && errors.email}
// //                             </span></div>


// //                             <div style={{
// //                                 marginTop: 158,
// //                                 display: "flex",
// //                                 columnGap: 790,
// //                             }}>
// //                                 <div style={{
// //                                     display: "flex",
// //                                     flexDirection: "column",
// //                                     rowGap: 5
// //                                 }}>
// //                                     <Button variant="contained" onClick={onRegisterPageClick}
// //                                         style={{
// //                                             backgroundColor: "rgb(255,89,92)",
// //                                             borderRadius: 3,
// //                                             fontWeight: "bold"
// //                                         }}
// //                                     >Create an Account</Button>
// //                                 </div>
// //                                 <div style={{
// //                                     display: "flex",
// //                                     flexDirection: "column",
// //                                     rowGap: 5
// //                                 }}>
// //                                     <Button variant="contained" onClick={onHomePageClick}
// //                                         style={{
// //                                             backgroundColor: "rgb(255,89,92)",
// //                                             borderRadius: 3,
// //                                             fontWeight: "bold"
// //                                         }}>Login</Button>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </form>
// //                 )}
// //             </Formik>

// //             {/* <div>
// //                 {user.map((item) => (
// //                     <div key={item.id}>
// //                         <h3>{item.title}</h3>
// //                         <span>{item.body}</span>
// //                     </div>
// //                 ))}
// //             </div> */}

// //         </div>
// //     )
// // };







// import { Button, TextField } from "@mui/material";
// import { useState, useEffect } from "react";
// import { Formik } from "formik"
// import * as Yup from "yup"
// import axios from "axios";
// import { toast } from 'react-toastify';
// import { useNavigate } from "react-router-dom";


// export const Login1 = () => {

//     const Navigate = useNavigate();

//     const [user, setUser] = useState([]);

//     const onRegisterPageClick = () => {
//         Navigate("/Register");
//     }

//     // const onHomePageClick = () => {
//     //     Navigate("/");
//     // }

//     useEffect(() => {
//         console.log("Site is Loaded!!!");

//         axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
//             // console.log("User detail: ", res.data);
//             setUser(res.data);
//         })
//     }, []);

//     const initialValues = {
//         firstname: "",
//         lastname: "",
//         email: "",
//         role: "",
//         password: "",
//         confirmpassword: ""
//     }
//     const validationSchema = Yup.object().shape({
//         firstname: Yup.string().required().min(3, "Firstname should atleast contain 3 characters"),
//         lastname: Yup.string().required().min(3, "Lastname should atleast contain 3 characters"),
//         email: Yup.string().required().email("Please enter a valid email"),
//         password: Yup.string().required().min(5, "Password must contain 5 char"),
//         confirmpassword: Yup.string().required().oneOf([Yup.ref('password'), null], "Password must be same")
//     })

//     const onFormSubmit = (values) => {
//         console.log(values);

//         const requestData = {
//             userFirstName: values.firstname,
//             userLastName: values.lastname,
//             userEmail: values.email,
//             userRole: values.role,
//             userPassword: values.password,
//             userConfirmPassword: values.confirmpassword,
//         }

//         axios.post("https://jsonplaceholder.typicode.com/posts", requestData)
//             .then((res) => {
//                 if (res.status === 201) {
//                     console.log(res.data.id);
//                     toast.success('Registered Successfully', {
//                         position: "top-center",
//                         autoClose: 3000,
//                         hideProgressBar: false,
//                         closeOnClick: true,
//                         pauseOnHover: true,
//                         draggable: true,
//                         progress: undefined,
//                         theme: "light",
//                     });
//                     Navigate("/");
//                 }
//             });

//     }
//     return (
//         <div>
//             <Formik
//                 initialValues={initialValues}
//                 validationSchema={validationSchema}
//                 onSubmit={onFormSubmit}
//             >
//                 {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
//                     <form onSubmit={handleSubmit}>
//                         <div style={{
//                             display: "flex",
//                             flexDirection: "column",
//                             justifyContent: "center",
//                             alignItems: "center",
//                             rowGap: 10,
//                         }}>
//                             <div style={{
//                                 fontSize: 40,
//                                 fontWeight: "bolder",
//                                 color: "#2E2E2E",
//                             }}>
//                                 {/* Login or Create an Account */}
//                                 Login Account
//                             </div>
//                             <div style={{
//                                 width: 190,
//                                 height: 0,
//                                 // border:1,
//                                 // borderStyle: "solid",
//                                 // borderColor:"rgb(255,89,92)",
//                                 marginBottom: 30
//                             }}> </div>
//                             <div style={{
//                                 marginLeft: 239,
//                                 marginRight: "auto",
//                                 fontSize: 20,
//                                 fontWeight: "bold",
//                                 color: "rgb(94,94,94)"
//                             }}>New Customer
//                                 <div><span style={{
//                                     fontSize: 14,
//                                     color: "rgb(94,94,94)",
//                                     fontWeight: "lighter",
//                                     marginTop: 50
//                                 }}>Registration is free and easy</span></div>
//                             </div>
//                             <div style={{
//                                 display: "flex",
//                                 columnGap: 40,
//                             }}>
//                                 <div style={{
//                                     display: "flex",
//                                     flexDirection: "column",
//                                     rowGap: 5,
//                                     marginRight: 820,
//                                 }}>

//                                     <ul>
//                                         <li>Faster checkout</li>
//                                         <li>Save multiple shipping addresses</li>
//                                         <li>View and track orders and more</li>
//                                     </ul>
//                                     <br></br>
//                                     <br></br>
//                                     <br></br>
//                                     <Button variant="contained" type="submit" onClick={onRegisterPageClick}
//                                         style={{
//                                             marginRight: "auto",
//                                             marginLeft: 20,
//                                             backgroundColor: "rgb(255,89,92)",
//                                             borderRadius: 3,
//                                             fontWeight: "bold"
//                                         }}
//                                     >Register</Button>
//                                 </div>

//                                 <div style={{
//                                     marginTop: -70,
//                                     fontSize: 20,
//                                     fontWeight: "bold",
//                                     color: "rgb(94,94,94)",
//                                     position: "absolute",
//                                     marginLeft: 570,
//                                 }}>
//                                     Registered Customers
//                                     <div><span style={{
//                                         fontSize: 14,
//                                         color: "rgb(94,94,94)",
//                                         fontWeight: "lighter",
//                                         marginTop: 50,
//                                     }}>If you have an account with us, please log in.</span>
//                                     </div>
//                                     <br></br>
//                                     <div style={{
//                                         fontSize: 15,
//                                         color: "rgb(0,0,0)",
//                                         fontWeight: "lighter",
//                                     }}>
//                                         Email Address*
//                                         <br></br>
//                                         <TextField
//                                             // id="outlined-basic" 
//                                             name="email"
//                                             // label="Email" 
//                                             variant="outlined"
//                                             value={values.email}
//                                             onChange={handleChange}
//                                             onBlur={handleBlur}
//                                             size="small"
//                                             style={{
//                                                 width: 400,
//                                             }}
//                                         />
//                                         <span style={{
//                                             color: "red",
//                                             fontSize: 13

//                                         }}
//                                         >
//                                             {touched.email && errors.email}
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div style={{
//                                 display: "flex",
//                                 columnGap: 40,
//                                 marginRight: -50,
//                                 marginTop: -140,
//                             }}>


//                                 <div style={{
//                                     display: "flex",
//                                     flexDirection: "column",
//                                     marginRight: -800,
//                                     rowGap: 5
//                                 }}>
//                                     Password*
//                                     <TextField
//                                         type="password"
//                                         // id="outlined-basic" 
//                                         name="password"
//                                         // label="Password" 
//                                         variant="outlined"
//                                         value={values.password}
//                                         onChange={handleChange}
//                                         onBlur={handleBlur}
//                                         size="small"
//                                         style={{
//                                             width: 400,
//                                         }}
//                                     />
//                                     <span style={{
//                                         color: "red",
//                                         fontSize: 13

//                                     }}
//                                     >
//                                         {touched.password && errors.password}
//                                     </span>

//                                     <Button variant="contained" type="submit"
//                                         style={{
//                                             marginRight: "auto",
//                                             marginTop: 17,
//                                             marginLeft: 0,
//                                             backgroundColor: "rgb(255,89,92)",
//                                             borderRadius: 3,
//                                             fontWeight: "bold"
//                                         }}
//                                     >Login</Button>
//                                 </div>
//                             </div>

//                         </div>
//                     </form>
//                 )}
//             </Formik>

//             {/* <div>
//                 {user.map((item) => (
//                     <div key={item.id}>
//                         <h3>{item.title}</h3>
//                         <span>{item.body}</span>
//                     </div>
//                 ))}
//             </div> */}

//         </div>
//     )
// }


































// import { Button, TextField } from "@mui/material"
// import { MenuItem } from '@mui/material';
// import { Select } from '@mui/material';
// import { useState, useEffect } from "react";
// import { Formik } from "formik"
// import * as Yup from "yup"
// import axios from "axios";
// import { toast } from 'react-toastify';
// import { useNavigate } from "react-router-dom";

// export const Login1 = () => {

// const Navigate = useNavigate();

// const [user, setUser] = useState([]);

// const onRegisterPageClick = () => {
//     Navigate("/Register");
// }

// const onHomePageClick = () => {
//     Navigate("/");
// }

//     useEffect(() => {
//         console.log("Site is Loaded!!!");

//         axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
//             // console.log("User detail: ", res.data);
//             setUser(res.data);
//         })
//     }, []);

//     const initialValues = {
//         firstname: "",
//         lastname: "",
//         email: "",
//         role: "",
//         password: "",
//         confirmpassword: ""
//     }
//     const validationSchema = Yup.object().shape({
//         firstname: Yup.string().min(3, "Firstname should atleast contain 3 characters"),
//         lastname: Yup.string().min(3, "Lastname should atleast contain 3 characters"),
//         email: Yup.string().email("Please enter a valid email"),
//         password: Yup.string().min(5, "Password must contain 5 character"),
//         confirmpassword: Yup.string().oneOf([Yup.ref('password'), null], "Password must be same")
//     })

//     const onFormSubmit = (values) => {
//         console.log(values);

//         const requestData = {
//             userFirstName: values.firstname,
//             userLastName: values.lastname,
//             userEmail: values.email,
//             userRole: values.role,
//             userPassword: values.password,
//             userConfirmPassword: values.confirmpassword,
//         }

//         axios.post("https://jsonplaceholder.typicode.com/posts", requestData)
//             .then((res) => {
//                 if (res.status === 201) {
//                     console.log(res.data.id);
//                     toast.success('Registered Successfully', {
//                         position: "top-center",
//                         autoClose: 3000,
//                         hideProgressBar: false,
//                         closeOnClick: true,
//                         pauseOnHover: true,
//                         draggable: true,
//                         progress: undefined,
//                         theme: "light",
//                     });
//                 }
//             });

//     }
//     return (
//         <div>
//             <Formik
//                 initialValues={initialValues}
//                 validationSchema={validationSchema}
//                 onSubmit={onFormSubmit}
//             >
//                 {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
//                     <form onSubmit={handleSubmit}>
//                         <div style={{
//                             display: "flex",
//                             flexDirection: "column",
//                             justifyContent: "center",
//                             alignItems: "center",
//                             rowGap: 10,
//                         }}>
//                             <div style={{
//                                 fontSize: 40,
//                                 fontWeight: "bolder",
//                                 color: "#2E2E2E",
//                             }}>
//                                 {/* Login or Create an Account */}
//                                 Login Account
//                             </div>

//                             <div style={{
//                                 marginLeft: 239,
//                                 marginRight: "auto",
//                                 fontSize: 20,
//                                 fontWeight: "bold",
//                                 color: "rgb(94,94,94)",
//                             }}>New Customer
//                                 <div><span style={{
//                                     fontSize: 14,
//                                     color: "rgb(94,94,94)",
//                                     fontWeight: "lighter",
//                                     marginTop: 50
//                                 }}>Registration is free and easy.</span></div>
//                             </div>
//                             <div style={{
//                                 marginLeft: 215,
//                                 marginRight: "auto",
//                                 fontSize: 14,
//                             }}>
//                                 <ul>
//                                     <li>Faster checkout</li>
//                                     <li>Save multiple shipping addresses</li>
//                                     <li>View and track orders and more</li>
//                                 </ul>
//                             </div>

// <div style={{
//     marginTop: -158,
//     marginLeft:500,
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "rgb(94,94,94)",
// }}>
//     Registered Customers
//     <div><span style={{
//         fontSize: 14,
//         color: "rgb(94,94,94)",
//         fontWeight: "lighter",
//         marginTop: 50
//     }}>If you have an account with us, please log in.</span></div>
// </div>

//                             <div style={{
//                                 marginLeft: 300,
//                             }}>Email*<br></br>
//                             <TextField
//                                 // id="outlined-basic"
//                                 name="email"
//                                 // label="Email"
//                                 variant="outlined"
//                                 value={values.email}
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                                 size="small"
//                                 style={{
//                                     width: 250,
//                                 }}
//                             />
//                             <span style={{
//                                 color: "red",
//                                 fontSize: 13

//                             }}
//                             >
//                                 {touched.email && errors.email}
//                             </span></div>

//                             <div style={{
//                                 marginTop: 158,
//                                 display: "flex",
//                                 columnGap: 790,
//                             }}>
//                                 <div style={{
//                                     display: "flex",
//                                     flexDirection: "column",
//                                     rowGap: 5
//                                 }}>
//                                     <Button variant="contained" onClick={onRegisterPageClick}
//                                         style={{
//                                             backgroundColor: "rgb(255,89,92)",
//                                             borderRadius: 3,
//                                             fontWeight: "bold"
//                                         }}
//                                     >Create an Account</Button>
//                                 </div>
//                                 <div style={{
//                                     display: "flex",
//                                     flexDirection: "column",
//                                     rowGap: 5
//                                 }}>
//                                     <Button variant="contained" onClick={onHomePageClick}
//                                         style={{
//                                             backgroundColor: "rgb(255,89,92)",
//                                             borderRadius: 3,
//                                             fontWeight: "bold"
//                                         }}>Login</Button>
//                                 </div>
//                             </div>
//                         </div>
//                     </form>
//                 )}
//             </Formik>

//             {/* <div>
//                 {user.map((item) => (
//                     <div key={item.id}>
//                         <h3>{item.title}</h3>
//                         <span>{item.body}</span>
//                     </div>
//                 ))}
//             </div> */}

//         </div>
//     )
// };

import { Button, TextField } from "@mui/material";
// import { MenuItem } from "@mui/material";
// import { Select } from "@mui/material";
import { useState, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

export const Login1 = () => {
  const Navigate = useNavigate();

  const [user, setUser] = useState([]);

  const onRegisterPageClick = () => {
    Navigate("/Register");
  };

  //   const onHomePageClick = () => {
  //     Navigate("/");
  //   };

  useEffect(() => {
    console.log("Site is Loaded!!!");

    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      // console.log("User detail: ", res.data);
      setUser(res.data);
    });
  }, []);

  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({

    email: Yup.string().required().email("Please enter a valid email"),
    password: Yup.string().required().min(5, "Password must contain 5 char"),

  });

  const onFormSubmit = (values) => {
    console.log(values);

    const data = {
      email: values.email,
      password: values.password,
    };

    console.log(data);

    const url = "https://book-e-sell-node-api.vercel.app/api/user/login";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch(url, options)
      .then(async (data) => {
        // Work with the retrieved data
        data = await data.json();
        if (data.code === 200) {
          axios
            .post("https://jsonplaceholder.typicode.com/posts", data)
            .then((res) => {
              if (res.status === 201) {
                console.log(res.data.id);
                toast.success("Login Successful", {
                  position: "top-center",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });

                // Navigate to the Landing page
                Navigate("/LandingPage");
              }
            });
        } else {
          alert("No User Found");
        }
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch

        console.error("Error:", error);
      });
  };
  return (
    <div>
      <Header />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onFormSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                rowGap: 10,
              }}
            >
              <div
                style={{
                  fontSize: 40,
                  fontWeight: "bolder",
                  color: "#2E2E2E",
                }}
              >
                {/* Login or Create an Account */}
                Login Account
              </div>
              <div
                style={{
                  width: 190,
                  height: 0,
                  // border:1,
                  // borderStyle: "solid",
                  // borderColor:"rgb(255,89,92)",
                  marginBottom: 30,
                }}
              >
                {" "}
              </div>
              <div
                style={{
                  marginLeft: 239,
                  marginRight: "auto",
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "rgb(94,94,94)",
                }}
              >
                New Customer
                <div>
                  <span
                    style={{
                      fontSize: 14,
                      color: "rgb(94,94,94)",
                      fontWeight: "lighter",
                      marginTop: 50,
                    }}
                  >
                    Registration is free and easy
                  </span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  columnGap: 40,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: 5,
                    marginRight: 820,
                  }}
                >
                  <ul>
                    <li>Faster checkout</li>
                    <li>Save multiple shipping addresses</li>
                    <li>View and track orders and more</li>
                  </ul>
                  <br></br>
                  <br></br>
                  <br></br>
                  <Button
                    variant="contained"
                    type="submit"
                    onClick={onRegisterPageClick}
                    style={{
                      marginRight: "auto",
                      marginLeft: 20,
                      backgroundColor: "rgb(255,89,92)",
                      borderRadius: 3,
                      fontWeight: "bold",
                    }}
                  >
                    Register
                  </Button>
                </div>

                <div
                  style={{
                    marginTop: -70,
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "rgb(94,94,94)",
                    position: "absolute",
                    marginLeft: 570,
                  }}
                >
                  Registered Customers
                  <div>
                    <span
                      style={{
                        fontSize: 14,
                        color: "rgb(94,94,94)",
                        fontWeight: "lighter",
                        marginTop: 50,
                      }}
                    >
                      If you have an account with us, please log in.
                    </span>
                  </div>
                  <br></br>
                  <div
                    style={{
                      fontSize: 15,
                      color: "rgb(0,0,0)",
                      fontWeight: "lighter",
                    }}
                  >
                    Email Address*
                    <br></br>
                    <TextField
                      // id="outlined-basic"
                      name="email"
                      // label="Email"
                      variant="outlined"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      size="small"
                      style={{
                        width: 400,
                      }}
                    />
                    <span
                      style={{
                        color: "red",
                        fontSize: 13,
                      }}
                    >
                      {touched.email && errors.email}
                    </span>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  columnGap: 40,
                  marginRight: -50,
                  marginTop: -140,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: -800,
                    rowGap: 5,
                  }}
                >
                  Password*
                  <TextField
                    type="password"
                    // id="outlined-basic"
                    name="password"
                    // label="Password"
                    variant="outlined"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    size="small"
                    style={{
                      width: 400,
                    }}
                  />
                  <span
                    style={{
                      color: "red",
                      fontSize: 13,
                    }}
                  >
                    {touched.password && errors.password}
                  </span>
                  <Button
                    variant="contained"
                    type="submit"

                    style={{
                      marginRight: "auto",
                      marginTop: 17,
                      marginLeft: 0,
                      backgroundColor: "rgb(255,89,92)",
                      borderRadius: 3,
                      fontWeight: "bold",
                    }}
                  >
                    Login
                  </Button>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>

      {/* <div>
                {user.map((item) => (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <span>{item.body}</span>
                    </div>
                ))}
            </div> */}

      <Footer />
    </div>
  );
};
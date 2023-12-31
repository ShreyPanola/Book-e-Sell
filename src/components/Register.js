// import { useNavigate } from "react-router-dom";
// import Button from '@mui/material/Button';

// export const Register = () => {

//     const Navigate = useNavigate()

//     const onHomePageClick = () =>{
//         Navigate("/");
//     }

//     return (
//     <div>
//         <div><h3>Register</h3></div>

//         <Button variant="contained" onClick={onHomePageClick}>Navigate to Home Page</Button>
//         {/* <button onClick={onHomePageClick}>Navigate to Home Page</button> */}
//     </div>
// )};



import { Button, TextField } from "@mui/material"
import { MenuItem } from '@mui/material';
import { Select } from '@mui/material';
import { useState, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";//New
import Footer from "../Footer";//New
import Header from "../Header";//New


export const Register = () => {

    const [user, setUser] = useState([]);
    const Navigate = useNavigate();//New

    useEffect(() => {
        console.log("Site is Loaded!!!");

        axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
            // console.log("User detail: ", res.data);
            setUser(res.data);
        })
    }, []);

    const initialValues = {
        firstname: "",
        lastname: "",
        email: "",
        role: "",
        password: "",
        confirmpassword: ""
    }
    const validationSchema = Yup.object().shape({
        firstname: Yup.string().required().min(3, "Firstname should atleast contain 3 characters"),
        lastname: Yup.string().required().min(3, "Lastname should atleast contain 3 characters"),
        email: Yup.string().required().email("Please enter a valid email"),
        password: Yup.string().required().min(5, "Password must contain 5 character"),
        confirmpassword: Yup.string().required().oneOf([Yup.ref('password'), null], "Password must be same")
    })

    // const onFormSubmit = (values) => {
    //     console.log(values);

    //     const requestData = {
    //         userFirstName: values.firstname,
    //         userLastName: values.lastname,
    //         userEmail: values.email,
    //         userRole: values.role,
    //         userPassword: values.password,
    //         userConfirmPassword: values.confirmpassword,
    //     }

    //     axios.post("https://jsonplaceholder.typicode.com/posts", requestData)
    //         .then((res) => {
    //             if (res.status === 201) {
    //                 console.log(res.data.id);
    //                 toast.success('Registered Successfully', {
    //                     position: "top-center",
    //                     autoClose: 3000,
    //                     hideProgressBar: false,
    //                     closeOnClick: true,
    //                     pauseOnHover: true,
    //                     draggable: true,
    //                     progress: undefined,
    //                     theme: "light",
    //                 });

    //                 // Navigate to the login page
    //                 Navigate("/Login1");
    //             }
    //         });

    // }

    const onFormSubmit = async (values) => {
        console.log(values);

        const requestData = {
            userFirstName: values.firstname,
            userLastName: values.lastname,
            userEmail: values.email,
            userRole: values.role,
            userPassword: values.password,
            userConfirmPassword: values.confirmpassword,
        }
        var ID;
        if (values.role === 'buyer') {
            ID = 1;
        }
        else {
            ID = 2;
        }
        const data = {
            firstName: values.firstname,
            lastName: values.lastname,
            email: values.email,
            roleId: ID,
            password: values.password,
        };
        //   console.log("Everything is fine")


        const url = 'https://book-e-sell-node-api.vercel.app/api/user';


        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        fetch(url, options)

            .then(async data => {
                // Work with the retrieved data
                data = await data.json();
                if (data.code === 200) {
                    axios.post("https://jsonplaceholder.typicode.com/posts", requestData)
                        .then((res) => {
                            if (res.status === 201) {
                                console.log(res.data.id);
                                toast.success('Registered Successfully', {
                                    position: "top-center",
                                    autoClose: 3000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "light",
                                });

                                // Navigate to the login page
                                Navigate("/Login1");
                            }

                        });
                }
                else {
                    alert("User Already Exist");
                }



            })
            .catch(error => {
                // Handle any errors that occurred during the fetch


                console.error('Error:', error);
            });
    }
    return (
        <div>
            <Header />
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onFormSubmit}
            >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            rowGap: 10,
                        }}>
                            <div style={{
                                fontSize: 40,
                                fontWeight: "bolder",
                                color: "#2E2E2E",
                            }}>
                                {/* Login or Create an Account */}
                                Register Account
                            </div>
                            <div style={{
                                width: 190,
                                height: 0,
                                // border:1,
                                // borderStyle: "solid",
                                // borderColor:"rgb(255,89,92)",
                                marginBottom: 30
                            }}> </div>
                            <div style={{
                                marginLeft: 239,
                                marginRight: "auto",
                                fontSize: 20,
                                fontWeight: "bold",
                                color: "rgb(94,94,94)"
                            }}>Personal Information
                                <div><span style={{
                                    fontSize: 14,
                                    color: "rgb(94,94,94)",
                                    fontWeight: "lighter",
                                    marginTop: 50
                                }}>Please enter the following Information to create account</span></div>
                            </div>
                            <div style={{
                                display: "flex",
                                columnGap: 40,
                            }}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    rowGap: 5
                                }}>
                                    First Name*
                                    <TextField
                                        // id="outlined-basic" 
                                        name="firstname"
                                        // label="First Name" 
                                        variant="outlined"
                                        value={values.firstname}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        size="small"
                                        style={{
                                            width: 500,
                                        }}
                                    />
                                    <span style={{
                                        color: "red",
                                        fontSize: 13

                                    }}
                                    >
                                        {touched.firstname && errors.firstname}
                                    </span>
                                </div>

                                <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    rowGap: 5
                                }}>
                                    Last Name*
                                    <TextField
                                        // id="outlined-basic" 
                                        name="lastname"

                                        // label="Last Name" 
                                        variant="outlined"
                                        value={values.lastname}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        size="small"
                                        style={{
                                            width: 500,
                                        }}
                                    />
                                    <span style={{
                                        color: "red",
                                        fontSize: 13

                                    }}
                                    >
                                        {touched.lastname && errors.lastname}
                                    </span>
                                </div>
                            </div>
                            <div style={{
                                display: "flex",
                                columnGap: 40
                            }}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    rowGap: 5
                                }}>
                                    Email*
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
                                            width: 500,
                                        }}
                                    />
                                    <span style={{
                                        color: "red",
                                        fontSize: 13

                                    }}
                                    >
                                        {touched.email && errors.email}
                                    </span>
                                </div>

                                <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    rowGap: 5
                                }}>
                                    Role*
                                    <Select
                                        // labelId="demo-simple-select-label"
                                        // id="demo-simple-select"
                                        name="role"
                                        value={values.role}
                                        // label="Role"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        size="small"
                                        style={{
                                            width: 500,
                                        }}
                                    >
                                        <MenuItem value={"Seller"}>Seller</MenuItem>
                                        <MenuItem value={"Buyer"}>Buyer</MenuItem>
                                    </Select>
                                </div>
                            </div>
                            <br></br>
                            <div style={{
                                marginLeft: 239,
                                marginRight: "auto",
                                fontSize: 20,
                                fontWeight: "bold",
                                color: "rgb(94,94,94)"
                            }}>Login Information</div>
                            <div style={{
                                display: "flex",
                                columnGap: 40
                            }}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    rowGap: 5
                                }}>
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
                                            width: 500,
                                        }}
                                    />
                                    <span style={{
                                        color: "red",
                                        fontSize: 13

                                    }}
                                    >
                                        {touched.password && errors.password}
                                    </span>
                                </div>

                                <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    rowGap: 5
                                }}>
                                    Confirm Password*
                                    <TextField
                                        type="password"
                                        // id="outlined-basic" 
                                        name="confirmpassword"
                                        // label="Confirm Password" 
                                        variant="outlined"
                                        value={values.confirmpassword}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        size="small"
                                        style={{
                                            width: 500,
                                        }}
                                    />
                                    <span style={{
                                        color: "red",
                                        fontSize: 13,
                                    }}
                                    >
                                        {touched.confirmpassword && errors.confirmpassword}
                                    </span>
                                </div>
                            </div>
                            <Button variant="contained" type="submit"
                                style={{
                                    marginRight: "auto",
                                    marginLeft: 164,
                                    backgroundColor: "rgb(255,89,92)",
                                    borderRadius: 3,
                                    fontWeight: "bold"
                                }}
                            >Register</Button>
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
    )
}
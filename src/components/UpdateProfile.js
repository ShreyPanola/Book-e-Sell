import { Button, TextField } from "@mui/material"
import { MenuItem } from '@mui/material';
import { Select } from '@mui/material';
import { useState, useEffect } from "react";
import { Formik } from "formik"
import * as Yup from "yup"
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";//New
import Footer from "../Footer";//New
import Header2 from "../Header2";//New


export const UpdateProfile = () => {

    const [user, setUser] = useState([]);
    const Navigate = useNavigate();//New

    const onHomePageClick = () => {
        Navigate("/landingPage");
    }

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

    const onFormSubmit = async (values) => {
        const url = "https://book-e-sell-node-api.vercel.app/api/user";
        const data =
        {
            id: Object.id,
            email: values.email,
            firstName: values.firstname,
            lastName: values.lastname,
            roleId: 2,
            // role: "seller",
            password: values.password,
        }


        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                console.log('Response:', data);
                toast.success("User Added Successfully", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                Navigate("/landingPage");


            })
            .catch(error => {
                alert("Error")
                console.error('Error:', error);
            });
    }


    return (
        <div>
            <Header2 />
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
                                Update Profile
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
                            </div>
                            <br></br>

                            <div style={{
                                display: "flex",
                                columnGap: 40
                            }}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    rowGap: 5,
                                    marginLeft: -521,
                                    marginTop: -30
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
                                    marginLeft: 246,
                                    width: 95,
                                    backgroundColor: "rgb(128,191,50)",
                                    borderRadius: 3,
                                    fontWeight: "bold"
                                }}
                            >Save</Button>

                            <Button variant="contained" onClick={onHomePageClick}
                                style={{
                                    marginLeft: -730,
                                    marginTop: -47,
                                    backgroundColor: "rgb(255,89,92)",
                                    borderRadius: 3,
                                    fontWeight: "bold"
                                }}
                            >Cancel</Button>
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
// Not used in project.

// import { useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';
import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import { Avatar } from "@mui/material";
import { red } from "@mui/material/colors";
import Popover from '@mui/material/Popover';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Formik } from "formik";
import * as Yup from "yup";
import  axios  from "axios";
import { toast } from 'react-toastify';

export const Login = () => {

    // const [name, setName] = useState();
    // const [email, setEmail] = useState();
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    // const Navigate = useNavigate();
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
            console.log("User detail: ",res.data);
            setUser(res.data);
        })
    },[]);

    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "Please make sure that you have entered name with atleast 3 characters.").required("Please enter your name!"),
        email: Yup.string().email("Please enter a valid email address.").required("Please enter email address!"),
    });

    const initialValues = {
        name: "",
        email: "",
    }

    // const onHomePageClick = () =>{
    //     // alert("The button has been clicked!");
    //     console.log("Button Clicked!");
    //     console.log("Name: ", name);
    //     console.log("Email: ", email);
    //     Navigate("/");
    // }

    const onFormSubmit = async (values) => {
        console.log("On the form submitted", values);
        // Navigate("/");
        
        // Call API to post submit the form

        const requestData = {
            userName: values.name,
            userEmail: values.email,
        }
        const res = await axios.post("https://jsonplaceholder.typicode.com/posts", requestData);
        
            if(res.status === 201){
                console.log(res.data.id);
                // toast("User Registered Successfully!");
                toast.success('API call is completed sucessfully', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }

        axios.delete("https://jsonplaceholder.typicode.com/posts/1").then((res) => {
            if(res.status === 200){
                console.log(res.data.id);
                // toast("User Registered Successfully!");
                toast.success('Data is deleted sucessfully', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }
        })
    }

    const handleClick = (event) => {
        console.log(123);
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
    };

    return (
        <div style={{ padding: 5, }}>
            <div><h3>Login</h3></div>

            <div>
                <div onClick={handleClick} style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", columnGap: 5, cursor: "pointer" }}>
                    <Avatar sx={{ bgcolor: red[500] }}>SP</Avatar>
                    <span>Shrey Panola 🔽</span>
                </div>
            </div>

            <div style={{ padding: 5, display: "flex", flexDirection: "column", rowGap: 8 }}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onFormSubmit}
                >
                    {({ values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                marginBottom: 5,
                            }}>
                                <TextField
                                    variant="outlined"
                                    label="Name"
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={values.name}
                                    // value={name} 
                                    placeholder="Name"
                                    // onChange={(e) => {setName(e.target.value)}}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />

                                {touched.name && errors.name && <span style={{
                                    color: "red",
                                    padding: 5,
                                    fontSize: 16,
                                    fontWeight: 500
                                }}>{errors.name}</span>}
                            </div>

                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                marginBottom: 5,
                            }}>

                                <TextField
                                    variant="outlined"
                                    label="E-mail"
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={values.email}
                                    // value={email} 
                                    placeholder="E-mail"
                                    // onChange={(e) => {setEmail(e.target.value)}}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />

                                {touched.email && errors.email && <span style={{
                                    color: "red",
                                    padding: 5,
                                    fontSize: 16,
                                    fontWeight: 500
                                }}>{errors.email}</span>}
                            </div>

                            <Button variant="contained" style={{backgroundColor:"rgb(255,89,92)"}} type="submit" disabled={isSubmitting}/*onClick={onHomePageClick}*/>Submit</Button>
                            {/* <button onClick={onHomePageClick}>Navigate to Home Page</button> */}

                        </form>
                    )}

                </Formik>
            </div>

            <Popover
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                onClose={handleClose}
            >
                <div style={{ padding: 5, }}>
                    <Button variant="contained" style={{backgroundColor:"rgb(255,89,92)"}} /*onClick={onHomePageClick}*/><LogoutOutlinedIcon />Logout</Button>
                </div>
            </Popover>

            <div>
                {user.map((item) => (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <span>{item.body}</span>
                    </div>
                ))}
            </div>

        </div>
    );
};
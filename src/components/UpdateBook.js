import Footer from "../Footer";
import Header2 from "../Header2";
import * as Yup from "yup";
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Formik } from "formik";
import { Button, TextField, FormControl, Select, MenuItem, Input } from "@mui/material";
import categoryService from "../service/category.service";
import { useLocation } from "react-router-dom";

export const UpdateBook = () => {
    const Navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const location = useLocation();
    const book = location.state?.book;

    console.log("This is Update Book Page", book);

    const onCancelClick = () => {
        Navigate("/manageBooks");
    }

    const initialValues = {
        name: "",
        description: "",
        price: "",
        category: "",
        base64image: "",
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required().min(1, "Name should atleast contain 1 character"),
        description: Yup.string(),
        price: Yup.number().required().min(0, "Price should be greater then 0!"),
        category: Yup.string().required(),
        // base64image: Yup.string().required().oneOf([Yup.ref('password'), null], "Password must be same")
    })

    useEffect(() => {
        console.log("AddBook page is loaded!");
        categoryService.getAll().then((res) => {
            setCategories(res);
        });
        // Add code if required!


    }, []);

    const onFormSubmit = async (book,values) => {
        const url = "https://book-e-sell-node-api.vercel.app/api/book";
        const data =
        {
            "id": book.id,
            "name": values.name,
            "description": values.description,
            "price": values.price,
            "categoryId": values.category,
            "base64image": values.base64image
        }


        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                console.log('Response:', data);
                toast.success("Book Updated Successfully", {
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

    const onSelectFile = (e, setFieldValue, setFieldError) => {
        const files = e.target.files;
        if (files?.length) {
            const fileSelected = e.target.files[0];
            const fileNameArray = fileSelected.name.split(".");
            const extension = fileNameArray.pop();
            if (["png", "jpg", "jpeg"].includes(extension?.toLowerCase())) {
                if (fileSelected.size > 50000) {
                    toast.error("File size must be less then 50KB");
                    return;
                }
                const reader = new FileReader();
                reader.readAsDataURL(fileSelected);
                reader.onload = function () {
                    setFieldValue("base64image", reader.result);
                };
                reader.onerror = function (error) {
                    throw error;
                };
            } else {
                toast.error("only jpg,jpeg and png files are allowed");
            }
        } else {
            setFieldValue("base64image", "");
        }
    };

    return (
        <div>
            <Header2 />

            <div align={"center"} style={{
                fontSize: 40,
                fontWeight: "bolder",
                color: "#2E2E2E",
            }}>
                Update Book
            </div>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onFormSubmit}
            >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldError, setFieldValue, }) => (
                    <form onSubmit={handleSubmit} style={{ marginLeft: 400 }}>
                        <br></br>
                        <div style={{
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            Name*
                            <TextField
                                // id="outlined-basic" 
                                name="name"
                                // label="Name" 
                                variant="outlined"
                                value={values.name}
                                placeholder={book.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                size="small"
                                style={{
                                    width: 500,
                                    marginLeft: 65,
                                    marginTop: -5,
                                }}
                            />
                            <span style={{
                                color: "red",
                                fontSize: 13

                            }}
                            >
                                {touched.name && errors.name}
                            </span>
                        </div>



                        <br></br>
                        <div style={{
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            Description
                            <TextField
                                // id="outlined-basic" 
                                name="description"
                                // label="Name" 
                                variant="outlined"
                                value={values.description}
                                placeholder={book.description}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                size="small"
                                style={{
                                    width: 500,
                                    marginLeft: 33,
                                    marginTop: -5,
                                }}
                            />
                            <span style={{
                                color: "red",
                                fontSize: 13

                            }}
                            >
                                {touched.description && errors.description}
                            </span>
                        </div>



                        <br></br>
                        <div style={{
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            Price*
                            <TextField
                                // id="outlined-basic" 
                                name="price"
                                // label="Name" 
                                variant="outlined"
                                value={values.price}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder={book.price}
                                size="small"
                                style={{
                                    width: 500,
                                    marginLeft: 73,
                                    marginTop: -5,
                                }}
                            />
                            <span style={{
                                color: "red",
                                fontSize: 13

                            }}
                            >
                                {touched.price && errors.price}
                            </span>
                        </div>



                        <br></br>
                        <div style={{
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            Category*
                            <FormControl style={{ marginTop: -7, marginLeft: 44, width: 100 }}>
                                <Select size="small"
                                    name={"category"}
                                    id={"category"}
                                    onChange={handleChange}
                                    value={values.category}>
                                    {categories?.map((rl) => (
                                        <MenuItem value={rl.id} key={"category" + rl.id}>
                                            {rl.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <span style={{
                                color: "red",
                                fontSize: 13

                            }}
                            >
                                {touched.category && errors.category}
                            </span>
                        </div>



                        {/* Image validation remaining. */}
                        <br></br>
                        <div style={{
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            Upload Image*
                            <Input
                                id="contained-button-file"
                                type="file"
                                inputProps={{ className: "small" }}
                                onBlur={handleBlur}
                                onChange={(e) => {
                                    onSelectFile(e, setFieldValue, setFieldError);
                                }}
                            />
                            <Button
                                variant="contained"
                                component="span"
                                style={{backgroundColor: "rgb(255,89,92)",marginLeft:5}}
                            >
                                Upload
                            </Button>
                            <span style={{
                                color: "red",
                                fontSize: 13
                            }}>
                                {touched.base64image && errors.base64image}
                            </span>
                        </div>

                        <br></br>

                        <Button variant="contained" onClick={() => onFormSubmit(book, values)}
                            style={{
                                marginRight: "auto",
                                backgroundColor: "rgb(128,191,50)",
                                borderRadius: 3,
                                fontWeight: "bold",
                                width: 95,
                            }}
                        >Save</Button>

                        <Button variant="contained"
                            style={{
                                marginRight: "auto",
                                backgroundColor: "rgb(255,89,92)",
                                borderRadius: 3,
                                fontWeight: "bold",
                                marginLeft: 10,
                            }} onClick={onCancelClick}
                        >Cancel</Button>
                    </form>
                )}
            </Formik>

            <Footer />
        </div>
    )
}
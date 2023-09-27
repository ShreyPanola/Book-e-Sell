import React from 'react';
import '../App.css';
import Footer from "../Footer";
import Header2 from "../Header2";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { toast } from "react-toastify";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

export const Cart = () => {
    const navigate = useNavigate();
    const bookList = JSON.parse(localStorage.getItem('bookList')) || [];
    const [quantityMap, setQuantityMap] = useState(() => {
        const quantityMap = new Map();
        bookList.forEach((book) => {
            quantityMap.set(book.name, 1);
        });
        return quantityMap;
    });

    const incrementQuantity = (bookName) => {
        setQuantityMap((prevQuantityMap) => {
            const updatedQuantityMap = new Map(prevQuantityMap);
            const currentQuantity = updatedQuantityMap.get(bookName);
            updatedQuantityMap.set(bookName, currentQuantity + 1);
            return updatedQuantityMap;
        });
    };

    const decrementQuantity = (bookName) => {
        setQuantityMap((prevQuantityMap) => {
            const updatedQuantityMap = new Map(prevQuantityMap);
            const currentQuantity = updatedQuantityMap.get(bookName);
            if (currentQuantity > 1) {
                updatedQuantityMap.set(bookName, currentQuantity - 1);
            }
            return updatedQuantityMap;
        });
    };

    const removeBookFromCart = (book) => {
        const updatedBookList = bookList.filter((item) => item.name !== book.name);
        localStorage.setItem('bookList', JSON.stringify(updatedBookList));
        window.location.reload(); // Reload the page to reflect the updated cart
    };

    const orderConfirm = () => {
        toast.success('Order Placed Successfully', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        localStorage.removeItem('bookList');
        navigate("/landingPage");
    };

    // Calculate total price
    const totalPrice = bookList.reduce((total, book) => {
        const quantity = quantityMap.get(book.name);
        const bookPrice = book.price * quantity;
        return total + bookPrice;
    }, 0);

    return (
        <div>
            <Header2 />
            <div align="center" style={{ fontSize: 40, fontWeight: "bolder", color: "#2E2E2E" }}>
                Cart
            </div>

            {bookList && bookList.length > 0 ? (
                <div>
                    <h3 style={{ marginLeft: 354 }}>Total Items - {bookList.length}</h3>
                    <h3 style={{ marginLeft: 970, marginTop: -50}}>Total Price: <CurrencyRupeeIcon /> {totalPrice}</h3>

                    <div>
                        <div style={{ marginTop: -80, marginLeft: -50 }}>
                            <ul
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    justifyContent: "space-around",
                                    marginTop: 100,
                                    gap: 20,
                                }}
                            >
                                {bookList.map((book) => (
                                    <div
                                        key={book.name}
                                        style={{
                                            width: 800,
                                            height: 120,
                                            display: "flex",
                                            flexDirection: "column",
                                            rowGap: 10,
                                            border: "1px solid rgba(50,50,50,0.3)",
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                marginLeft: 9,
                                                marginTop: 9,
                                            }}
                                        >
                                            <img
                                                src={book.base64image}
                                                alt="Book Image"
                                                style={{ width: 150, height: 100 }}
                                            />
                                            <div style={{ marginTop: -120, marginLeft: 160 }}>
                                                <h3>{book.name}</h3>
                                            </div>

                                            <div
                                                style={{
                                                    marginTop: -17,
                                                    marginLeft: 160,
                                                    color: "rgb(255,89,92)",
                                                }}
                                            >
                                                Cart Item Name
                                            </div>
                                            <div style={{ marginLeft: 160, marginTop: 10 }}>
                                                <Button
                                                    sx={{
                                                        background: "rgb(255, 89, 92)",
                                                        height: 20,
                                                        width: 20,
                                                        minWidth: 5,
                                                        color: "white",
                                                        "!important": true,
                                                    }}
                                                    onClick={() => decrementQuantity(book.name)}
                                                >
                                                    -
                                                </Button>
                                                <input
                                                    type="text"
                                                    style={{ marginLeft: 5, width: 20, height: 20 }}
                                                    value={quantityMap.get(book.name)}
                                                    onChange={(e) => {
                                                        const newQuantity = parseInt(e.target.value);
                                                        if (!isNaN(newQuantity)) {
                                                            setQuantityMap((prevQuantityMap) => {
                                                                const updatedQuantityMap = new Map(prevQuantityMap);
                                                                updatedQuantityMap.set(book.name, newQuantity);
                                                                return updatedQuantityMap;
                                                            });
                                                        }
                                                    }}
                                                />
                                                <Button
                                                    sx={{
                                                        background: "rgb(255, 89, 92)",
                                                        height: 20,
                                                        width: 20,
                                                        minWidth: 5,
                                                        marginLeft: 0.5,
                                                        color: "white",
                                                        "!important": true,
                                                    }}
                                                    onClick={() => incrementQuantity(book.name)}
                                                >
                                                    +
                                                </Button>
                                            </div>

                                            <div style={{ marginTop: -110, marginLeft: 650 }}>
                                                <h4>
                                                    MRP <CurrencyRupeeIcon />
                                                    {book.price}
                                                </h4>
                                            </div>

                                            <Button
                                                style={{ marginTop: 10, marginLeft: 570, color: "rgb(255,89,92)" }}
                                                onClick={() => removeBookFromCart(book)}
                                            >
                                                Remove
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <Button
                        variant="contained"
                        onClick={orderConfirm}
                        style={{
                            marginRight: "auto",
                            // marginLeft: 355,
                            marginLeft: 690,
                            backgroundColor: "rgb(255,89,92)",
                            borderRadius: 3,
                            fontWeight: "bold",
                        }}
                    >
                        Place Order
                    </Button>
                </div>
            ) : (
                <div align="center" style={{ marginTop: 50 }}>
                    <p>No items in the cart</p>
                    <Button
                        variant="contained"
                        onClick={() => navigate("/landingPage")}
                        style={{
                            marginRight: "auto",
                            marginLeft: 5,
                            backgroundColor: "rgb(255,89,92)",
                            borderRadius: 3,
                            fontWeight: "bold",
                        }}
                    >
                        Go to Catalogue
                    </Button>
                </div>
            )}
            <Footer />
        </div>
    );
};

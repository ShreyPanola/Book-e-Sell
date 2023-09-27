import { useEffect, useState } from "react";
import {
    Button,
    TextField,
    FormControl,
    Select,
    MenuItem,
} from "@mui/material";
import { toast } from 'react-toastify';
import Footer from "../Footer";
import Header2 from "../Header2";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export const ManageBooks = () => {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("ascending");
    const Navigate = useNavigate();

    const onEditClick = (book) => {
        Navigate("/updateBook", { state: { book } }); // Pass book object as state
    };

    const onDeleteClick = (book) => {
        fetch(`https://book-e-sell-node-api.vercel.app/api/book?id=${book.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                // Additional headers if required
            },
            body: JSON.stringify( `id: ${book.id}` ),
        })
            .then(response => {
                if (response.ok) {
                    toast.success("Book Deleted Successfully", {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    console.log('Resource deleted successfully');
                } else {
                    // Request was not successful
                    alert("Error Deleting Resource");
                    console.log('Error deleting resource');
                }
            })
            .catch(error => {
                console.log('Error:', error);
            });

        Navigate("/manageBooks");
        toast.success('Book Deleted!', {
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

    async function fetchData() {
        const response = await fetch(
            "https://book-e-sell-node-api.vercel.app/api/book/all"
        );
        const data = await response.json();
        setBooks(data.result);
        console.log(data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleSortOrder = () => {
        const newSortOrder = sortOrder === "ascending" ? "descending" : "ascending";
        setSortOrder(newSortOrder);
    };

    const filteredBooks = books.filter((book) =>
        book.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedBooks = [...filteredBooks].sort((a, b) => {
        if (sortOrder === "ascending") {
            return b.name.localeCompare(a.name);
        } else {
            return a.name.localeCompare(b.name);
        }
    });

    return (
        <div>
            <Header2 />
            <div
                align="center"
                style={{
                    fontSize: 40,
                    fontWeight: "bolder",
                    color: "#2E2E2E",
                }}
            >
                Manage Books
            </div>
            <br></br>
            <h3 style={{ marginLeft: 50 }}>
                <span style={{ marginLeft: 93 }}>Total - {books.length}</span>
                <span style={{ marginLeft: -190 }}>
                    <TextField
                        style={{ marginTop: -5, marginLeft: 600 }}
                        placeholder="Search..."
                        size="small"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </span>
                <span style={{ marginLeft: 325, fontWeight: "lighter", fontSize: 16 }}>
                    Sort By
                </span>
                <FormControl style={{ marginTop: -5, marginLeft: 10, width: 100 }}>
                    <Select size="small" onChange={handleSortOrder}>
                        <MenuItem value="a-z">a-z</MenuItem>
                        <MenuItem value="z-a">z-a</MenuItem>
                    </Select>
                </FormControl>
            </h3>
            <div align={"center"} style={{
                width: 1200,
                height: 50,
                background: "Green",
                display: "flex",
                flexDirection: "column",
                rowGap: 10,
                color: "white",
                marginLeft: 154
            }}>
                <div style={{ marginTop: -20 }}>
                    <span>
                        <Typography style={{ marginTop: 28, marginLeft: -490 }} gutterBottom variant="h5">
                            Name
                        </Typography>
                    </span>

                    <span>
                        <Typography style={{ marginTop: -41, marginLeft: 0 }} gutterBottom variant="h5">
                            Price
                        </Typography>
                    </span>

                    <span>
                        <Typography style={{ marginTop: -41, marginLeft: 500 }} gutterBottom variant="h5">
                            Category
                        </Typography>
                    </span>

                    <span>
                        <Typography style={{ marginTop: -40, marginLeft: 1000 }} gutterBottom variant="h5">
                            Actions
                        </Typography>
                    </span>
                </div>
            </div>
            <div style={{ marginTop: -80, marginLeft: -50 }}>
                <ul style={{ display: "flex", flexWrap: "wrap", justifyContent: 'space-around', marginTop: 100, gap: 20 }}>
                    {sortedBooks.map((book) => (
                        <div align={"center"} style={{
                            width: 1200,
                            height: 100,
                            background: "rgb(128,191,50)",
                            display: "flex",
                            flexDirection: "column",
                            rowGap: 10,
                            color: "white",
                        }}>
                            <div style={{ display: "flex", flexDirection: "column", }}><img src={book.base64image} alt='Book Image' style={{ width: 100, height: 100, }} />
                                <div style={{ marginTop: -5 }}>
                                    <Typography style={{ marginTop: -60, marginLeft: -500 }} gutterBottom variant="h5">
                                        {book.name}
                                    </Typography>
                                    {/* <Typography variant="body2" color="text.secondary">
                                        {book.description}
                                    </Typography> */}
                                    <Typography style={{ marginTop: -39, marginLeft: 0 }} gutterBottom variant="h5">
                                        {book.price}
                                    </Typography>
                                    <Typography style={{ marginTop: -41, marginLeft: 500 }} gutterBottom variant="h5">
                                        {book.category}
                                    </Typography>

                                    <Button variant="contained"
                                        style={{
                                            marginRight: "auto",
                                            marginLeft: 900,
                                            marginTop: -75,
                                            backgroundColor: "rgb(255,89,92)",
                                            borderRadius: 3,
                                            fontWeight: "bold",
                                            width: 92
                                        }} onClick={() => onEditClick(book)}
                                    >Edit</Button>

                                    <Button variant="contained"
                                        style={{
                                            marginRight: "auto",
                                            marginLeft: 1090,
                                            marginTop: -118,
                                            backgroundColor: "rgb(255,89,92)",
                                            borderRadius: 3,
                                            fontWeight: "bold"
                                        }} onClick={() => onDeleteClick(book)}
                                    >Delete</Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </ul>
            </div>
            <Footer />
        </div>
    );
};
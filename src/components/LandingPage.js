// import Footer from "../Footer";
// import Header2 from "../Header2";
// import { useEffect, useState } from "react";
// import { Button, TextField } from "@mui/material";

// export const LandingPage = () => {

//   const [books, setBooks] = useState([]);

//   async function fetchData() {
//     const response = await fetch('https://book-e-sell-node-api.vercel.app/api/book/all')
//     //   console.log(response);
//     const data = await response.json();
//     setBooks(data.result);
//     console.log(data.result);
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <Header2 />
//       <div
//         align="center"
//         style={{
//           fontSize: 40,
//           fontWeight: "bolder",
//           color: "#2E2E2E",
//         }}
//       >
//         Books Catalogue
//       </div>
//       <h3 style={{ marginLeft: 50 }}>Total - {books.length}

//         <TextField
//           placeholder="Search..."
//           size="small"

//         />
//       </h3>

//       <ul>
//         {books.map((book) => (
//           <li key={book.id}><hr></hr><h3>Name: {book.name} </h3><br></br> Description:{book.description} <br></br> Price:{book.price} <br></br> Image:<img height={200} width={150} src={book.base64image} /><br></br><Button id={book.id} variant="contained"
//             style={{
//               marginRight: "auto",
//               marginLeft: 164,
//               backgroundColor: "rgb(255,89,92)",
//               borderRadius: 3,
//               fontWeight: "bold"
//             }}
//           >Add to Cart</Button></li>
//         ))}
//       </ul>
//       <Footer />
//     </div>
//   );
// }




// import Footer from "../Footer";
// import Header2 from "../Header2";
// import { useEffect, useState } from "react";
// import { Button, TextField } from "@mui/material";

// export const LandingPage = () => {
//   const [books, setBooks] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   async function fetchData() {
//     const response = await fetch('https://book-e-sell-node-api.vercel.app/api/book/all');
//     const data = await response.json();
//     setBooks(data.result);
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const filteredBooks = books.filter(book =>
//     book.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <Header2 />
//       <div
//         align="center"
//         style={{
//           fontSize: 40,
//           fontWeight: "bolder",
//           color: "#2E2E2E",
//         }}
//       >
//         Books Catalogue
//       </div>
//       <h3 style={{ marginLeft: 50 }}>
//         Total - {books.length}
//         <TextField
//           placeholder="Search..."
//           size="small"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </h3>

//       <ul>
//         {filteredBooks.map((book) => (
//           <li key={book.id}>
//             <hr></hr>
//             <h3>Name: {book.name} </h3>
//             <br></br> Description:{book.description} <br></br> Price:{book.price} <br></br> Image:
//             <img height={200} width={150} src={book.base64image} />
//             <br></br>
//             <Button
//               id={book.id}
//               variant="contained"
//               style={{
//                 marginRight: "auto",
//                 marginLeft: 164,
//                 backgroundColor: "rgb(255,89,92)",
//                 borderRadius: 3,
//                 fontWeight: "bold",
//               }}
//             >
//               Add to Cart
//             </Button>
//           </li>
//         ))}
//       </ul>
//       <Footer />
//     </div>
//   );
// };





// import Footer from "../Footer";
// import Header2 from "../Header2";
// import { useEffect, useState } from "react";
// import { Button, TextField, FormControl, Select, MenuItem } from "@mui/material";

// export const LandingPage = () => {
//   const [books, setBooks] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortOrder, setSortOrder] = useState("ascending");

//   async function fetchData() {
//     const response = await fetch('https://book-e-sell-node-api.vercel.app/api/book/all');
//     const data = await response.json();
//     setBooks(data.result);
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleSortOrder = () => {
//     const newSortOrder = sortOrder === "ascending" ? "descending" : "ascending";
//     setSortOrder(newSortOrder);
//   };

//   const filteredBooks = books.filter(book =>
//     book.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const sortedBooks = [...filteredBooks].sort((a, b) => {
//     if (sortOrder === "ascending") {
//       return b.name.localeCompare(a.name);
//     } else {
//       return a.name.localeCompare(b.name);
//     }
//   });

//   return (
//     <div>
//       <Header2 />
//       <div
//         align="center"
//         style={{
//           fontSize: 40,
//           fontWeight: "bolder",
//           color: "#2E2E2E",
//         }}
//       >
//         Books Catalogue
//       </div>
//       <br></br>
//       <h3 style={{ marginLeft: 50 }}>
//         Total - {books.length}

//         <TextField style={{ marginTop: -5, marginLeft: 600 }}
//           placeholder="Search..."
//           size="small"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />

//         <span style={{ marginLeft: 200, fontWeight: "lighter", fontSize: 16 }}>Sort By</span>
//         <FormControl style={{ marginTop: -5, marginLeft: 10, width: 100 }}>
//           <Select
//             size="small"
//             onChange={handleSortOrder}
//           >
//             <MenuItem value="a-z">a-z</MenuItem>
//             <MenuItem value="z-a">z-a</MenuItem>
//           </Select>
//         </FormControl>
//       </h3>

//       <ul>
//         {sortedBooks.map((book) => (
//           <li key={book.id}>
//             <hr></hr>
//             <h3>Name: {book.name} </h3>
//             <br></br> Description:{book.description} <br></br> Price:{book.price} <br></br> Image:
//             <img height={200} width={150} src={book.base64image} />
//             <br></br>
//             <Button
//               id={book.id}
//               variant="contained"
//               style={{
//                 marginRight: "auto",
//                 marginLeft: 164,
//                 backgroundColor: "rgb(255,89,92)",
//                 borderRadius: 3,
//                 fontWeight: "bold",
//               }}
//             >
//               Add to Cart
//             </Button>
//           </li>
//         ))}
//       </ul>
//       <Footer />
//     </div>
//   );
// };





// 

// LandingPage.js
import { useEffect, useState } from "react";
import {
  Button,
  TextField,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Footer from "../Footer";
import Header2 from "../Header2";
import Typography from "@mui/material/Typography";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("ascending");

  const navigate = useNavigate();

  const onAddToCartClick = (book) => {
    // Check if the book with the same name already exists in the localStorage
    const bookList = JSON.parse(localStorage.getItem('bookList')) || [];
    const bookExists = bookList.some((item) => item.name === book.name);
    if (!bookExists) {
      // Add the book to the bookList in localStorage
      bookList.push(book);
      localStorage.setItem('bookList', JSON.stringify(bookList));
      toast.success("Book added to cart successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      
      console.log(bookList);
    } else {
      toast.error("Book already exists in the cart!", {
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
  };

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
        Books Catalogue
      </div>
      <br></br>
      <h3 style={{ marginLeft: 180 }}>
        Total - {books.length}

        <TextField style={{ marginTop: -5, marginLeft: 380 }}
          placeholder="Search..."
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <span style={{ marginLeft: 320, fontWeight: "lighter", fontSize: 16 }}>Sort By</span>
        <FormControl style={{ marginTop: -5, marginLeft: 10, width: 100 }}>
          <Select
            size="small"
            onChange={handleSortOrder}
          >
            <MenuItem value="a-z">a-z</MenuItem>
            <MenuItem value="z-a">z-a</MenuItem>
          </Select>
        </FormControl>
      </h3>
      <div style={{ marginLeft: 130 }}>
        <ul style={{ display: 'flex', flexWrap: "wrap", gap: 20 }}>
          {sortedBooks.map((book, index) => (
            <div key={index} >
              <Card sx={{ width: 280 }}>
                <CardMedia
                  sx={{ height: 240 }}
                  image={book.base64image}
                  title="green iguana"
                />
                <CardContent>
                  <Typography noWrap variant="h5" sx={{ fontWeight: "bold" }}>
                    {book.name}
                  </Typography>
                  <Typography noWrap gutterBottom variant="h6">
                    {book.category}
                  </Typography>
                  <Typography noWrap color="text.secondary" sx={{ height: 30 }}>
                    {book.description}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    MRP  <CurrencyRupeeIcon />{book.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="large"
                    variant="contained"
                    sx={{
                      width: "100%",
                      backgroundColor: "#f14d54",
                      fontWeight: "bold",
                      '&:hover': {
                        backgroundColor: "#FF101B",
                      }
                    }} onClick={() => onAddToCartClick(book)}>Add to Cart</Button>
                </CardActions>
              </Card>
            </div>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

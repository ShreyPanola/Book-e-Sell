import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Footer from "../Footer";
import Header from "../Header";

export const NotFound = () => {

    const Navigate = useNavigate()

    const onHomePageClick = () =>{
        Navigate("/");
    }

    return (
    <div>
        <Header />
        <div><h3>404 Not Found</h3></div>

        <Button variant="contained" onClick={onHomePageClick}>Navigate to Home Page</Button>
        {/* <button onClick={onHomePageClick}>Navigate to Home Page</button> */}

    <Footer />
    </div>
)};
// // export const HomePage = ()=>{
// //     return <div><h3>Home Page🏠</h3></div>;
// // }
// import Footer from "../Footer";
// import Header from "../Header";

// export const HomePage = () => {
//   return (
//     <div style={{backgroundImage: "URL('../images/HomePageBackground.jpg')",height:500,width:500,backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',}}>
//       <Header />
//       <div align={"center"} style={{
//         fontSize: 40,
//         fontWeight: "bolder",
//         color: "#2E2E2E",
//       }}>
//         Welcome to the Bookstore!
//       </div>
//       <p>Check out our wide selection of books:</p>
//       <ul>
//         <li>The Great Gatsby</li>
//         <li>To Kill a Mockingbird</li>
//         <li>1984</li>
//         <li>Pride and Prejudice</li>
//         <li>The Catcher in the Rye</li>
//       </ul>

//       <Footer />
//     </div>
//   );
// }

import Footer from "../Footer";
import Header from "../Header";
import backgroundImage from "../images/HomePageBackground.jpg";

export const HomePage = () => {
  return (
    <div
      style={{
        position: "relative",
        height: 690,
        width: 1500,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${backgroundImage})`,
          opacity: 0.2, // Set the opacity of the background image
          zIndex: -1, // Move the background behind other content
        }}
      ></div>

      <Header />
      <div
        align="center"
        style={{
          fontSize: 40,
          fontWeight: "bolder",
          color: "#2E2E2E",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          padding: 20,
          marginTop:105
        }}
      >
        Welcome to the Bookstore!
      </div>
      <div style={{marginTop:240}}></div>
      <Footer />
    </div>
  );
};

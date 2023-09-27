import logo from './images/logo.png';

const Footer = () => {
    return (
        <div>
            {/* Footer */}
            < div style={{ width: 1540, marginTop: 80 }
            }>
                <img src={logo} alt='App Logo' style={{ width: 170, height: 45, marginTop: 0, marginLeft: 670 }}></img>
                <br></br>
                <span style={{ marginTop: 0, marginLeft: 620, fontWeight: "lighter" }}>© 2015 Tatvasoft.com. All rights reserved.</span>
            </div >
        </div>
    )
}

export default Footer;
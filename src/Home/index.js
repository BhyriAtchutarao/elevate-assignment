import {useNavigate} from "react-router-dom"
// import Products from "../Products"
import "./index.css"

const  Home = () =>{
    const navigate = useNavigate()
    const submitButton = (e)=>{
        e.preventDefault()
        navigate("/products")
    }
    return(
        <div>
            <div className="home-container">
            <h1 className="home-heading">GET START YOUR FAVOURITE SHOPPING</h1>
            <button className="buy-button" onClick={submitButton}  >Buy Now </button>
            <p className="home-para">Click on Buy Now button for shopping</p>
        </div>  
        </div>
        
    )
}
export default Home

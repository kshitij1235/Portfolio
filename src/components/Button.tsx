import { Fragment } from "react/jsx-runtime";

function CustomButton(word:any) {
    
    return(
        <Fragment>

        <button style={{background:"black", color:"white",padding:"10px" , maxHeight:"100px",  minWidth:"100px" , maxWidth:"400px", borderRadius:"50px"}}>
        <h1 style={{textAlign:"center" , fontFamily:"monospace" , fontWeight:"lighter"}}>Scroll to see my work</h1>
        </button>

        </Fragment>
    );
}

export default CustomButton;
import "../style.css"
import { createRoot } from "react-dom/client"
import App from "./App"


const Index = ()=>{
    return <App/>
}

const root = createRoot(document.getElementById("root"))
root.render(<Index/>)
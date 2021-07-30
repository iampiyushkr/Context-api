import { useContext } from "react"
import {ThemeContext} from "../contextComponent/themeContext"
export default function Nav() {
    const {handlechange,theme}=useContext(ThemeContext)
    return <div style={{ width: 1000, height: 100, backgroundColor: "yellow" }}>
        <h1>Navbar</h1>
        <button onClick={() => {
            console.log(theme)
            handlechange()
        }}>Toggle</button>
    </div>
}
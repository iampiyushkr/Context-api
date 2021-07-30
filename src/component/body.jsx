import { useContext } from "react"
import {ThemeContext} from "../contextComponent/themeContext"
export default function Body() {
    const {theme}= useContext(ThemeContext)
    return <div style={{ width: 1000, height: 500, backgroundColor: `${theme}` }}>
            <h1>Body</h1>
    </div>
}
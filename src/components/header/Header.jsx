import { useState } from "react";
import Nav from "./Nav";
export default function Header(){

const onChangeHandler = (event) => {
    setKeywords(event.target.value);
}
     const [keywords, setKeywords] = useState('')
    return(
        <>
        <header>
            <div className="logo">Awesome News</div>
            <input onChange={onChangeHandler}
            />
            <p>The Keywords are :{keywords}</p>
         <Nav/>
        </header>
        </>
    )
}
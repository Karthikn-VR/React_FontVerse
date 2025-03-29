import { useState } from "react";

function FontStyleChange(){

    const[font,setfont] = useState("")

    function ChangeFont(event){
        setfont(event.target.value)
    }
    return(<div>
             <h1 className="Heading">FontVerse</h1>
             <textarea type="text" placeholder="Enter" onChange={ChangeFont} />
             <p className="Fonts-style" style={{fontFamily : "cursive"}}>Cursive : {font}</p>
             <p className="Fonts-style" style={{fontFamily : "fantasy"}}>fantasy : {font}</p>
             <p className="Fonts-style" style={{fontFamily : "sans-serif"}}>Sans-serif : {font}</p>
             <p className="Fonts-style" style={{fontFamily : "monospace"}}>Monospace : {font}</p>
             <p className="Fonts-style" style={{fontFamily : "Tahoma"}}>Tahoma : {font}</p>
             <p className="Fonts-style" style={{fontFamily : "Geneva"}}>Geneva : {font}</p>
             <p className="Fonts-style" style={{fontFamily : "Verdana"}}>Verdana : {font}</p>
             <p className="Fonts-style" style={{fontFamily : "Helvetica"}}>Helvetica: {font}</p>
             <p className="Fonts-style" style={{fontFamily : "Poppins"}}>Poppins : {font}</p>
            
            <p className="Fonts-style" style={{ fontFamily: "Roboto, sans-serif" }}>Roboto : {font}</p>
            <p className="Fonts-style" style={{ fontFamily: "Open Sans, sans-serif" }}>Open Sans  : {font}</p>
            <p className="Fonts-style" style={{ fontFamily: "Lato, sans-serif" }}>Lato : {font}</p>
            <p className="Fonts-style" style={{ fontFamily: "Montserrat, sans-serif" }}>Montserrat : {font}</p>
            <p className="Fonts-style" style={{ fontFamily: "Nunito, sans-serif" }}>Nunito : {font}</p>
            <p className="Fonts-style" style={{ fontFamily: "Raleway, sans-serif" }}>Raleway : {font}</p>
            <p className="Fonts-style" style={{ fontFamily: "Inter, sans-serif" }}>Inter : {font}</p>
            <p className="Fonts-style" style={{ fontFamily: "Playfair Display, serif" }}>Playfair : {font}</p>
            <p className="Fonts-style" style={{ fontFamily: "Oswald, sans-serif" }}>Oswald : {font}</p>
            <p className="Fonts-style"style={{ fontFamily: "Press Start 2P" }}>Press Start 2P : {font}</p>
            <p className="Fonts-style"style={{ fontFamily: "Pacifico" }}>Pacifico : {font}</p>
            <p className="Fonts-style"style={{ fontFamily: "Bangers" }}>Bangers : {font}</p>
            <p className="Fonts-style"style={{ fontFamily: "Lobster" }}>Lobster : {font}</p>
            <p className="Fonts-style"style={{ fontFamily: "Anton" }}>Anton : {font}</p>
            <p className="Fonts-style"style={{ fontFamily: "Orbitron" }}>Orbitron : {font}</p>
            <p className="Fonts-style"style={{ fontFamily: "Rubik Glitch" }}>Rubik Glitch : {font}</p>
            <p className="Fonts-style"style={{ fontFamily: "Fredoka One" }}>Fredoka One : {font}</p>
            <p className="Fonts-style"style={{ fontFamily: "Zilla Slab Highlight" }}>Zilla Slab Highlight : {font}</p>
            <p className="Fonts-style"style={{ fontFamily: "Megrim" }}>Megrim : {font}</p>

             

    </div>);
}
export default FontStyleChange
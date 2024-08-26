import alertWhite from "../../assets/icns/alert-white.svg";

type args = { color: "blue" | "red" | "pink" | "yellow" | "green", text:string, size?:"sm" | "md", withAlert?:boolean }

const Pill = ({ color, text, size = "md", withAlert = false }:args) => {
  return <span className={`text-black text-center inline-block relative px-[1em] rounded-full ${size === "sm" ? "text-[10px] lg:text-xs" : "text-xs lg:text-sm"} ${color === "blue" ? "bg-hlblue" : ""} ${color === "red" ? "bg-hlred" : ""} ${color === "pink" ? "bg-hlpink" : ""} ${color === "yellow" ? "bg-hlyellow" : ""} ${color === "green" ? "bg-hlgreen" : ""}`}>
    {text}
    { withAlert && <span className="bg-hlred w-[18px] h-[18px] border border-[#18191B] inline-block rounded-full absolute right-[-6px] top-[-6px]">{alertWhite}</span> }
  </span>
  
}

export default Pill;
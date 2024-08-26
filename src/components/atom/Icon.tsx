type args = { name:string, size:number }
import showHide from "../../assets/icns/showHide.svg"
import dashboardBack from "../../assets/icns/dashboardBack.svg"
import search from "../../assets/icns/search.svg"
import dashboard from "../../assets/icns/dashboard.svg"
import assets from "../../assets/icns/assets.svg"
import uptime from "../../assets/icns/uptime.svg"
import operation from "../../assets/icns/operation.svg"
import efficiency from "../../assets/icns/efficiency.svg"
import messages from "../../assets/icns/messages.svg"
import notifications from "../../assets/icns/notifications.svg"
import settings from "../../assets/icns/settings.svg"
import alertWhite from "../../assets/icns/alertWhite.svg"
import predictionsArrow from "../../assets/icns/predictionsArrow.svg"
import linkChevronRight from "../../assets/icns/linkChevronRight.svg"
import fullScreen from "../../assets/icns/fullScreen.svg"
import cog from "../../assets/icns/cog.svg"
import questionMarkWhite from "../../assets/icns/questionMarkWhite.svg"
import chevronDown from "../../assets/icns/chevronDown.svg"
import closeBlue from "../../assets/icns/closeBlue.svg"
import filter from "../../assets/icns/filter.svg"
import chevronRightBlue from "../../assets/icns/chevronRightBlue.svg"
import arrowUprightBlack from "../../assets/icns/arrowUprightBlack.svg"
import tickBlack from "../../assets/icns/tickBlack.svg"
import hamburger from "../../assets/icns/hamburger.svg"

const Icon = ({ name, size = 20 }:args) => {
  if(name === "showHide") {
    return <span className="flex items-center justify-center" style={{width: size + "px", height: size + "px"}}><img src={showHide} className="inline-block h-[90%]" /></span>
  } else if(name === "dashboardBack") {
    return <span className="flex items-center justify-center" style={{width: size + "px", height: size + "px"}}><img src={dashboardBack} className="inline-block h-[90%]" /></span>
  } else if(name === "search") {
    return <span className="flex items-center justify-center" style={{width: size + "px", height: size + "px"}}><img src={search} className="inline-block h-[90%]" /></span>
  } else if(name === "dashbaord") {
    return <span className="flex items-center justify-center" style={{width: size + "px", height: size + "px"}}><img src={dashboard} className="inline-block h-[90%]" /></span>
  } else if(name === "assets") {
    return <span className="flex items-center justify-center" style={{width: size + "px", height: size + "px"}}><img src={assets} className="inline-block h-[90%]" /></span>
  } else if(name === "uptime") {
    return <span className="flex items-center justify-center" style={{width: size + "px", height: size + "px"}}><img src={uptime} className="inline-block h-[90%]" /></span>
  } else if(name === "operation") {
    return <span className="flex items-center justify-center" style={{width: size + "px", height: size + "px"}}><img src={operation} className="inline-block h-[90%]" /></span>
  } else if(name === "efficiency") {
    return <span className="flex items-center justify-center" style={{width: size + "px", height: size + "px"}}><img src={efficiency} className="inline-block h-[90%]" /></span>
  } else if(name === "messages") {
    return <span className="flex items-center justify-center" style={{width: size + "px", height: size + "px"}}><img src={messages} className="inline-block h-[90%]" /></span>
  } else if(name === "notifications") {
    return <span className="flex items-center justify-center" style={{width: size + "px", height: size + "px"}}><img src={notifications} className="inline-block h-[90%]" /></span>
  } else if(name === "settings") {
    return <span className="flex items-center justify-center" style={{width: size + "px", height: size + "px"}}><img src={settings} className="inline-block h-[90%]" /></span>
  } else if(name === "alertWhite") {
    return <span className="flex items-center justify-center" style={{width: size + "px", height: size + "px"}}><img src={alertWhite} className="inline-block h-[90%]" /></span>
  } else if(name === "predictionsArrow") {
    return <span className="flex items-center justify-center" style={{width: size + "px", height: size + "px"}}><img src={predictionsArrow} className="inline-block h-[90%]" /></span>
  } else if(name === "linkChevronRight") {
    return <span className="flex items-center justify-center" style={{width: size + "px", height: size + "px"}}><img src={linkChevronRight} className="inline-block h-[90%]" /></span>
  } else if(name === "fullScreen") {
    return <span className="flex items-center justify-center" style={{width: size + "px", height: size + "px"}}><img src={fullScreen} className="inline-block h-[90%]" /></span>
  } else if(name === "cog") {
    return <span className="flex items-center justify-center" style={{width: size + "px", height: size + "px"}}><img src={cog} className="inline-block h-[90%]" /></span>
  } else if(name === "questionMarkWhite") {
    return <span className="flex items-center justify-center" style={{width: size + "px", height: size + "px"}}><img src={questionMarkWhite} className="inline-block h-[90%]" /></span>
  } else if(name === "chevronDown") {
    return <span className="flex items-center justify-center" style={{width: size + "px", height: size + "px"}}><img src={chevronDown} className="inline-block h-[90%]" /></span>
  } else if(name === "closeBlue") {
    return <span className="flex items-center justify-center" style={{width: size + "px", height: size + "px"}}><img src={closeBlue} className="inline-block h-[90%]" /></span>
  } else if(name === "filter") {
    return <span className="flex items-center justify-center" style={{width: size + "px", height: size + "px"}}><img src={filter} className="inline-block h-[90%]" /></span>
  } else if(name === "chevronRightBlue") {
    return <span className="flex items-center justify-center" style={{width: size + "px", height: size + "px"}}><img src={chevronRightBlue} className="inline-block h-[90%]" /></span>
  } else if(name === "arrowUprightBlack") {
    return <span className="flex items-center justify-center" style={{width: size + "px", height: size + "px"}}><img src={arrowUprightBlack} className="inline-block h-[90%]" /></span>
  } else if(name === "tickBlack") {
    return <span className="flex items-center justify-center" style={{width: size + "px", height: size + "px"}}><img src={tickBlack} className="inline-block h-[90%]" /></span>
  } else if(name === "hamburger") {
    return <span className="flex items-center justify-center" style={{width: size + "px", height: size + "px"}}><img src={hamburger} className="inline-block h-[90%]" /></span>
  }
}

export default Icon;
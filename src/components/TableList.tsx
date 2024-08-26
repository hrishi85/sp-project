import { ReactElement, useState } from "react";
import Alert from "./atom/Alert";
import Pill from "./atom/Pill"
import Icon from "./atom/Icon";

type args = { type: "owners" | "stores" | "devices" | "assets" | "uptime" | "operation" | "efficiency" | "notifications", data:any[] }
const TableList = ({ type, data = [] }:args) => {

  type colorType = "blue" | "red" | "yellow" | "green";
  
  const [list, setList] = useState(data);

  let headers:ReactElement<any> | null = null;
  let rows:React.ReactElement[] = [];
  

  const handleShowPredictions = () => {};

  const handleShowDetails = () => {};

  const handleReverseOrder = () => {};

  const getColor = (val:number):colorType => {
    if(val > 80) {
      return "green";
    } else if(val > 60) {
      return "yellow";
    }
    return "red";
  };

  if(type === "owners") {
    headers = <div className="flex items-center justify-center">
      <div></div>
      <p className="font-medium">Uptime</p>
      <p className="font-medium">Operation</p>
      <p className="font-medium">Efficiency</p>
      <p className="font-medium">Predictions</p>
      <div></div>
    </div>;
    rows = data.map((d, i) => <div id={d.id} className="flex items-center py-1 border-b border-b-searchinputstroke/[0.5]">
        <p>{d.ownerName}</p>
        <div className="text-center">
          <Pill color={getColor(d.uptime)} text={d.uptime} />
        </div>
        <div className="text-center">
          <Pill color={getColor(d.operation)} text={d.operation} />
        </div>
        <div className="text-center">
          <Pill color={getColor(d.efficiency)} text={d.efficiency} />
        </div>
        <div className="text-center">
          <span onClick={handleShowPredictions} className="inline-block w-[22px] h-[22px] border border-hlblue rounded-full text-center cursor-pointer"><Icon name="predictionsArrow" size={22} /></span>
        </div>
        <div className="text-right">
          <span onClick={handleShowDetails} className="inline-block w-[22px] h-[22px] bg-hlblue rounded-full cursor-pointer"><Icon name="linkChevronRight" size={22} /></span>
        </div>
      </div>
    );
  } else if(type === "stores") {
    headers = <div className="flex items-center justify-center">
      <div></div>
      <p className="font-medium">Uptime</p>
      <p className="font-medium">Operation</p>
      <p className="font-medium">Efficiency</p>
      <p className="font-medium">Alerts</p>
      <p className="font-medium">Predictions</p>
      <div></div>
    </div>;
    rows = data.map((d, i) => <div id={d.id} className="flex items-center py-1 border-b border-b-searchinputstroke/[0.5]">
        <p>{d.ownerName}</p>
        <div className="text-center">
          <Pill color={getColor(d.uptime)} text={d.uptime} />
        </div>
        <div className="text-center">
          <Pill color={getColor(d.operation)} text={d.operation} />
        </div>
        <div className="text-center">
          <Pill color={getColor(d.efficiency)} text={d.efficiency} />
        </div>
        <div className="text-center">
          {d.alert? <Alert color={getColor(d.alert.val)} text={d.alert.text} /> : ""}
        </div>
        <div className="text-center">
          <span onClick={handleShowPredictions} className="inline-block w-[22px] h-[22px] border border-hlblue rounded-full text-center cursor-pointer"><Icon name="predictionsArrow" size={22} /></span>
        </div>
        <div className="text-right">
          <span onClick={handleShowDetails} className="inline-block w-[22px] h-[22px] bg-hlblue rounded-full cursor-pointer"><Icon name="linkChevronRight" size={22} /></span>
        </div>
      </div>
    );
  } else if(type === "devices") {
    headers = <div className="flex items-center justify-center">
      <div><Icon name="filter" size={18}></Icon></div>
      <p className="font-medium">ID</p>
      <p className="font-medium">Uptime</p>
      <p className="font-medium">Operation</p>
      <p className="font-medium">Efficiency</p>
      <p className="font-medium">Alerts</p>
      <p className="font-medium">Predictions</p>
      <div></div>
    </div>;
    rows = data.map((d, i) => <div id={d.id} className="flex items-center py-1 border-b border-b-searchinputstroke/[0.5]">
        <p>
          <img src={d.imagePath} className="inline-block h-[42px]" />
        </p>
        <p>{d.id}</p>
        <div className="text-center">
          <Pill color={getColor(d.uptime)} text={d.uptime} />
        </div>
        <div className="text-center">
          <Pill color={getColor(d.operation)} text={d.operation} />
        </div>
        <div className="text-center">
          <Pill color={getColor(d.efficiency)} text={d.efficiency} />
        </div>
        <div className="text-center">
          {d.alert? <Alert color={getColor(d.alert.val)} text={d.alert.text} /> : ""}
        </div>
        <div className="text-center">
          <span onClick={handleShowPredictions} className="inline-block w-[22px] h-[22px] border border-hlblue rounded-full text-center cursor-pointer"><Icon name="predictionsArrow" size={22} /></span>
        </div>
        <div className="text-right">
          <span onClick={handleShowDetails} className="inline-block w-[22px] h-[22px] bg-hlblue rounded-full cursor-pointer"><Icon name="linkChevronRight" size={22} /></span>
        </div>
      </div>
    );
  } else if(type === "assets") {
    headers = <div className="flex items-center justify-center">
      <div>
        <span onClick={handleReverseOrder}>
          <Icon name="filter" size={18}></Icon>
        </span>
      </div>
      <p className="bold">Model</p>
      <p>ID</p>
      <p>Address</p>
      <p>Owner</p>
      <p>Alerts</p>
      <p>Predictions</p>
      <div></div>
    </div>;
    rows = data.map((d, i) => <div id={d.id} className="flex items-center py-1 border-b border-b-searchinputstroke/[0.5]">
        <div><img src={d.imagePath} className="inline-block h-[42px]" /></div>
        <p>{d.model}</p>
        <p>{d.id}</p>
        <div className="text-center">
          <p>{d.storeName}</p>
          <p className="color-white/[0.7]">{d.address}</p>
        </div>
        <div className="text-center">
          <p>{d.owner}</p>
        </div>
        <div className="text-center">
          {d.alert? <Alert color={getColor(d.alert.val)} text={d.alert.text} /> : ""}
        </div>
        <div className="text-center">
          <Pill color={getColor(d.alert)} text={d.alert} />
        </div>
        <div className="text-center">
          <span onClick={handleShowPredictions} className="inline-block w-[22px] h-[22px] border border-hlblue rounded-full text-center cursor-pointer"><Icon name="predictionsArrow" size={22} /></span>
        </div>
        <div className="text-right">
          <span onClick={handleShowDetails} className="inline-block w-[22px] h-[22px] bg-hlblue rounded-full cursor-pointer"><Icon name="linkChevronRight" size={22} /></span>
        </div>
      </div>
    );
  } else if(type === "uptime") {
    headers = <div className="flex items-center justify-center">
      <div>
        <span onClick={handleReverseOrder}>
          <Icon name="filter" size={18}></Icon>
        </span>
      </div>
      <p>Address</p>
      <p>Uptime</p>
      <p>Alerts</p>
      <p>Predictions</p>
      <div></div>
    </div>;
    rows = data.map((d, i) => <div id={d.id} className="flex items-center py-1 border-b border-b-searchinputstroke/[0.5]">
        <div className="text-center">
          <p>{d.storeName}</p>
          <p className="color-white/[0.7]">{d.address}</p>
        </div>
        <div className="text-center">
          <Pill color={getColor(d.uptime)} text={d.uptime} />
        </div>
        <div className="text-center">
          {d.alert? <Alert color={getColor(d.alert.val)} text={d.alert.text} /> : ""}
        </div>
        <div className="text-center">
          <span onClick={handleShowPredictions} className="inline-block w-[22px] h-[22px] border border-hlblue rounded-full text-center cursor-pointer"><Icon name="predictionsArrow" size={22} /></span>
        </div>
        <div className="text-right">
          <span onClick={handleShowDetails} className="inline-block w-[22px] h-[22px] bg-hlblue rounded-full cursor-pointer"><Icon name="linkChevronRight" size={22} /></span>
        </div>
      </div>
    );
  } else if(type === "operation") {
    headers = <div className="flex items-center justify-center">
      <div><Icon name="filter" size={18}></Icon></div>
      <p>Address</p>
      <p>Vat Utilization</p>
      <p>Main Filter</p>
      <p>Express Filter</p>
      <p>Alerts</p>
      <p>Predictions</p>
      <div></div>
    </div>;
    rows = data.map((d, i) => <div id={d.id} className="flex items-center py-1 border-b border-b-searchinputstroke/[0.5]">
        <div className="text-center">
          <p>{d.storeName}</p>
          <p className="color-white/[0.7]">{d.address}</p>
        </div>
        <p className="text-center">
          <Pill color={getColor(d.vatUtilisation)} text={d.vatUtilisation} />
        </p>
        <p className="text-center">
          <Pill color={getColor(d.mainFilter)} text={d.mainFilter} />
        </p>
        <p className="text-center">
          <Pill color={getColor(d.expressFilter)} text={d.expressFilter} />
        </p>
        <div className="text-center">
          {d.alert? <Alert color={getColor(d.alert.val)} text={d.alert.text} /> : ""}
        </div>
        <div className="text-center">
          <span onClick={handleShowPredictions} className="inline-block w-[22px] h-[22px] border border-hlblue rounded-full text-center cursor-pointer"><Icon name="predictionsArrow" size={22} /></span>
        </div>
        <div className="text-right">
          <span onClick={handleShowDetails} className="inline-block w-[22px] h-[22px] bg-hlblue rounded-full cursor-pointer"><Icon name="linkChevronRight" size={22} /></span>
        </div>
      </div>
    );
  } else if(type === "efficiency") {
    headers = <div className="flex items-center justify-center">
      <div><Icon name="filter" size={18}></Icon></div>
      <p>Address</p>
      <p>Oil Efficiency</p>
      <p>Energy Efficiency</p>
      <p>Alerts</p>
      <p>Predictions</p>
      <div></div>
    </div>;
    rows = data.map((d, i) => <div id={d.id} className="flex items-center py-1 border-b border-b-searchinputstroke/[0.5]">
        <div className="text-center">
          <p>{d.storeName}</p>
          <p className="color-white/[0.7]">{d.address}</p>
        </div>
        <p className="text-center">
          <Pill color={getColor(d.oilEfficiency)} text={d.oilEfficiency} />
        </p>
        <p className="text-center">
          <Pill color={getColor(d.energyEfficiency)} text={d.energyEfficiency} />
        </p>
        <div className="text-center">
          {d.alert? <Alert color={getColor(d.alert.val)} text={d.alert.text} /> : ""}
        </div>
        <div className="text-center">
          <span onClick={handleShowPredictions} className="inline-block w-[22px] h-[22px] border border-hlblue rounded-full text-center cursor-pointer"><Icon name="predictionsArrow" size={22} /></span>
        </div>
        <div className="text-right">
          <span onClick={handleShowDetails} className="inline-block w-[22px] h-[22px] bg-hlblue rounded-full cursor-pointer"><Icon name="linkChevronRight" size={22} /></span>
        </div>
      </div>
    );
  } else if(type === "notifications") {
    headers = <div className="flex items-center justify-center">
      <div><Icon name="filter" size={18}></Icon></div>
      <p>Modle</p>
      <p>ID</p>
      <p>Address</p>
      <p>Owner</p>
      <p>Alerts</p>
      <p>Predictions</p>
      <div></div>
    </div>;
    rows = data.map((d, i) => <div id={d.id} className="flex items-center py-1 border-b border-b-searchinputstroke/[0.5]">
        <div className="text-center">
          <img src={d.imagePath} className="inline-block h-[42px]" />
        </div>
        <p className="text-center">
          {d.model}
        </p>
        <p className="text-center">
          {d.id}
        </p>
        <div>
          <p>{d.storeName}</p>
          <p className="color-white/[0.7]">{d.address}</p>
        </div>
        <p className="text-center">
          {d.owner}
        </p>
        <div className="text-center">
          {d.alert? <Alert color={getColor(d.alert.val)} text={d.alert.text} /> : ""}
        </div>
        <div className="text-center">
          <span onClick={handleShowPredictions} className="inline-block w-[22px] h-[22px] border border-hlblue rounded-full text-center cursor-pointer"><Icon name="predictionsArrow" size={22} /></span>
        </div>
        <div className="text-right">
          <span onClick={handleShowDetails} className="inline-block w-[22px] h-[22px] bg-hlblue rounded-full cursor-pointer"><Icon name="linkChevronRight" size={22} /></span>
        </div>
      </div>
    );
  }

  return <>
    {headers}
    <div className="w-full flex-grow overflow-y-auto">
      {rows}
    </div>
  </>;
}

export default TableList;

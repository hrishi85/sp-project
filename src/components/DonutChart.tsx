// Donut Chart Component:
import { useRef, useEffect, useState, RefObject } from 'react';
import * as d3 from "d3"

type args = {num:number}

const DonutChart = ({ num }:args) => {

  const ref = useRef<HTMLInputElement>(null);

  const [dataVal, setDataVal] = useState<number>(num);
  

  useEffect(() => {
    const $currenEl = d3.select(ref.current);
    const $svg = $currenEl.select("svg");
    const $baseGroup = $svg.select("g");
    const $pathOne = $baseGroup.select("path.one");
    const $pathTwo = $baseGroup.select("path.two");
    const $text = $baseGroup.select("text");

    let elementSize = $currenEl.node().getBoundingClientRect();
    let maxSize = elementSize.width > elementSize.height? elementSize.height : elementSize.width;
    let baseRadius = maxSize / 2;

    $svg.attr("width", maxSize).attr("height", maxSize);
    $baseGroup.attr('transform', ("translate(" + (maxSize / 2) + ", " + (maxSize / 2) + ")"));

    var arc = d3.arc().outerRadius(baseRadius - 4).innerRadius(baseRadius - 6).startAngle(Math.PI + 1).endAngle(Math.PI + 5.2).cornerRadius(2);
    $pathOne.attr("d", arc).attr("a");

    arc = d3.arc().outerRadius(baseRadius).innerRadius(baseRadius - 10).startAngle(Math.PI + 1).endAngle(Math.PI + 5).cornerRadius(10);
    $pathTwo.attr("d", arc).attr("a");
    // var pies = d3.pie().sort(null)([dataVal, remainingPercent + 45]);
    // var arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius).startAngle((d) => d.startAngle).endAngle((d) => d.endAngle).cornerRadius(10);
    // $baseGroup.selectAll('path').data(pies).enter().append('path').attr('d', arc).attr('fill', (d, i) => i === 0 ? "red" : "transparent").attr("transform", "rotate(-135)");
    
    $text.text(dataVal).style("text-anchor", "middle");
  }, [dataVal]);

  return <div ref={ref} style={{height: "300px"}}>
    <svg>
      <g>
        <path className="one" fill="#58595b" />
        <path className="two" fill="red" />
        <text fill="white" className="text-3xl lg:text-4xl font-light"></text>
      </g>
    </svg>
  </div>;
};

export default DonutChart;
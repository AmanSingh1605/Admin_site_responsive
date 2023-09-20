import { ResponsiveContainer, LineChart, Line, Tooltip } from "recharts";
import "./styles/Charts.scss";
import { Link } from "react-router-dom";

type Props = {
  color: string;
  icon: string;
  title: string;
  number: string | number;
  dataKey: string;
  percentage: number;
  chartData: object[];
};
function Charts(props: Props) {
  return (
    <div className="charts">
      <div className="data">
        <div className="heading">
          <div className="icon">
            <img src={props.icon} alt="" />
          </div>
          <div className="title">{props.title}</div>
        </div>
        <div className="count">{props.number}</div>
        <div className="viewLink">
          <Link to="/product">View all</Link>
        </div>
      </div>
      <div className="chartSection">
        <div className="viewChart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={300} height={100} data={props.chartData}>
              <Tooltip
                contentStyle={{background:"none", border: "none"}}
                position={{x: 10, y:70}}
                labelStyle={{display:"none"}}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="chartText">
          <span
            className="percentage"
            style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
          >
            {props.percentage}%
          </span>
          <span className="text">this month</span>
        </div>
      </div>
    </div>
  );
}

export default Charts;

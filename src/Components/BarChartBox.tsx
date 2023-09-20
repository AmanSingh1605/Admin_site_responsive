import "./styles/BarChartBox.scss";
import {ResponsiveContainer, Bar, BarChart, Tooltip} from 'recharts';

type Props = {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
};
function BarChartBox(props: Props) {
  return (
    <div className="barChartBox">
      <div className="title">{props.title}</div>
      <div className="chartView">
        <ResponsiveContainer width="100%" height={150}>
          <BarChart width={150} height={40} data={props.chartData}>
            <Tooltip 
              contentStyle={{backgroundColor:"#384256", color:props.color, fontSize:"12px"  }}
              labelStyle={{display: "none"}}
              cursor={{fill:"none"}}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BarChartBox;

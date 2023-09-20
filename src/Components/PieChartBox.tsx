import "./styles/PieChartBox.scss";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

function PieChartBox() {
  const data = [
    { name: "Mobile", value: 400, color: "#0088FE" },
    { name: "Desktop", value: 300, color: "#00C49F" },
    { name: "Laptop", value: 300, color: "#FFBB28" },
    { name: "Tablet", value: 200, color: "#FF8042" },
  ];

  return (
    <div className="PieChartBox">
      <div className="title">Loads by Source</div>
      <div className="chartView">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Tooltip contentStyle={{ borderRadius: "5px" }} />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((index) => (
                <Cell key={index.name} fill={index.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="dataBoxes">
        {data.map((item) => {
          return (
            <div className="dataBox" key={item.name}>
              <div className="textData">
                <div className="icon" style={{ background: item.color }}>
                  &nbsp;
                </div>
                <div className="name">{item.name}</div>
              </div>
              <div className="count">{item.value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PieChartBox;

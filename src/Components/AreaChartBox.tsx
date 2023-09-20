import "./styles/AreaChartBox.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function AreaChartBox() {
  const data = [
    {
      name: "sun",
      electronic: 4000,
      clothes: 2400,
      books: 2400,
    },
    {
      name: "mon",
      electronic: 3000,
      clothes: 1398,
      books: 2210,
    },
    {
      name: "tue",
      electronic: 2000,
      clothes: 9800,
      books: 2290,
    },
    {
      name: "wed",
      electronic: 2780,
      clothes: 3908,
      books: 2000,
    },
    {
      name: "thu",
      electronic: 1890,
      clothes: 4800,
      books: 2181,
    },
    {
      name: "fri",
      electronic: 2390,
      clothes: 3800,
      books: 2500,
    },
    {
      name: "sat",
      electronic: 3490,
      clothes: 4300,
      books: 2100,
    },
  ];

  return (
    <div className="AreaChartBox">
      <div className="title">Revenue Analytics</div>
      <div className="viewChart">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="electronic"
              stackId="1"
              stroke="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="books"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="clothes"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AreaChartBox;

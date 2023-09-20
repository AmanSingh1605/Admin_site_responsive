import { useEffect, useState } from "react";
import "./styles/User.scss";
import { singleUser } from "../data";
import {
  Tooltip,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const User = () => {
  const [user, setUser] = useState({
    id: 0,
    title: "",
    img: "/noavatar.svg",
    info: [{ label: "", value: "" }],
    chart: {
      dataKeys: [{ name: "", color: "" }],
      data: [{ name: "", visits: 0, clicks: 0 }],
    },
    activities: [
      {
        text: "",
        time: "",
      },
    ],
  });
  useEffect(() => {
    const s = window.location.pathname;
    const temp = singleUser.filter(
      (userData) => userData.id === parseInt(s.substring(7, s.length))
    );
    setUser(temp[0]);
  }, []);

  return (
    <div className="user">
      <div className="userData">
        <div className="userInfo">
          <div className="heading">
            <img src={user.img} alt="" />
            <h1 className="">{user.title}</h1>
            <button>Update</button>
          </div>
          <div className="data">
            {user.info.map((item) => {
              return (
                <div className="item" key={item.label}>
                  <span className="label">{item.label}:</span>
                  <span className="value">{item.value}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="divider">&nbsp;</div>
        <div className="userChart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart
              data={user.chart.data}
              margin={{
                top: 5,
                right: 10,
                left: 5,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              {user.chart.dataKeys.map((item) => {
                return (
                  <Line
                    type="monotone"
                    dataKey={item.name}
                    stroke={item.color}
                    key={item.name}
                  />
                );
              })}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="activity">
        <h2>Latest Activites</h2>
        <ul>
          {user.activities.map((item) => {
            return (
              <li>
                <div>
                  <span className="text">{item.text}</span>
                  <span className="time">{item.time} </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default User;

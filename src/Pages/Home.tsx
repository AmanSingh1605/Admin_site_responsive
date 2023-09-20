import AreaChartBox from "../Components/AreaChartBox";
import BarChartBox from "../Components/BarChartBox";
import Charts from "../Components/Charts";
import PieChartBox from "../Components/PieChartBox";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
  topDealUsers,
} from "../data";
import "./styles/Home.scss";

function Home() {
  return (
    <div className="home">
      <div className="box box1">
        <div className="topBox">Top Deals</div>
        <div className="list">
          {topDealUsers.map((item) => {
            return (
              <div className="listItem" key={item.id}>
                <div className="user">
                  <div className="profilePic">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="userData">
                    <span className="userName">{item.username}</span>
                    <span className="userEmail">{item.email}</span>
                  </div>
                </div>
                <div className="price">$ {item.amount}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="box box2">
        <Charts {...chartBoxUser} />
      </div>
      <div className="box box3">
        <Charts {...chartBoxRevenue} />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        <Charts {...chartBoxProduct} />
      </div>
      <div className="box box6">
        <Charts {...chartBoxConversion} />
      </div>
      <div className="box box7">
        <AreaChartBox />
      </div>
      <div className="box box8">
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </div>
  );
}

export default Home;

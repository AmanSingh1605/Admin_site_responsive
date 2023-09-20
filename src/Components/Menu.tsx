import { Link } from "react-router-dom";
import "./styles/Menu.scss";
import { menu } from "../data";
function Menu() {
  return (
    <div className="menu">
      {menu.map((item) => {
        return (
          <div className="items" key={item.id}>
            <span className="title">{item.title}</span>
            {item.listItems.map((listItem) => {
              return (
                <Link to={listItem.url} className="listItem" key={listItem.id}>
                  <img src={listItem.icon} alt="" />
                  <span className="listItemTitle">{listItem.title}</span>
                </Link>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Menu;

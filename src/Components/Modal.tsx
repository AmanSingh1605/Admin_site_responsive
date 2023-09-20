import { GridColDef } from "@mui/x-data-grid";
import "./styles/Modal.scss";
import { useState } from "react";

type Props = {
  slug: string;
  columns: GridColDef[];
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type ColumnProps = {
  headerName: any;
  type: any;
};

function Column({ headerName, type }: ColumnProps) {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="itemBlock">
      <label htmlFor="">{headerName}</label>
      <input
        type={type}
        value={inputValue}
        placeholder={headerName}
        onChange={handleChange}
      />
    </div>
  );
}
function Modal(props: Props) {
    const handleSubmit=(event:any)=>{
        event.preventDefault();
        props.setIsOpen(false);
    }
  return (
    <div className="modalPage">
      <div className="modal">
        <h1 className="title">Add New User</h1>
        <div className="close" onClick={() => props.setIsOpen(false)}>
          X
        </div>
        <form onSubmit={handleSubmit}>
          <div className="columns">
            {props.columns
              .filter(
                (item) =>
                  item.field !== "id" &&
                  item.field !== "avatar" &&
                  item.field !== "verified" &&
                  item.field !== "action" &&
                  item.field !== "createdAt"
              )
              .map((item) => {
                return <Column headerName={item.headerName} type={item.type} />;
              })}
          </div>
          <button className="submit" type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;

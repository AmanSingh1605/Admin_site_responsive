import Modal from "../Components/Modal";
import Table from "../Components/Table";
import "./styles/Product.scss";
import { products } from "../data";
import { useState } from "react";

const Product = () => {
  const [isOpen, setIsOpen] = useState(false);

  const productColumns = [
    { field: "id", headerName: "Id", width: 50, type: "number" },
    {
      field: "avatar",
      headerName: "Avatar",
      width: 70, 
      renderCell: (params: any) => {
        return <img src={params.row.img} alt="" />;
      },
    },
    {
      field: "title",
      headerName: "Product Name",
      width: 150,
      type: "string",
    },
    {
      field: "color",
      headerName: "Color",
      width: 110,
      type: "string",
    },
    { field: "price", headerName: "Price", width: 110, type: "string" },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 110,
      type: "string",
    },
    { field: "inStock", headerName: "In Stock", width: 110, type: "boolean" },
  ];

  return (
    <div className="product">
      <div className="Users">
        <div className="title">
          <h1 className="">Products</h1>
          <button onClick={() => setIsOpen(true)}>Add New Product</button>
        </div>
        <div className="table">
          <Table userRows={products} userColumns={productColumns} />
        </div>
        {isOpen && (
          <Modal
            slug="Products"
            columns={productColumns}
            setIsOpen={setIsOpen}
          />
        )}
      </div>
    </div>
  );
};

export default Product;

import "./styles/Table.scss"
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";

type Props = {
  userRows: object[];
  userColumns:  GridColDef[];
};

function Table(props: Props) {
  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <DataGrid
        className="DataTable"
        rows={props.userRows}
        columns={props.userColumns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{toolbar:GridToolbar}}
        slotProps={{
            toolbar:{
                showQuickFilter:true,
                quickFilterProps: {
                    debounceMs:500
                }
            }
        }}  
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </Box>
  );
}

export default Table;

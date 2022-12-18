import {
  Button,
  IconButton,
  InputBase,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

export default function BeneficiaryList() {
  const data = [
    { name: "James", stk: "012345689", bank: "Sacombank", nameOnSave: "Bitch" },
    {
      name: "Huy Tran",
      stk: "423423432",
      bank: "MBBank",
      nameOnSave: "Friend",
    },
    {
      name: "Thanh Hung",
      stk: "32445343665",
      bank: "Sacombank",
      nameOnSave: "Thanh Hung",
    },
    {
      name: "BUI THI DOAN TRANG",
      stk: "1239561723619",
      bank: "Agribank",
      nameOnSave: "BUI THI DOAN TRANG",
    },
    {
      name: "NGUYEN THANH HUNG",
      stk: "123635746742",
      bank: "Sacombank",
      nameOnSave: "NGUYEN THANH HUNG",
    },
    {
      name: "PHAM THU THUY",
      stk: "9703372912",
      bank: "Sacombank",
      nameOnSave: "PHAM THU THUY",
    },
  ];
  return (
    <>
      <div className="flex" style={{ alignItems: "center", gap: "20px" }}>
        <p style={{ fontWeight: 700, fontSize: "22px" }}>Danh sách thụ hưởng</p>
        <Button variant="outlined">Thêm người thụ hưởng</Button>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            marginLeft: "auto",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Tìm kiếm người thụ hưởng"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
      <TableContainer component={Paper} sx={{ marginTop: "40px" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>STT</TableCell>
              <TableCell align="left">Chủ tài khoản</TableCell>
              <TableCell align="left">Số tài khoản / Số thẻ</TableCell>
              <TableCell align="left">Tên ngân hàng</TableCell>
              <TableCell align="left">Tên gợi nhớ</TableCell>
              <TableCell align="left">Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow
                key={item.stk}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="left">{item.name}</TableCell>
                <TableCell align="left">{item.stk}</TableCell>
                <TableCell align="left">{item.bank}</TableCell>
                <TableCell align="left">{item.nameOnSave}</TableCell>
                <TableCell align="left">
                  <IconButton>
                    <AddIcon />
                  </IconButton>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

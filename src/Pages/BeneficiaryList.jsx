import { Button, IconButton, InputBase, Paper } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

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
      stk: "123635746742",
      bank: "Sacombank",
      nameOnSave: "PHAM THU THUY",
    },
  ];
  return (
    <div style={{ flexGrow: 1, padding: "20px" }}>
      <div class="flex" style={{ alignItems: "center" }}>
        <p style={{ fontWeight: 700, fontSize: "22px" }}>Danh sách thụ hưởng</p>
        <div>
          <Button variant="outlined">Thêm người thụ hưởng</Button>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
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
      </div>
    </div>
  );
}

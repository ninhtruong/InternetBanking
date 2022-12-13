import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";

export default function Sidebar() {
  return (
    <Paper sx={{ width: 260, maxWidth: "100%", height: "100vh" }}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <AccountBalanceIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Trang chủ</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentCopy fontSize="small" />
          </ListItemIcon>
          <ListItemText>Danh sách tài khoản</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentPaste fontSize="small" />
          </ListItemIcon>
          <ListItemText>Danh sách người nhận</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <TransferWithinAStationIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Chuyển khoản</ListItemText>
        </MenuItem>
        <Divider />
      </MenuList>
    </Paper>
  );
}

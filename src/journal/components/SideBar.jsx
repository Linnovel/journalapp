import { TurnedInNot } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

const SideBar = ({ drawerWidth }) => {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Luis Linares{" "}
          </Typography>
        </Toolbar>
        <Divider>
          <List>
            {["Enero", "Febrero", "Marzo", "Abril"].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <Grid>
                    <ListItemText primary={text} />
                    <ListItemText
                      primary={
                        "oaldoaajwdiajw paiowjdjapowj poopd,paow oawjdpoqjwpodjpqjp ojqp"
                      }
                    />
                  </Grid>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Divider>
      </Drawer>
    </Box>
  );
};

export default SideBar;

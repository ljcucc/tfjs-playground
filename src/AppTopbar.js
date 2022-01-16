import { Card, Button, AppBar, IconButton, Typography, Toolbar} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function AppTopbar(){
  return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tensorflow.js Codelab
          </Typography>
          <Button color="inherit">About</Button>
        </Toolbar>
      </AppBar>
  );
}

export default AppTopbar;

import { Button, IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CustomDialog, { dialogOpenSubject$ } from '../CustomDialog/customDialog';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteTable from './favotiteTable/favoriteTable';
export interface NavbarInterface { }


const Navbar = () => {
    const handleClick =()=>{
        dialogOpenSubject$.setSubject= true;
    }
    return (
        <>
        <CustomDialog>
                <FavoriteTable />
        </CustomDialog>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            News
                        </Typography>
                        <IconButton color="secondary" aria-label="favorites" component="label" onClick={handleClick}>
                            <FavoriteIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
          
        );
}


export default Navbar
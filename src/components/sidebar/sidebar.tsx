import {Drawer, Box, Typography, IconButton, SvgIcon, SvgIconProps, Button} from '@mui/material'
import {useState} from 'react';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../state/store/store";
import LoginIcon from '@mui/icons-material/Login';
import {useNavigate} from "react-router-dom";
import {updateUserState} from "../../state/slice/UserProfileSlice";
import {sideBarStyle} from "./sidebarCss";

export const SideBar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const isUserLoggedIn: boolean = useSelector((state: RootState) => state.user.isLoggedIn);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    function HomeIcon(props: SvgIconProps) {
        return (
            <SvgIcon {...props}>
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     width="100%" viewBox="0 0 52 52" enableBackground="new 0 0 52 52" xml:space="preserve">
<path fill="#FFFFFF" opacity="1.000000" stroke="none"
      d="
M53.000000,10.000000
	C53.000000,14.024545 53.000000,18.049089 52.609451,22.736511
	C44.177296,22.933872 36.137314,22.437172 28.093319,22.017511
	C24.662195,21.838505 22.146227,23.279446 22.102104,26.940731
	C22.057953,30.604456 24.524830,32.104752 27.973993,31.983923
	C36.317245,31.691639 44.658150,31.332306 53.000000,31.000000
	C53.000000,35.024544 53.000000,39.049088 52.609459,43.736523
	C50.654961,43.936062 49.084957,43.052071 47.527981,43.074448
	C32.017426,43.297348 16.509016,43.669785 1.000000,44.000000
	C1.000000,32.979103 1.000000,21.958210 1.390543,10.268950
	C3.345066,10.063938 4.915091,10.947928 6.472091,10.925552
	C21.982624,10.702653 37.491009,10.330214 53.000000,10.000000
z"/>
                    <path fill="#0058C9" opacity="1.000000" stroke="none"
                          d="
M53.000000,9.508951
	C37.491009,10.330214 21.982624,10.702653 6.472091,10.925552
	C4.915091,10.947928 3.345066,10.063938 1.390543,9.800293
	C1.000000,7.020810 1.000000,4.041620 1.000000,1.036699
	C18.333345,1.036699 35.666679,1.036699 53.000000,1.036699
	C53.000000,3.721567 53.000000,6.369735 53.000000,9.508951
z"/>
                    <path fill="#0058C9" opacity="1.000000" stroke="none"
                          d="
M1.000000,44.491051
	C16.509016,43.669785 32.017426,43.297348 47.527981,43.074448
	C49.084957,43.052071 50.654961,43.936062 52.609459,44.199707
	C53.000000,46.979191 53.000000,49.958378 53.000000,53.000000
	C36.469799,53.000000 19.939533,53.000000 3.409267,53.000000
	C2.606121,53.000000 1.802975,53.000000 1.000000,53.000000
	C1.000000,50.278439 1.000000,47.630268 1.000000,44.491051
z"/>
                    <path fill="#0058C9" opacity="1.000000" stroke="none"
                          d="
M53.000000,30.555836
	C44.658150,31.332306 36.317245,31.691639 27.973993,31.983923
	C24.524830,32.104752 22.057953,30.604456 22.102104,26.940731
	C22.146227,23.279446 24.662195,21.838505 28.093319,22.017511
	C36.137314,22.437172 44.177296,22.933872 52.609451,23.199694
	C53.000000,25.370558 53.000000,27.741116 53.000000,30.555836
z"/>
</svg>

            </SvgIcon>
        );
    }

    return (
        <>
            <div className="sideBarContainer" style={sideBarStyle.sidebarContainer}>
                {/*style={{display: 'flex', justifyContent: 'flex-end'}}>*/}

                <IconButton
                    onClick={() => setIsDrawerOpen(true)}
                    size='large'
                    edge='start'
                    color='inherit'
                    aria-label='logo'>
                    <HomeIcon/>
                </IconButton>
                <Drawer
                    anchor='right'
                    open={isDrawerOpen}
                    onClose={() => setIsDrawerOpen(false)}>
                    <Box sx={sideBarStyle.sidebarMenu}>
                        {/*profile card*/}
                        <div className="profileCard" style={sideBarStyle.profileCard}
                        >
                            <div className="profileIcon"

                                 style={sideBarStyle.profileIcon}
                            >
                                <PersonOutlineRoundedIcon color={"primary"} fontSize="large"/>
                            </div>
                            <div className="profileDetail" style={sideBarStyle.profileDetail}
                            >
                                <Typography fontWeight={"bold"} style={{textTransform: 'uppercase'}}>Levi
                                    Ackerman</Typography>
                                <Typography variant={"body2"} fontWeight={"bold"}>9999999999</Typography>
                                <Typography variant={"body2"}>ackerman@gmail.com</Typography>
                            </div>
                            <div className="profileEdit" style={sideBarStyle.profileEdit}>
                                <ModeEditOutlineOutlinedIcon color="primary" fontSize="large"/>

                            </div>
                        </div>
                        <div className="menuActionDetail" style={sideBarStyle.menuAction}>
                            <div className="menuSubAction" style={sideBarStyle.menuSubAction}>
                                <Typography color="#FFF">Shipping Address</Typography>
                            </div>

                            <div className="menuSubAction" style={sideBarStyle.menuSubAction}>
                                <Typography color="#FFF">Claim Your Certificate</Typography>
                            </div>

                            <div className="menuSubAction" style={sideBarStyle.menuSubAction}>
                                <Typography color="#FFF">Terms And Conditions</Typography>
                            </div>
                            <div className="menuSubAction" style={sideBarStyle.menuSubAction}>
                                <Typography color="#FFF">Privacy Policy</Typography>
                            </div>
                            <div className="menuSubAction" style={sideBarStyle.menuSubAction}>
                                <Typography color="#FFF">Contact Us</Typography>
                            </div>
                            <div className="menuSubAction" style={sideBarStyle.menuSubAction}>
                                <Typography color="#FFF">FAQ'S</Typography>
                            </div>
                        </div>


                        <div className="logout" style={{

                            width: "100%",
                            height: "50px",

                            display: 'flex',
                            flexDirection: 'column-reverse',
                            flexGrow: 0.8,

                        }}>
                            <div style={sideBarStyle.buttonContainer}>

                                {

                                    isUserLoggedIn ?
                                        <Button style={sideBarStyle.button}
                                                onClick={() => {
                                                    dispatch(updateUserState(false));
                                                    navigate("/");
                                                }
                                                }
                                        >Logout<LogoutOutlinedIcon fontSize={"medium"}/></Button>
                                        :
                                        <Button style={sideBarStyle.button}
                                                onClick={() => {

                                                    navigate("/register")
                                                }
                                                }
                                        >LogIn<LoginIcon fontSize={"medium"}/></Button>
                                }
                            </div>
                        </div>


                    </Box>
                </Drawer>
            </div>
        </>
    )
}


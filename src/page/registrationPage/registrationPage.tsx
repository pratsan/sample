import {Button, Container, TextField} from "@mui/material";
import rightArrow from "../../assets/Icon.png";
import {useNavigate} from "react-router-dom";

const style = {
    textField: {
        '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
            borderColor: '#0058C9',
            border: '3px solid #0058C9',
            borderRadius: '20px',
        },
        color: '#0058C9'

    }
}

function RegistrationPage() {

    const navigate = useNavigate();
    return (<>
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            color: '#0058C9',
            borderColor: 'transparent',
            justifyContent: 'center'
        }}>
            <h1 style={{fontSize: '30px', width: '800', textAlign: 'center'}}>Registration</h1>
            <div
                style={{display: 'flex', flexDirection: 'column', gap: '15px', color: '#0058C9', alignItems: 'center'}}>
                <TextField fullWidth label="Full Name" id="FullName"

                    sx={style.textField}
                           InputLabelProps={{
                               style: {color: '#0058C9'},
                           }} inputProps={{

                    inputMode: 'text',

                }
                }/>
                <TextField fullWidth label="Email Id" id="EmailId"

                    sx={style.textField}
                           InputLabelProps={{
                               style: {color: '#0058C9'},
                           }} inputProps={{

                    inputMode: 'email',
                    color: '#0058C9'

                }
                }
                />
                <TextField fullWidth label="Mobile Number" id="mobileNumber"

                    sx={style.textField}
                           InputLabelProps={{
                               style: {color: '#0058C9'},
                           }} inputProps={{

                    inputMode: 'numeric',
                    color: '#0058C9'

                }}
                />
            </div>
            <p><input type="checkbox"/><span style={{position: 'relative', left: '10px'}}>I read accept to the Privacy Policy & Terms and Conditions.</span>
            </p>
            <div style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#0058C9',
                borderRadius: '13px',
                // bottom:"3.5%",
                display: 'flex',
                // paddingRight:'20px' ,
                position: "relative",
                width: '100%'


            }}>
                <Button style={{
                    color: 'white',
                    textTransform: 'capitalize',
                    fontWeight: '800',
                    fontSize: '16px',
                    // padding:"20px",
                    padding: '15px',

                }}
                        onClick={() => {
                            navigate("/otp")
                        }
                        }
                >Receive OTP <img width={25} src={rightArrow} style={{position: 'relative', left: '10px'}}/></Button>
            </div>
        </Container>


    </>)
}

export default RegistrationPage;
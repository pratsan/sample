import { Button, Container,  TextField} from "@mui/material";
import rightArrow from "../../assets/Icon.png";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../state/store/store";
import {updateUserState} from "../../state/slice/UserProfileSlice";
import {useNavigate} from "react-router-dom";


const style= {
  otpField: {

      '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
          borderColor: '#0058C9',
          border: '3px solid #0058C9',
          borderRadius: '20px',
      },


      '& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root': {
          color: '#0058C9'
      }
  },
    otpDiv:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0058C9',
        borderRadius:'13px',
        // bottom:"3.5%",
        display:'flex',
        // paddingRight:'20px' ,
        position:"relative",
        width:'100%'
    },
    otpButton:{
        color: 'white',
        textTransform: 'capitalize',
        fontWeight: '800',
        fontSize: '16px',
        // padding:"20px",
        padding: '15px',
    }

}

function OtpPage() {
const dispatch=useDispatch<AppDispatch>();
const navigate=useNavigate();

    return(<>
        <Container sx={{display:'flex',flexDirection:'column',gap :'20px' , color:'#0058C9',borderColor:'orange',justifyContent:'center'}}>
            <h1 style={{fontSize: '30px' ,width:'800',textAlign:'center'}}>Verification</h1>
            <div style={{display:'flex' , flexDirection : 'column', gap:'15px',color:'#0058C9',alignItems:'center'}}>
                <TextField   fullWidth label="Enter OTP" id="enterOtp"
                             sx={style.otpField}

                             inputProps={{

                   inputMode:'numeric',
                    color:'#0058C9'

                }
                } />

            </div>
            <p><span style={{height:'20px',width:'20px', borderRadius:'50%' ,border:'2px solid' ,padding:'1px'}}>29</span><span style={{position:'relative',left:'10px'}}>You haven't received OTP yet? <span style={{textDecoration:'underline'}}>Resend it</span>.</span></p>
            <div style={style.otpDiv}>
                <Button  style={style.otpButton}
                onClick={()=>{
                dispatch(updateUserState(true));
                navigate("/");
                }
                }
                >Enter OTP <img width={25} src={rightArrow} style={{position:'relative',left:'10px'}} /></Button>
            </div>
        </Container>


    </>)
}

export default OtpPage ;
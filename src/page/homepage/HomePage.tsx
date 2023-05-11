import topImage from "../../assets/Upper Design Element.png";
import leftBiscuit from "../../assets/Bite1.png"
import bottomBiscuit from "../../assets/BITE2.png"
import rightBiscuit from "../../assets/Bite3.png"
import {SideBar} from "../../components/sidebar/sidebar";
import MyCarousel from "../../components/carousel/carousel";
import {Container,  Typography} from "@mui/material";
import Cards from "../../components/card/card";
import {useEffect} from "react";
import axios from "axios"
import {Product} from "../../model/Product";
import {getAllProduct, getBannerList} from "../../state/slice/ProductSlice";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../state/store/store";
import {BannerModel} from "../../model/SideBarModel";


export default function HomePage() {
    const dispatch=useDispatch<AppDispatch>();
    function fetAllProduct() {
        axios.get("http://localhost:3000/products")
            .then(response => {
                console.log("respoinse")
                const product: Product[] =  JSON.parse(JSON.stringify(response.data));
                dispatch(getAllProduct(product));
                // setProduct(product);
                return product;
            }).catch(error=>{
                console.log("error occured",error);
            })
    }

    function fetchBanner() {

        axios.get("http://localhost:3000/banner")
            .then( response => {

                const bannerList: BannerModel[] =  JSON.parse(JSON.stringify(response.data));
                dispatch(getBannerList(bannerList));
                // setProduct(product);

            }).catch(error=>{
            console.log("error occured",error);
        })
    }

    useEffect(() => {
fetchBanner();
fetAllProduct();


    }, [])
    return(
        <div>
            <img src={topImage} style={{height: '32vh', width: '48vh', zIndex: '-2', position: "absolute"}}/>
            <div style={{position: 'relative', top: '4em'}}>
                <SideBar/>

                <MyCarousel/>
                <div style={{position:'relative',bottom:'62px'}}>
                <img src={leftBiscuit} style={{height: '14vh', width: '14vh', zIndex: '-2', position: "absolute" ,marginBottom:'5em'}}/>
                </div>

                <div style={{position:'relative',right:"20px" ,top:'30em'}}>
                    <img src={bottomBiscuit} style={{height: '14vh', width: '14vh', zIndex: '-2', position: "absolute" ,marginBottom:'5em'}}/>
                </div>
                <div style={{position:'relative',display:'flex',flexDirection:'row-reverse',top:'15em'}}>
                    <img src={rightBiscuit} style={{height: '8vh', width: '8vh', zIndex: '-2', position: "absolute" ,marginBottom:'5em'}}/>
                </div>

                <Container sx={{display:'flex',justifyContent:'center',marginTop:"30px",marginBottom:'30px'}}>

                    <Typography component="div" variant="h4" fontSize={25} fontWeight={700} color={"#0058C9"}>
                         <p>Shop to save &#8377;20 coin!</p>
                    </Typography>
                </Container>
                <Container>
                    <Cards/>
                </Container>

            </div>
        </div>
    )
}
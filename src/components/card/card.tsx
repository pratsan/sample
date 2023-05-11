import {Button, Card, Paper, Typography} from "@mui/material";

import rightArrow from '../../assets/Icon.png'
import {useEffect} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../state/store/store";
import {getAllProduct} from "../../state/slice/ProductSlice";
import {Product} from "../../model/Product";

export default function Cards() {

    const dispatch = useDispatch<AppDispatch>();
    const productList: Product[] = useSelector((state: RootState) => state.product.productList)
    useEffect(() => {

        axios.get("http://localhost:3000/products", {
            headers: {}
        })
            .then(response => {
                console.log("respoinse")
                const product: Product[] = JSON.parse(JSON.stringify(response.data));
                dispatch(getAllProduct(product));
                // setProduct(product);
                return product;
            }).catch(error => {
            console.log("error occured", error);
        })

    }, [])
    return (
        productList != undefined ? <DisplayProduct></DisplayProduct> : <span></span>)


    function DisplayProduct() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                {
                    productList?.map((data) => {

                        return (
                            <Card sx={{
                                display: "flex",
                                width: '100%',
                                // width:"1043px",
                                height: "180px",
                                backgroundColor: '#FAFAF5',
                                flexDirection: 'row',
                                borderRadius: 5,
                                border: 'solid',
                                borderWidth: 3,
                                borderColor: '#0058C9',


                            }}>

                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: "45%",
                                    backgroundColor: '#0058C9'


                                }}>


                                    <img className="images" src={data.image} style={{
                                        height: "50%",

                                    }}


                                    />
                                </div>


                                <Paper sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: "100%",
                                    backgroundColor: '#FAFAF5',
                                    justifyContent: 'flex-start',
                                    boxShadow: 'none',
                                    position: 'relative',
                                    left: '15px'
                                }}>
                                    <Typography component="div" fontSize={21} fontWeight={700} fontFamily={"system-ui"}>
                                        {data.productType}
                                    </Typography>

                                    <Typography component="div" variant="h2" fontWeight={700} fontSize={35}
                                                color={"red"}>
                            <span style={{
                                fontSize: '15px',
                                fontWeight: '400',
                                position: 'relative',
                                bottom: '9px',
                                left: '10px'
                            }}><sup>&#8377;</sup></span> {data.discountPrice}
                                    </Typography>

                                    <Typography component="div" variant="h4" fontSize={18} sx={{opacity: '60%'}}>
                            <span style={{
                                fontSize: '11px',
                                position: 'relative',
                                bottom: '1px',
                                left: '5px'
                            }}><sup>&#8377;</sup></span> <span
                                        style={{textDecoration: 'line-through'}}>{data.originalPrice}</span>
                                    </Typography>

                                    <Paper sx={{
                                        display: 'grid',

                                        gridTemplateRows: "1fr 1fr",
                                        justifyItems: 'flex-start',

                                        backgroundColor: 'transparent', boxShadow: 'none'
                                    }
                                    }>
                                        <Paper sx={{
                                            display: 'grid',
                                            gridTemplateColumns: "1fr 1fr",
                                            gridTemplateRows: "1fr ",
                                            justifyItems: 'center',

                                            backgroundColor: 'transparent', boxShadow: 'none'
                                        }}>
                                            <Typography component="text" fontSize={12} fontWeight={400}
                                                        sx={{opacity: "60%", fontStretch: "expanded"}}>
                                                Offer starts in
                                            </Typography>

                                            <Typography component="div" fontSize={14} fontWeight={800} color={"red"}>
                                                15:00:00
                                            </Typography>


                                        </Paper>
                                        <div style={{
                                            display: 'grid',

                                            justifyItems: 'center',
                                            // alignItems: 'center',
                                            backgroundColor: '#000',
                                            borderRadius: '10px',
                                            // bottom:"3.5%",


                                        }}>
                                            {data.isActive ?
                                                <Button style={{
                                                    color: 'white',
                                                    textTransform: 'uppercase',
                                                    fontWeight: '400',
                                                    fontSize: '14px',
                                                }}>BUY NOW &nbsp; <img width={14} src={rightArrow}/></Button>
                                                : <Typography variant={"h5"} color={"red"}> Sold Out</Typography>
                                            }
                                        </div>
                                    </Paper>
                                </Paper>


                            </Card>
                        )
                    })
                }

            </div>
        )
    }
}

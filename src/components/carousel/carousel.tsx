
import Carousel from 'react-material-ui-carousel'
import {CardMedia, Card,} from '@mui/material'

import {BannerModel} from "../../model/SideBarModel";
import {useSelector} from "react-redux";
import {RootState} from "../../state/store/store";

export default function MyCarousel()
{
    const bannerList:BannerModel[]=useSelector((state:RootState)=>state.product.bannerList)


    return (

        <Carousel sx={{boxShadow:'none',}}>
            {
                bannerList.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>

    )
}

function Item(props:any)
{
    console.log(props.item)
    return (
        <Card sx={{ minWidth: "100%"  ,boxShadow:'none',background:'transparent'}}>
        <CardMedia
            component="img"
            height="100%"
            image={props.item.image}

        />
        </Card>
    )
}
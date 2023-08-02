import React, { createRef } from "react";
import "../CSS/AchievementsAndInterests.css"
import { Grid, Paper } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ArrowBackIosNew from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll : 1,
    autoplaySpeed: 3000,
    arrows: false,
    adaptiveHeight: true,
    fade: true,
    cssEase: 'linear', 
    centerMode: true,
}

export default function Achievements()
{
    const theme = useTheme();
    const lgmatches = useMediaQuery('(max-width:1000px)')
    
    const lg900matches = useMediaQuery('(max-width:900px)')
    
    const mdmatches = useMediaQuery('(max-width:750px)')
    
    const smmatches = useMediaQuery(theme.breakpoints.down('sm'))
   
    const xsmatches = useMediaQuery('(max-width:490px)')
  
    const xxsmatches = useMediaQuery('(max-width:400px)')
 
    const xxs310matches = useMediaQuery('(max-width:310px)')


    var slider = createRef()

    const handleForward=()=>{
        slider.current.slickNext()
    }
    const handleBack=()=>{
        slider.current.slickPrev()
    }

    return(
        <Grid id="achievements" container spacing={2} style={{marginTop:0}}>
            {
                mdmatches
                ?
                smmatches
                ?
                xxsmatches
                ?
                xxs310matches
                ?
                <Grid item xs={12}>
                    <img src="achievbg6.jpg" style={{width:"100%", height:'60vh', position:'relative'}} />
                </Grid>
                :
                <Grid item xs={12}>
                    <img src="achievbg5.jpg" style={{width:"100%", height:'70vh', position:'relative'}} />
                </Grid>
                :
                <Grid item xs={12}>
                    <img src="achievbg5.jpg" style={{width:"100%", height:'80vh', position:'relative'}} />
                </Grid>
                :
                <Grid item xs={12}>
                    <img src="achievbg4.jpg" style={{width:"100%", height:'85vh', position:'relative'}} />
                </Grid>
                :
                <Grid item xs={12}>
                    <img src="achievbg3.jpg" style={{width:"100%", height:'99.4vh', position:'relative'}} />
                </Grid>
            }

            <Grid item xs={12} style={{position:'absolute',width:"100%"}}>
                {
                    lgmatches
                    ?
                    lg900matches
                    ?
                    mdmatches
                    ?
                    smmatches
                    ?
                    xsmatches
                    ?
                    xxsmatches
                    ?
                    xxs310matches
                    ?
                    <Grid item xs={12} style={{height:'60vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
                        {/* <ArrowBackIosNew onClick={()=>handleBack()} style={{fontSize:"5rem", position:'absolute', left:"5%", cursor:'pointer'}} /> */}
                        <Grid item xs={13}>
                            <Slider ref={slider} {...settings}>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="guvi.png" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="accenture.jpg" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="aws.jpg" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="cisco.jpg" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="nullclass.jpg" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="helpsocialwelfare.jpg" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="helpsocialwelfare2.jpg" style={{width:"100%"}}></img>
                                </Paper>
                            </Slider>
                        </Grid>
                        {/* <ArrowForwardIosIcon onClick={()=>handleForward()} style={{fontSize:"5rem", color:'', position:'absolute', right:"4%", cursor:'pointer'}} /> */}
                    </Grid>
                    :
                    <Grid item xs={12} style={{height:'70vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
                        {/* <ArrowBackIosNew onClick={()=>handleBack()} style={{fontSize:"5rem", position:'absolute', left:"5%", cursor:'pointer'}} /> */}
                        <Grid item xs={13}>
                            <Slider ref={slider} {...settings}>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="guvi.png" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="accenture.jpg" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="aws.jpg" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="cisco.jpg" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="nullclass.jpg" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="helpsocialwelfare.jpg" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="helpsocialwelfare2.jpg" style={{width:"100%"}}></img>
                                </Paper>
                            </Slider>
                        </Grid>
                        {/* <ArrowForwardIosIcon onClick={()=>handleForward()} style={{fontSize:"5rem", color:'', position:'absolute', right:"4%", cursor:'pointer'}} /> */}
                    </Grid>
                    :
                    <Grid item xs={12} style={{height:'85vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
                        {/* <ArrowBackIosNew onClick={()=>handleBack()} style={{fontSize:"5rem", position:'absolute', left:"5%", cursor:'pointer'}} /> */}
                        <Grid item xs={13}>
                            <Slider ref={slider} {...settings}>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="guvi.png" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="accenture.jpg" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="aws.jpg" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="cisco.jpg" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="nullclass.jpg" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="helpsocialwelfare.jpg" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="helpsocialwelfare2.jpg" style={{width:"100%"}}></img>
                                </Paper>
                            </Slider>
                        </Grid>
                        {/* <ArrowForwardIosIcon onClick={()=>handleForward()} style={{fontSize:"5rem", color:'', position:'absolute', right:"4%", cursor:'pointer'}} /> */}
                    </Grid>
                    :
                    <Grid item xs={12} style={{height:'80vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
                        {/* <ArrowBackIosNew onClick={()=>handleBack()} style={{fontSize:"5rem", position:'absolute', left:"5%", cursor:'pointer'}} /> */}
                        <Grid item xs={11}>
                            <Slider ref={slider} {...settings}>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="guvi.png" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="accenture.jpg" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="aws.jpg" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="cisco.jpg" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="nullclass.jpg" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="helpsocialwelfare.jpg" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="helpsocialwelfare2.jpg" style={{width:"100%"}}></img>
                                </Paper>
                            </Slider>
                        </Grid>
                        {/* <ArrowForwardIosIcon onClick={()=>handleForward()} style={{fontSize:"5rem", color:'', position:'absolute', right:"4%", cursor:'pointer'}} /> */}
                    </Grid>
                    :
                    <Grid item xs={12} style={{height:'85vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
                        {/* <ArrowBackIosNew onClick={()=>handleBack()} style={{fontSize:"5rem", position:'absolute', left:"5%", cursor:'pointer'}} /> */}
                        <Grid item xs={10}>
                            <Slider ref={slider} {...settings}>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="guvi.png" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="accenture.jpg" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="aws.jpg" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="cisco.jpg" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="nullclass.jpg" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="helpsocialwelfare.jpg" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="helpsocialwelfare2.jpg" style={{width:"100%"}}></img>
                                </Paper>
                            </Slider>
                        </Grid>
                        {/* <ArrowForwardIosIcon onClick={()=>handleForward()} style={{fontSize:"5rem", color:'', position:'absolute', right:"4%", cursor:'pointer'}} /> */}
                    </Grid>
                    :
                    <Grid item xs={12} style={{height:'99.4vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
                        {/* <ArrowBackIosNew onClick={()=>handleBack()} style={{fontSize:"5rem", position:'absolute', left:"5%", cursor:'pointer'}} /> */}
                        <Grid item xs={9}>
                            <Slider ref={slider} {...settings}>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="guvi.png" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="accenture.jpg" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="aws.jpg" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="cisco.jpg" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="nullclass.jpg" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="helpsocialwelfare.jpg" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="helpsocialwelfare2.jpg" style={{width:"100%"}}></img>
                                </Paper>
                            </Slider>
                        </Grid>
                        {/* <ArrowForwardIosIcon onClick={()=>handleForward()} style={{fontSize:"5rem", color:'', position:'absolute', right:"4%", cursor:'pointer'}} /> */}
                    </Grid>
                    :
                    <Grid item xs={12} style={{height:'99.4vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <ArrowBackIosNew onClick={()=>handleBack()} style={{fontSize:"5rem", position:'absolute', left:"5%", cursor:'pointer'}} />
                        <Grid item xs={8}>
                            <Slider ref={slider} {...settings}>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="guvi.png" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="accenture.jpg" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="aws.jpg" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="cisco.jpg" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="nullclass.jpg" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="helpsocialwelfare.jpg" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="helpsocialwelfare2.jpg" style={{width:"100%"}}></img>
                                </Paper>
                            </Slider>
                        </Grid>
                        <ArrowForwardIosIcon onClick={()=>handleForward()} style={{fontSize:"5rem", color:'', position:'absolute', right:"4%", cursor:'pointer'}} />
                    </Grid>
                    :
                    <Grid item xs={12} style={{height:'99.4vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <ArrowBackIosNew onClick={()=>handleBack()} style={{fontSize:"5rem", position:'absolute', left:"5%", cursor:'pointer'}} />
                        <Grid item xs={6.5}>
                            <Slider ref={slider} {...settings}>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="guvi.png" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="accenture.jpg" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="aws.jpg" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="cisco.jpg" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="nullclass.jpg" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="helpsocialwelfare.jpg" style={{width:"100%"}}></img>
                                </Paper>
                                <Paper elevation={20} style={{display:'flex', justifyContent:'center'}}>
                                    <img src="helpsocialwelfare2.jpg" style={{width:"100%"}}></img>
                                </Paper>
                            </Slider>
                        </Grid>
                        <ArrowForwardIosIcon onClick={()=>handleForward()} style={{fontSize:"5rem", color:'', position:'absolute', right:"4%", cursor:'pointer'}} />
                    </Grid>
                }
            </Grid>
        </Grid>
    )
}
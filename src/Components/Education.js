import React from "react";
import "../CSS/Education.css"
import { Divider, Grid } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';

export default function Education(props){

    return(
        <Grid id="education" item xs={12} style={{/* height:'93vh', marginTop:'4rem' */ height: '100vh'}}>
            <Grid item xs={12}>
                <img src="edubg.png" width="86.1%" height="97.3%" style={{position:'absolute'}}/>
            </Grid>
            <Grid item xs={12} className="divi" style={{position:'relative'}}>
                <Divider />
            </Grid>
            <Grid item xs={12} className="educationbox" style={{position:'relative'}}>
                <div className="heading">MY EDUCATION</div>
            </Grid>
            <Grid item xs={12} className="divi" style={{position:'relative'}}>
                <Divider />
            </Grid>
            
            <Grid item xs={12} className="edudetail" style={{position:'relative'}}>
                <Grid item xs={4} className="detail1">
                    <Grid item xs={12} className="row">
                        <div style={{fontSize:17, fontWeight:500, /* color:'#636e72' */ color:'#ffc5c5'}}>High School Examination</div>
                        <div className="year">2017</div>
                    </Grid>
                    <div style={{padding:3, fontSize:24, fontWeight:700, color:'#fff'}}>Kiddy's Corner Public School</div>
                    <Grid item xs={12} className="row">
                        <div style={{padding:3, fontSize:14, /* color:'#7f8c8d', */ color:'#e84393', fontWeight:700}}> Central Board of Secondary Education </div>
                        <div style={{padding:3}}>2016-17</div>
                    </Grid>
                    <Grid item xs={12} style={{display:'flex', justifyContent:'end'}}>
                        <div style={{padding:3, fontSize:15, fontWeight:600}}>8.4 CGPA</div>
                    </Grid>
                    <Grid item xs={12} style={{display:'flex', flexDirection:'row', alignItems:"center", padding:5}}>
                        <div>
                            <SchoolIcon style={{backgroundColor:'#e84393', color:'#fff', borderRadius:100, padding:5, fontSize:20}} />
                        </div>
                        <div>
                            <Divider style={{ backgroundColor:'white', padding:1.5, width:'66.5vw'}} />
                        </div>
                        <div>
                            <Divider style={{ backgroundColor:'lightgrey', padding:1.5, width:'27.5vw'}} />
                        </div>
                    </Grid>
                </Grid>
                <Grid item xs={4} className="detail2">
                    <Grid item xs={12} className="row">
                        <div style={{fontSize:17, fontWeight:500, /* color:'#636e72' */ color:'#ffc5c5'}}>Higher Secondary Examination</div>
                        <div className="year">2019</div>
                    </Grid>
                    <div style={{padding:3, fontSize:24, fontWeight:700, color:'#fff'}}>Kiddy's Corner Higher Secondary School</div>
                    <Grid item xs={12} className="row">
                        <div style={{padding:3, fontSize:14, /* color:'#7f8c8d', */ color:'#e84393', fontWeight:700}}> Central Board of Secondary Education </div>
                        <div style={{padding:3}}>2018-19</div>
                    </Grid>
                    <Grid item xs={12} style={{display:'flex', justifyContent:'end'}}>
                        <div style={{padding:3, fontSize:15, fontWeight:600}}>70.0 %</div>
                    </Grid>
                    <Grid item xs={12} style={{display:'flex', flexDirection:'row', alignItems:"center", padding:5}}>
                        <div>
                            <SchoolIcon style={{backgroundColor:'#e84393', color:'#fff', borderRadius:100, padding:5, fontSize:20}} />
                        </div>
                        <div>
                            <Divider style={{ backgroundColor:'white', padding:1.5, width:'56.5vw'}} />
                        </div>
                        <div>
                            <Divider style={{ backgroundColor:'lightgrey', padding:1.5, width:'37.5vw'}} />
                        </div>
                    </Grid>
                </Grid>
                <Grid item xs={4} className="detail3">
                    <Grid item xs={12} className="row">
                        <div style={{fontSize:17, fontWeight:500, /* color:'#636e72' */ color:'#ffc5c5'}}>Bachelor of Technology</div>
                        <div className="year" style={{fontSize:15}}>Present</div>
                    </Grid>
                    <div style={{padding:3, fontSize:24, fontWeight:700, color:'#fff'}}>Rustamji Institute of Technology</div>
                    <Grid item xs={12} className="row">
                        <div style={{padding:3, fontSize:15, /* color:'#7f8c8d', */ color:'#e84393', fontWeight:700}}> Electronics and Communication </div>
                        <div style={{padding:3}}>2019-23</div>
                    </Grid>
                    <Grid item xs={12} style={{display:'flex', justifyContent:'end'}}>
                        <div style={{padding:3, fontSize:15, fontWeight:600}}>8.41 CGPA</div>
                    </Grid>
                    <Grid item xs={12} style={{display:'flex', justifyContent:'end'}}>
                        <div style={{fontSize:14}}>(Till 5th Sem)</div>
                    </Grid>
                    <Grid item xs={12} style={{display:'flex', flexDirection:'row', alignItems:"center", padding:5}}>
                        <div>
                            <SchoolIcon style={{backgroundColor:'#e84393', color:'#fff', borderRadius:100, padding:5, fontSize:20}} />
                        </div>
                        <div>
                            <Divider style={{ backgroundColor:'lightgrey', padding:1.5, width:'9vw'}} />
                        </div>
                        <div>
                            <Divider style={{ backgroundColor:'white', padding:1.5, width:'35vw'}} />
                        </div>
                        <div>
                            <Divider style={{ backgroundColor:'lightgrey', padding:1.5, width:'49.5vw'}} />
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
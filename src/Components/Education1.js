import React from "react";
import "../CSS/Education1.css"
import { Grid, Divider } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Education1()
{
    const theme = useTheme();
    const mdmatches = useMediaQuery(theme.breakpoints.down('md'))
    
    const md800matches = useMediaQuery('(max-width:800px)');
   
    const sm650matches = useMediaQuery('(max-width:650px)');
    
    const smmatches = useMediaQuery(theme.breakpoints.down('sm'));
    
    const sm500matches = useMediaQuery('(max-width:500px)');
    
    const xsmatches = useMediaQuery('(max-width:376px)');
    
    const xxsmatches = useMediaQuery('(max-width:315px)');
    

    return(
        <Grid id="education" container spacing={2}>
            <Grid item xs={12} className="mid" style={{marginTop:30}}>
                <Grid item xs={12} style={{marginTop:25}}>
                    {
                        mdmatches
                        ?
                        md800matches
                        ?
                        sm650matches
                        ?
                        smmatches
                        ?
                        sm500matches
                        ?
                        xsmatches
                        ?
                        xxsmatches
                        ?
                        <>
                            <Grid item xs={12} className="xxsedu">MY EDUCATION</Grid>
                            <Grid item xs={12} className="xxstit">Knowledge Has A Beginning But No End.</Grid>

                            <Grid item xs={12} style={{margin:'3% 0% 2% 0%', display:'flex', flexDirection:'row'}}>
                                <Grid item xs={5} style={{margin:20}}>
                                    <Grid item xs={12} className="xxsxth">High School Examination</Grid>
                                    <Grid item xs={12} className="xxssub">2016-17</Grid>
                                </Grid>

                                <Grid item xs={1} style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                                    <SchoolIcon style={{backgroundColor:'#e84393', color:'#fff', borderRadius:100, padding:8, fontSize:26}} />
                                    <Divider style={{transform:'rotate(90deg)', height:4, width:'305%' , backgroundColor:'#fff', margin:'142% 0% 0% 0%'}}/>
                                </Grid>

                                <Grid item xs={8} style={{margin:20}}>
                                    <Grid item xs={12} className="xxsschool">Kiddy's Corner Public School</Grid>
                                    <Grid item xs={12} className="xxscntnt">Completed my 10th Standard through CBSE Board at Kiddy's Corner Public School, Gwalior - Madhya Pradesh.</Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} style={{display:'flex', flexDirection:'row'}}>
                                <Grid item xs={5} style={{margin:20}}>
                                    <Grid item xs={12} className="xxsxth">Higher Secondary Examination</Grid>
                                    <Grid item xs={12} className="xxssub">2018-19</Grid>
                                </Grid>

                                <Grid item xs={1} style={{display:'flex', alignItems:'center', height:'25vh', flexDirection:'column'}}>
                                        <SchoolIcon style={{backgroundColor:'#e84393', color:'#fff', borderRadius:100, padding:8, fontSize:26}} />
                                        <Divider style={{transform:'rotate(90deg)', height:4, width:'340%', backgroundColor:'#fff', margin:'158% 0% 0% 0%'}}/>
                                </Grid>

                                <Grid item xs={8} style={{margin:20}}>
                                    <Grid item xs={12} className="xxsschool">Kiddy's Corner Higher Secondary School</Grid>
                                    <Grid item xs={12} className="xxscntnt">Completed my 12th Standard through CBSE Board at Kiddy's Corner Higher Secondary School, Gwalior - Madhya Pradesh.</Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} style={{display:'flex', flexDirection:'row'}}>
                                <Grid item xs={5} style={{margin:20}}>
                                    <Grid item xs={12} className="xxsxth">Bachelor Of Technology</Grid>
                                    <Grid item xs={12} className="xxssub">2019-23(Present)</Grid>
                                </Grid>

                                <Grid item xs={1} style={{display:'flex', alignItems:'center', height:'25vh', flexDirection:'column'}}>
                                        <SchoolIcon style={{backgroundColor:'#e84393', color:'#fff', borderRadius:100, padding:8, fontSize:26}} />
                                        <Divider style={{transform:'rotate(90deg)', height:4, width:'500%', backgroundColor:'#fff', margin:'240% 0% 0% 0%'}}/>
                                </Grid>

                                <Grid item xs={8} style={{margin:20}}>
                                    <Grid item xs={12} className="xxsschool">Rustamji Institute Of Technology</Grid>
                                    <Grid item xs={12} className="xxscntnt">Currently pursuing B.Tech. Degree specialization in Electronics And Communication (ECE) at Rustamji Institute Of Technology, Gwalior - Madhya Pradesh. BSF Academy Tekanpur Gwalior - RJIT.</Grid>
                                </Grid>
                            </Grid>
                        </>
                        :
                        <>
                            <Grid item xs={12} className="xsedu">MY EDUCATION</Grid>
                            <Grid item xs={12} className="xstit">Knowledge Has A Beginning But No End.</Grid>

                            <Grid item xs={12} style={{margin:'3% 0% 2% 0%', display:'flex', flexDirection:'row'}}>
                                <Grid item xs={5} style={{margin:23}}>
                                    <Grid item xs={12} className="xsxth">High School Examination</Grid>
                                    <Grid item xs={12} className="xssub">2016-17</Grid>
                                </Grid>

                                <Grid item xs={1} style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                                    <SchoolIcon style={{backgroundColor:'#e84393', color:'#fff', borderRadius:100, padding:8, fontSize:26}} />
                                    <Divider style={{transform:'rotate(90deg)', height:4, width:'260%' , backgroundColor:'#fff', margin:'120% 0% 0% 0%'}}/>
                                </Grid>

                                <Grid item xs={8} style={{margin:23}}>
                                    <Grid item xs={12} className="xsschool">Kiddy's Corner Public School</Grid>
                                    <Grid item xs={12} className="xscntnt">Completed my 10th Standard through CBSE Board at Kiddy's Corner Public School, Gwalior - Madhya Pradesh.</Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} style={{display:'flex', flexDirection:'row'}}>
                                <Grid item xs={5} style={{margin:23}}>
                                    <Grid item xs={12} className="xsxth">Higher Secondary Examination</Grid>
                                    <Grid item xs={12} className="xssub">2018-19</Grid>
                                </Grid>

                                <Grid item xs={1} style={{display:'flex', alignItems:'center', height:'25vh', flexDirection:'column'}}>
                                        <SchoolIcon style={{backgroundColor:'#e84393', color:'#fff', borderRadius:100, padding:8, fontSize:26}} />
                                        <Divider style={{transform:'rotate(90deg)', height:4, width:'300%', backgroundColor:'#fff', margin:'142% 0% 0% 0%'}}/>
                                </Grid>

                                <Grid item xs={8} style={{margin:23}}>
                                    <Grid item xs={12} className="xsschool">Kiddy's Corner Higher Secondary School</Grid>
                                    <Grid item xs={12} className="xscntnt">Completed my 12th Standard through CBSE Board at Kiddy's Corner Higher Secondary School, Gwalior - Madhya Pradesh.</Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} style={{display:'flex', flexDirection:'row'}}>
                                <Grid item xs={5} style={{margin:23}}>
                                    <Grid item xs={12} className="xsxth">Bachelor Of Technology</Grid>
                                    <Grid item xs={12} className="xssub">2019-23(Present)</Grid>
                                </Grid>

                                <Grid item xs={1} style={{display:'flex', alignItems:'center', height:'25vh', flexDirection:'column'}}>
                                        <SchoolIcon style={{backgroundColor:'#e84393', color:'#fff', borderRadius:100, padding:8, fontSize:26}} />
                                        <Divider style={{transform:'rotate(90deg)', height:4, width:'415%', backgroundColor:'#fff', margin:'200% 0% 0% 0%'}}/>
                                </Grid>

                                <Grid item xs={8} style={{margin:23}}>
                                    <Grid item xs={12} className="xsschool">Rustamji Institute Of Technology</Grid>
                                    <Grid item xs={12} className="xscntnt">Currently pursuing B.Tech. Degree specialization in Electronics And Communication (ECE) at Rustamji Institute Of Technology, Gwalior - Madhya Pradesh. BSF Academy Tekanpur Gwalior - RJIT.</Grid>
                                </Grid>
                            </Grid>
                        </>
                        :
                        <>
                            <Grid item xs={12} className="smedu">MY EDUCATION</Grid>
                            <Grid item xs={12} className="smtit">Knowledge Has A Beginning But No End.</Grid>

                            <Grid item xs={12} style={{margin:'3% 0% 2% 0%', display:'flex', flexDirection:'row'}}>
                                <Grid item xs={5} style={{margin:35}}>
                                    <Grid item xs={12} className="smxth">High School Examination</Grid>
                                    <Grid item xs={12} className="smsub">2016-17</Grid>
                                </Grid>

                                <Grid item xs={1} style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                                    <SchoolIcon style={{backgroundColor:'#e84393', color:'#fff', borderRadius:100, padding:8, fontSize:26}} />
                                    <Divider style={{transform:'rotate(90deg)', height:4, width:'380%' , backgroundColor:'#fff', margin:'180% 0% 0% 0%'}}/>
                                </Grid>

                                <Grid item xs={8} style={{margin:35}}>
                                    <Grid item xs={12} className="smschool">Kiddy's Corner Public School</Grid>
                                    <Grid item xs={12} className="smcntnt">Completed my 10th Standard through CBSE Board at Kiddy's Corner Public School, Gwalior - Madhya Pradesh.</Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} style={{display:'flex', flexDirection:'row'}}>
                                <Grid item xs={5} style={{margin:35}}>
                                    <Grid item xs={12} className="smxth">Higher Secondary Examination</Grid>
                                    <Grid item xs={12} className="smsub">2018-19</Grid>
                                </Grid>

                                <Grid item xs={1} style={{display:'flex', alignItems:'center', height:'25vh', flexDirection:'column'}}>
                                        <SchoolIcon style={{backgroundColor:'#e84393', color:'#fff', borderRadius:100, padding:8, fontSize:26}} />
                                        <Divider style={{transform:'rotate(90deg)', height:4, width:'370%', backgroundColor:'#fff', margin:'180% 0% 0% 0%'}}/>
                                </Grid>

                                <Grid item xs={8} style={{margin:35}}>
                                    <Grid item xs={12} className="smschool">Kiddy's Corner Higher Secondary School</Grid>
                                    <Grid item xs={12} className="smcntnt">Completed my 12th Standard through CBSE Board at Kiddy's Corner Higher Secondary School, Gwalior - Madhya Pradesh.</Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} style={{display:'flex', flexDirection:'row'}}>
                                <Grid item xs={5} style={{margin:35}}>
                                    <Grid item xs={12} className="smxth">Bachelor Of Technology</Grid>
                                    <Grid item xs={12} className="smsub">2019-23(Present)</Grid>
                                </Grid>

                                <Grid item xs={1} style={{display:'flex', alignItems:'center', height:'25vh', flexDirection:'column'}}>
                                        <SchoolIcon style={{backgroundColor:'#e84393', color:'#fff', borderRadius:100, padding:8, fontSize:26}} />
                                        <Divider style={{transform:'rotate(90deg)', height:4, width:'415%', backgroundColor:'#fff', margin:'200% 0% 0% 0%'}}/>
                                </Grid>

                                <Grid item xs={8} style={{margin:35}}>
                                    <Grid item xs={12} className="smschool">Rustamji Institute Of Technology</Grid>
                                    <Grid item xs={12} className="smcntnt">Currently pursuing B.Tech. Degree specialization in Electronics And Communication (ECE) at Rustamji Institute Of Technology, Gwalior - Madhya Pradesh. BSF Academy Tekanpur Gwalior - RJIT.</Grid>
                                </Grid>
                            </Grid>
                        </>
                        :
                        <>
                            <Grid item xs={12} className="smedu">MY EDUCATION</Grid>
                            <Grid item xs={12} className="smtit">Knowledge Has A Beginning But No End.</Grid>

                            <Grid item xs={12} style={{margin:'3% 0% 2% 0%', display:'flex', flexDirection:'row'}}>
                                <Grid item xs={5} style={{margin:35}}>
                                    <Grid item xs={12} className="smxth">High School Examination</Grid>
                                    <Grid item xs={12} className="smsub">2016-17</Grid>
                                </Grid>

                                <Grid item xs={1} style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                                    <SchoolIcon style={{backgroundColor:'#e84393', color:'#fff', borderRadius:100, padding:8, fontSize:26}} />
                                    <Divider style={{transform:'rotate(90deg)', height:4, width:'250%' , backgroundColor:'#fff', margin:'120% 0% 0% 0%'}}/>
                                </Grid>

                                <Grid item xs={6} style={{margin:35}}>
                                    <Grid item xs={12} className="smschool">Kiddy's Corner Public School</Grid>
                                    <Grid item xs={12} className="smcntnt">Completed my 10th Standard through CBSE Board at Kiddy's Corner Public School, Gwalior - Madhya Pradesh.</Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} style={{display:'flex', flexDirection:'row'}}>
                                <Grid item xs={5} style={{margin:35}}>
                                    <Grid item xs={12} className="smxth">Higher Secondary Examination</Grid>
                                    <Grid item xs={12} className="smsub">2018-19</Grid>
                                </Grid>

                                <Grid item xs={1} style={{display:'flex', alignItems:'center', height:'25vh', flexDirection:'column'}}>
                                        <SchoolIcon style={{backgroundColor:'#e84393', color:'#fff', borderRadius:100, padding:8, fontSize:26}} />
                                        <Divider style={{transform:'rotate(90deg)', height:4, width:'250%', backgroundColor:'#fff', margin:'120% 0% 0% 0%'}}/>
                                </Grid>

                                <Grid item xs={6} style={{margin:35}}>
                                    <Grid item xs={12} className="smschool">Kiddy's Corner Higher Secondary School</Grid>
                                    <Grid item xs={12} className="smcntnt">Completed my 12th Standard through CBSE Board at Kiddy's Corner Higher Secondary School, Gwalior - Madhya Pradesh.</Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} style={{display:'flex', flexDirection:'row'}}>
                                <Grid item xs={5} style={{margin:35}}>
                                    <Grid item xs={12} className="smxth">Bachelor Of Technology</Grid>
                                    <Grid item xs={12} className="smsub">2019-23(Present)</Grid>
                                </Grid>

                                <Grid item xs={1} style={{display:'flex', alignItems:'center', height:'25vh', flexDirection:'column'}}>
                                        <SchoolIcon style={{backgroundColor:'#e84393', color:'#fff', borderRadius:100, padding:8, fontSize:26}} />
                                        <Divider style={{transform:'rotate(90deg)', height:4, width:'300%', backgroundColor:'#fff', margin:'145% 0% 0% 0%'}}/>
                                </Grid>

                                <Grid item xs={6} style={{margin:35}}>
                                    <Grid item xs={12} className="smschool">Rustamji Institute Of Technology</Grid>
                                    <Grid item xs={12} className="smcntnt">Currently pursuing B.Tech. Degree specialization in Electronics And Communication (ECE) at Rustamji Institute Of Technology, Gwalior - Madhya Pradesh. BSF Academy Tekanpur Gwalior - RJIT.</Grid>
                                </Grid>
                            </Grid>
                        </>
                        :
                        <>
                            <Grid item xs={12} className="m8edu">MY EDUCATION</Grid>
                            <Grid item xs={12} className="m8tit">Knowledge Has A Beginning But No End.</Grid>

                            <Grid item xs={12} style={{margin:'3% 0% 2% 0%', display:'flex', flexDirection:'row'}}>
                                <Grid item xs={5} style={{margin:35}}>
                                    <Grid item xs={12} className="m8xth">High School Examination</Grid>
                                    <Grid item xs={12} className="m6sub">2016-17</Grid>
                                </Grid>

                                <Grid item xs={1} style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                                    <SchoolIcon style={{backgroundColor:'#e84393', color:'#fff', borderRadius:100, padding:9, fontSize:28}} />
                                    <Divider style={{transform:'rotate(90deg)', height:4, width:'250%' , backgroundColor:'#fff', margin:'120% 0% 0% 0%'}}/>
                                </Grid>

                                <Grid item xs={6} style={{margin:35}}>
                                    <Grid item xs={12} className="m8school">Kiddy's Corner Public School</Grid>
                                    <Grid item xs={12} className="m6cntnt">Completed my 10th Standard through CBSE Board at Kiddy's Corner Public School, Gwalior - Madhya Pradesh.</Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} style={{display:'flex', flexDirection:'row'}}>
                                <Grid item xs={5} style={{margin:35}}>
                                    <Grid item xs={12} className="m8xth">Higher Secondary Examination</Grid>
                                    <Grid item xs={12} className="m6sub">2018-19</Grid>
                                </Grid>

                                <Grid item xs={1} style={{display:'flex', alignItems:'center', height:'25vh', flexDirection:'column'}}>
                                        <SchoolIcon style={{backgroundColor:'#e84393', color:'#fff', borderRadius:100, padding:9, fontSize:28}} />
                                        <Divider style={{transform:'rotate(90deg)', height:4, width:'250%', backgroundColor:'#fff', margin:'120% 0% 0% 0%'}}/>
                                </Grid>

                                <Grid item xs={6} style={{margin:35}}>
                                    <Grid item xs={12} className="m8school">Kiddy's Corner Higher Secondary School</Grid>
                                    <Grid item xs={12} className="m6cntnt">Completed my 12th Standard through CBSE Board at Kiddy's Corner Higher Secondary School, Gwalior - Madhya Pradesh.</Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} style={{display:'flex', flexDirection:'row'}}>
                                <Grid item xs={5} style={{margin:35}}>
                                    <Grid item xs={12} className="m8xth">Bachelor Of Technology</Grid>
                                    <Grid item xs={12} className="m6sub">2019-23(Present)</Grid>
                                </Grid>

                                <Grid item xs={1} style={{display:'flex', alignItems:'center', height:'25vh', flexDirection:'column'}}>
                                        <SchoolIcon style={{backgroundColor:'#e84393', color:'#fff', borderRadius:100, padding:9, fontSize:28}} />
                                        <Divider style={{transform:'rotate(90deg)', height:4, width:'300%', backgroundColor:'#fff', margin:'145% 0% 0% 0%'}}/>
                                </Grid>

                                <Grid item xs={6} style={{margin:35}}>
                                    <Grid item xs={12} className="m8school">Rustamji Institute Of Technology</Grid>
                                    <Grid item xs={12} className="m6cntnt">Currently pursuing B.Tech. Degree specialization in Electronics And Communication (ECE) at Rustamji Institute Of Technology, Gwalior - Madhya Pradesh. BSF Academy Tekanpur Gwalior - RJIT.</Grid>
                                </Grid>
                            </Grid>
                        </>
                        :
                        <>
                            <Grid item xs={12} className="m8edu">MY EDUCATION</Grid>
                            <Grid item xs={12} className="m8tit">Knowledge Has A Beginning But No End.</Grid>

                            <Grid item xs={12} style={{margin:'3% 0% 2% 0%', display:'flex', flexDirection:'row'}}>
                                <Grid item xs={5} style={{margin:35}}>
                                    <Grid item xs={12} className="m8xth">High School Examination</Grid>
                                    <Grid item xs={12} className="m8sub">2016-17</Grid>
                                </Grid>

                                <Grid item xs={1} style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                                    <SchoolIcon style={{backgroundColor:'#e84393', color:'#fff', borderRadius:100, padding:9, fontSize:28}} />
                                    <Divider style={{transform:'rotate(90deg)', height:4, width:'180%' , backgroundColor:'#fff', margin:'85% 0% 0% 0%'}}/>
                                </Grid>

                                <Grid item xs={5} style={{margin:35}}>
                                    <Grid item xs={12} className="m8school">Kiddy's Corner Public School</Grid>
                                    <Grid item xs={12} className="m8cntnt">Completed my 10th Standard through CBSE Board at Kiddy's Corner Public School, Gwalior - Madhya Pradesh.</Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} style={{display:'flex', flexDirection:'row'}}>
                                <Grid item xs={5} style={{margin:35}}>
                                    <Grid item xs={12} className="m8xth">Higher Secondary Examination</Grid>
                                    <Grid item xs={12} className="m8sub">2018-19</Grid>
                                </Grid>

                                <Grid item xs={1} style={{display:'flex', alignItems:'center', height:'25vh', flexDirection:'column'}}>
                                        <SchoolIcon style={{backgroundColor:'#e84393', color:'#fff', borderRadius:100, padding:9, fontSize:28}} />
                                        <Divider style={{transform:'rotate(90deg)', height:4, width:'220%', backgroundColor:'#fff', margin:'105% 0% 0% 0%'}}/>
                                </Grid>

                                <Grid item xs={5} style={{margin:35}}>
                                    <Grid item xs={12} className="m8school">Kiddy's Corner Higher Secondary School</Grid>
                                    <Grid item xs={12} className="m8cntnt">Completed my 12th Standard through CBSE Board at Kiddy's Corner Higher Secondary School, Gwalior - Madhya Pradesh.</Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} style={{display:'flex', flexDirection:'row'}}>
                                <Grid item xs={5} style={{margin:35}}>
                                    <Grid item xs={12} className="m8xth">Bachelor Of Technology</Grid>
                                    <Grid item xs={12} className="m8sub">2019-23(Present)</Grid>
                                </Grid>

                                <Grid item xs={1} style={{display:'flex', alignItems:'center', height:'25vh', flexDirection:'column'}}>
                                        <SchoolIcon style={{backgroundColor:'#e84393', color:'#fff', borderRadius:100, padding:9, fontSize:28}} />
                                        <Divider style={{transform:'rotate(90deg)', height:4, width:'240%', backgroundColor:'#fff', margin:'115% 0% 0% 0%'}}/>
                                </Grid>

                                <Grid item xs={5} style={{margin:35}}>
                                    <Grid item xs={12} className="m8school">Rustamji Institute Of Technology</Grid>
                                    <Grid item xs={12} className="m8cntnt">Currently pursuing B.Tech. Degree specialization in Electronics And Communication (ECE) at Rustamji Institute Of Technology, Gwalior - Madhya Pradesh. BSF Academy Tekanpur Gwalior - RJIT.</Grid>
                                </Grid>
                            </Grid>
                        </>
                        :
                        <>
                            <Grid item xs={12} className="medu">MY EDUCATION</Grid>
                            <Grid item xs={12} className="mtit">Knowledge Has A Beginning But No End.</Grid>

                            <Grid item xs={12} style={{margin:'3% 0% 2% 0%', display:'flex', flexDirection:'row'}}>
                                <Grid item xs={5} style={{margin:35}}>
                                    <Grid item xs={12} className="mxth">High School Examination</Grid>
                                    <Grid item xs={12} className="msub">2016-17</Grid>
                                </Grid>

                                <Grid item xs={1} style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                                    <SchoolIcon style={{backgroundColor:'#e84393', color:'#fff', borderRadius:100, padding:9, fontSize:28}} />
                                    <Divider style={{transform:'rotate(90deg)', height:4, width:'170%' , backgroundColor:'#fff', margin:'81% 0% 0% 0%'}}/>
                                </Grid>

                                <Grid item xs={5} style={{margin:35}}>
                                    <Grid item xs={12} className="mschool">Kiddy's Corner Public School</Grid>
                                    <Grid item xs={12} className="mcntnt">Completed my 10th Standard through CBSE Board at Kiddy's Corner Public School, Gwalior - Madhya Pradesh.</Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} style={{display:'flex', flexDirection:'row'}}>
                                <Grid item xs={5} style={{margin:35}}>
                                    <Grid item xs={12} className="mxth">Higher Secondary Examination</Grid>
                                    <Grid item xs={12} className="msub">2018-19</Grid>
                                </Grid>

                                <Grid item xs={1} style={{display:'flex', alignItems:'center', height:'25vh', flexDirection:'column'}}>
                                        <SchoolIcon style={{backgroundColor:'#e84393', color:'#fff', borderRadius:100, padding:9, fontSize:28}} />
                                        <Divider style={{transform:'rotate(90deg)', height:4, width:'180%', backgroundColor:'#fff', margin:'86% 0% 0% 0%'}}/>
                                </Grid>

                                <Grid item xs={5} style={{margin:35}}>
                                    <Grid item xs={12} className="mschool">Kiddy's Corner Higher Secondary School</Grid>
                                    <Grid item xs={12} className="mcntnt">Completed my 12th Standard through CBSE Board at Kiddy's Corner Higher Secondary School, Gwalior - Madhya Pradesh.</Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} style={{display:'flex', flexDirection:'row'}}>
                                <Grid item xs={5} style={{margin:35}}>
                                    <Grid item xs={12} className="mxth">Bachelor Of Technology</Grid>
                                    <Grid item xs={12} className="msub">2019-23(Present)</Grid>
                                </Grid>

                                <Grid item xs={1} style={{display:'flex', alignItems:'center', height:'25vh', flexDirection:'column'}}>
                                        <SchoolIcon style={{backgroundColor:'#e84393', color:'#fff', borderRadius:100, padding:9, fontSize:28}} />
                                        <Divider style={{transform:'rotate(90deg)', height:4, width:'206%', backgroundColor:'#fff', margin:'100% 0% 0% 0%'}}/>
                                </Grid>

                                <Grid item xs={5} style={{margin:35}}>
                                    <Grid item xs={12} className="mschool">Rustamji Institute Of Technology</Grid>
                                    <Grid item xs={12} className="mcntnt">Currently pursuing B.Tech. Degree specialization in Electronics And Communication (ECE) at Rustamji Institute Of Technology, Gwalior - Madhya Pradesh. BSF Academy Tekanpur Gwalior - RJIT.</Grid>
                                </Grid>
                            </Grid>
                        </>
                    :
                        <>
                            <Grid item xs={12} className="edu">MY EDUCATION</Grid>
                            <Grid item xs={12} className="tit">Knowledge Has A Beginning But No End.</Grid>

                            <Grid item xs={12} style={{margin:'3% 0% 2% 0%', display:'flex', flexDirection:'row'}}>
                                <Grid item xs={5} style={{margin:35}}>
                                    <Grid item xs={12} className="xth">High School Examination</Grid>
                                    <Grid item xs={12} className="sub">2016-17</Grid>
                                </Grid>

                                <Grid item xs={1} style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                                    <SchoolIcon style={{backgroundColor:'#e84393', color:'#fff', borderRadius:100, padding:10, fontSize:30}} />
                                    <Divider style={{transform:'rotate(90deg)', height:4, width:'97%' , backgroundColor:'#fff', margin:'46% 0% 0% 0%'}}/>
                                </Grid>

                                <Grid item xs={5} style={{margin:35}}>
                                    <Grid item xs={12} className="school">Kiddy's Corner Public School</Grid>
                                    <Grid item xs={12} className="cntnt">Completed my 10th Standard through CBSE Board at Kiddy's Corner Public School, Gwalior - Madhya Pradesh.</Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} style={{display:'flex', flexDirection:'row'}}>
                                <Grid item xs={5} style={{margin:35}}>
                                    <Grid item xs={12} className="xth">Higher Secondary Examination</Grid>
                                    <Grid item xs={12} className="sub">2018-19</Grid>
                                </Grid>

                                <Grid item xs={1} style={{display:'flex', alignItems:'center', height:'25vh', flexDirection:'column'}}>
                                        <SchoolIcon style={{backgroundColor:'#e84393', color:'#fff', borderRadius:100, padding:10, fontSize:30}} />
                                        <Divider style={{transform:'rotate(90deg)', height:4, width:'101%', backgroundColor:'#fff', margin:'49% 0% 0% 0%'}}/>
                                </Grid>

                                <Grid item xs={5} style={{margin:35}}>
                                    <Grid item xs={12} className="school">Kiddy's Corner Higher Secondary School</Grid>
                                    <Grid item xs={12} className="cntnt">Completed my 12th Standard through CBSE Board at Kiddy's Corner Higher Secondary School, Gwalior - Madhya Pradesh.</Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} style={{display:'flex', flexDirection:'row'}}>
                                <Grid item xs={5} style={{margin:35}}>
                                    <Grid item xs={12} className="xth">Bachelor Of Technology</Grid>
                                    <Grid item xs={12} className="sub">2019-23(Present)</Grid>
                                </Grid>

                                <Grid item xs={1} style={{display:'flex', alignItems:'center', height:'25vh', flexDirection:'column'}}>
                                        <SchoolIcon style={{backgroundColor:'#e84393', color:'#fff', borderRadius:100, padding:10, fontSize:30}} />
                                        <Divider style={{transform:'rotate(90deg)', height:4, width:'95%', backgroundColor:'#fff', margin:'46% 0% 0% 0%'}}/>
                                </Grid>

                                <Grid item xs={5} style={{margin:35}}>
                                    <Grid item xs={12} className="school">Rustamji Institute Of Technology</Grid>
                                    <Grid item xs={12} className="cntnt">Currently pursuing B.Tech. Degree specialization in Electronics And Communication (ECE) at Rustamji Institute Of Technology, Gwalior - Madhya Pradesh. BSF Academy Tekanpur Gwalior - RJIT.</Grid>
                                </Grid>
                            </Grid>
                        </>
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}
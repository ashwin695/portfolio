import React from "react";
import "../CSS/Projects.css"
import { Button, Grid, Paper } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Projects(){

    const theme = useTheme();
    const lgmatches = useMediaQuery(theme.breakpoints.down('lg'))
    
    const mdmatches = useMediaQuery(theme.breakpoints.down('md'))
   
    const md700matches = useMediaQuery('(max-width:700px)')
   
    const smmatches = useMediaQuery('(max-width:550px)')
   
    const xsmatches = useMediaQuery('(max-width:450px)')
   
    const xxsmatches = useMediaQuery('(max-width:380px)')
  
    const xxs290matches = useMediaQuery('(max-width:290px)')
 

    function supplierProject() {
        return(
            <Paper elevation={10}>
                <Grid item xs={12} className="header">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </Grid>
                {
                    lgmatches
                    ?
                    md700matches
                    ?
                    smmatches
                    ?
                    xsmatches
                    ?
                    xxsmatches
                    ?
                    <>
                        <Grid item xs={12} className="xxsp-ani">
                            <img src="supplier.png" className="xxsp-img" ></img>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{padding:6, fontFamily:'cursive', fontSize:14, color:'#16a085', fontWeight:600, textAlign:'center'}}>
                                A Supplier Database is a List of Service providers who can fulfill Orders quickly. The Database allows Companies to search for Suppliers across Multiple Tiers as well as search by Country, Service, etc.
                            </div>
                            <div style={{padding:10}}>
                                <Button className="hover" fullWidth variant="outlined" style={{borderColor:'#16a085', color:'#16a085'}}>Explore</Button>
                            </div>
                        </Grid>
                    </>
                    :
                    <>
                        <Grid item xs={12} className="xsp-ani">
                            <img src="supplier.png" className="xsp-img" ></img>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{padding:10, fontFamily:'cursive', fontSize:10, color:'#16a085', fontWeight:600, textAlign:'center'}}>
                                A Supplier Database is a List of Service providers who can fulfill Orders quickly. The Database allows Companies to search for Suppliers across Multiple Tiers as well as search by Country, Service, etc.
                            </div>
                            <div style={{padding:10}}>
                                <Button className="hover" fullWidth variant="outlined" style={{borderColor:'#16a085', color:'#16a085'}}>Explore</Button>
                            </div>
                        </Grid>
                    </>
                    :
                    <>
                        <Grid item xs={12} className="smp-ani">
                            <img src="supplier.png" className="smp-img" ></img>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{padding:10, fontFamily:'cursive', fontSize:12, color:'#16a085', fontWeight:600, textAlign:'center'}}>
                                A Supplier Database is a List of Service providers who can fulfill Orders quickly. The Database allows Companies to search for Suppliers across Multiple Tiers as well as search by Country, Service, etc.
                            </div>
                            <div style={{padding:10}}>
                                <Button className="hover" fullWidth variant="outlined" style={{borderColor:'#16a085', color:'#16a085'}}>Explore</Button>
                            </div>
                        </Grid>
                    </>
                    :
                    <>
                        <Grid item xs={12} className="md700p-ani">
                            <img src="supplier.png" className="md700p-img" ></img>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{padding:8, fontFamily:'cursive', fontSize:14, color:'#16a085', fontWeight:600, textAlign:'center'}}>
                                A Supplier Database is a List of Service providers who can fulfill Orders quickly. The Database allows Companies to search for Suppliers across Multiple Tiers as well as search by Country, Service, etc.
                            </div>
                            <div style={{padding:10}}>
                                <Button className="hover" fullWidth variant="outlined" style={{borderColor:'#16a085', color:'#16a085'}}>Explore</Button>
                            </div>
                        </Grid>
                    </>
                    :
                    <>
                        <Grid item xs={12} className="lgp-ani">
                            <img src="supplier.png" className="lgp-img" ></img>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{padding:10, fontFamily:'cursive', fontSize:15, color:'#16a085', fontWeight:600, textAlign:'center'}}>
                                A Supplier Database is a List of Service providers who can fulfill Orders quickly. The Database allows Companies to search for Suppliers across Multiple Tiers as well as search by Country, Service, etc.
                            </div>
                            <div style={{padding:10}}>
                                <Button className="hover" fullWidth variant="outlined" style={{borderColor:'#16a085', color:'#16a085'}}>Explore</Button>
                            </div>
                        </Grid>
                    </>
                    :
                    <>
                        <Grid item xs={12} className="p-ani">
                            <img src="supplier.png" className="p-img" ></img>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{padding:10, fontFamily:'cursive', fontSize:15, color:'#16a085', fontWeight:600, textAlign:'center'}}>
                                A Supplier Database is a List of Service providers who can fulfill Orders quickly. The Database allows Companies to search for Suppliers across Multiple Tiers as well as search by Country, Service, etc.
                            </div>
                            <div style={{padding:10}}>
                                <Button className="hover" fullWidth variant="outlined" style={{borderColor:'#16a085', color:'#16a085'}}>Explore</Button>
                            </div>
                        </Grid>
                    </>
                }
            </Paper>
        )
    }

    function resumeBuilderProject() {
        return(
            <Paper elevation={10}>
                <Grid item xs={12} className="header">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </Grid>
                {
                    lgmatches
                    ?
                    md700matches
                    ?
                    smmatches
                    ?
                    xsmatches
                    ?
                    xxsmatches
                    ?
                    <>
                        <Grid item xs={12} className="xxsp-ani">
                            <img src="resumebuilder.png" className="xxsp-img" ></img>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{padding:6, fontFamily:'cursive', fontSize:14, color:'#16a085', fontWeight:600, textAlign:'center'}}>
                                It is an Application that simplifies the task of creating a Resume for Individuals. The System is developed to provide an easy means of thinking and designing for creating a Professional looking Resume.
                            </div>
                            <div style={{padding:10}}>
                                <Button fullWidth variant="outlined" className="hover" style={{borderColor:'#16a085', color:'#16a085'}}>Explore</Button>
                            </div>
                        </Grid>
                    </>
                    :
                    <>
                        <Grid item xs={12} className="xsp-ani">
                            <img src="resumebuilder.png" className="xsp-img" ></img>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{padding:10, fontFamily:'cursive', fontSize:10, color:'#16a085', fontWeight:600, textAlign:'center'}}>
                                It is an Application that simplifies the task of creating a Resume for Individuals. The System is developed to provide an easy means of thinking and designing for creating a Professional looking Resume.
                            </div>
                            <div style={{padding:10}}>
                                <Button fullWidth variant="outlined" className="hover" style={{borderColor:'#16a085', color:'#16a085'}}>Explore</Button>
                            </div>
                        </Grid>
                    </>
                    :
                    <>
                        <Grid item xs={12} className="smp-ani">
                            <img src="resumebuilder.png" className="smp-img" ></img>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{padding:10, fontFamily:'cursive', fontSize:12, color:'#16a085', fontWeight:600, textAlign:'center'}}>
                                It is an Application that simplifies the task of creating a Resume for Individuals. The System is developed to provide an easy means of thinking and designing for creating a Professional looking Resume.
                            </div>
                            <div style={{padding:10}}>
                                <Button fullWidth variant="outlined" className="hover" style={{borderColor:'#16a085', color:'#16a085'}}>Explore</Button>
                            </div>
                        </Grid>
                    </>
                    :
                    <>
                        <Grid item xs={12} className="md700p-ani">
                            <img src="resumebuilder.png" className="md700p-img" ></img>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{padding:8, fontFamily:'cursive', fontSize:14, color:'#16a085', fontWeight:600, textAlign:'center'}}>
                                It is an Application that simplifies the task of creating a Resume for Individuals. The System is developed to provide an easy means of thinking and designing for creating a Professional looking Resume.
                            </div>
                            <div style={{padding:10}}>
                                <Button fullWidth variant="outlined" className="hover" style={{borderColor:'#16a085', color:'#16a085'}}>Explore</Button>
                            </div>
                        </Grid>
                    </>
                    :
                    <>
                        <Grid item xs={12} className="lgp-ani">
                            <img src="resumebuilder.png" className="lgp-img" ></img>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{padding:10, fontFamily:'cursive', fontSize:15, color:'#16a085', fontWeight:600, textAlign:'center'}}>
                                It is an Application that simplifies the task of creating a Resume for Individuals. The System is developed to provide an easy means of thinking and designing for creating a Professional looking Resume.
                            </div>
                            <div style={{padding:10}}>
                                <Button fullWidth variant="outlined" className="hover" style={{borderColor:'#16a085', color:'#16a085'}}>Explore</Button>
                            </div>
                        </Grid>
                    </>
                    :
                    <>
                        <Grid item xs={12} className="p-ani">
                            <img src="resumebuilder.png" className="p-img" ></img>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{padding:10, fontFamily:'cursive', fontSize:15, color:'#16a085', fontWeight:600, textAlign:'center'}}>
                                It is an Application that simplifies the task of creating a Resume for Individuals. The System is developed to provide an easy means of thinking and designing for creating a Professional looking Resume.
                            </div>
                            <div style={{padding:10}}>
                                <Button fullWidth variant="outlined" className="hover" style={{borderColor:'#16a085', color:'#16a085'}}>Explore</Button>
                            </div>
                        </Grid>
                    </>
                }
            </Paper>
        )
    }

    function bestGoodsProject() {
        return(
            <Paper elevation={10}>
                <Grid item xs={12} className="header">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </Grid>
                {
                    lgmatches
                    ?
                    md700matches
                    ?
                    smmatches
                    ?
                    xsmatches
                    ?
                    xxsmatches
                    ?
                    <>
                        <Grid item xs={12} className="xxsp-ani">
                            <img src="bestgoods.png" className="xxsp-img" ></img>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{padding:6, fontFamily:'cursive', fontSize:14, color:'#16a085', fontWeight:600, textAlign:'center'}}>
                                A Website that allows People to Buy Physical Goods, Services, and Digital Products in the Internet. A Business can process and manage Orders, Payments, Logistics, and provide Customer Service at one place.
                            </div>
                            <div style={{padding:10}}>
                                <Button fullWidth variant="outlined" className="hover" style={{borderColor:'#16a085', color:'#16a085'}}>Explore</Button>
                            </div>
                        </Grid>
                    </>
                    :
                    <>
                        <Grid item xs={12} className="xsp-ani">
                            <img src="bestgoods.png" className="xsp-img" ></img>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{padding:10, fontFamily:'cursive', fontSize:10, color:'#16a085', fontWeight:600, textAlign:'center'}}>
                                A Website that allows People to Buy Physical Goods, Services, and Digital Products in the Internet. A Business can process and manage Orders, Payments, Logistics, and provide Customer Service at one place.
                            </div>
                            <div style={{padding:10}}>
                                <Button fullWidth variant="outlined" className="hover" style={{borderColor:'#16a085', color:'#16a085'}}>Explore</Button>
                            </div>
                        </Grid>
                    </>
                    :
                    <>
                        <Grid item xs={12} className="smp-ani">
                            <img src="bestgoods.png" className="smp-img" ></img>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{padding:10, fontFamily:'cursive', fontSize:12, color:'#16a085', fontWeight:600, textAlign:'center'}}>
                                A Website that allows People to Buy Physical Goods, Services, and Digital Products in the Internet. A Business can process and manage Orders, Payments, Logistics, and provide Customer Service at one place.
                            </div>
                            <div style={{padding:10}}>
                                <Button fullWidth variant="outlined" className="hover" style={{borderColor:'#16a085', color:'#16a085'}}>Explore</Button>
                            </div>
                        </Grid>
                    </>
                    :
                    <>
                        <Grid item xs={12} className="md700p-ani">
                            <img src="bestgoods.png" className="md700p-img" ></img>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{padding:8, fontFamily:'cursive', fontSize:14, color:'#16a085', fontWeight:600, textAlign:'center'}}>
                                A Website that allows People to Buy Physical Goods, Services, and Digital Products in the Internet. A Business can process and manage Orders, Payments, Logistics, and provide Customer Service at one place.
                            </div>
                            <div style={{padding:10}}>
                                <Button fullWidth variant="outlined" className="hover" style={{borderColor:'#16a085', color:'#16a085'}}>Explore</Button>
                            </div>
                        </Grid>
                    </>
                    :
                    <>
                        <Grid item xs={12} className="lgp-ani">
                            <img src="bestgoods.png" className="lgp-img" ></img>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{padding:10, fontFamily:'cursive', fontSize:15, color:'#16a085', fontWeight:600, textAlign:'center'}}>
                                A Website that allows People to Buy Physical Goods, Services, and Digital Products in the Internet. A Business can process and manage Orders, Payments, Logistics, and provide Customer Service at one place.
                            </div>
                            <div style={{padding:10}}>
                                <Button fullWidth variant="outlined" className="hover" style={{borderColor:'#16a085', color:'#16a085'}}>Explore</Button>
                            </div>
                        </Grid>
                    </>
                    :
                    <>
                        <Grid item xs={12} className="p-ani">
                            <img src="bestgoods.png" className="p-img" ></img>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{padding:10, fontFamily:'cursive', fontSize:15, color:'#16a085', fontWeight:600, textAlign:'center'}}>
                                A Website that allows People to Buy Physical Goods, Services, and Digital Products in the Internet. A Business can process and manage Orders, Payments, Logistics, and provide Customer Service at one place.
                            </div>
                            <div style={{padding:10}}>
                                <Button fullWidth variant="outlined" className="hover" style={{borderColor:'#16a085', color:'#16a085'}}>Explore</Button>
                            </div>
                        </Grid>
                    </>
                }
            </Paper>
        )
    }

    function cgvProject() {
        return(
            <Paper elevation={10}>
                <Grid item xs={12} className="header">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </Grid>
                {
                    lgmatches
                    ?
                    md700matches
                    ?
                    smmatches
                    ?
                    xsmatches
                    ?
                    xxsmatches
                    ?
                    <>
                        <Grid item xs={12} className="xxsp-ani">
                            <img src="cgv1.png" className="xxsp-img" ></img>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{padding:6, fontFamily:'cursive', fontSize:14, color:'#16a085', fontWeight:600, textAlign:'center'}}>
                                As the Internet users are increasing exponentially, This Web Application helps customer to find different Gifts according category, price, etc. It improves customer’s experience and also helps in less workload on the staff of Gift Shop.
                            </div>
                            <div style={{padding:10}}>
                                <Button fullWidth variant="outlined" className="hover" style={{borderColor:'#16a085', color:'#16a085'}}>Explore</Button>
                            </div>
                        </Grid>
                    </>
                    :
                    <>
                        <Grid item xs={12} className="xsp-ani">
                            <img src="cgv1.png" className="xsp-img" ></img>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{padding:10, fontFamily:'cursive', fontSize:10, color:'#16a085', fontWeight:600, textAlign:'center'}}>
                                As the Internet users are increasing exponentially, This Web Application helps customer to find different Gifts according category, price, etc. It improves customer’s experience and also helps in less workload on the staff of Gift Shop.
                            </div>
                            <div style={{padding:10}}>
                                <Button fullWidth variant="outlined" className="hover" style={{borderColor:'#16a085', color:'#16a085'}}>Explore</Button>
                            </div>
                        </Grid>
                    </>
                    :
                    <>
                        <Grid item xs={12} className="smp-ani">
                            <img src="cgv1.png" className="smp-img" ></img>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{padding:10, fontFamily:'cursive', fontSize:12, color:'#16a085', fontWeight:600, textAlign:'center'}}>
                                As the Internet users are increasing exponentially, This Web Application helps customer to find different Gifts according category, price, etc. It improves customer’s experience and also helps in less workload on the staff of Gift Shop.
                            </div>
                            <div style={{padding:10}}>
                                <Button fullWidth variant="outlined" className="hover" style={{borderColor:'#16a085', color:'#16a085'}}>Explore</Button>
                            </div>
                        </Grid>
                    </>
                    :
                    <>
                        <Grid item xs={12} className="md700p-ani">
                            <img src="cgv1.png" className="md700p-img" ></img>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{padding:8, fontFamily:'cursive', fontSize:14, color:'#16a085', fontWeight:600, textAlign:'center'}}>
                                As the Internet users are increasing exponentially, This Web Application helps customer to find different Gifts according category, price, etc. It improves customer’s experience and also helps in less workload on the staff of Gift Shop.
                            </div>
                            <div style={{padding:10}}>
                                <Button fullWidth variant="outlined" className="hover" style={{borderColor:'#16a085', color:'#16a085'}}>Explore</Button>
                            </div>
                        </Grid>
                    </>
                    :
                    <>
                        <Grid item xs={12} className="lgp-ani">
                            <img src="cgv1.png" className="lgp-img" ></img>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{padding:10, fontFamily:'cursive', fontSize:15, color:'#16a085', fontWeight:600, textAlign:'center'}}>
                                As the Internet users are increasing exponentially, This Web Application helps customer to find different Gifts according category, price, etc. It improves customer’s experience and also helps in less workload on the staff of Gift Shop.
                            </div>
                            <div style={{padding:10}}>
                                <Button fullWidth variant="outlined" className="hover" style={{borderColor:'#16a085', color:'#16a085'}}>Explore</Button>
                            </div>
                        </Grid>
                    </>
                    :
                    <>
                        <Grid item xs={12} className="p-ani">
                            <img src="cgv1.png" className="p-img" ></img>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{padding:10, fontFamily:'cursive', fontSize:15, color:'#16a085', fontWeight:600, textAlign:'center'}}>
                                As the Internet users are increasing exponentially, This Web Application helps customer to find different Gifts according category, price, etc. It improves customer’s experience and also helps in less workload on the staff of Gift Shop.
                            </div>
                            <div style={{padding:10}}>
                                <Button fullWidth variant="outlined" className="hover" style={{borderColor:'#16a085', color:'#16a085'}}>Explore</Button>
                            </div>
                        </Grid>
                    </>
                }
            </Paper>
        )
    }

    function stackoverflowProject() {
        return(
            <Paper elevation={10}>
                <Grid item xs={12} className="header">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </Grid>
                {
                    lgmatches
                    ?
                    md700matches
                    ?
                    smmatches
                    ?
                    xsmatches
                    ?
                    xxsmatches
                    ?
                    <>
                        <Grid item xs={12} className="xxsp-ani">
                            <img src="stackoverflow.png" className="xxsp-img" ></img>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{padding:6, fontFamily:'cursive', fontSize:14, color:'#16a085', fontWeight:600, textAlign:'center'}}>
                                A Supplier Database is a List of Service providers who can fulfill Orders quickly. The Database allows Companies to search for Suppliers across Multiple Tiers. It allows to search for Suppliers by Country, Service, etc.
                            </div>
                            <Grid style={{padding:10}}>
                                <Button className="hover" fullWidth variant="outlined" style={{borderColor:'#16a085', color:'#16a085'}}>Explore</Button>
                            </Grid>
                        </Grid>
                    </>
                    :
                    <>
                        <Grid item xs={12} className="xsp-ani">
                            <img src="stackoverflow.png" className="xsp-img" ></img>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{padding:10, fontFamily:'cursive', fontSize:10, color:'#16a085', fontWeight:600, textAlign:'center'}}>
                                A Supplier Database is a List of Service providers who can fulfill Orders quickly. The Database allows Companies to search for Suppliers across Multiple Tiers. It allows to search for Suppliers by Country, Service, etc.
                            </div>
                            <Grid style={{padding:10}}>
                                <Button className="hover" fullWidth variant="outlined" style={{borderColor:'#16a085', color:'#16a085'}}>Explore</Button>
                            </Grid>
                        </Grid>
                    </>
                    :
                    <>
                        <Grid item xs={12} className="smp-ani">
                            <img src="stackoverflow.png" className="smp-img" ></img>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{padding:10, fontFamily:'cursive', fontSize:12, color:'#16a085', fontWeight:600, textAlign:'center'}}>
                                A Supplier Database is a List of Service providers who can fulfill Orders quickly. The Database allows Companies to search for Suppliers across Multiple Tiers. It allows to search for Suppliers by Country, Service, etc.
                            </div>
                            <Grid style={{padding:10}}>
                                <Button className="hover" fullWidth variant="outlined" style={{borderColor:'#16a085', color:'#16a085'}}>Explore</Button>
                            </Grid>
                        </Grid>
                    </>
                    :
                    <>
                        <Grid item xs={12} className="md700p-ani">
                            <img src="stackoverflow.png" className="md700p-img" ></img>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{padding:8, fontFamily:'cursive', fontSize:14, color:'#16a085', fontWeight:600, textAlign:'center'}}>
                                A Supplier Database is a List of Service providers who can fulfill Orders quickly. The Database allows Companies to search for Suppliers across Multiple Tiers. It allows to search for Suppliers by Country, Service, etc.
                            </div>
                            <Grid style={{padding:10}}>
                                <Button className="hover" fullWidth variant="outlined" style={{borderColor:'#16a085', color:'#16a085'}}>Explore</Button>
                            </Grid>
                        </Grid>
                    </>
                    :
                    <>
                        <Grid item xs={12} className="lgp-ani">
                            <img src="stackoverflow.png" className="lgp-img" ></img>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{padding:10, fontFamily:'cursive', fontSize:15, color:'#16a085', fontWeight:600, textAlign:'center'}}>
                                A Supplier Database is a List of Service providers who can fulfill Orders quickly. The Database allows Companies to search for Suppliers across Multiple Tiers. It allows to search for Suppliers by Country, Service, etc.
                            </div>
                            <Grid style={{padding:10}}>
                                <Button className="hover" fullWidth variant="outlined" style={{borderColor:'#16a085', color:'#16a085'}}>Explore</Button>
                            </Grid>
                        </Grid>
                    </>
                    :
                    <>
                        <Grid item xs={12} className="p-ani">
                            <img src="stackoverflow.png" className="p-img" ></img>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{padding:10, fontFamily:'cursive', fontSize:15, color:'#16a085', fontWeight:600, textAlign:'center'}}>
                            This is a Stack Overflow Clone. It is a question and answer website for programmers or coders. In this we upload a question, review a questions, gives answer and you can comment also in any answer or question.
                            </div>
                            <Grid style={{padding:10}}>
                                <Button className="hover" fullWidth variant="outlined" style={{borderColor:'#16a085', color:'#16a085'}}>Explore</Button>
                            </Grid>
                        </Grid>
                    </>
                }
            </Paper>
        )
    }

    function portfolio() {
        return(
            <Paper elevation={10}>
                <Grid item xs={12} className="header">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </Grid>
                {
                    lgmatches
                    ?
                    md700matches
                    ?
                    smmatches
                    ?
                    xsmatches
                    ?
                    xxsmatches
                    ?
                    <>
                        <Grid item xs={12} className="xxsp-ani">
                            <img src="portfolio3.png" className="xxsp-img" ></img>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{padding:6, fontFamily:'cursive', fontSize:14, color:'#16a085', fontWeight:600, textAlign:'center'}}>
                            My Portfolio is a unique way to showcase my Work and about Myself. It's a platform to know about My Projects, Skills, and other Information about mine. It is an online representation of work which I have created, as well as my experiences.
                            </div>
                            <Grid style={{padding:10}}>
                                <Button className="hover" fullWidth variant="outlined" style={{borderColor:'#16a085', color:'#16a085'}}>Explore</Button>
                            </Grid>
                        </Grid>
                    </>
                    :
                    <>
                        <Grid item xs={12} className="xsp-ani">
                            <img src="portfolio3.png" className="xsp-img" ></img>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{padding:10, fontFamily:'cursive', fontSize:10, color:'#16a085', fontWeight:600, textAlign:'center'}}>
                            My Portfolio is a unique way to showcase my Work and about Myself. It's a platform to know about My Projects, Skills, and other Information about mine. It is an online representation of work which I have created, as well as my experiences.
                            </div>
                            <Grid style={{padding:10}}>
                                <Button className="hover" fullWidth variant="outlined" style={{borderColor:'#16a085', color:'#16a085'}}>Explore</Button>
                            </Grid>
                        </Grid>
                    </>
                    :
                    <>
                        <Grid item xs={12} className="smp-ani">
                            <img src="portfolio3.png" className="smp-img" ></img>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{padding:10, fontFamily:'cursive', fontSize:12, color:'#16a085', fontWeight:600, textAlign:'center'}}>
                            My Portfolio is a unique way to showcase my Work and about Myself. It's a platform to know about My Projects, Skills, and other Information about mine. It is an online representation of work which I have created, as well as my experiences.
                            </div>
                            <Grid style={{padding:10}}>
                                <Button className="hover" fullWidth variant="outlined" style={{borderColor:'#16a085', color:'#16a085'}}>Explore</Button>
                            </Grid>
                        </Grid>
                    </>
                    :
                    <>
                        <Grid item xs={12} className="md700p-ani">
                            <img src="portfolio3.png" className="md700p-img" ></img>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{padding:8, fontFamily:'cursive', fontSize:14, color:'#16a085', fontWeight:600, textAlign:'center'}}>
                            My Portfolio is a unique way to showcase my Work and about Myself. It's a platform to know about My Projects, Skills, and other Information about mine. It is an online representation of work which I have created, as well as my experiences.
                            </div>
                            <Grid style={{padding:10}}>
                                <Button className="hover" fullWidth variant="outlined" style={{borderColor:'#16a085', color:'#16a085'}}>Explore</Button>
                            </Grid>
                        </Grid>
                    </>
                    :
                    <>
                        <Grid item xs={12} className="lgp-ani">
                            <img src="portfolio3.png" className="lgp-img" ></img>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{padding:10, fontFamily:'cursive', fontSize:15, color:'#16a085', fontWeight:600, textAlign:'center'}}>
                            My Portfolio is a unique way to showcase my Work and about Myself. It's a platform to know about My Projects, Skills, and other Information about mine. It is an online representation of work which I have created, as well as my experiences.
                            </div>
                            <Grid style={{padding:10}}>
                                <Button className="hover" fullWidth variant="outlined" style={{borderColor:'#16a085', color:'#16a085'}}>Explore</Button>
                            </Grid>
                        </Grid>
                    </>
                    :
                    <>
                        <Grid item xs={12} className="p-ani">
                            <img src="portfolio3.png" className="p-img" ></img>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{padding:10, fontFamily:'cursive', fontSize:15, color:'#16a085', fontWeight:600, textAlign:'center'}}>
                            My Portfolio Website is a way to showcase my Work and about Myself. It's a platform to know about My Projects, Skills, and other Information about mine. It is an online representation of work which I have created, as well as my experiences.
                            </div>
                            <Grid style={{padding:10}}>
                                <Button className="hover" fullWidth variant="outlined" style={{borderColor:'#16a085', color:'#16a085'}}>Explore</Button>
                            </Grid>
                        </Grid>
                    </>
                }
            </Paper>
        )
    }

    return(
        <Grid id="projects" container spacing={2} style={{overflowY:'auto'}}>
            {
                mdmatches
                ?
                xsmatches
                ?
                xxsmatches
                ?
                xxs290matches
                ?
                <Grid item xs={12} style={{marginTop:65}}>
                    <Grid item xs={12}>
                        <div className="xxstitle">Create And Inspire</div>
                    </Grid>
                    <Grid item xs={12}>
                        <div style={{display:'flex', justifyContent:'center', textAlign:'center', fontFamily:'serif', fontSize:14, fontWeight:500}}>We Do Our Best to Make Dreams Come True</div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className="xxstitle1">Projects</div>
                    </Grid>
                </Grid>
                :
                <Grid item xs={12} style={{marginTop:65}}>
                    <Grid item xs={12}>
                        <div className="xxstitle">Create And Inspire</div>
                    </Grid>
                    <Grid item xs={12}>
                        <div style={{display:'flex', justifyContent:'center', fontFamily:'serif', fontSize:15, fontWeight:500}}>We Do Our Best to Make Dreams Come True</div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className="xxstitle1">Projects</div>
                    </Grid>
                </Grid>
                :
                <Grid item xs={12} style={{marginTop:65}}>
                    <Grid item xs={12}>
                        <div className="xstitle">Create And Inspire</div>
                    </Grid>
                    <Grid item xs={12}>
                        <div style={{display:'flex', justifyContent:'center', fontFamily:'serif', fontSize:18, fontWeight:500}}>We Do Our Best to Make Dreams Come True</div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className="xstitle1">Projects</div>
                    </Grid>
                </Grid>
                :
                <Grid item xs={12} style={{marginTop:65}}>
                    <Grid item xs={12}>
                        <div className="mdtitle">Create And Inspire</div>
                    </Grid>
                    <Grid item xs={12}>
                        <div style={{display:'flex', justifyContent:'center', fontFamily:'serif', fontSize:20, fontWeight:500}}>We Do Our Best to Make Dreams Come True</div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className="mdtitle1">Projects</div>
                    </Grid>
                </Grid>
                :
                <Grid item xs={12} style={{marginTop:65}}>
                    <Grid item xs={12}>
                        <div className="title">Create And Inspire</div>
                    </Grid>
                    <Grid item xs={12}>
                        <div style={{display:'flex', justifyContent:'center', fontFamily:'serif', fontSize:22, fontWeight:500}}>We Do Our Best to Make Dreams Come True</div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className="title1">Projects</div>
                    </Grid>
                </Grid>
            }
            {
                lgmatches
                ?
                mdmatches
                ?
                xxsmatches
                ?
                <Grid item xs={12} style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap'}}>
                    <Grid item xs={10} style={{margin:15}}>
                        {supplierProject()}
                    </Grid>
                    <Grid item xs={10} style={{margin:15}}>
                        {resumeBuilderProject()}
                    </Grid>
                    <Grid item xs={10} style={{margin:15}}>
                        {bestGoodsProject()}
                    </Grid>
                    <Grid item xs={10} style={{margin:15}}>
                        {cgvProject()}
                    </Grid>
                    <Grid item xs={10} style={{margin:15}}>
                        {stackoverflowProject()}
                    </Grid>
                    <Grid item xs={10} style={{margin:11}}>
                        {portfolio()}
                    </Grid>
                </Grid>
                :
                <Grid item xs={12} style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap'}}>
                    <Grid item xs={4.8} style={{margin:15}}>
                        {supplierProject()}
                    </Grid>
                    <Grid item xs={4.8} style={{margin:15}}>
                        {resumeBuilderProject()}
                    </Grid>
                    <Grid item xs={4.8} style={{margin:15}}>
                        {bestGoodsProject()}
                    </Grid>
                    <Grid item xs={4.8} style={{margin:15}}>
                        {cgvProject()}
                    </Grid>
                    <Grid item xs={4.8} style={{margin:15}}>
                        {stackoverflowProject()}
                    </Grid>
                    <Grid item xs={4.8} style={{margin:15}}>
                        {portfolio()}
                    </Grid>
                </Grid>
                :
                <Grid item xs={12} style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap'}}>
                    <Grid item xs={3.5} style={{margin:15}}>
                        {supplierProject()}
                    </Grid>
                    <Grid item xs={3.5} style={{margin:15}}>
                        {resumeBuilderProject()}
                    </Grid>
                    <Grid item xs={3.5} style={{margin:15}}>
                        {bestGoodsProject()}
                    </Grid>
                    <Grid item xs={3.5} style={{margin:15}}>
                        {cgvProject()}
                    </Grid>
                    <Grid item xs={3.5} style={{margin:15}}>
                        {stackoverflowProject()}
                    </Grid>
                    <Grid item xs={3.5} style={{margin:15}}>
                        {portfolio()}
                    </Grid>
                </Grid>
                :
                <Grid item xs={12} style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap'}}>
                    <Grid item xs={3.3} style={{margin:15}}>
                        {supplierProject()}
                    </Grid>
                    <Grid item xs={3.3} style={{margin:15}}>
                        {resumeBuilderProject()}
                    </Grid>
                    <Grid item xs={3.3} style={{margin:15}}>
                        {bestGoodsProject()}
                    </Grid>
                    <Grid item xs={3.3} style={{margin:15}}>
                        {cgvProject()}
                    </Grid>
                    <Grid item xs={3.3} style={{margin:15}}>
                        {stackoverflowProject()}
                    </Grid>
                    <Grid item xs={3.3} style={{margin:15}}>
                        {portfolio()}
                    </Grid>
                </Grid>
            }
        </Grid>
    )
}
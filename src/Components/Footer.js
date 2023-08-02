import React, { useRef, useState } from "react";
import { Grid } from "@mui/material";
import "../CSS/Footer.css"
import PinDropTwoToneIcon from '@mui/icons-material/PinDropTwoTone';
import EmailTwoTone from "@mui/icons-material/EmailTwoTone";
import CallTwoToneIcon from '@mui/icons-material/CallTwoTone';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import emailjs from '@emailjs/browser';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Footer()
{
    const lgmatches = useMediaQuery('(max-width:1000px)')
 
    const mdmatches = useMediaQuery('(max-width:750px)')
   
    const smmatches = useMediaQuery('(max-width:640px)')
   
    const sm550matches = useMediaQuery('(max-width:550px)')
  
    const xsmatches = useMediaQuery('(max-width:385px)')
   
    const xxsmatches = useMediaQuery('(max-width:300px)')
  

    const form = useRef();
    const [done,setDone] = useState(false)

    const handleSubmitEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_u070y8p', 'template_r0ibn4z', form.current, 'x5VU5EAhJW-iU6ES-')
        .then((result) => {
            setDone(true)
            /* console.log('SUCCESS!', result.status, result.text); */
        }, (error) => {
            console.log('FAILED...', error);
            console.log(error.text);
        });
    };

    return(
        <Grid container spacing={2}>
            {
                mdmatches
                ?
                smmatches
                ?
                sm550matches
                ?
                <Grid item xs={12} className="sm550bg">
                    <Grid item xs={12} style={{marginTop:70}}>
                        {
                            mdmatches
                            ?
                            smmatches
                            ?
                            xsmatches
                            ?
                            <>
                                <Grid item xs={12} className="xscontact">CONTACT</Grid>
                                <Grid item xs={12} className="xssub1">I'd Like To Hear From You.</Grid>
                                <Grid item xs={12} className="xssub2">Feel Free To Contact</Grid>
                            </>
                            :
                            <>
                                <Grid item xs={12} className="smcontact">CONTACT</Grid>
                                <Grid item xs={12} className="smsub1">I'd Like To Hear From You.</Grid>
                                <Grid item xs={12} className="smsub2">Feel Free To Contact</Grid>
                            </>
                            :
                            <>
                                <Grid item xs={12} className="mdcontact">CONTACT</Grid>
                                <Grid item xs={12} className="mdsub1">I'd Like To Hear From You.</Grid>
                                <Grid item xs={12} className="mdsub2">Feel Free To Contact</Grid>
                            </>
                            :
                            <>
                                <Grid item xs={12} className="contact">CONTACT</Grid>
                                <Grid item xs={12} className="sub1">I'd Like To Hear From You.</Grid>
                                <Grid item xs={12} className="sub2">Feel Free To Contact</Grid>
                            </>
                        }


                        <Grid item xs={12} style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap'}}>
                            {
                                sm550matches
                                ?
                                xsmatches
                                ?
                                <form ref={form} onSubmit={handleSubmitEmail} style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap'}}>
                                    <Grid item xs={12} style={{padding:3}}>
                                        <input type="text" placeholder="Name" name="from_name" />
                                    </Grid>
                                    <Grid item xs={12} style={{padding:3}}>
                                        <input type="email" placeholder="Email" name="from_email" />
                                    </Grid>
                                    <Grid item xs={12} style={{padding:3}}>
                                        <input type="text" placeholder="Subject" name="from_subject" />
                                    </Grid>
                                    <Grid item xs={12} style={{padding:3}}>
                                        <textarea rows="3" placeholder="Message" name="message" />
                                    </Grid>
                                    <Grid item xs={12} style={{padding:5}}>
                                        <input className="sbbtn" type="submit" value="SUBMIT"></input>
                                    </Grid>
                                    {
                                        mdmatches
                                        ?
                                            done 
                                            ?
                                            <Grid item xs={12} style={{fontSize:16, color:'#fff', fontWeight:600,}}>
                                                Thank You...!!!
                                            </Grid>
                                            : 
                                            <></>
                                        :
                                            done 
                                            ?
                                            <Grid item xs={12} style={{fontSize:18, color:'#fff', fontWeight:600,}}>
                                                Thank You...!!!
                                            </Grid>
                                            : 
                                            <></>
                                    }
                                </form>
                                :
                                <form ref={form} onSubmit={handleSubmitEmail} style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap'}}>
                                    <Grid item xs={12} style={{padding:5}}>
                                        <input type="text" placeholder="Name" name="from_name" />
                                    </Grid>
                                    <Grid item xs={12} style={{padding:5}}>
                                        <input type="email" placeholder="Email" name="from_email" />
                                    </Grid>
                                    <Grid item xs={12} style={{padding:5}}>
                                        <input type="text" placeholder="Subject" name="from_subject" />
                                    </Grid>
                                    <Grid item xs={12} style={{padding:5}}>
                                        <textarea rows="5" placeholder="Message" name="message" />
                                    </Grid>
                                    <Grid item xs={12} style={{padding:10}}>
                                        <input className="sbbtn" type="submit" value="SUBMIT"></input>
                                    </Grid>
                                    {
                                        mdmatches
                                        ?
                                            done 
                                            ?
                                            <Grid item xs={12} style={{fontSize:16, color:'#fff', fontWeight:600,}}>
                                                Thank You...!!!
                                            </Grid>
                                            : 
                                            <></>
                                        :
                                            done 
                                            ?
                                            <Grid item xs={12} style={{fontSize:18, color:'#fff', fontWeight:600,}}>
                                                Thank You...!!!
                                            </Grid>
                                            : 
                                            <></>
                                    }
                                </form>
                                :
                                <form ref={form} onSubmit={handleSubmitEmail} style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap'}}>
                                    <Grid item xs={10} style={{padding:10}}>
                                        <input type="text" placeholder="Name" name="from_name" />
                                    </Grid>
                                    <Grid item xs={10} style={{padding:10}}>
                                        <input type="email" placeholder="Email" name="from_email" />
                                    </Grid>
                                    <Grid item xs={10} style={{padding:10}}>
                                        <input type="text" placeholder="Subject" name="from_subject" />
                                    </Grid>
                                    <Grid item xs={10} style={{padding:10}}>
                                        <textarea rows="7" placeholder="Message" name="message" />
                                    </Grid>
                                    <Grid item xs={10} style={{padding:10}}>
                                        <input className="sbbtn" type="submit" value="SUBMIT"></input>
                                    </Grid>
                                    {
                                        mdmatches
                                        ?
                                            done 
                                            ?
                                            <Grid item xs={12} style={{fontSize:16, color:'#fff', fontWeight:600,}}>
                                                Thank You...!!!
                                            </Grid>
                                            : 
                                            <></>
                                        :
                                            done 
                                            ?
                                            <Grid item xs={12} style={{fontSize:18, color:'#fff', fontWeight:600,}}>
                                                Thank You...!!!
                                            </Grid>
                                            : 
                                            <></>
                                    }
                                </form>
                            }

                            {
                                lgmatches
                                ?
                                mdmatches
                                ?
                                smmatches
                                ?
                                sm550matches
                                ?
                                xsmatches
                                ?
                                xxsmatches
                                ?
                                <Grid id="footer" item xs={12} style={{margin:'7% 0% 3% 0%', display:'flex', justifyContent:'center'}}>
                                    <Grid item xs={3.5}>
                                        <a href="https://www.google.com/maps/@26.214953,78.2055935,17.11z" target="blank" style={{textDecoration:'none'}}>
                                            <PinDropTwoToneIcon style={{fontSize:30, margin:'2%', color:'#fff'}} />
                                            {/* <div style={{fontSize:9, margin:'1%', color:'grey'}}>Gwalior, Madhya Pradesh</div>
                                            <div style={{fontSize:9, margin:'1%', color:'grey'}}>474011 - India</div> */}
                                        </a>
                                    </Grid>
                                    <Grid item xs={3.5}>
                                        <a href="mailto: guptaashwin695@gmail.com" target="blank" style={{textDecoration:'none'}}>
                                            <EmailTwoTone style={{fontSize:30, margin:'2%', color:'#fff'}} />
                                            {/* <div style={{fontSize:9, margin:'1%', color:'grey'}}>guptaashwin695@gmail.com</div> */}
                                        </a>
                                    </Grid>
                                    <Grid item xs={3.5}>
                                        <a href="tel:+919109472941" style={{textDecoration:'none'}}>
                                            <CallTwoToneIcon style={{fontSize:30, margin:'2%', color:'#fff'}} />
                                            {/* <div style={{fontSize:9, margin:'1%', color:'grey'}}>+91 9109472941</div> */}
                                        </a>
                                    </Grid>
                                </Grid>
                                :
                                <Grid id="footer" item xs={12} style={{margin:'7% 0% 5% 0%', display:'flex'}}>
                                    <Grid item xs={4}>
                                        <a href="https://www.google.com/maps/@26.214953,78.2055935,17.11z" target="blank" style={{textDecoration:'none'}}>
                                            <PinDropTwoToneIcon style={{fontSize:30, margin:'2%', color:'#fff'}} />
                                            <div style={{fontSize:9, margin:'1%', color:'grey'}}>Gwalior, Madhya Pradesh</div>
                                            <div style={{fontSize:9, margin:'1%', color:'grey'}}>474011 - India</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <a href="mailto: guptaashwin695@gmail.com" target="blank" style={{textDecoration:'none'}}>
                                            <EmailTwoTone style={{fontSize:30, margin:'2%', color:'#fff'}} />
                                            <div style={{fontSize:9, margin:'1%', color:'grey'}}>guptaashwin695@gmail.com</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <a href="tel:+919109472941" style={{textDecoration:'none'}}>
                                            <CallTwoToneIcon style={{fontSize:30, margin:'2%', color:'#fff'}} />
                                            <div style={{fontSize:9, margin:'1%', color:'grey'}}>+91 9109472941</div>
                                        </a>
                                    </Grid>
                                </Grid>
                                :
                                <Grid id="footer" item xs={12} style={{margin:'4%', display:'flex'}}>
                                    <Grid item xs={4}>
                                        <a href="https://www.google.com/maps/@26.214953,78.2055935,17.11z" target="blank" style={{textDecoration:'none'}}>
                                            <PinDropTwoToneIcon style={{fontSize:35, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:10, margin:'1%', color:'grey'}}>Gwalior, Madhya Pradesh</div>
                                            <div style={{fontSize:10, margin:'1%', color:'grey'}}>474011 - India</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <a href="mailto: guptaashwin695@gmail.com" target="blank" style={{textDecoration:'none'}}>
                                            <EmailTwoTone style={{fontSize:35, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:10, margin:'1%', color:'grey'}}>guptaashwin695@gmail.com</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <a href="tel:+919109472941" style={{textDecoration:'none'}}>
                                            <CallTwoToneIcon style={{fontSize:35, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:10, margin:'1%', color:'grey'}}>+91 9109472941</div>
                                        </a>
                                    </Grid>
                                </Grid>
                                :
                                <Grid id="footer" item xs={12} style={{margin:'4%', display:'flex'}}>
                                    <Grid item xs={4}>
                                        <a href="https://www.google.com/maps/@26.214953,78.2055935,17.11z" target="blank" style={{textDecoration:'none'}}>
                                            <PinDropTwoToneIcon style={{fontSize:50, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:12, margin:'1%', color:'grey'}}>Gwalior, Madhya Pradesh</div>
                                            <div style={{fontSize:12, margin:'1%', color:'grey'}}>474011 - India</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <a href="mailto: guptaashwin695@gmail.com" target="blank" style={{textDecoration:'none'}}>
                                            <EmailTwoTone style={{fontSize:50, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:12, margin:'1%', color:'grey'}}>guptaashwin695@gmail.com</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <a href="tel:+919109472941" style={{textDecoration:'none'}}>
                                            <CallTwoToneIcon style={{fontSize:50, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:12, margin:'1%', color:'grey'}}>+91 9109472941</div>
                                        </a>
                                    </Grid>
                                </Grid>
                                :
                                <Grid id="footer" item xs={12} style={{margin:'4%', display:'flex'}}>
                                    <Grid item xs={4}>
                                        <a href="https://www.google.com/maps/@26.214953,78.2055935,17.11z" target="blank" style={{textDecoration:'none'}}>
                                            <PinDropTwoToneIcon style={{fontSize:55, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:14, margin:'1%', color:'grey'}}>Gwalior, Madhya Pradesh</div>
                                            <div style={{fontSize:14, margin:'1%', color:'grey'}}>474011 - India</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <a href="mailto: guptaashwin695@gmail.com" target="blank" style={{textDecoration:'none'}}>
                                            <EmailTwoTone style={{fontSize:55, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:14, margin:'1%', color:'grey'}}>guptaashwin695@gmail.com</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <a href="tel:+919109472941" style={{textDecoration:'none'}}>
                                            <CallTwoToneIcon style={{fontSize:55, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:14, margin:'1%', color:'grey'}}>+91 9109472941</div>
                                        </a>
                                    </Grid>
                                </Grid>
                                :
                                <Grid id="footer" item xs={12} style={{margin:'5%', display:'flex'}}>
                                    <Grid item xs={4}>
                                        <a href="https://www.google.com/maps/@26.214953,78.2055935,17.11z" target="blank" style={{textDecoration:'none'}}>
                                            <PinDropTwoToneIcon style={{fontSize:60, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:16, margin:'1%', color:'grey'}}>Gwalior, Madhya Pradesh</div>
                                            <div style={{fontSize:16, margin:'1%', color:'grey'}}>474011 - India</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <a href="mailto: guptaashwin695@gmail.com" target="blank" style={{textDecoration:'none'}}>
                                            <EmailTwoTone style={{fontSize:60, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:16, margin:'1%', color:'grey'}}>guptaashwin695@gmail.com</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <a href="tel:+919109472941" style={{textDecoration:'none'}}>
                                            <CallTwoToneIcon style={{fontSize:60, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:16, margin:'1%', color:'grey'}}>+91 9109472941</div>
                                        </a>
                                    </Grid>
                                </Grid>
                                :
                                <Grid id="footer" item xs={12} style={{margin:'5%', display:'flex'}}>
                                    <Grid item xs={4}>
                                        <a href="https://www.google.com/maps/@26.214953,78.2055935,17.11z" target="blank" style={{textDecoration:'none'}}>
                                            <PinDropTwoToneIcon style={{fontSize:70, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:18, margin:'1.5%', color:'grey'}}>Gwalior, Madhya Pradesh</div>
                                            <div style={{fontSize:18, margin:'1.5%', color:'grey'}}>474011 - India</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <a href="mailto: guptaashwin695@gmail.com" target="blank" style={{textDecoration:'none'}}>
                                            <EmailTwoTone style={{fontSize:70, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:18, margin:'1.5%', color:'grey'}}>guptaashwin695@gmail.com</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <a href="tel:+919109472941" style={{textDecoration:'none'}}>
                                            <CallTwoToneIcon style={{fontSize:70, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:18, margin:'1.5%', color:'grey'}}>+91 9109472941</div>
                                        </a>
                                    </Grid>
                                </Grid>
                            }

                            {
                                lgmatches
                                ?
                                mdmatches
                                ?
                                smmatches
                                ?
                                sm550matches
                                ?
                                xsmatches
                                ?
                                <Grid item xs={12} style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                                    <Grid item xs={6} style={{display:'flex', justifyContent:'center', margin:'2% 0% 2% 0%'}}>
                                        <a href="https://www.facebook.com/ashwin.gupta.14203/" target="blank" style={{textDecoration:'none', margin:'3.5%'}}>
                                            <FacebookTwoToneIcon className="smicon" style={{fontSize:30}} />
                                        </a>
                                        <a href="https://www.instagram.com/ashwingupta695/" target="blank" style={{textDecoration:'none', margin:'3.5%'}}>
                                            <InstagramIcon className="smicon" style={{fontSize:30}} />
                                        </a>
                                        <a href="https://github.com/ashwin695" target="blank" style={{textDecoration:'none', margin:'3.5%'}}>
                                            <GitHubIcon className="smicon" style={{fontSize:30}} />
                                        </a>
                                        <a href="https://www.linkedin.com/in/ashwin-gupta-984a22212" target="blank" style={{textDecoration:'none', margin:'3.5%'}}>
                                            <LinkedInIcon className="smicon" style={{fontSize:30}} />
                                        </a>
                                        <a href="www.youtube.com" target="blank" style={{textDecoration:'none', margin:'3.5%'}}>
                                            <YouTubeIcon className="smicon" style={{fontSize:30}} />
                                        </a>
                                        <a href="https://twitter.com/AshwinG695" target="blank" style={{textDecoration:'none', margin:'3.5%'}}>
                                            <TwitterIcon className="smicon" style={{fontSize:30}} />
                                        </a>
                                    </Grid>
                                    <Grid item xs={12} style={{display:'flex', justifyContent:'center', flexDirection:'column', margin:'3%'}}>
                                        <div style={{margin:'0% 0% 3% 0%'}} className="xsfooter">&#64;&nbsp;Copyright 2022&nbsp;&nbsp; </div>
                                        <a href="https://www.linkedin.com/in/ashwin-gupta-984a22212" target="blank" style={{textDecoration:'none'}}>
                                            <div className="xsfooter xsln">&nbsp;&nbsp;Design By&nbsp;Ashwin Gupta</div>
                                        </a>
                                    </Grid>
                                </Grid>
                                :
                                <Grid item xs={12} style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                                    <Grid item xs={6} style={{display:'flex', justifyContent:'center'}}>
                                        <a href="https://www.facebook.com/ashwin.gupta.14203/" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <FacebookTwoToneIcon className="smicon" style={{fontSize:35}} />
                                        </a>
                                        <a href="https://www.instagram.com/ashwingupta695/" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <InstagramIcon className="smicon" style={{fontSize:35}} />
                                        </a>
                                        <a href="https://github.com/ashwin695" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <GitHubIcon className="smicon" style={{fontSize:35}} />
                                        </a>
                                        <a href="https://www.linkedin.com/in/ashwin-gupta-984a22212" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <LinkedInIcon className="smicon" style={{fontSize:35}} />
                                        </a>
                                        <a href="www.youtube.com" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <YouTubeIcon className="smicon" style={{fontSize:35}} />
                                        </a>
                                        <a href="https://twitter.com/AshwinG695" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <TwitterIcon className="smicon" style={{fontSize:35}} />
                                        </a>
                                    </Grid>
                                    <Grid item xs={12} style={{display:'flex', justifyContent:'center', margin:'2%'}}>
                                        <div className="sm550footer">&#64;&nbsp;</div>
                                        <div className="sm550footer">Copyright 2022&nbsp;&nbsp; | &nbsp;&nbsp; Design By&nbsp;</div>
                                        <a href="https://www.linkedin.com/in/ashwin-gupta-984a22212" target="blank" style={{textDecoration:'none'}}>
                                            <div className="sm550footer smln">Ashwin Gupta</div>
                                        </a>
                                    </Grid>
                                </Grid>
                                :
                                <Grid item xs={12} style={{display:'flex'}}>
                                    <Grid item xs={6} style={{display:'flex', justifyContent:'center', margin:'2%'}}>
                                        <div className="smfooter">&#64;&nbsp;</div>
                                        <div className="smfooter">Copyright 2022&nbsp;&nbsp; | &nbsp;&nbsp; Design By&nbsp;</div>
                                        <a href="https://www.linkedin.com/in/ashwin-gupta-984a22212" target="blank" style={{textDecoration:'none'}}>
                                            <div className="smfooter smln">Ashwin Gupta</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={6} style={{display:'flex', justifyContent:'center'}}>
                                        <a href="https://www.facebook.com/ashwin.gupta.14203/" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <FacebookTwoToneIcon className="smicon" style={{fontSize:30}} />
                                        </a>
                                        <a href="https://www.instagram.com/ashwingupta695/" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <InstagramIcon className="smicon" style={{fontSize:30}} />
                                        </a>
                                        <a href="https://github.com/ashwin695" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <GitHubIcon className="smicon" style={{fontSize:30}} />
                                        </a>
                                        <a href="https://www.linkedin.com/in/ashwin-gupta-984a22212" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <LinkedInIcon className="smicon" style={{fontSize:30}} />
                                        </a>
                                        <a href="www.youtube.com" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <YouTubeIcon className="smicon" style={{fontSize:30}} />
                                        </a>
                                        <a href="https://twitter.com/AshwinG695" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <TwitterIcon className="smicon" style={{fontSize:30}} />
                                        </a>
                                    </Grid>
                                </Grid>
                                :
                                <Grid item xs={12} style={{display:'flex'}}>
                                    <Grid item xs={6} style={{display:'flex', justifyContent:'center', margin:'2%'}}>
                                        <div className="mdfooter">&#64;&nbsp;</div>
                                        <div className="mdfooter">Copyright 2022&nbsp;&nbsp; | &nbsp;&nbsp; Design By&nbsp;</div>
                                        <a href="https://www.linkedin.com/in/ashwin-gupta-984a22212" target="blank" style={{textDecoration:'none'}}>
                                            <div className="mdfooter mdln">Ashwin Gupta</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={6} style={{display:'flex', justifyContent:'center'}}>
                                        <a href="https://www.facebook.com/ashwin.gupta.14203/" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <FacebookTwoToneIcon className="mdicon" style={{fontSize:35}} />
                                        </a>
                                        <a href="https://www.instagram.com/ashwingupta695/" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <InstagramIcon className="mdicon" style={{fontSize:35}} />
                                        </a>
                                        <a href="https://github.com/ashwin695" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <GitHubIcon className="mdicon" style={{fontSize:35}} />
                                        </a>
                                        <a href="https://www.linkedin.com/in/ashwin-gupta-984a22212" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <LinkedInIcon className="mdicon" style={{fontSize:35}} />
                                        </a>
                                        <a href="www.youtube.com" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <YouTubeIcon className="mdicon" style={{fontSize:35}} />
                                        </a>
                                        <a href="https://twitter.com/AshwinG695" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <TwitterIcon className="mdicon" style={{fontSize:35}} />
                                        </a>
                                    </Grid>
                                </Grid>
                                :
                                <Grid item xs={12} style={{display:'flex'}}>
                                    <Grid item xs={6} style={{display:'flex', justifyContent:'center', margin:'2%'}}>
                                        <div className="lgfooter">&#64;&nbsp;</div>
                                        <div className="lgfooter">Copyright 2022&nbsp;&nbsp; | &nbsp;&nbsp; Design By&nbsp;</div>
                                        <a href="https://www.linkedin.com/in/ashwin-gupta-984a22212" target="blank" style={{textDecoration:'none'}}>
                                            <div className="lgfooter lgln">Ashwin Gupta</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={6} style={{display:'flex', justifyContent:'center'}}>
                                        <a href="https://www.facebook.com/ashwin.gupta.14203/" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <FacebookTwoToneIcon className="lgicon" style={{fontSize:38}} />
                                        </a>
                                        <a href="https://www.instagram.com/ashwingupta695/" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <InstagramIcon className="lgicon" style={{fontSize:38}} />
                                        </a>
                                        <a href="https://github.com/ashwin695" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <GitHubIcon className="lgicon" style={{fontSize:38}} />
                                        </a>
                                        <a href="https://www.linkedin.com/in/ashwin-gupta-984a22212" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <LinkedInIcon className="lgicon" style={{fontSize:38}} />
                                        </a>
                                        <a href="www.youtube.com" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <YouTubeIcon className="lgicon" style={{fontSize:38}} />
                                        </a>
                                        <a href="https://twitter.com/AshwinG695" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <TwitterIcon className="lgicon" style={{fontSize:38}} />
                                        </a>
                                    </Grid>
                                </Grid>
                                :
                                <Grid item xs={12} style={{display:'flex'}}>
                                    <Grid item xs={6} style={{display:'flex', justifyContent:'center', margin:'2%'}}>
                                        <div className="footer">&#64;&nbsp;</div>
                                        <div className="footer">Copyright 2022&nbsp;&nbsp; | &nbsp;&nbsp; Design By&nbsp;</div>
                                        <a href="https://www.linkedin.com/in/ashwin-gupta-984a22212" target="blank" style={{textDecoration:'none'}}>
                                            <div className="footer ln">Ashwin Gupta</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={6} style={{display:'flex', justifyContent:'center'}}>
                                        <a href="https://www.facebook.com/ashwin.gupta.14203/" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <FacebookTwoToneIcon className="icon" style={{fontSize:40}} />
                                        </a>
                                        <a href="https://www.instagram.com/ashwingupta695/" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <InstagramIcon className="icon" style={{fontSize:40}} />
                                        </a>
                                        <a href="https://github.com/ashwin695" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <GitHubIcon className="icon" style={{fontSize:40}} />
                                        </a>
                                        <a href="https://www.linkedin.com/in/ashwin-gupta-984a22212" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <LinkedInIcon className="icon" style={{fontSize:40}} />
                                        </a>
                                        <a href="www.youtube.com" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <YouTubeIcon className="icon" style={{fontSize:40}} />
                                        </a>
                                        <a href="https://twitter.com/AshwinG695" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <TwitterIcon className="icon" style={{fontSize:40}} />
                                        </a>
                                    </Grid>
                                </Grid>
                            }
                        </Grid>
                    </Grid>
                </Grid>
                :
                <Grid item xs={12} className="smbg">
                    <Grid item xs={12} style={{marginTop:70}}>
                        {
                            mdmatches
                            ?
                            smmatches
                            ?
                            <>
                                <Grid item xs={12} className="smcontact">CONTACT</Grid>
                                <Grid item xs={12} className="smsub1">I'd Like To Hear From You.</Grid>
                                <Grid item xs={12} className="smsub2">Feel Free To Contact</Grid>
                            </>
                            :
                            <>
                                <Grid item xs={12} className="mdcontact">CONTACT</Grid>
                                <Grid item xs={12} className="mdsub1">I'd Like To Hear From You.</Grid>
                                <Grid item xs={12} className="mdsub2">Feel Free To Contact</Grid>
                            </>
                            :
                            <>
                                <Grid item xs={12} className="contact">CONTACT</Grid>
                                <Grid item xs={12} className="sub1">I'd Like To Hear From You.</Grid>
                                <Grid item xs={12} className="sub2">Feel Free To Contact</Grid>
                            </>
                        }


                        <Grid item xs={12} style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap'}}>
                            {
                                sm550matches
                                ?
                                <form ref={form} onSubmit={handleSubmitEmail} style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap'}}>
                                    <Grid item xs={12} style={{padding:5}}>
                                        <input type="text" placeholder="Name" name="from_name" />
                                    </Grid>
                                    <Grid item xs={12} style={{padding:5}}>
                                        <input type="email" placeholder="Email" name="from_email" />
                                    </Grid>
                                    <Grid item xs={12} style={{padding:5}}>
                                        <input type="text" placeholder="Subject" name="from_subject" />
                                    </Grid>
                                    <Grid item xs={12} style={{padding:5}}>
                                        <textarea rows="5" placeholder="Message" name="message" />
                                    </Grid>
                                    <Grid item xs={12} style={{padding:10}}>
                                        <input className="sbbtn" type="submit" value="SUBMIT"></input>
                                    </Grid>
                                    {
                                        mdmatches
                                        ?
                                            done 
                                            ?
                                            <Grid item xs={12} style={{fontSize:16, color:'#fff', fontWeight:600,}}>
                                                Thank You...!!!
                                            </Grid>
                                            : 
                                            <></>
                                        :
                                            done 
                                            ?
                                            <Grid item xs={12} style={{fontSize:18, color:'#fff', fontWeight:600,}}>
                                                Thank You...!!!
                                            </Grid>
                                            : 
                                            <></>
                                    }
                                </form>
                                :
                                <form ref={form} onSubmit={handleSubmitEmail} style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap'}}>
                                    <Grid item xs={10} style={{padding:10}}>
                                        <input type="text" placeholder="Name" name="from_name" />
                                    </Grid>
                                    <Grid item xs={10} style={{padding:10}}>
                                        <input type="email" placeholder="Email" name="from_email" />
                                    </Grid>
                                    <Grid item xs={10} style={{padding:10}}>
                                        <input type="text" placeholder="Subject" name="from_subject" />
                                    </Grid>
                                    <Grid item xs={10} style={{padding:10}}>
                                        <textarea rows="7" placeholder="Message" name="message" />
                                    </Grid>
                                    <Grid item xs={10} style={{padding:10}}>
                                        <input className="sbbtn" type="submit" value="SUBMIT"></input>
                                    </Grid>
                                    {
                                        mdmatches
                                        ?
                                            done 
                                            ?
                                            <Grid item xs={12} style={{fontSize:16, color:'#fff', fontWeight:600,}}>
                                                Thank You...!!!
                                            </Grid>
                                            : 
                                            <></>
                                        :
                                            done 
                                            ?
                                            <Grid item xs={12} style={{fontSize:18, color:'#fff', fontWeight:600,}}>
                                                Thank You...!!!
                                            </Grid>
                                            : 
                                            <></>
                                    }
                                </form>
                            }

                            {
                                lgmatches
                                ?
                                mdmatches
                                ?
                                smmatches
                                ?
                                sm550matches
                                ?
                                <Grid id="footer" item xs={12} style={{margin:'4%', display:'flex'}}>
                                    <Grid item xs={4}>
                                        <a href="https://www.google.com/maps/@26.214953,78.2055935,17.11z" target="blank" style={{textDecoration:'none'}}>
                                            <PinDropTwoToneIcon style={{fontSize:35, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:10, margin:'1%', color:'grey'}}>Gwalior, Madhya Pradesh</div>
                                            <div style={{fontSize:10, margin:'1%', color:'grey'}}>474011 - India</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <a href="mailto: guptaashwin695@gmail.com" target="blank" style={{textDecoration:'none'}}>
                                            <EmailTwoTone style={{fontSize:35, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:10, margin:'1%', color:'grey'}}>guptaashwin695@gmail.com</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <a href="tel:+919109472941" style={{textDecoration:'none'}}>
                                            <CallTwoToneIcon style={{fontSize:35, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:10, margin:'1%', color:'grey'}}>+91 9109472941</div>
                                        </a>
                                    </Grid>
                                </Grid>
                                :
                                <Grid id="footer" item xs={12} style={{margin:'4%', display:'flex'}}>
                                    <Grid item xs={4}>
                                        <a href="https://www.google.com/maps/@26.214953,78.2055935,17.11z" target="blank" style={{textDecoration:'none'}}>
                                            <PinDropTwoToneIcon style={{fontSize:50, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:12, margin:'1%', color:'grey'}}>Gwalior, Madhya Pradesh</div>
                                            <div style={{fontSize:12, margin:'1%', color:'grey'}}>474011 - India</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <a href="mailto: guptaashwin695@gmail.com" target="blank" style={{textDecoration:'none'}}>
                                            <EmailTwoTone style={{fontSize:50, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:12, margin:'1%', color:'grey'}}>guptaashwin695@gmail.com</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <a href="tel:+919109472941" style={{textDecoration:'none'}}>
                                            <CallTwoToneIcon style={{fontSize:50, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:12, margin:'1%', color:'grey'}}>+91 9109472941</div>
                                        </a>
                                    </Grid>
                                </Grid>
                                :
                                <Grid id="footer" item xs={12} style={{margin:'4%', display:'flex'}}>
                                    <Grid item xs={4}>
                                        <a href="https://www.google.com/maps/@26.214953,78.2055935,17.11z" target="blank" style={{textDecoration:'none'}}>
                                            <PinDropTwoToneIcon style={{fontSize:55, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:14, margin:'1%', color:'grey'}}>Gwalior, Madhya Pradesh</div>
                                            <div style={{fontSize:14, margin:'1%', color:'grey'}}>474011 - India</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <a href="mailto: guptaashwin695@gmail.com" target="blank" style={{textDecoration:'none'}}>
                                            <EmailTwoTone style={{fontSize:55, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:14, margin:'1%', color:'grey'}}>guptaashwin695@gmail.com</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <a href="tel:+919109472941" style={{textDecoration:'none'}}>
                                            <CallTwoToneIcon style={{fontSize:55, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:14, margin:'1%', color:'grey'}}>+91 9109472941</div>
                                        </a>
                                    </Grid>
                                </Grid>
                                :
                                <Grid id="footer" item xs={12} style={{margin:'5%', display:'flex'}}>
                                    <Grid item xs={4}>
                                        <a href="https://www.google.com/maps/@26.214953,78.2055935,17.11z" target="blank" style={{textDecoration:'none'}}>
                                            <PinDropTwoToneIcon style={{fontSize:60, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:16, margin:'1%', color:'grey'}}>Gwalior, Madhya Pradesh</div>
                                            <div style={{fontSize:16, margin:'1%', color:'grey'}}>474011 - India</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <a href="mailto: guptaashwin695@gmail.com" target="blank" style={{textDecoration:'none'}}>
                                            <EmailTwoTone style={{fontSize:60, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:16, margin:'1%', color:'grey'}}>guptaashwin695@gmail.com</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <a href="tel:+919109472941" style={{textDecoration:'none'}}>
                                            <CallTwoToneIcon style={{fontSize:60, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:16, margin:'1%', color:'grey'}}>+91 9109472941</div>
                                        </a>
                                    </Grid>
                                </Grid>
                                :
                                <Grid id="footer" item xs={12} style={{margin:'5%', display:'flex'}}>
                                    <Grid item xs={4}>
                                        <a href="https://www.google.com/maps/@26.214953,78.2055935,17.11z" target="blank" style={{textDecoration:'none'}}>
                                            <PinDropTwoToneIcon style={{fontSize:70, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:18, margin:'1.5%', color:'grey'}}>Gwalior, Madhya Pradesh</div>
                                            <div style={{fontSize:18, margin:'1.5%', color:'grey'}}>474011 - India</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <a href="mailto: guptaashwin695@gmail.com" target="blank" style={{textDecoration:'none'}}>
                                            <EmailTwoTone style={{fontSize:70, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:18, margin:'1.5%', color:'grey'}}>guptaashwin695@gmail.com</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <a href="tel:+919109472941" style={{textDecoration:'none'}}>
                                            <CallTwoToneIcon style={{fontSize:70, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:18, margin:'1.5%', color:'grey'}}>+91 9109472941</div>
                                        </a>
                                    </Grid>
                                </Grid>
                            }

                            {
                                lgmatches
                                ?
                                mdmatches
                                ?
                                smmatches
                                ?
                                sm550matches
                                ?
                                <Grid item xs={12} style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                                    <Grid item xs={6} style={{display:'flex', justifyContent:'center'}}>
                                        <a href="https://www.facebook.com/ashwin.gupta.14203/" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <FacebookTwoToneIcon className="smicon" style={{fontSize:35}} />
                                        </a>
                                        <a href="https://www.instagram.com/ashwingupta695/" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <InstagramIcon className="smicon" style={{fontSize:35}} />
                                        </a>
                                        <a href="https://github.com/ashwin695" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <GitHubIcon className="smicon" style={{fontSize:35}} />
                                        </a>
                                        <a href="https://www.linkedin.com/in/ashwin-gupta-984a22212" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <LinkedInIcon className="smicon" style={{fontSize:35}} />
                                        </a>
                                        <a href="www.youtube.com" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <YouTubeIcon className="smicon" style={{fontSize:35}} />
                                        </a>
                                        <a href="https://twitter.com/AshwinG695" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <TwitterIcon className="smicon" style={{fontSize:35}} />
                                        </a>
                                    </Grid>
                                    <Grid item xs={12} style={{display:'flex', justifyContent:'center', margin:'2%'}}>
                                        <div className="sm550footer">&#64;&nbsp;</div>
                                        <div className="sm550footer">Copyright 2022&nbsp;&nbsp; | &nbsp;&nbsp; Design By&nbsp;</div>
                                        <a href="https://www.linkedin.com/in/ashwin-gupta-984a22212" target="blank" style={{textDecoration:'none'}}>
                                            <div className="sm550footer smln">Ashwin Gupta</div>
                                        </a>
                                    </Grid>
                                </Grid>
                                :
                                <Grid item xs={12} style={{display:'flex'}}>
                                    <Grid item xs={6} style={{display:'flex', justifyContent:'center', margin:'2%'}}>
                                        <div className="smfooter">&#64;&nbsp;</div>
                                        <div className="smfooter">Copyright 2022&nbsp;&nbsp; | &nbsp;&nbsp; Design By&nbsp;</div>
                                        <a href="https://www.linkedin.com/in/ashwin-gupta-984a22212" target="blank" style={{textDecoration:'none'}}>
                                            <div className="smfooter smln">Ashwin Gupta</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={6} style={{display:'flex', justifyContent:'center'}}>
                                        <a href="https://www.facebook.com/ashwin.gupta.14203/" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <FacebookTwoToneIcon className="smicon" style={{fontSize:30}} />
                                        </a>
                                        <a href="https://www.instagram.com/ashwingupta695/" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <InstagramIcon className="smicon" style={{fontSize:30}} />
                                        </a>
                                        <a href="https://github.com/ashwin695" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <GitHubIcon className="smicon" style={{fontSize:30}} />
                                        </a>
                                        <a href="https://www.linkedin.com/in/ashwin-gupta-984a22212" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <LinkedInIcon className="smicon" style={{fontSize:30}} />
                                        </a>
                                        <a href="www.youtube.com" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <YouTubeIcon className="smicon" style={{fontSize:30}} />
                                        </a>
                                        <a href="https://twitter.com/AshwinG695" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <TwitterIcon className="smicon" style={{fontSize:30}} />
                                        </a>
                                    </Grid>
                                </Grid>
                                :
                                <Grid item xs={12} style={{display:'flex'}}>
                                    <Grid item xs={6} style={{display:'flex', justifyContent:'center', margin:'2%'}}>
                                        <div className="mdfooter">&#64;&nbsp;</div>
                                        <div className="mdfooter">Copyright 2022&nbsp;&nbsp; | &nbsp;&nbsp; Design By&nbsp;</div>
                                        <a href="https://www.linkedin.com/in/ashwin-gupta-984a22212" target="blank" style={{textDecoration:'none'}}>
                                            <div className="mdfooter mdln">Ashwin Gupta</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={6} style={{display:'flex', justifyContent:'center'}}>
                                        <a href="https://www.facebook.com/ashwin.gupta.14203/" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <FacebookTwoToneIcon className="mdicon" style={{fontSize:35}} />
                                        </a>
                                        <a href="https://www.instagram.com/ashwingupta695/" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <InstagramIcon className="mdicon" style={{fontSize:35}} />
                                        </a>
                                        <a href="https://github.com/ashwin695" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <GitHubIcon className="mdicon" style={{fontSize:35}} />
                                        </a>
                                        <a href="https://www.linkedin.com/in/ashwin-gupta-984a22212" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <LinkedInIcon className="mdicon" style={{fontSize:35}} />
                                        </a>
                                        <a href="www.youtube.com" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <YouTubeIcon className="mdicon" style={{fontSize:35}} />
                                        </a>
                                        <a href="https://twitter.com/AshwinG695" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <TwitterIcon className="mdicon" style={{fontSize:35}} />
                                        </a>
                                    </Grid>
                                </Grid>
                                :
                                <Grid item xs={12} style={{display:'flex'}}>
                                    <Grid item xs={6} style={{display:'flex', justifyContent:'center', margin:'2%'}}>
                                        <div className="lgfooter">&#64;&nbsp;</div>
                                        <div className="lgfooter">Copyright 2022&nbsp;&nbsp; | &nbsp;&nbsp; Design By&nbsp;</div>
                                        <a href="https://www.linkedin.com/in/ashwin-gupta-984a22212" target="blank" style={{textDecoration:'none'}}>
                                            <div className="lgfooter lgln">Ashwin Gupta</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={6} style={{display:'flex', justifyContent:'center'}}>
                                        <a href="https://www.facebook.com/ashwin.gupta.14203/" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <FacebookTwoToneIcon className="lgicon" style={{fontSize:38}} />
                                        </a>
                                        <a href="https://www.instagram.com/ashwingupta695/" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <InstagramIcon className="lgicon" style={{fontSize:38}} />
                                        </a>
                                        <a href="https://github.com/ashwin695" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <GitHubIcon className="lgicon" style={{fontSize:38}} />
                                        </a>
                                        <a href="https://www.linkedin.com/in/ashwin-gupta-984a22212" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <LinkedInIcon className="lgicon" style={{fontSize:38}} />
                                        </a>
                                        <a href="www.youtube.com" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <YouTubeIcon className="lgicon" style={{fontSize:38}} />
                                        </a>
                                        <a href="https://twitter.com/AshwinG695" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <TwitterIcon className="lgicon" style={{fontSize:38}} />
                                        </a>
                                    </Grid>
                                </Grid>
                                :
                                <Grid item xs={12} style={{display:'flex'}}>
                                    <Grid item xs={6} style={{display:'flex', justifyContent:'center', margin:'2%'}}>
                                        <div className="footer">&#64;&nbsp;</div>
                                        <div className="footer">Copyright 2022&nbsp;&nbsp; | &nbsp;&nbsp; Design By&nbsp;</div>
                                        <a href="https://www.linkedin.com/in/ashwin-gupta-984a22212" target="blank" style={{textDecoration:'none'}}>
                                            <div className="footer ln">Ashwin Gupta</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={6} style={{display:'flex', justifyContent:'center'}}>
                                        <a href="https://www.facebook.com/ashwin.gupta.14203/" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <FacebookTwoToneIcon className="icon" style={{fontSize:40}} />
                                        </a>
                                        <a href="https://www.instagram.com/ashwingupta695/" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <InstagramIcon className="icon" style={{fontSize:40}} />
                                        </a>
                                        <a href="https://github.com/ashwin695" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <GitHubIcon className="icon" style={{fontSize:40}} />
                                        </a>
                                        <a href="https://www.linkedin.com/in/ashwin-gupta-984a22212" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <LinkedInIcon className="icon" style={{fontSize:40}} />
                                        </a>
                                        <a href="www.youtube.com" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <YouTubeIcon className="icon" style={{fontSize:40}} />
                                        </a>
                                        <a href="https://twitter.com/AshwinG695" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <TwitterIcon className="icon" style={{fontSize:40}} />
                                        </a>
                                    </Grid>
                                </Grid>
                            }
                        </Grid>
                    </Grid>
                </Grid>
                :
                <Grid item xs={12} className="mdbg">
                    <Grid item xs={12} style={{marginTop:70}}>
                        {
                            mdmatches
                            ?
                            smmatches
                            ?
                            <>
                                <Grid item xs={12} className="smcontact">CONTACT</Grid>
                                <Grid item xs={12} className="smsub1">I'd Like To Hear From You.</Grid>
                                <Grid item xs={12} className="smsub2">Feel Free To Contact</Grid>
                            </>
                            :
                            <>
                                <Grid item xs={12} className="mdcontact">CONTACT</Grid>
                                <Grid item xs={12} className="mdsub1">I'd Like To Hear From You.</Grid>
                                <Grid item xs={12} className="mdsub2">Feel Free To Contact</Grid>
                            </>
                            :
                            <>
                                <Grid item xs={12} className="contact">CONTACT</Grid>
                                <Grid item xs={12} className="sub1">I'd Like To Hear From You.</Grid>
                                <Grid item xs={12} className="sub2">Feel Free To Contact</Grid>
                            </>
                        }


                        <Grid item xs={12} style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap'}}>
                            <form ref={form} onSubmit={handleSubmitEmail} style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap'}}>
                                <Grid item xs={10} style={{padding:10}}>
                                    <input type="text" placeholder="Name" name="from_name" />
                                </Grid>
                                <Grid item xs={10} style={{padding:10}}>
                                    <input type="email" placeholder="Email" name="from_email" />
                                </Grid>
                                <Grid item xs={10} style={{padding:10}}>
                                    <input type="text" placeholder="Subject" name="from_subject" />
                                </Grid>
                                <Grid item xs={10} style={{padding:10}}>
                                    <textarea rows="7" placeholder="Message" name="message" />
                                </Grid>
                                <Grid item xs={10} style={{padding:10}}>
                                    <input className="sbbtn" type="submit" value="SUBMIT"></input>
                                </Grid>
                                {
                                    mdmatches
                                    ?
                                        done 
                                        ?
                                        <Grid item xs={12} style={{fontSize:16, color:'#fff', fontWeight:600,}}>
                                            Thank You...!!!
                                        </Grid>
                                        : 
                                        <></>
                                    :
                                        done 
                                        ?
                                        <Grid item xs={12} style={{fontSize:18, color:'#fff', fontWeight:600,}}>
                                            Thank You...!!!
                                        </Grid>
                                        : 
                                        <></>
                                }
                            </form>

                            {
                                lgmatches
                                ?
                                mdmatches
                                ?
                                <Grid id="footer" item xs={12} style={{margin:'4%', display:'flex'}}>
                                    <Grid item xs={4}>
                                        <a href="https://www.google.com/maps/@26.214953,78.2055935,17.11z" target="blank" style={{textDecoration:'none'}}>
                                            <PinDropTwoToneIcon style={{fontSize:55, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:14, margin:'1%', color:'grey'}}>Gwalior, Madhya Pradesh</div>
                                            <div style={{fontSize:14, margin:'1%', color:'grey'}}>474011 - India</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <a href="mailto: guptaashwin695@gmail.com" target="blank" style={{textDecoration:'none'}}>
                                            <EmailTwoTone style={{fontSize:55, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:14, margin:'1%', color:'grey'}}>guptaashwin695@gmail.com</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <a href="tel:+919109472941" style={{textDecoration:'none'}}>
                                            <CallTwoToneIcon style={{fontSize:55, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:14, margin:'1%', color:'grey'}}>+91 9109472941</div>
                                        </a>
                                    </Grid>
                                </Grid>
                                :
                                <Grid id="footer" item xs={12} style={{margin:'5%', display:'flex'}}>
                                    <Grid item xs={4}>
                                        <a href="https://www.google.com/maps/@26.214953,78.2055935,17.11z" target="blank" style={{textDecoration:'none'}}>
                                            <PinDropTwoToneIcon style={{fontSize:60, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:16, margin:'1%', color:'grey'}}>Gwalior, Madhya Pradesh</div>
                                            <div style={{fontSize:16, margin:'1%', color:'grey'}}>474011 - India</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <a href="mailto: guptaashwin695@gmail.com" target="blank" style={{textDecoration:'none'}}>
                                            <EmailTwoTone style={{fontSize:60, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:16, margin:'1%', color:'grey'}}>guptaashwin695@gmail.com</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <a href="tel:+919109472941" style={{textDecoration:'none'}}>
                                            <CallTwoToneIcon style={{fontSize:60, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:16, margin:'1%', color:'grey'}}>+91 9109472941</div>
                                        </a>
                                    </Grid>
                                </Grid>
                                :
                                <Grid id="footer" item xs={12} style={{margin:'5%', display:'flex'}}>
                                    <Grid item xs={4}>
                                        <a href="https://www.google.com/maps/@26.214953,78.2055935,17.11z" target="blank" style={{textDecoration:'none'}}>
                                            <PinDropTwoToneIcon style={{fontSize:70, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:18, margin:'1.5%', color:'grey'}}>Gwalior, Madhya Pradesh</div>
                                            <div style={{fontSize:18, margin:'1.5%', color:'grey'}}>474011 - India</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <a href="mailto: guptaashwin695@gmail.com" target="blank" style={{textDecoration:'none'}}>
                                            <EmailTwoTone style={{fontSize:70, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:18, margin:'1.5%', color:'grey'}}>guptaashwin695@gmail.com</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <a href="tel:+919109472941" style={{textDecoration:'none'}}>
                                            <CallTwoToneIcon style={{fontSize:70, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:18, margin:'1.5%', color:'grey'}}>+91 9109472941</div>
                                        </a>
                                    </Grid>
                                </Grid>
                            }

                            {
                                lgmatches
                                ?
                                mdmatches
                                ?
                                <Grid item xs={12} style={{display:'flex'}}>
                                    <Grid item xs={6} style={{display:'flex', justifyContent:'center', margin:'2%'}}>
                                        <div className="mdfooter">&#64;&nbsp;</div>
                                        <div className="mdfooter">Copyright 2022&nbsp;&nbsp; | &nbsp;&nbsp; Design By&nbsp;</div>
                                        <a href="https://www.linkedin.com/in/ashwin-gupta-984a22212" target="blank" style={{textDecoration:'none'}}>
                                            <div className="mdfooter mdln">Ashwin Gupta</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={6} style={{display:'flex', justifyContent:'center'}}>
                                        <a href="https://www.facebook.com/ashwin.gupta.14203/" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <FacebookTwoToneIcon className="mdicon" style={{fontSize:35}} />
                                        </a>
                                        <a href="https://www.instagram.com/ashwingupta695/" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <InstagramIcon className="mdicon" style={{fontSize:35}} />
                                        </a>
                                        <a href="https://github.com/ashwin695" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <GitHubIcon className="mdicon" style={{fontSize:35}} />
                                        </a>
                                        <a href="https://www.linkedin.com/in/ashwin-gupta-984a22212" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <LinkedInIcon className="mdicon" style={{fontSize:35}} />
                                        </a>
                                        <a href="www.youtube.com" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <YouTubeIcon className="mdicon" style={{fontSize:35}} />
                                        </a>
                                        <a href="https://twitter.com/AshwinG695" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <TwitterIcon className="mdicon" style={{fontSize:35}} />
                                        </a>
                                    </Grid>
                                </Grid>
                                :
                                <Grid item xs={12} style={{display:'flex'}}>
                                    <Grid item xs={6} style={{display:'flex', justifyContent:'center', margin:'2%'}}>
                                        <div className="lgfooter">&#64;&nbsp;</div>
                                        <div className="lgfooter">Copyright 2022&nbsp;&nbsp; | &nbsp;&nbsp; Design By&nbsp;</div>
                                        <a href="https://www.linkedin.com/in/ashwin-gupta-984a22212" target="blank" style={{textDecoration:'none'}}>
                                            <div className="lgfooter lgln">Ashwin Gupta</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={6} style={{display:'flex', justifyContent:'center'}}>
                                        <a href="https://www.facebook.com/ashwin.gupta.14203/" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <FacebookTwoToneIcon className="lgicon" style={{fontSize:38}} />
                                        </a>
                                        <a href="https://www.instagram.com/ashwingupta695/" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <InstagramIcon className="lgicon" style={{fontSize:38}} />
                                        </a>
                                        <a href="https://github.com/ashwin695" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <GitHubIcon className="lgicon" style={{fontSize:38}} />
                                        </a>
                                        <a href="https://www.linkedin.com/in/ashwin-gupta-984a22212" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <LinkedInIcon className="lgicon" style={{fontSize:38}} />
                                        </a>
                                        <a href="www.youtube.com" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <YouTubeIcon className="lgicon" style={{fontSize:38}} />
                                        </a>
                                        <a href="https://twitter.com/AshwinG695" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <TwitterIcon className="lgicon" style={{fontSize:38}} />
                                        </a>
                                    </Grid>
                                </Grid>
                                :
                                <Grid item xs={12} style={{display:'flex'}}>
                                    <Grid item xs={6} style={{display:'flex', justifyContent:'center', margin:'2%'}}>
                                        <div className="footer">&#64;&nbsp;</div>
                                        <div className="footer">Copyright 2022&nbsp;&nbsp; | &nbsp;&nbsp; Design By&nbsp;</div>
                                        <a href="https://www.linkedin.com/in/ashwin-gupta-984a22212" target="blank" style={{textDecoration:'none'}}>
                                            <div className="footer ln">Ashwin Gupta</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={6} style={{display:'flex', justifyContent:'center'}}>
                                        <a href="https://www.facebook.com/ashwin.gupta.14203/" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <FacebookTwoToneIcon className="icon" style={{fontSize:40}} />
                                        </a>
                                        <a href="https://www.instagram.com/ashwingupta695/" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <InstagramIcon className="icon" style={{fontSize:40}} />
                                        </a>
                                        <a href="https://github.com/ashwin695" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <GitHubIcon className="icon" style={{fontSize:40}} />
                                        </a>
                                        <a href="https://www.linkedin.com/in/ashwin-gupta-984a22212" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <LinkedInIcon className="icon" style={{fontSize:40}} />
                                        </a>
                                        <a href="www.youtube.com" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <YouTubeIcon className="icon" style={{fontSize:40}} />
                                        </a>
                                        <a href="https://twitter.com/AshwinG695" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <TwitterIcon className="icon" style={{fontSize:40}} />
                                        </a>
                                    </Grid>
                                </Grid>
                            }
                        </Grid>
                    </Grid>
                </Grid>
                :
                <Grid item xs={12} className="bg">
                    <Grid item xs={12} style={{marginTop:70}}>
                        {
                            mdmatches
                            ?
                            <>
                                <Grid item xs={12} className="mdcontact">CONTACT</Grid>
                                <Grid item xs={12} className="mdsub1">I'd Like To Hear From You.</Grid>
                                <Grid item xs={12} className="mdsub2">Feel Free To Contact</Grid>
                            </>
                            :
                            <>
                                <Grid item xs={12} className="contact">CONTACT</Grid>
                                <Grid item xs={12} className="sub1">I'd Like To Hear From You.</Grid>
                                <Grid item xs={12} className="sub2">Feel Free To Contact</Grid>
                            </>
                        }


                        <Grid item xs={12} style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap'}}>
                            <form ref={form} onSubmit={handleSubmitEmail} style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap'}}>
                                <Grid item xs={10} style={{padding:10}}>
                                    <input type="text" placeholder="Name" name="from_name" />
                                </Grid>
                                <Grid item xs={10} style={{padding:10}}>
                                    <input type="email" placeholder="Email" name="from_email" />
                                </Grid>
                                <Grid item xs={10} style={{padding:10}}>
                                    <input type="text" placeholder="Subject" name="from_subject" />
                                </Grid>
                                <Grid item xs={10} style={{padding:10}}>
                                    <textarea rows="7" placeholder="Message" name="message" />
                                </Grid>
                                <Grid item xs={10} style={{padding:10}}>
                                    <input className="sbbtn" type="submit" value="SUBMIT"></input>
                                </Grid>
                                {
                                    mdmatches
                                    ?
                                        done 
                                        ?
                                        <Grid item xs={12} style={{fontSize:16, color:'#fff', fontWeight:600,}}>
                                            Thank You...!!!
                                        </Grid>
                                        : 
                                        <></>
                                    :
                                        done 
                                        ?
                                        <Grid item xs={12} style={{fontSize:18, color:'#fff', fontWeight:600,}}>
                                            Thank You...!!!
                                        </Grid>
                                        : 
                                        <></>
                                }
                            </form>

                            {
                                lgmatches
                                ?
                                mdmatches
                                ?
                                <Grid id="footer" item xs={12} style={{margin:'4%', display:'flex'}}>
                                    <Grid item xs={4}>
                                        <a href="https://www.google.com/maps/@26.214953,78.2055935,17.11z" target="blank" style={{textDecoration:'none'}}>
                                            <PinDropTwoToneIcon style={{fontSize:50, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:15, margin:'1%', color:'grey'}}>Gwalior, Madhya Pradesh</div>
                                            <div style={{fontSize:15, margin:'1%', color:'grey'}}>474011 - India</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <a href="mailto: guptaashwin695@gmail.com" target="blank" style={{textDecoration:'none'}}>
                                            <EmailTwoTone style={{fontSize:50, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:15, margin:'1%', color:'grey'}}>guptaashwin695@gmail.com</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <a href="tel:+919109472941" style={{textDecoration:'none'}}>
                                            <CallTwoToneIcon style={{fontSize:50, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:15, margin:'1%', color:'grey'}}>+91 9109472941</div>
                                        </a>
                                    </Grid>
                                </Grid>
                                :
                                <Grid id="footer" item xs={12} style={{margin:'5%', display:'flex'}}>
                                    <Grid item xs={4}>
                                        <a href="https://www.google.com/maps/@26.214953,78.2055935,17.11z" target="blank" style={{textDecoration:'none'}}>
                                            <PinDropTwoToneIcon style={{fontSize:60, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:16, margin:'1%', color:'grey'}}>Gwalior, Madhya Pradesh</div>
                                            <div style={{fontSize:16, margin:'1%', color:'grey'}}>474011 - India</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <a href="mailto: guptaashwin695@gmail.com" target="blank" style={{textDecoration:'none'}}>
                                            <EmailTwoTone style={{fontSize:60, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:16, margin:'1%', color:'grey'}}>guptaashwin695@gmail.com</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <a href="tel:+919109472941" style={{textDecoration:'none'}}>
                                            <CallTwoToneIcon style={{fontSize:60, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:16, margin:'1%', color:'grey'}}>+91 9109472941</div>
                                        </a>
                                    </Grid>
                                </Grid>
                                :
                                <Grid id="footer" item xs={12} style={{margin:'5%', display:'flex'}}>
                                    <Grid item xs={4}>
                                        <a href="https://www.google.com/maps/@26.214953,78.2055935,17.11z" target="blank" style={{textDecoration:'none'}}>
                                            <PinDropTwoToneIcon style={{fontSize:70, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:18, margin:'1.5%', color:'grey'}}>Gwalior, Madhya Pradesh</div>
                                            <div style={{fontSize:18, margin:'1.5%', color:'grey'}}>474011 - India</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <a href="mailto: guptaashwin695@gmail.com" target="blank" style={{textDecoration:'none'}}>
                                            <EmailTwoTone style={{fontSize:70, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:18, margin:'1.5%', color:'grey'}}>guptaashwin695@gmail.com</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <a href="tel:+919109472941" style={{textDecoration:'none'}}>
                                            <CallTwoToneIcon style={{fontSize:70, margin:'3%', color:'#fff'}} />
                                            <div style={{fontSize:18, margin:'1.5%', color:'grey'}}>+91 9109472941</div>
                                        </a>
                                    </Grid>
                                </Grid>
                            }

                            {
                                lgmatches
                                ?
                                <Grid item xs={12} style={{display:'flex'}}>
                                    <Grid item xs={6} style={{display:'flex', justifyContent:'center', margin:'2%'}}>
                                        <div className="lgfooter">&#64;&nbsp;</div>
                                        <div className="lgfooter">Copyright 2022&nbsp;&nbsp; | &nbsp;&nbsp; Design By&nbsp;</div>
                                        <a href="https://www.linkedin.com/in/ashwin-gupta-984a22212" target="blank" style={{textDecoration:'none'}}>
                                            <div className="footer lgln">Ashwin Gupta</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={6} style={{display:'flex', justifyContent:'center'}}>
                                        <a href="https://www.facebook.com/ashwin.gupta.14203/" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <FacebookTwoToneIcon className="lgicon" style={{fontSize:38}} />
                                        </a>
                                        <a href="https://www.instagram.com/ashwingupta695/" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <InstagramIcon className="lgicon" style={{fontSize:38}} />
                                        </a>
                                        <a href="https://github.com/ashwin695" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <GitHubIcon className="lgicon" style={{fontSize:38}} />
                                        </a>
                                        <a href="https://www.linkedin.com/in/ashwin-gupta-984a22212" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <LinkedInIcon className="lgicon" style={{fontSize:38}} />
                                        </a>
                                        <a href="www.youtube.com" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <YouTubeIcon className="lgicon" style={{fontSize:38}} />
                                        </a>
                                        <a href="https://twitter.com/AshwinG695" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <TwitterIcon className="lgicon" style={{fontSize:38}} />
                                        </a>
                                    </Grid>
                                </Grid>
                                :
                                <Grid item xs={12} style={{display:'flex'}}>
                                    <Grid item xs={6} style={{display:'flex', justifyContent:'center', margin:'2%'}}>
                                        <div className="footer">&#64;&nbsp;</div>
                                        <div className="footer">Copyright 2022&nbsp;&nbsp; | &nbsp;&nbsp; Design By&nbsp;</div>
                                        <a href="https://www.linkedin.com/in/ashwin-gupta-984a22212" target="blank" style={{textDecoration:'none'}}>
                                            <div className="footer ln">Ashwin Gupta</div>
                                        </a>
                                    </Grid>
                                    <Grid item xs={6} style={{display:'flex', justifyContent:'center'}}>
                                        <a href="https://www.facebook.com/ashwin.gupta.14203/" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <FacebookTwoToneIcon className="icon" style={{fontSize:40}} />
                                        </a>
                                        <a href="https://www.instagram.com/ashwingupta695/" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <InstagramIcon className="icon" style={{fontSize:40}} />
                                        </a>
                                        <a href="https://github.com/ashwin695" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <GitHubIcon className="icon" style={{fontSize:40}} />
                                        </a>
                                        <a href="https://www.linkedin.com/in/ashwin-gupta-984a22212" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <LinkedInIcon className="icon" style={{fontSize:40}} />
                                        </a>
                                        <a href="www.youtube.com" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <YouTubeIcon className="icon" style={{fontSize:40}} />
                                        </a>
                                        <a href="https://twitter.com/AshwinG695" target="blank" style={{textDecoration:'none', margin:'2%'}}>
                                            <TwitterIcon className="icon" style={{fontSize:40}} />
                                        </a>
                                    </Grid>
                                </Grid>
                            }
                        </Grid>
                    </Grid>
                </Grid>
            }
        </Grid>
    )
}
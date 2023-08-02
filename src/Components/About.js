import React from "react";
import { Grid } from "@mui/material";
import "../CSS/About.css"
import { Link } from "react-scroll";
import useMediaQuery from '@mui/material/useMediaQuery';

export default function About() {

    const matches = useMediaQuery('(max-width:1388px)')

    const normalmatches = useMediaQuery('(max-width:1100px)')

    const lgmatches = useMediaQuery('(max-width:930px)')
    
    const mdmatches = useMediaQuery('(max-width:913px)');
    
    const smmatches = useMediaQuery('(max-width:649px)');
    
    const xsmatches = useMediaQuery('(max-width:383px)');
    
    const xxsmatches = useMediaQuery('(max-width:350px)');
    

    return(
        <div>
            {   matches
                ?
                normalmatches
                ?
                lgmatches
                ?
                mdmatches 
                ?
                smmatches
                ?
                xsmatches
                ?
                xxsmatches
                ?
                <Grid container spacing={0} id="about" className="mroot">
                    <Grid item xs={12} className="mleft" >
                        <Grid item xs={12} className="mleftbox">
                            <div className="xxsname">Ashwin Gupta</div>
                        </Grid>
                        <Grid item xs={12} className="about">
                            <div className="xxsintro">I'm a Electronics and Communication (ECE) B.Tech. student from Rustamji Institute of Technology with excellent academic background and diverse skillset. Experienced in Web and Android Development. I am versed in ReactJs and NodeJs with Rest Api's, HTML, CSS and Javascript</div>
                            <div className="xxsintro">Flair for creating Impressive Visuals. Can Lead and Execute all Visual Design stages from concept to completion. Self-Motivated and Proactive. Can work well in a Team.</div>
                            <div className="xxsintro"> Be Happy, It Drives People Crazy...</div>
                        </Grid>
                        {/* <Grid item xs={10} className="arrow">
                            <Link to="footer" spy={true} smooth={true} offset={15} duration={18000}>
                                <img src="downarrow.png" className="arrowblk" style={{position:'absolute', width:'6%', cursor:'pointer'}} />
                            </Link>
                        </Grid> */}
                    </Grid>

                    <Grid item xs={12} className="mright">
                        <Grid item xs={12} className="mimgbg"></Grid>
                        <Grid item xs={12} style={{display:'flex', justifyContent:'center'}}>
                            <img src="me8.png" className="mimg"/>
                        </Grid>
                    </Grid>
                </Grid>
                :
                <Grid container spacing={0} id="about" className="mroot">
                    <Grid item xs={12} className="mleft" >
                        <Grid item xs={12} className="mleftbox">
                            <div className="xsname">Ashwin Gupta</div>
                        </Grid>
                        <Grid item xs={12} className="about">
                            <div className="xsintro">I'm a Electronics and Communication (ECE) B.Tech. student from Rustamji Institute of Technology with excellent academic background and diverse skillset. Experienced in Web and Android Development. I am versed in ReactJs and NodeJs with Rest Api's, HTML, CSS and Javascript</div>
                            <div className="xsintro">Flair for creating Impressive Visuals. Can Lead and Execute all Visual Design stages from concept to completion. Self-Motivated and Proactive. Can work well in a Team.</div>
                            <div className="xsintro"> Be Happy, It Drives People Crazy...</div>
                        </Grid>
                        {/* <Grid item xs={10} className="arrow">
                            <Link to="footer" spy={true} smooth={true} offset={15} duration={18000}>
                                <img src="downarrow.png" className="arrowblk" style={{position:'absolute', width:'6%', cursor:'pointer'}} />
                            </Link>
                        </Grid> */}
                    </Grid>

                    <Grid item xs={12} className="mright">
                        <Grid item xs={12} className="mimgbg"></Grid>
                        <Grid item xs={12} style={{display:'flex', justifyContent:'center'}}>
                            <img src="me8.png" className="xsimg"/>
                        </Grid>
                    </Grid>
                </Grid>
                :
                <Grid container spacing={0} id="about" className="mroot">
                    <Grid item xs={12} className="mleft" >
                        <Grid item xs={12} className="mleftbox">
                            <div className="sname">Ashwin Gupta</div>
                        </Grid>
                        <Grid item xs={12} className="about">
                            <div className="sintro">I'm a Electronics and Communication (ECE) B.Tech. student from Rustamji Institute of Technology with excellent academic background and diverse skillset. Experienced in Web and Android Development. I am versed in ReactJs and NodeJs with Rest Api's, HTML, CSS and Javascript</div>
                            <div className="sintro">Flair for creating Impressive Visuals. Can Lead and Execute all Visual Design stages from concept to completion. Self-Motivated and Proactive. Can work well in a Team.</div>
                            <div className="sintro"> Be Happy, It Drives People Crazy...</div>
                        </Grid>
                        {/* <Grid item xs={10} className="arrow">
                            <Link to="footer" spy={true} smooth={true} offset={15} duration={18000}>
                                <img src="downarrow.png" className="arrowblk" style={{position:'absolute', width:'6%', cursor:'pointer'}} />
                            </Link>
                        </Grid> */}
                    </Grid>

                    <Grid item xs={12} className="mright">
                        <Grid item xs={12} className="mimgbg"></Grid>
                        <Grid item xs={12} style={{display:'flex', justifyContent:'center'}}>
                            <img src="me8.png" className="mimg"/>
                        </Grid>
                    </Grid>
                </Grid>
            :
                <Grid container spacing={0} id="about" className="mroot">
                    <Grid item xs={12} className="mleft" >
                        <Grid item xs={12} className="mleftbox">
                            <div className="mname">Ashwin Gupta</div>
                        </Grid>
                        <Grid item xs={12} className="about">
                            <div className="mintro">I'm a Electronics and Communication (ECE) B.Tech. student from Rustamji Institute of Technology with excellent academic background and diverse skillset. Experienced in Web and Android Development. I am versed in ReactJs and NodeJs with Rest Api's, HTML, CSS and Javascript</div>
                            <div className="mintro">Flair for creating Impressive Visuals. Can Lead and Execute all Visual Design stages from concept to completion. Self-Motivated and Proactive. Can work well in a Team.</div>
                            <div className="mintro"> Be Happy, It Drives People Crazy...</div>
                        </Grid>
                        {/* <Grid item xs={10} className="arrow">
                            <Link to="footer" spy={true} smooth={true} offset={15} duration={18000}>
                                <img src="downarrow.png" className="arrowblk" style={{position:'absolute', width:'6%', cursor:'pointer'}} />
                            </Link>
                        </Grid> */}
                    </Grid>

                    <Grid item xs={12} className="mright">
                        <Grid item xs={12} className="mimgbg"></Grid>
                        <Grid item xs={12} style={{display:'flex', justifyContent:'center'}}>
                            <img src="me3.png" className="mimg"/>
                        </Grid>
                    </Grid>
                </Grid>
                :
                <Grid container spacing={0} id="about" className="root">
                <Grid item xs={6} className="left">
                    <Grid item xs={12} className="leftbox">
                        <div className="lgname">Ashwin Gupta</div>
                    </Grid>
                    <Grid item xs={12} className="about">
                        <div className="lgintro">I'm a Electronics and Communication (ECE) B.Tech. student from Rustamji Institute of Technology with excellent academic background and diverse skillset. Experienced in Web and Android Development. I am versed in ReactJs and NodeJs with Rest Api's, HTML, CSS and Javascript</div>
                        <div className="lgintro">Flair for creating Impressive Visuals. Can Lead and Execute all Visual Design stages from concept to completion. Self-Motivated and Proactive. Can work well in a Team.</div>
                        <div className="lgintro"> Be Happy, It Drives People Crazy...</div>
                    </Grid>
                    <Grid item xs={10} className="arrow">
                        <Link to="footer" spy={true} smooth={true} offset={15} duration={18000}>
                            <img src="downarrow.png" className="arrowblk" style={{position:'absolute', width:'6%', cursor:'pointer'}} />
                        </Link>
                    </Grid>
                </Grid>

                <Grid item xs={6} className="right">
                    <div className="lgimgbg"></div>
                    <div>
                        <img src="me6.png" className="lgimg"/>
                    </div>
                </Grid>
            </Grid>
                :
                <Grid container spacing={0} id="about" className="root">
                <Grid item xs={6} className="left">
                    <Grid item xs={12} className="leftbox">
                        <div className="name">Ashwin Gupta</div>
                    </Grid>
                    <Grid item xs={12} className="about">
                        <div className="intro">I'm a Electronics and Communication (ECE) B.Tech. student from Rustamji Institute of Technology with excellent academic background and diverse skillset. Experienced in Web and Android Development. I am versed in ReactJs and NodeJs with Rest Api's, HTML, CSS and Javascript</div>
                        <div className="intro">Flair for creating Impressive Visuals. Can Lead and Execute all Visual Design stages from concept to completion. Self-Motivated and Proactive. Can work well in a Team.</div>
                        <div className="intro"> Be Happy, It Drives People Crazy...</div>
                    </Grid>
                    <Grid item xs={10} className="arrow">
                        <Link to="footer" spy={true} smooth={true} offset={15} duration={18000}>
                            <img src="downarrow.png" className="arrowblk" style={{position:'absolute', width:'6%', cursor:'pointer'}} />
                        </Link>
                    </Grid>
                </Grid>

                <Grid item xs={6} className="right">
                    <div className="imgbg"></div>
                    <div>
                        <img src="me5.png" className="matchesimg"/>
                    </div>
                </Grid>
            </Grid>
            :
            <Grid container spacing={0} id="about" className="root">
            <Grid item xs={6} className="left">
                <Grid item xs={12} className="leftbox">
                    <div className="name">Ashwin Gupta</div>
                </Grid>
                <Grid item xs={12} className="about">
                    <div className="intro">I'm a Electronics and Communication (ECE) B.Tech. student from Rustamji Institute of Technology with excellent academic background and diverse skillset. Experienced in Web and Android Development. I am versed in ReactJs and NodeJs with Rest Api's, HTML, CSS and Javascript</div>
                    <div className="intro">Flair for creating Impressive Visuals. Can Lead and Execute all Visual Design stages from concept to completion. Self-Motivated and Proactive. Can work well in a Team.</div>
                    <div className="intro"> Be Happy, It Drives People Crazy...</div>
                </Grid>
                <Grid item xs={10} className="arrow">
                    <Link to="footer" spy={true} smooth={true} offset={15} duration={18000}>
                        <img src="downarrow.png" className="arrowblk" style={{position:'absolute', width:'6%', cursor:'pointer'}} />
                    </Link>
                </Grid>
            </Grid>

            <Grid item xs={6} className="right">
                <div className="imgbg"></div>
                <div>
                    <img src="me3.png" className="matchesimg"/>
                </div>
            </Grid>
        </Grid>
            :
                <Grid container spacing={0} id="about" className="root">
                <Grid item xs={6} className="left">
                    <Grid item xs={12} className="leftbox">
                        <div className="name">Ashwin Gupta</div>
                    </Grid>
                    <Grid item xs={12} className="about">
                        <div className="intro">I'm a Electronics and Communication (ECE) B.Tech. student from Rustamji Institute of Technology with excellent academic background and diverse skillset. Experienced in Web and Android Development. I am versed in ReactJs and NodeJs with Rest Api's, HTML, CSS and Javascript</div>
                        <div className="intro">Flair for creating Impressive Visuals. Can Lead and Execute all Visual Design stages from concept to completion. Self-Motivated and Proactive. Can work well in a Team.</div>
                        <div className="intro"> Be Happy, It Drives People Crazy...</div>
                    </Grid>
                    <Grid item xs={10} className="arrow">
                        <Link to="footer" spy={true} smooth={true} offset={15} duration={18000}>
                            <img src="downarrow.png" className="arrowblk" style={{position:'absolute', width:'6%', cursor:'pointer'}} />
                        </Link>
                    </Grid>
                </Grid>

                <Grid item xs={6} className="right">
                    <div className="imgbg"></div>
                    <div>
                        <img src="me3.png" className="img"/>
                    </div>
                </Grid>
            </Grid>
            }
            
        </div>
    )
}
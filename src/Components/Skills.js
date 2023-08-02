import React from "react";
import { Grid, Paper } from "@mui/material";
import "../CSS/Skills.css"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Skills() {

    const theme = useTheme();
    const lgmatches = useMediaQuery('(max-width:1050px)')
    
    const mdmatches = useMediaQuery('(max-width:904px)')
    
    const md750matches = useMediaQuery('(max-width:750px)')
    
    const smmatches = useMediaQuery(theme.breakpoints.down('sm'))
   
    const xsmatches = useMediaQuery('(max-width:500px)')
    
    const xxsmatches = useMediaQuery('(max-width:375px)')
   
    const xxs315matches = useMediaQuery('(max-width:315px)')
    

    return(
        <div>
            {
                lgmatches
                ?
                mdmatches
                ?
                md750matches
                ?
                smmatches
                ?
                xsmatches
                ?
                xxsmatches
                ?
                xxs315matches
                ?
                <Grid id="skills" container spacing={2} style={{backgroundColor:'#ecf0f1', height:'140vh'}}>
                    <Grid item xs={12} style={{display:'flex', alignItems:'center', justifyContent:'center', marginTop:10, padding:10}}>
                        <div className="xxs315head">Skills</div>
                    </Grid>

                    <Grid item xs={12} style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap'}}>
                        <Grid item xs={5.5} style={{margin:3}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:20}} elevation={15}>
                                <img src="c.png" width="70%" />
                            </Paper>
                        </Grid>
                        <Grid item xs={5.5} style={{margin:3}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:32}} elevation={15}>
                                <img src="arduino.png" width="105%" />
                            </Paper>
                        </Grid>
                        <Grid item xs={5.5} style={{margin:3}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:5}} elevation={15}>
                                <img src="aws.png" width="80%" />
                            </Paper>
                        </Grid>
                        <Grid item xs={5.5} style={{margin:3}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:8}} elevation={15}>
                                <img src="html.png" width="80%" />
                            </Paper>
                        </Grid>
                        <Grid item xs={5.5} style={{margin:3}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:8}} elevation={15}>
                                <img src="css.png" width="80%" />{/*  width-68 */}
                            </Paper>
                        </Grid>
                        <Grid item xs={5.5} style={{margin:3}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:25}} elevation={15}>
                                <img src="node.png" width="113%" />
                            </Paper>
                        </Grid>
                        <Grid item xs={5.5} style={{margin:3}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:14}} elevation={15}>
                                <img src="react.png" width="68%" /> {/* width-58 */}
                            </Paper>
                        </Grid>
                        <Grid item xs={5.5} style={{margin:3}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:8}} elevation={15}>
                                <img src="mysql.png" width="125%" />
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                :
                <Grid id="skills" container spacing={2} style={{backgroundColor:'#ecf0f1', height:'140vh'}}>
                    <Grid item xs={12} style={{display:'flex', alignItems:'center', justifyContent:'center', marginTop:10, padding:10}}>
                        <div className="xshead">Skills</div>
                    </Grid>

                    <Grid item xs={12} style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap'}}>
                        <Grid item xs={5} style={{margin:5}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:20}} elevation={15}>
                                <img src="c.png" width="70%" />
                            </Paper>
                        </Grid>
                        <Grid item xs={5} style={{margin:5}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:32}} elevation={15}>
                                <img src="arduino.png" width="105%" />
                            </Paper>
                        </Grid>
                        <Grid item xs={5} style={{margin:5}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:5}} elevation={15}>
                                <img src="aws.png" width="80%" />
                            </Paper>
                        </Grid>
                        <Grid item xs={5} style={{margin:5}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:8}} elevation={15}>
                                <img src="html.png" width="80%" />
                            </Paper>
                        </Grid>
                        <Grid item xs={5} style={{margin:5}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:8}} elevation={15}>
                                <img src="css.png" width="80%" />{/*  width-68 */}
                            </Paper>
                        </Grid>
                        <Grid item xs={5} style={{margin:5}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:25}} elevation={15}>
                                <img src="node.png" width="113%" />
                            </Paper>
                        </Grid>
                        <Grid item xs={5} style={{margin:5}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:14}} elevation={15}>
                                <img src="react.png" width="68%" /> {/* width-58 */}
                            </Paper>
                        </Grid>
                        <Grid item xs={5} style={{margin:5}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:8}} elevation={15}>
                                <img src="mysql.png" width="125%" />
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                :
                <Grid id="skills" container spacing={2} style={{backgroundColor:'#ecf0f1', height:'155vh'}}>
                    <Grid item xs={12} style={{display:'flex', alignItems:'center', justifyContent:'center', marginTop:10, padding:10}}>
                        <div className="xshead">Skills</div>
                    </Grid>

                    <Grid item xs={12} style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap'}}>
                        <Grid item xs={5} style={{margin:10}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:20}} elevation={15}>
                                <img src="c.png" width="70%" />
                            </Paper>
                        </Grid>
                        <Grid item xs={5} style={{margin:10}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:32}} elevation={15}>
                                <img src="arduino.png" width="105%" />
                            </Paper>
                        </Grid>
                        <Grid item xs={5} style={{margin:10}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:5}} elevation={15}>
                                <img src="aws.png" width="80%" />
                            </Paper>
                        </Grid>
                        <Grid item xs={5} style={{margin:10}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:8}} elevation={15}>
                                <img src="html.png" width="80%" />
                            </Paper>
                        </Grid>
                        <Grid item xs={5} style={{margin:10}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:8}} elevation={15}>
                                <img src="css.png" width="80%" />{/*  width-68 */}
                            </Paper>
                        </Grid>
                        <Grid item xs={5} style={{margin:10}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:25}} elevation={15}>
                                <img src="node.png" width="113%" />
                            </Paper>
                        </Grid>
                        <Grid item xs={5} style={{margin:10}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:14}} elevation={15}>
                                <img src="react.png" width="68%" /> {/* width-58 */}
                            </Paper>
                        </Grid>
                        <Grid item xs={5} style={{margin:10}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:8}} elevation={15}>
                                <img src="mysql.png" width="125%" />
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                :
                <Grid id="skills" container spacing={2} style={{backgroundColor:'#ecf0f1', height:'120vh'}}>
                    <Grid item xs={12} style={{display:'flex', alignItems:'center', justifyContent:'center', marginTop:35, padding:10}}>
                        <div className="smhead">Skills</div>
                    </Grid>

                    <Grid item xs={12} style={{margin:10, display:'flex', justifyContent:'space-around', flexWrap:'wrap'}}>
                        <Grid item xs={3} style={{margin:10}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:20}} elevation={15}>
                                <img src="c.png" width="70%" />
                            </Paper>
                        </Grid>
                        <Grid item xs={3} style={{margin:10}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:32}} elevation={15}>
                                <img src="arduino.png" width="105%" />
                            </Paper>
                        </Grid>
                        <Grid item xs={3} style={{margin:10}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:5}} elevation={15}>
                                <img src="aws.png" width="80%" />
                            </Paper>
                        </Grid>
                        <Grid item xs={3} style={{margin:10}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:8}} elevation={15}>
                                <img src="html.png" width="80%" />
                            </Paper>
                        </Grid>
                        <Grid item xs={3} style={{margin:10}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:8}} elevation={15}>
                                <img src="css.png" width="80%" />{/*  width-68 */}
                            </Paper>
                        </Grid>
                        <Grid item xs={3} style={{margin:10}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:25}} elevation={15}>
                                <img src="node.png" width="113%" />
                            </Paper>
                        </Grid>
                        <Grid item xs={3} style={{margin:10}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:14}} elevation={15}>
                                <img src="react.png" width="68%" /> {/* width-58 */}
                            </Paper>
                        </Grid>
                        <Grid item xs={3} style={{margin:10}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:8}} elevation={15}>
                                <img src="mysql.png" width="125%" />
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                :
                <Grid id="skills" container spacing={2} style={{backgroundColor:'#ecf0f1', height:'145vh'}}>
                    <Grid item xs={12} style={{display:'flex', alignItems:'center', justifyContent:'center', marginTop:50, padding:10}}>
                        <div className="mdhead">Skills</div>
                    </Grid>

                    <Grid item xs={12} style={{margin:10, display:'flex', justifyContent:'space-around', flexWrap:'wrap'}}>
                        <Grid item xs={3} style={{margin:18}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:20}} elevation={15}>
                                <img src="c.png" width="70%" />
                            </Paper>
                        </Grid>
                        <Grid item xs={3} style={{margin:18}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:32}} elevation={15}>
                                <img src="arduino.png" width="105%" />
                            </Paper>
                        </Grid>
                        <Grid item xs={3} style={{margin:18}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:5}} elevation={15}>
                                <img src="aws.png" width="80%" />
                            </Paper>
                        </Grid>
                        <Grid item xs={3} style={{margin:18}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:8}} elevation={15}>
                                <img src="html.png" width="80%" />
                            </Paper>
                        </Grid>
                        <Grid item xs={3} style={{margin:18}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:8}} elevation={15}>
                                <img src="css.png" width="80%" />{/*  width-68 */}
                            </Paper>
                        </Grid>
                        <Grid item xs={3} style={{margin:18}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:25}} elevation={15}>
                                <img src="node.png" width="113%" />
                            </Paper>
                        </Grid>
                        <Grid item xs={3} style={{margin:18}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:14}} elevation={15}>
                                <img src="react.png" width="68%" /> {/* width-58 */}
                            </Paper>
                        </Grid>
                        <Grid item xs={3} style={{margin:18}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:8}} elevation={15}>
                                <img src="mysql.png" width="125%" />
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                :
                <Grid id="skills" container spacing={2} style={{backgroundColor:'#ecf0f1', height:'145vh'}}>
                    <Grid item xs={12} style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:90, padding:10}}>
                        <div className="mdhead">Skills</div>
                    </Grid>

                    <Grid item xs={12} style={{margin:20, display:'flex', justifyContent:'space-around', flexWrap:'wrap'}}>
                        <Grid item xs={3} style={{margin:18}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:20}} elevation={15}>
                                <img src="c.png" width="70%" />
                            </Paper>
                        </Grid>
                        <Grid item xs={3} style={{margin:18}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:32}} elevation={15}>
                                <img src="arduino.png" width="105%" />
                            </Paper>
                        </Grid>
                        <Grid item xs={3} style={{margin:18}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:5}} elevation={15}>
                                <img src="aws.png" width="80%" />
                            </Paper>
                        </Grid>
                        <Grid item xs={3} style={{margin:18}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:8}} elevation={15}>
                                <img src="html.png" width="80%" />
                            </Paper>
                        </Grid>
                        <Grid item xs={3} style={{margin:18}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:8}} elevation={15}>
                                <img src="css.png" width="80%" />{/*  width-68 */}
                            </Paper>
                        </Grid>
                        <Grid item xs={3} style={{margin:18}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:25}} elevation={15}>
                                <img src="node.png" width="113%" />
                            </Paper>
                        </Grid>
                        <Grid item xs={3} style={{margin:18}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:14}} elevation={15}>
                                <img src="react.png" width="68%" /> {/* width-58 */}
                            </Paper>
                        </Grid>
                        <Grid item xs={3} style={{margin:18}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:8}} elevation={15}>
                                <img src="mysql.png" width="125%" />
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                :
                <Grid id="skills" container spacing={2} style={{backgroundColor:'#ecf0f1', height:'100vh'}}>
                    <Grid item xs={12} style={{display:'flex', justifyContent:'center', marginTop:90, padding:10}}>
                        <div className="head">Skills</div>
                    </Grid>

                    <Grid item xs={12} style={{margin:20, display:'flex', justifyContent:'space-around', flexWrap:'wrap'}}>
                        <Grid item xs={2.5} style={{margin:18}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:20}} elevation={15}>
                                <img src="c.png" width="70%" />
                            </Paper>
                        </Grid>
                        <Grid item xs={2.5} style={{margin:18}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:32}} elevation={15}>
                                <img src="arduino.png" width="105%" />
                            </Paper>
                        </Grid>
                        <Grid item xs={2.5} style={{margin:18}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:5}} elevation={15}>
                                <img src="aws.png" width="80%" />
                            </Paper>
                        </Grid>
                        <Grid item xs={2.5} style={{margin:18}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:8}} elevation={15}>
                                <img src="html.png" width="80%" />
                            </Paper>
                        </Grid>
                        <Grid item xs={2.5} style={{margin:18}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:8}} elevation={15}>
                                <img src="css.png" width="80%" />{/*  width-68 */}
                            </Paper>
                        </Grid>
                        <Grid item xs={2.5} style={{margin:18}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:25}} elevation={15}>
                                <img src="node.png" width="113%" />
                            </Paper>
                        </Grid>
                        <Grid item xs={2.5} style={{margin:18}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:14}} elevation={15}>
                                <img src="react.png" width="68%" /> {/* width-58 */}
                            </Paper>
                        </Grid>
                        <Grid item xs={2.5} style={{margin:18}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:8}} elevation={15}>
                                <img src="mysql.png" width="125%" />
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                :
                <Grid id="skills" container spacing={2} style={{backgroundColor:'#ecf0f1', height:'110vh'}}>
                    <Grid item xs={12} style={{display:'flex', justifyContent:'center', marginTop:90, padding:10}}>
                        <div className="head">Skills</div>
                    </Grid>

                    <Grid item xs={12} style={{margin:10, display:'flex', justifyContent:'space-around', flexWrap:'wrap'}}>
                        <Grid item xs={2.5} style={{margin:18}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:23}} elevation={15}>
                                <img src="c.png" width="51%" />
                            </Paper>
                        </Grid>
                        <Grid item xs={2.5} style={{margin:18}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:38}} elevation={15}>
                                <img src="arduino.png" width="74%" /> {/* width-86 */}
                            </Paper>
                        </Grid>
                        <Grid item xs={2.5} style={{margin:18}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:8}} elevation={15}>
                                <img src="aws.png" width="60%" /> {/* width-86 */}
                            </Paper>
                        </Grid>
                        <Grid item xs={2.5} style={{margin:18}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:12}} elevation={15}>
                                <img src="html.png" width="60%" /> {/* width - 68 */}
                            </Paper>
                        </Grid>
                        <Grid item xs={2.5} style={{margin:18}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:12}} elevation={15}>
                                <img src="css.png" width="60%" />{/*  width-68 */}
                            </Paper>
                        </Grid>
                        <Grid item xs={2.5} style={{margin:18}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:26}} elevation={15}>
                                <img src="node.png" width="83%" /> {/* width-94 */}
                            </Paper>
                        </Grid>
                        <Grid item xs={2.5} style={{margin:18}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:11}} elevation={15}>
                                <img src="react.png" width="52%" /> {/* width-58 */}
                            </Paper>
                        </Grid>
                        <Grid item xs={2.5} style={{margin:18}} className="paper">
                            <Paper style={{display:'flex', justifyContent:'center', padding:9}} elevation={15}>
                                <img src="mysql.png" width="96%" /> {/* width-106 */}
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            }
        </div>
    )
}
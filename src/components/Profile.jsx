import { Grid, Container, Typography, Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import SelfPic from "../static/img/selfpic.jpg";
import "../styles/Profile.css";

function Profile() {
    const navigate = useNavigate();

    const onClick = () => {
        navigate("/myportfolio/experience");
    };

    return (
        <Grid
            container
            spacing={2}
            sx={{ marginTop: "1px", textAlign: "center" }}
        >
            <Grid
                item
                xs={12}
                md={12}
                lg={12}
                sx={{ backgroundColor: "custom.main" }}
            >
                <Typography
                    variant="h4"
                    align="center"
                    fontFamily={"Roboto"}
                    fontStyle={"italic"}
                    color={"white"}
                    gutterBottom
                >
                    Profile
                </Typography>
            </Grid>

            <Container sx={{ margin: "20px" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <Grid item xs={12} md={8}>
                            <Typography
                                variant="h5"
                                align="left"
                                color={"black"}
                                sx={{ fontFamily: "Roboto" }}
                            >
                                Education
                            </Typography>

                            <Grid container sx={{ margin: "5px" }}>
                                <Grid item xs={12} md={4}>
                                    <Typography
                                        variant="h6"
                                        align="left"
                                        sx={{ fontFamily: "Roboto" }}
                                    >
                                        03/2020:
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <Typography
                                        variant="h6"
                                        align="left"
                                        sx={{ fontFamily: "Roboto" }}
                                    >
                                        Graduate from The University of Tokyo,{" "}
                                        <br />
                                        Bachelor of Education in Physical and
                                        Health Education
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid container sx={{ margin: "5px" }}>
                                <Grid item xs={12} md={4}>
                                    <Typography
                                        variant="h6"
                                        align="left"
                                        sx={{ fontFamily: "Roboto" }}
                                    >
                                        12/2024:
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <Typography
                                        variant="h6"
                                        align="left"
                                        sx={{ fontFamily: "Roboto" }}
                                    >
                                        Graduated from the University of
                                        Queensland, <br /> Master of Information
                                        Technology, <br /> Research Group: UQ
                                        Cyber
                                    </Typography>
                                </Grid>
                            </Grid>

                            {/* Add more text entries here as in the screenshot */}
                        </Grid>

                        <Grid item xs={12} md={8}>
                            <Typography
                                variant="h5"
                                align="left"
                                color={"black"}
                                sx={{ fontFamily: "Roboto" }}
                            >
                                Work Experience
                            </Typography>
                            <Grid container sx={{ margin: "5px" }}>
                                <Grid item xs={12} md={4}>
                                    <Typography
                                        variant="h6"
                                        align="left"
                                        sx={{ fontFamily: "Roboto" }}
                                    >
                                        05/2019 - 02/2020:
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <Typography
                                        variant="h6"
                                        align="left"
                                        sx={{ fontFamily: "Roboto" }}
                                    >
                                        Software Engineer Intern | Nexceed Inc.
                                        (Tokyo, Japan)
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid container sx={{ margin: "5px" }}>
                                <Grid item xs={12} md={4}>
                                    <Typography
                                        variant="h6"
                                        align="left"
                                        sx={{ fontFamily: "Roboto" }}
                                    >
                                        04/2020 - 06/2022:
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <Typography
                                        variant="h6"
                                        align="left"
                                        sx={{ fontFamily: "Roboto" }}
                                    >
                                        Software Engineer | Amiya Inc. (Tokyo,
                                        Japan)
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid container sx={{ margin: "5px" }}>
                                <Grid item xs={12} md={4}>
                                    <Typography
                                        variant="h6"
                                        align="left"
                                        sx={{ fontFamily: "Roboto" }}
                                    >
                                        12/2022 - Current:
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <Typography
                                        variant="h6"
                                        align="left"
                                        sx={{ fontFamily: "Roboto" }}
                                    >
                                        Software Engineer | Gaiax Inc. (Tokyo,
                                        Japan, Remote from Australia)
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container sx={{ margin: "5px" }}>
                                <Grid item xs={12} md={4}>
                                    <Typography
                                        variant="h6"
                                        align="left"
                                        sx={{ fontFamily: "Roboto" }}
                                    >
                                        01/2025 - Current:
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <Typography
                                        variant="h6"
                                        align="left"
                                        sx={{ fontFamily: "Roboto" }}
                                    >
                                        Chief Technology Officer | Secure Vertex
                                        Inc. (Tokyo, Japan)
                                    </Typography>
                                </Grid>
                            </Grid>
                            {/* Add more text entries here as in the screenshot */}
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        {/* Right side image */}
                        <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
                            <Avatar
                                onClick={onClick}
                                alt="Takao"
                                src={SelfPic}
                                sx={{
                                    width: 300,
                                    height: 300,
                                    margin: "0 auto",
                                    cursor: "pointer",
                                }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Grid item xs={12} md={12} lg={12}>
                <Typography variant="h5" align="center" fontFamily={"Roboto"}>
                    Motto
                </Typography>
                <Typography
                    variant="h6"
                    align="center"
                    fontFamily={"Roboto"}
                    sx={{ fontStyle: "italic" }}
                >
                    "新しい技術を生み、表に出していくことこそが、私の技術者としての自己実現であり、また、私なりの社会への貢献である"
                </Typography>
                <Typography
                    variant="h6"
                    align="center"
                    fontFamily={"Roboto"}
                    sx={{ fontStyle: "italic" }}
                >
                    "Creating new technologies and bringing them to the
                    forefront is my way of realizing myself as an engineer, and
                    it is also my contribution to society."
                </Typography>
                <Typography>- 金子勇</Typography>
            </Grid>
        </Grid>
    );
}

export default Profile;

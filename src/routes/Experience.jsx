import {
    Typography,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Button,
} from "@mui/material";
import PersonalPicture from "../static/img/selfpic.jpg";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import Avatar from "@mui/material/Avatar";
import SurfingIcon from "@mui/icons-material/Surfing";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import CvPdf from "../static/assets/cv.pdf";

function Personal() {
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "10px",
                }}
            >
                <Typography variant="h3" fontStyle={"italic"}>
                    Experiences
                </Typography>
                <a href={CvPdf} download="cv.pdf">
                    <Button className="custom-button">
                        <FileDownloadIcon />
                        Download CV
                    </Button>
                </a>
            </div>
            <Grid container spacing={5}>
                <Grid item md={5} lg={5}>
                    {/* to display when bigger than md size. */}
                    <Avatar
                        alt="small-self-picture"
                        src={PersonalPicture}
                        sx={{
                            transparent: 0.5,
                            minHeight: "400px",
                            minWidth: "400px",
                            display: { xs: "none", md: "flex" },
                            margin: "30px",
                        }}
                    ></Avatar>

                    <Avatar
                        alt="small-self-picture"
                        src={PersonalPicture}
                        sx={{
                            minWidth: 300,
                            minHeight: 300,
                            display: { xs: "flex", md: "none" },
                            margin: "10px",
                        }}
                    />
                </Grid>

                <Grid item sx={{ margin: 5 }}>
                    <Typography
                        variant="h5"
                        align="left"
                        sx={{ textDecoration: "underline" }}
                    >
                        Development of a Platform for Storing LiDAR Sensor Data
                        Using Distributed Ledger Technology
                    </Typography>
                    <Typography align="left">
                        In the development of autonomous vehicles, 3D map
                        information is used for path planning. However, if the
                        terrain changes due to construction or disasters, the
                        map information may become outdated, potentially
                        hindering the operation of autonomous vehicles. To solve
                        this issue, we developed a platform for storing and
                        updating LiDAR sensor data on a distributed ledger in
                        real-time as part of a commissioned research project by
                        the National Institute of Information and Communications
                        Technology (NICT). The project received the highest
                        evaluation ranking from NICT in 2023.
                    </Typography>
                    <Typography align="left">
                        This platform guarantees the integrity of data by
                        storing the LiDAR data on a distributed ledger, ensuring
                        that the data is not tampered with. Since data for
                        autonomous driving is directly related to human lives,
                        the reliability of the data is crucial. By using
                        distributed ledger technology, we can prevent data
                        tampering and enhance the reliability of the data.
                    </Typography>
                    <Typography align="left">
                        Additionally, to further improve data reliability, it is
                        important to increase the number of nodes that manage
                        the ledger. In this research and development project, we
                        developed a system in which nodes autonomously
                        proliferate to run the distributed ledger at each
                        intersection. This system is currently pending patent
                        approval.
                    </Typography>
                    <Typography align="left">
                        One remaining challenge is to see how accurately 3D map
                        information can be reconstructed when real-time LiDAR
                        sensor data from moving vehicles is stored on the
                        distributed ledger.
                    </Typography>
                </Grid>
                <Grid item sx={{ margin: 5 }}>
                    <Typography
                        variant="h5"
                        align="left"
                        sx={{ textDecoration: "underline" }}
                    >
                        Research on De-anonymization of Bitcoin Transactions
                        Used for Ransomware Payments Using Llama2
                    </Typography>
                    <Typography align="left"></Typography>
                    <Typography align="left">
                        With the recent rise of cryptocurrency, the damage
                        caused by ransomware has been increasing. Ransomware is
                        a type of malware that infects computers, encrypts data,
                        and demands a decryption key. Victims are required to
                        make payments to obtain the decryption key. Due to its
                        high level of anonymity, Bitcoin is often used for these
                        payments.
                    </Typography>
                    <Typography align="left">
                        Existing research has focused on identifying
                        transactions used for ransomware payments by analyzing
                        Bitcoin transactions. However, due to the high level of
                        anonymity in Bitcoin transactions, it is challenging to
                        identify them. In this research, we propose a method
                        that leverages large language models to aggregate
                        external information and de-anonymize Bitcoin
                        transactions.
                    </Typography>
                    <Typography align="left">
                        The research results are expected to be published in a
                        future paper.
                    </Typography>
                </Grid>

                <Grid item sx={{ margin: 5 }}>
                    <Typography
                        variant="h5"
                        align="left"
                        sx={{ textDecoration: "underline" }}
                    >
                        Development of an Unauthorized Access Detection System
                        Using Windows Event Logs
                    </Typography>
                    <Typography align="left"></Typography>
                    <Typography align="left">
                        To improve the information security of companies, I was
                        responsible for developing an unauthorized access
                        detection system using Windows Event Logs. This system
                        collects information recorded in the Windows Event Logs
                        and detects abnormal access.
                    </Typography>
                    <Typography align="left">
                        In this system development, I developed an agent for
                        collecting Windows Event Logs from Windows servers
                        provided on AWS. This system is now being offered to
                        companies and has been adopted by many enterprises.
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default Personal;

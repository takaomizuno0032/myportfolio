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
                        分散台帳技術を用いた、LiDARセンサーデータの保存プラットフォームの開発
                    </Typography>
                    <Typography align="left">
                        自動運転車の開発において、走路決定のために3Dの地図情報が利用されています。しかし、工事や災害により地形が変化した場合、地図情報が古くなり、自動運転車の走行に支障をきたす可能性があります。
                        この問題を解決するために、LiDARセンサーデータを分散台帳上に保存し、リアルタイムで更新するプラットフォームを情報通信研究機構の委託研究として開発しました。2023年度のNICTによる評価では最高ランクを獲得しています。
                    </Typography>
                    <Typography align="left">
                        このプラットフォームでは、LiDARから取得したデータを分散台帳上に保存することで、データが改竄されていないことを保証しています。自動運転用のデータは人命にも関わるのでデータの信頼性が非常に重要です。
                        そのため、分散台帳技術を用いることで、データの改竄を防ぎ、データの信頼性を高めることができます。
                    </Typography>
                    <Typography align="left">
                        また、データの信頼性向上のために、台帳を管理するためのノードが増えていくことが重要です。この研究開発では、交差点ごとに自律分散的に分散台帳を動かすためのノードが増殖していく仕組みを開発しました。この仕組みは現在特許出願中です。
                    </Typography>
                    <Typography align="left">
                        走行中の車両からリアルタイムで取得したLiDARセンサーデータを分散台帳上に保存した時に、3D地図情報をどれだけ高精度で再構築できるかが課題として残っています。
                    </Typography>
                </Grid>

                <Grid item sx={{ margin: 5 }}>
                    <Typography
                        variant="h5"
                        align="left"
                        sx={{ textDecoration: "underline" }}
                    >
                        Llama2を用いた、Ransomware 支払いに用いられたBitcoin
                        Transactionの非匿名化の研究
                    </Typography>
                    <Typography align="left"></Typography>
                    <Typography align="left">
                        近年の仮想通貨の普及により、Ransomwareによる被害が増加しています。Ransomwareは、コンピュータに感染し、データを暗号化して復号化キーを要求するマルウェアです。
                        被害者は、復号化キーを入手するために、攻撃者に支払いを行う必要があります。その時Bitcoinは匿名性の高さにより、支払いの際に利用されることが多いです。
                    </Typography>
                    <Typography align="left">
                        既存研究では、Bitcoinのトランザクションを分析することで、Ransomware支払いに用いられたトランザクションを特定する研究が行われています。しかし、Bitcoinのトランザクションは匿名性が高いため、特定することが難しいです。
                        今研究では、大規模言語モデルを用いて、外部情報を集積し、Bitcoinのトランザクションを非匿名化する手法を提案しています。
                    </Typography>
                    <Typography align="left">
                        研究成果は、今後論文として発表予定です。
                    </Typography>
                </Grid>

                <Grid item sx={{ margin: 5 }}>
                    <Typography
                        variant="h5"
                        align="left"
                        sx={{ textDecoration: "underline" }}
                    >
                        ウィンドウズイベントログを用いた、不正アクセス検知システムの開発
                    </Typography>
                    <Typography align="left"></Typography>
                    <Typography align="left">
                        企業の情報セキュリティを向上させるために、ウィンドウズイベントログを用いた不正アクセス検知システムの開発を担当しました。
                        このシステムは、ウィンドウズイベントログに記録された情報を収集し、異常なアクセスを検知することができます。
                    </Typography>
                    <Typography align="left">
                        私は、このシステム開発においてAWS上で提供されているWindowsサーバーからウィンドウズイベントログを収集するためのエージェントを開発しました。
                        このシステムは現在、企業向けに提供されており、多くの企業に導入されています。
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default Personal;


import CIcon from '../static/img/c_icon.png';
import PythonIcon from '../static/img/python_icon.png';
import TypescriptIcon from '../static/img/typescript_icon.png';
import ReactIcon from '../static/img/react_icon.png';
import SolidityIcon from '../static/img/solidity_icon.png';
import IotaIcon from '../static/img/iota_icon.png';
import ticTacIcon from "../static/img/tic_tac_toe_icon.png"
import blogIcon from "../static/img/blog.png"
import keyBoardIcon from "../static/img/keyboard.png"
import discordIcon from "../static/img/discord.png"
import algorithmIcon from "../static/img/algorithm_icon.jpeg"
import heroIcon from "../static/img/hero_img.jpg"
import lineBotIcon from "../static/img/linebot.png"


const skill1 = {
  id: 1,
  technique: "C#",
  description: "I have experienced C# for 3 years at an IT company in Japan. I developed large scale application.",
  image: CIcon,
  imageLabel: "c#-icon",
  years: "3",
  level: "middle",
  workExperience: true,
  scale: "large",
  projects: [
    {
      id: 1,
      name: "TicTacToeGame",
      repository: "https://github.com/takaomizuno0032/GameFrame",
      description: "This is a game application. I developed it by C#. I used object oriented design to develop. It is easy to add new games.",
      image: ticTacIcon
    }
  ]
}

const skill2 = {
  id: 2,
  technique: "TypeScript & Node.js",
  description: "I develop blockchain applications using typescript and Node.js.",
  image: TypescriptIcon,
  imageLabel: "typescript-icon",
  years: "4",
  level: "middle",
  workExperience: true,
  scale: "middle",
  projects: [
    {
      id: 2,
      name: "Knowledge database",
      repository: "https://github.com/takaomizuno0032/knowledge-database",
      description: "This is a knowledge database application. I developed it by typescript and Next.js.",
      image: blogIcon
    },
    {
      id: 7,
      name: "Blockchain news line bot",
      repository: "https://github.com/takaomizuno0032/blockchain_news_bot",
      description: "This is a line bot which can send blockchain news. I developed it by javascript and lineapi.",
      image: lineBotIcon
    }
  ]
}

const skill3 = {
  id: 3,
  technique: "Python",
  description: "I write scripts by python to make my life be more convenient. In addition, I solve some algorithm problems by python.",
  image: PythonIcon,
  imageLabel: "python-icon",
  years: "3",
  level: "middle",
  workExperience: true,
  scale: "small",
  projects: [
    {
      id: 3,
      name: "KeyboardEcommerce",
      repository: "https://github.com/takaomizuno0032/keyboardcommerce",
      description: "This is a keyboard ecommerce application. I developed it by python and Flask.",
      image: keyBoardIcon
    },
    {
      id: 4,
      name: "Discord bot",
      repository: "https://github.com/takaomizuno0032/Discord-Bot-2.0",
      description: "This is a discord bot application which is a product in QUT code network. I developed it by python and discord.py.",
      image: discordIcon
    }
  ]
}

const skill4 = {
  id: 4,
  technique: "IOTA",
  description: "This is the blockchain network I am most interested in. I believe it will be the foundation for changing smart cities.",
  image: IotaIcon,
  imageLabel: "iota-icon",
  years: "1",
  level: "middle",
  workExperience: true,
  scale: "large",
  projects: []
}

const skill5 = {
  id: 5,
  technique: "Solidity",
  description: "My interest. I am learning it by creating my personal Dapp.",
  image: SolidityIcon,
  imageLabel: "solidity-icon",
  years: "1",
  level: "middle",
  workExperience: true,
  scale: "large",
  projects: []
}

const skill6 = {
  id: 6,
  technique: "React",
  description: "This site is created by React and Material UI. I can use Next.js, as well.",
  image: ReactIcon,
  imageLabel: "react-icon",
  years: "1",
  level: "junior",
  workExperience: false,
  scale: "small",
  projects: [
    {
      id: 6,
      name: "My introduction site",
      repository: "https://github.com/takaomizuno0032/myportfolio",
      description: "This is my introduction site. I developed it by React and Material UI.",
      image: heroIcon
    }
  ]
}



export const skills = [
    skill1, skill2, skill3, skill4, skill5, skill6
]
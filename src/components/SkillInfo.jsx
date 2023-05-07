import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

function SkillInfo(props) {
  const skillInfo = props.skillInfo;
  return (
    <TableContainer>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Years</TableCell>
            <TableCell>{skillInfo.years} years</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Level</TableCell>
            <TableCell>{skillInfo.level}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Work Experience</TableCell>
            <TableCell>{skillInfo.workExperience ? "YES" : "NO"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Scale</TableCell>
            <TableCell>{skillInfo.scale}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell>{skillInfo.description}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SkillInfo;

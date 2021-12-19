import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(() => ({
  toolbar: {
    backgroundColor: "green"
  },
  mainDiv: {
    marginTop: "80px"
  },
  card: {
    padding: "20px",
    backgroundColor: "#3CB371 !important"
  },
  linkDiv: {
    textAlign: "center",
    paddingTop: "8px"
  },
  link: {
    color: "#ffffff",
    textDecoration: "none"
  }
}))

export {useStyles};
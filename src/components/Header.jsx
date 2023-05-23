import React, { useState } from "react";
import {
  Box,
  Container,
  styled,
  Typography,
  InputBase,
  Toolbar,
  Button,
  Tooltip,
  Modal,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CollectionsBookmarkRoundedIcon from "@mui/icons-material/CollectionsBookmarkRounded";

const StyledToolbar = styled(Toolbar)({
  // display: "flex",
  // justifyContent: "space-between"
  display: "grid",
  gridTemplateColumns: "55% 25%",
  gap: 160,
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  marginTop: 10,
  border: "1px solid grey",
  borderRadius: theme.shape.borderRadius,
  //  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "51.5%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto%",
  },
}));

const Search2 = styled("div")(({ theme }) => ({
  position: "relative",
  marginTop: 10,
  border: "1px solid grey",
  borderRadius: theme.shape.borderRadius,
  //  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "auto%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#24A3B6",
  color: "white",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    marginLeft: 20,
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const StyledInputBase2 = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 3),
    marginLeft: 20,
    width: "auto",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("md")]: {
      width: "auto",
    },
  },
}));

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container maxWidth="md">
      <Typography
        align="center"
        fontWeight="fontWeightBold"
        variant="h4"
        marginTop={5}
      >
        To Do Search
      </Typography>

      <Box sx={{ border: 1, borderColor: "grey.500", borderRadius: "10px" }}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>

        <StyledToolbar>
          <Button
            variant="contained"
            size="medium"
            sx={{ background: "#24A3B6", ":hover": { background: "#24A3B6" } }}
          >
            Search
          </Button>

          <Tooltip onClick={(e) => setOpen(true)}>
            <Button
              variant="contained"
              size="medium"
              sx={{
                width: "100%",
                background: "#24A3B6",
                ":hover": { background: "#24A3B6" },
              }}
            >
              Add New Task
            </Button>
          </Tooltip>

          <StyledModal
            open={open}
            onClose={(e) => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              width={800}
              height={"auto"}
              bgcolor="white"
              p={3}
              borderRadius={3}
            >
              <Typography
                align="center"
                fontWeight="fontWeightBold"
                variant="h5"
              >
                To Do Input
              </Typography>
              <Box
                sx={{
                  border: 1,
                  borderColor: "grey.500",
                  borderRadius: "10px",
                }}
              >
                <Container maxWidth="md">
                  <Search2>
                    <SearchIconWrapper>
                      <CollectionsBookmarkRoundedIcon />
                    </SearchIconWrapper>
                    <StyledInputBase2
                      placeholder="Search…"
                      inputProps={{ "aria-label": "search" }}
                    />
                  </Search2>
                  <Button
                    variant="contained"
                    size="medium"
                    sx={{
                      background: "#24A3B6",
                      ":hover": { background: "#24A3B6" },
                      width: "100%",
                      margin: "20px 0px 20px 0px",
                    }}
                  >
                    Submit
                  </Button>
                </Container>
              </Box>
            </Box>
          </StyledModal>
        </StyledToolbar>
      </Box>
    </Container>
  );
};

export default Header;

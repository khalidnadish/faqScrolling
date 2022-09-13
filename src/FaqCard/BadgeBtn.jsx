import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import Countup from "react-countup";
// ToDO  : chekc icon align in responsive  not fit well
const BadgeBtn = ({
  variant,
  startIcon,
  count,
  xpad,
  xcolor = "inherint",
  onClick,
  toolTip,
  xborderColor = "inherint",
  iconcolor = "inherint",
  xborder = 1,
  xdisableElevation = false,
  TypographyVariant = "body1",
  TypographyColor = "text.disabled",
  TypographySize = ".75rem",
  direction = "column",
  xbtmborder,
  texttype = "string",
}) => {
  return (
    <>
      <Tooltip title={toolTip}>
        <Button
          variant={variant}
          startIcon={startIcon}
          color={xcolor}
          disableElevation={xdisableElevation}
          sx={{
            display: "flex",
            alignItems: "center",
            padding: xpad,
            width: "fit-content",
            minWidth: 0,
            minHeight: 0,
            flexDirection: { xs: direction, md: direction },
            border: xborder,
            borderBottom: xbtmborder,
            borderColor: xborderColor,
            "& .MuiButton-startIcon": {
              margin: 0,
              color: iconcolor,
            },
          }}
          onClick={onClick}
        >
          {texttype === "string" ? (
            <Typography
              variant={TypographyVariant}
              color={TypographyColor}
              fontSize={TypographySize}
              sx={{ margin: "auto" }}
            >
              {count}
            </Typography>
          ) : (
            // <Countup end={count} />
            null
          )}
        </Button>
      </Tooltip>
    </>
  );
};

export default BadgeBtn;

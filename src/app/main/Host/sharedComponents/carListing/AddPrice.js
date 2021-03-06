import React from "react";
import { Typography,Box } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";

const schema = yup.object().shape({
  Autocomplete: yup.array().required("Select a make."),
  TextField: yup.string().required("You must enter a value"),
});

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#D22A8F",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#D22A8F",
  },
});

// Inspired by blueprintjs
function BpRadio(props) {
  return (
    <Radio
      sx={{
        "&:hover": {
          bgcolor: "transparent",
        },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}
const AddPrice = () => {
  const { handleSubmit, register, reset, control, watch, formState } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors, touchedFields } = formState;

  const data = watch();
  return (
    <div className="grid lg:grid-cols-2  gap-x-68">
      <div className="col-span-1">
        <div>
          <Typography
            style={{
              fontSize: "14px",
              fontWeight: "500px",
              color: "#344054",
              marginTop: "35px",
            }}
          >
            Price per day
          </Typography>
          <Controller
            render={({ field }) => (
              <TextField
                className="rounded-lg mb-11 w-full"
                placeholder="Select a car make"
                style={{ marginTop: "6px", height: "44px" }}
                sx={{
                  "& fieldset": {
                    borderRadius: "8px",
                  },
                }}
              />
            )}
            name="price"
            control={control}
          />
          <Typography
            className="text-xs font-normal mt-10"
            style={{ color: "#737B7D" }}
          >
            Suggestion: Minimmum price should be amount x and max is amount x
          </Typography>
          <hr
            className="w-full"
            style={{
              marginTop: "25px",
            }}
          />
          <div className="w-full">
            <div className="sm:flex flex-row justify-between mt-32">
              <div>
                <Typography
                  className="text-sm font-medium mt-7"
                  style={{ color: "#101828" }}
                >
                  With driver
                </Typography>
              </div>
              <div>
                <RadioGroup
                  defaultValue="female"
                  aria-labelledby="demo-customized-radios"
                  name="customized-radios"
                >
                  <div className="flex space-x-12">
                    <div className="flex">
                      <FormControlLabel
                        value="female"
                        control={<BpRadio />}
                        label=""
                      />
                      <Typography className="font-medium text-sm pt-6">
                        Yes
                      </Typography>
                    </div>
                    <div className="flex">
                      <FormControlLabel
                        value="male"
                        control={<BpRadio />}
                        label=""
                      />
                      <Typography className="font-medium text-sm pt-6">
                        No
                      </Typography>
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
          <Typography
            style={{
              fontSize: "14px",
              fontWeight: "500px",
              color: "#344054",
              marginTop: "35px",
            }}
          >
            Add driver price
          </Typography>
          <Controller
            render={({ field }) => (
              <TextField
                className="rounded-lg mb-11 w-full"
                placeholder="Add driver price"
                style={{ marginTop: "6px", height: "44px" }}
                sx={{
                  "& fieldset": {
                    borderRadius: "8px",
                  },
                }}
              />
            )}
            name="driverprice"
            control={control}
          />
          <div className="w-full">
            <div className="sm:flex flex-row justify-between mt-32">
              <div>
                <Typography
                  className="text-sm font-medium mt-7"
                  style={{ color: "#101828" }}
                >
                  Providing Pickup and drop off
                </Typography>
              </div>
              <div>
                <RadioGroup
                  defaultValue="female"
                  aria-labelledby="demo-customized-radios"
                  name="customized-radios"
                >
                  <div className="flex space-x-12">
                    <div className="flex">
                      <FormControlLabel
                        value="female"
                        control={<BpRadio />}
                        label=""
                      />
                      <Typography className="font-medium text-sm pt-6">
                        Yes
                      </Typography>
                    </div>
                    <div className="flex">
                      <FormControlLabel
                        value="male"
                        control={<BpRadio />}
                        label=""
                      />
                      <Typography className="font-medium text-sm pt-6">
                        No
                      </Typography>
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
          <Typography
            style={{
              fontSize: "14px",
              fontWeight: "500px",
              color: "#344054",
              marginTop: "35px",
            }}
          >
            Add additional price
          </Typography>
          <Controller
            render={({ field }) => (
              <TextField
                className="rounded-lg mb-11 w-full"
                placeholder="Add price"
                style={{ marginTop: "6px", height: "44px" }}
                sx={{
                  "& fieldset": {
                    borderRadius: "8px",
                  },
                }}
              />
            )}
            name="addprice"
            control={control}
          />
        </div>
      </div>
      <div
      className="mt-64 col-span-1"
        style={{
          height: "241px",
          width: "410px",
          backgroundColor: "rgba(233, 235, 239, 0.36)",
        }}
      >
        <div className="ml-28 mt-24">
          <Typography
            className="text-lg font-semibold"
            style={{ color: "#101828" }}
          >
            Price per day
          </Typography>
          <Typography
            style={{ color: "#D22A8F" }}
            className="font-semibold text-6xl"
          >
            5400
            <b className="text-2xl font-semibold" style={{ color: "#667085" }}>
              PKR
            </b>
          </Typography>
          <hr
            className="mt-5"
            style={{ border: "1px solid rgba(152, 162, 179, 0.5)" }}
          />
          <Typography style={{ color: "#667085" }} className="mt-16">
            GariConnect will charge 10% of the total price and you will get
            approx <b style={{ color: "#101828" }}>PKR 4860</b>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default AddPrice;

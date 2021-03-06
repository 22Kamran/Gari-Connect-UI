import React from "react";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import GoogleMapReact from "google-map-react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";

const schema = yup.object().shape({
  Autocomplete: yup.array().required("Select a make."),
  TextField: yup.string().required("You must enter a value"),
});

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const CarLocation = () => {

  const { handleSubmit, register, reset, control, watch, formState } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors, touchedFields } = formState;

  const data = watch();

  const defaultProps = {
    center: {
      lat: 31.5204,
      lng: 74.3587,
    },
    zoom: 14,
  };

  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1 sm:grid-cols-2 gap-16">
        <div className="mt-12">
          <div style={{ height: "45vh", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyAGQbucY82Bx3X6CJCItNb-2dyHi1Ovuyk",
              }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
        </div>

        <div>
         
            <Typography
              style={{
                fontSize: "14px",
                fontWeight: "500px",
                color: "#344054",
              }}
            >
              City
            </Typography>
            <Controller
            name="city"
            control={control}
            defaultValue={[]}
            render={({ field: { onChange, value, onBlur, ref } }) => (
              <Autocomplete
                popupIcon={<KeyboardArrowDownIcon />}
                className="mt-6"
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ height: 44 }}
                renderInput={(params) => (
                  <TextField
                  className="w-full"
                    {...params}
                    size="medium"
                    placeholder="Lahore"
                    sx={{
                      "& fieldset": {
                        borderRadius: "8px",
                      },
                    }}
                  />
                )}
              />
            )}
          />
         
          
            <Typography
              style={{
                marginTop: "14px",
                fontSize: "14px",
                fontWeight: "500px",
                color: "#344054",
              }}
            >
              Area
            </Typography>
            <Controller
            render={({ field }) => (
              <TextField
                className="rounded-lg mb-11 w-full"
                placeholder="Canal view"
                style={{ marginTop: "6px", height: "44px" }}
                sx={{
                  "& fieldset": {
                    borderRadius: "8px",
                  },
                }}
              />
            )}
            name="area"
            control={control}
          />
         
          
            <Typography
              style={{
                marginTop: "14px",
                fontSize: "14px",
                fontWeight: "500px",
                color: "#344054",
              }}
            >
              Street address
            </Typography>
            <Controller
            render={({ field }) => (
              <TextField
                className="rounded-lg mb-11 w-full"
                placeholder="25 A,Street 26, Canal view"
                style={{ marginTop: "6px", height: "44px" }}
                sx={{
                  "& fieldset": {
                    borderRadius: "8px",
                  },
                }}
              />
            )}
            name="street"
            control={control}
          />
         

          
            <Typography
              style={{
                marginTop: "14px",
                fontSize: "14px",
                fontWeight: "500px",
                color: "#344054",
              }}
            >
              Zip code
            </Typography>
            <Controller
            render={({ field }) => (
              <TextField
                className="rounded-lg mb-11 w-full"
                placeholder="5400"
                style={{ marginTop: "6px", height: "44px" }}
                sx={{
                  "& fieldset": {
                    borderRadius: "8px",
                  },
                }}
              />
            )}
            name="Zip"
            control={control}
          />
         
        </div>
      </div>
    </div>
  );
};

export default CarLocation;

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { label: "The Good, the Bad and the Ugly", year: 1966 },
  { label: "Fight Club", year: 1999 },
  {
    label: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    label: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { label: "Forrest Gump", year: 1994 },
  { label: "Inception", year: 2010 },
  {
    label: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
 
];

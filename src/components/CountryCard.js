import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const MediaCard = () => {
  const [countrylist, setCountrylist] = useState([]);

  useEffect(() => {
    getCountry();
  }, []);

  const getCountry = () => {
    const url = "https://restcountries.com/v3.1/all";
    fetch(url, {
      method: "GET",
    })
      .then((x) => x.json())
      .then((y) => {
        console.log("ddhhdhd", y);
        setCountrylist(y);
        y.map((element) => {
          console.log(element);
        });
      });
  };

  return (
    <div className="allcards">
      {countrylist.map((element) => {
        console.log(element);
        return (
          <div className="wrap">
            <Card className="Cards">
              <CardMedia
                className="flagimage"
                component="img"
                image={element.flags.svg}
              />
              <CardContent className="textleft">
                <Typography
                  className="countryname"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {element.name.common}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  <span className="boldtext"> Continents:</span>{" "}
                  {element.continents}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  <span className="boldtext"> Capital:</span> {element.capital}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <span className="boldtext"> Population: </span>{" "}
                  {element.population}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <span className="boldtext">Timezone:</span>{" "}
                  {element.timezones}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <span className="boldtext">Region: </span>
                  {element.region}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <span className="boldtext">Subregion: </span>
                  {element.subregion}
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                  <span className="boldtext">Start of the Week:</span>{" "}
                  {element.startOfWeek}
                </Typography> */}
              </CardContent>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default MediaCard;

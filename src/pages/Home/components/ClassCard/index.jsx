import React from "react";
import banner from "../../../../assets/images/algoritma.png";
import Card from "@mui/material/Card";
import { Button, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

const ClassCard = ({ name, lecturer }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 } }>
        <CardMedia
          component="img"
          height="140"
          image={banner}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Pengajar: {lecturer}
          </Typography>
        </CardContent>
        <CardActions>
          <Button href="/details" size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ClassCard;

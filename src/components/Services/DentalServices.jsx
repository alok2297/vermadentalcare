import React, {useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Grid, Typography, useMediaQuery } from "@mui/material";

export const DentalServices = ({data,orientation}) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)"); // Check if screen width is ≤ 600px
  return (
    <div className="py-10 px-8">
      <Grid container spacing={2} justifyContent="center">
        {data.map((service, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{
                display: "flex",
                flexDirection: isSmallScreen || orientation==="col" ? "column" : "row", // Change direction on small screens
                alignItems: "center",
                boxShadow: 3,
                padding:1,
                borderRadius: 2,
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: isSmallScreen || orientation==="col" ? "100%" : 180, // Full width image on mobile
                  height: isSmallScreen || orientation==="col" ? 150 : 180,
                  objectFit: "cover",
                  borderRadius: isSmallScreen || orientation==="col" ? "10px 10px 0 0" : "10px",
                }}
                image={service.image}
                alt={service.title}
              />
              <CardContent sx={{ flex: 1, textAlign: "left", padding: 1 }}>
                <Typography variant="h6" fontFamily="serif">
                  {service.title}
                </Typography>
                <Typography variant="body2" fontFamily="serif" color="text.secondary">
                  {service.description}
                </Typography>
                <Typography
                  variant="subtitle2"
                  fontFamily="serif"
                  color="primary"
                  sx={{ mt: 1 }}
                >
                  {service.category}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

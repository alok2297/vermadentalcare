import React from "react";
import { Card, CardContent, CardMedia, Typography, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useNavigate } from "react-router-dom";

export const DentalServices = ({ data, orientation, cardHeightSmall,cardHeightBig }) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const finalHeight = isSmallScreen ? (cardHeightBig || 250) : (cardHeightSmall || 300); 
  const navigate = useNavigate();
  function handleClick(){
    navigate("/treatment-details");
  }
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={isSmallScreen ? 1.2 : 3.3}
      grabCursor={true}
      className="mt-0 lg:mt-10"
    >
      {data.map((service, index) => (
        <SwiperSlide className="my-2" key={index}>
          <Card
            onClick={handleClick}
            sx={{
              display: "flex",
              flexDirection: isSmallScreen || orientation === "col" ? "column" : "row",
              alignItems: "center",
              boxShadow: 3,
              padding: 1,
              borderRadius: 2,
              height: finalHeight, // Set height dynamically
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: isSmallScreen || orientation === "col" ? "100%" : 180,
                height: isSmallScreen || orientation === "col" ? 150 : 180,
                objectFit: "cover",
                borderRadius: isSmallScreen || orientation === "col" ? "10px 10px 0 0" : "10px",
              }}
              image={service.image}
              alt={service.title}
            />
            <CardContent
              sx={{
                flex: 1,
                textAlign: "left",
                padding: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%", 
              }}
            >
              <Typography variant="h6" fontFamily="serif">
                {service.title}
              </Typography>
              <Typography
                variant="body2"
                fontFamily="serif"
                color="text.secondary"
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 3, 
                  WebkitBoxOrient: "vertical",
                }}
              >
                {service.description}
              </Typography>
              <Typography variant="subtitle2" className="cursor-pointer" fontFamily="serif" color="primary" sx={{ mt: 1 }}>
                {service.category}
              </Typography>
              {/* <button className="p-2 mt-1 border bg-gray-100 shadow-sm rounded-sm">Appointment</button> */}
            </CardContent>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

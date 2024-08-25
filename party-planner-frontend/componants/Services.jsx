import React from "react";
import "../cssfiles/Services.css";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import EmailSharpIcon from "@mui/icons-material/EmailSharp";
import LibraryMusicSharpIcon from "@mui/icons-material/LibraryMusicSharp";
import RestaurantSharpIcon from "@mui/icons-material/RestaurantSharp";
import PhotoLibrarySharpIcon from "@mui/icons-material/PhotoLibrarySharp";
import CakeSharpIcon from "@mui/icons-material/CakeSharp";
const Services = () => {
  const services = [
    {
      icon: <RoomOutlinedIcon />,
      title: "Venue Selection",
      text: "Find the perfect venue for your event with our expert assistance.",
    },
    {
      icon: <EmailSharpIcon />,
      title: "Invitations",
      text: "Send customized invitations to your guests with our services.",
    },
    {
      icon: <LibraryMusicSharpIcon />,
      title: "Live Music",
      text: "Enjoy live music performances with top-notch sound systems.",
    },
    {
      icon: <RestaurantSharpIcon />,
      title: "Catering",
      text: "Delight your guests with our exquisite catering services.",
    },
    {
      icon: <PhotoLibrarySharpIcon />,
      title: "Photography",
      text: "Capture every moment with our professional photography services.",
    },
    {
      icon: <CakeSharpIcon />,
      title: "Cake and Sweets",
      text: "Treat your guests with delicious cakes and sweets.",
    },
  ];

  return (
    <>
    <div className="service-heading">Our Services</div>
    <div className="services-grid">
      {services.map((service, index) => (
        <div key={index} className="service-item">
          <div className="icon">{service.icon}</div>
          <h3>{service.title}</h3>
          <p>{service.text}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default Services;

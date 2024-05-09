import React from "react";
import { Entypo } from "@expo/vector-icons";

const StarRating = ({ rating }) => {
  const starIcons = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      starIcons.push(
        <Entypo key={i} name="star" size={14} color="gold" style={{ marginRight: 2 }} />
      );
    } else {
      starIcons.push(
        <Entypo key={i} name="star" size={14} color="gray" style={{ marginRight: 2 }} />
      );
    }
  }

  return <>{starIcons}</>;
};

export default StarRating;

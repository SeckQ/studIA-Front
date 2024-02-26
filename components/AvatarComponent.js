import React from "react";
import { Avatar } from "react-native-paper";

const AvatarCard = ({ materia }) => {
    const colors = [
        "#FF5733",
        "#33FF57",
        "#3366FF",
        "#FF3366",
        "#33FFFF",
        "#FFFF33",
        "#9933FF",
        "#FF33CC",
        "#33FF99",
        "#FF9933",
        "#6633FF",
        "#33FF66",
        "#CC33FF",
        "#FF6633",
        "#33CCFF",
        "#FF33FF",
        "#33FFCC",
        "#FFCC33",
        "#33FFFF",
        "#FF33FF",
    ];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return (
        <Avatar.Text
            size={80}
            label={materia.name.charAt(0).toUpperCase()}
            style={{ backgroundColor: randomColor }}
        />
    );
};

export default AvatarCard;

import React from "react";
import { useAuth } from "../context/AuthContext";

export const WelcomeMessage = () => {
    const { user } = useAuth();

    return (
        <>
            {user.name && <h2>Welcome {user.name}</h2>}
        </>
    );
};
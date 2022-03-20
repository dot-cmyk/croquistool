import { authService } from "fbase";
import React from "react";

export default () => {
    const onLogOutClick = () => authService.signOut();
    return (
    <>
        <span>Profile</span>
        <button onClick={onLogOutClick}>Log Out</button>
    </>)
};
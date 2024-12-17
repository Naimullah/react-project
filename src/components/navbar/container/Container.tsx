import React from "react";
interface IContainer {
    children: React.ReactNode;
}
function container({ children }: IContainer) {
    return (
        <div className="container mx-auto">
            {/* <Navbar /> */}
            {children}
        </div>
    );
}
export default container;
import { ChildrenProps } from "../types";

export const Main = ({ children }: ChildrenProps) => {
    return (
        <main className="main">{children}</main>
    );
};
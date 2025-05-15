import { ChildrenProps } from "../types";

export const Container = ({ children }: ChildrenProps) => {
    return (
        <div className="container_default">{children}</div>
    )
};
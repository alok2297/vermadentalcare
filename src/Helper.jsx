import { useLocation } from "react-router-dom";

export function LastSegment(){
    return useLocation().pathname.split("/").filter(Boolean).pop();
}
import { Theme } from "@emotion/react"
import { Breakpoint, SxProps } from "@mui/material"
import React from "react";
import { LayoutSection } from "../core/layout-section";


export type AuthCenteredLayaoutProps= {
    sx:SxProps<Theme>;
    children:React.ReactNode;
    header?:{
        sx:SxProps<Theme>
    }
}
export function AuthCenteredLayaout({sx,children,header}:AuthCenteredLayaoutProps){
    const layoutQuery: Breakpoint ='md'

    return(
        <LayoutSection>
            heade
        </LayoutSection>
    )
}
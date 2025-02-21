import { definePreset } from "@primeuix/themes";
import Aura from '@primeuix/themes/aura'; 

export const primevue_color_preset =  definePreset(Aura, {
    severity: {
        primary: {
            textColor: "#FFFFFF",
            surface: "#FF4763",
            border: "#E13D57",
            hover: "#FF5F7A",
            focus: "#FFA6B4",
            active: "#C3324B"
        },
        secondary: {
            textColor: "#FFFFFF",
            surface: "#1A242E",
            border: "#161F28",
            hover: "#546679",
            focus: "#9DA8B3",
            active: "#0E151C"
        },
        success: {
            textColor: "#FFFFFF",
            surface: "#0ABF62",
            border: "#099F52",
            hover: "#0ED572",
            focus: "#3EEF92",
            active: "#087D42"
        },
        info: {
            textColor: "#FFFFFF",
            surface: "#289AFF",
            border: "#1C7CDB",
            hover: "#5BADFF",
            focus: "#A3D7FF",
            active: "#1361B5"
        },
        warning: {
            textColor: "#FFFFFF",
            surface: "#FFAB00",
            border: "#DB8F00",
            hover: "#FFC533",
            focus: "#FFE08A",
            active: "#B37400"
        },
        danger: {
            textColor: "#FFFFFF",
            surface: "#E63946",
            border: "#C5273B",
            hover: "#FF4D5E",
            focus: "#FFA3A8",
            active: "#9E1E2E"
        }
    },
}); 

export const tailwind_color_preset = {
    primary: {
        50: "#FFECEE",
        100: "#FFC9D1",
        200: "#FFA6B4",
        300: "#FF8297",
        400: "#FF5F7A",
        500: "#FF4763",
        600: "#E13D57",
        700: "#C3324B",
        800: "#A5273F",
        900: "#871D33",
        950: "#690F22"
    },
    secondary: {
        50: "#E6E9EC",
        100: "#C2C9D0",
        200: "#9DA8B3",
        300: "#798796",
        400: "#546679",
        500: "#1A242E",
        600: "#161F28",
        700: "#121A22",
        800: "#0E151C",
        900: "#0A1016",
        950: "#060A0E"
    },
    tertiary: {
        50: "#E7EBEF",
        100: "#C2CBD6",
        200: "#9DAABC",
        300: "#7889A2",
        400: "#536888",
        500: "#283D52",
        600: "#223447",
        700: "#1C2B3C",
        800: "#162232",
        900: "#101927",
        950: "#0A101B"
    }
    
}
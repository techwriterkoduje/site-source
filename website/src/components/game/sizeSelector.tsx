import React from "react";
import {Dispatch, SetStateAction} from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, {SelectChangeEvent} from "@mui/material/Select";

export type SizeSelectorProps = {
    currentSize: number;
    setSize: Dispatch<SetStateAction<number | undefined>>;
};

export const availableSizes: number[] = [
  Math.pow(4, 2),
  Math.pow(5, 2),
  Math.pow(6, 2),
  Math.pow(7, 2),
  Math.pow(8, 2),
  Math.pow(9, 2),
  Math.pow(10, 2),
];

export default function SizeSelector({currentSize, setSize}: SizeSelectorProps) {
    const handleChange = (event: SelectChangeEvent) => {
        setSize(Number(event.target.value));
    };

    return (
        <FormControl variant="standard">
            <InputLabel id="grid-size-select-label">Rozmiar</InputLabel>
            <Select
                labelId="grid-size-select-label"
                id="grid-size-select"
                value={`${currentSize}`}
                label="Age"
                onChange={handleChange}
                style={{width: "100px"}}
            >
                {availableSizes.map((size) => (
                    <MenuItem key={size} value={size}>
                        {Math.sqrt(size)}x{Math.sqrt(size)}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

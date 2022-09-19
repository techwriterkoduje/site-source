import React from "react";
import {Dispatch, SetStateAction} from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, {SelectChangeEvent} from "@mui/material/Select";

export type LevelSelectorProps = {
    currentLevel: number;
    setLevel: Dispatch<SetStateAction<number | undefined>>;
};

export const availableLevels: {code: number, name: string}[] = [
    {
        code: 1,
        name: 'łatwy'
    },
    {
        code: 2,
        name: 'średni'
    },
    {
        code: 3,
        name: 'trudny'
    }
];


export default function LevelSelector({currentLevel, setLevel}: LevelSelectorProps) {
    const handleChange = (event: SelectChangeEvent) => {
        setLevel(Number(event.target.value));
    };

    return (
        <FormControl variant="standard">
            <InputLabel id="level-select-label">Poziom</InputLabel>
            <Select
                labelId="level-select-label"
                id="level-select"
                value={`${currentLevel}`}
                label="Level"
                onChange={handleChange}
                style={{width: "100px"}}
            >
                {availableLevels.map((level) => (
                    <MenuItem key={level.code} value={level.code}>
                        {level.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

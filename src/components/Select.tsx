import React from "react";

interface Props {
    options: string[];
    setFilter: (filter: string) => void;
}

const Select = (props: Props) => {

    const handleSelectChange = (event: React.SyntheticEvent<any>) => {
        props.setFilter(event.currentTarget.value);
    }

    const selectOptions = props.options.map((option: string, idx: number) => {
        return <option key={idx} value={option}>{option}</option>
    })

    return (
        <select onChange={handleSelectChange}>
            <option value="" hidden>Filter by size</option>
            <option value={"all"}>{"All"}</option>
            {selectOptions}
        </select>
    )
}

export default Select;
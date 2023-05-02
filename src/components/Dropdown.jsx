import { useState } from "react";
import { DropdownItem, SelectContainer, SelectLabelButton, DropdownItemContainer} from "./styles/Dropdown.styled"
import { ReactSVG } from "react-svg";
import down_arrow from "../assets/down-arrow.svg";
import up_arrow from "../assets/up-arrow.svg";

const Dropdown = ({ label, values, selectedTerm, filterList }) => {
    const [open, setOpen] = useState(false);

    const toggleDropdown = () => {
        open ? handleClose() : handleOpen()
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleValueChange = (value) => {
        filterList(value);
    };

    const handleChange = (value) => {
        handleValueChange(value);
        if (filterList) filterList(value);
        handleClose();
    };

    return (
        <SelectContainer>
            <SelectLabelButton onClick={toggleDropdown}>
                {selectedTerm !== "" ? selectedTerm : label}
                <ReactSVG src={open ? up_arrow : down_arrow } />
            </SelectLabelButton>
            <DropdownItemContainer isVisible={open}>
                {values.map((value, index) => (
                    <DropdownItem
                        onClick={() => handleChange(value)}
                        active={value === selectedTerm}
                        key={index}
                    >
                        {value}
                    </DropdownItem>
                ))}
            </DropdownItemContainer>
        </SelectContainer>
    )
}

export default Dropdown
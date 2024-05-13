import { Typography } from "@mui/material"
import React, { useState } from "react"
import Card from "@mui/material/Card"
import Grid from "@mui/material/Grid"
// import GeneralSettingForm from "./GeneralSettingForm";
// import CompanySettingForm from "./CompanySettingForm";
// import LogoSettingForm from "./LogoSettingForm";
// import CurrencySettingForm from "./CurrencySettingForm";
// import FinanceSettingForm from "./FinanceSettingForm";
// import CreateCategoryDrawer from "./CreateCategoryDrawer"

import { CiSettings } from "react-icons/ci";
import { CiTrophy } from "react-icons/ci";
import { AiOutlineFileImage } from "react-icons/ai";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { AiOutlineCreditCard } from "react-icons/ai";
import CreateEvents from "./CreateEvents";
const CreateEvent= () => {
    const [openForm, setOpenForm] = useState('general');
    return (
        <CreateEvents/>
        )
}

export default CreateEvent
import React from 'react'
import Logo from "../Assets/Logo.svg"
import { BsCart2 } from "react-icons/bs"
import { HiOutlineBars3 } from "react-icons/hi2"
import { Box, Drawer, ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material'
import HomeIcon from "@mui/icons-material/Home"
import InfoIcon from "@mui/icons-material/Info"
import CommentRoundedIcon from "@mui/icon-material/CommentRounded"
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded"
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded"


const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)
    const menuOptions = [
      {
        text: "Home",
        icon: <HomeIcon/>
      },
    ]

    return <div>Navbar</div>
  
}

export default Navbar
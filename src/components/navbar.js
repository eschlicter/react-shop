import React from "react";
import {Box, Text, Heading} from 'gestalt';
import {NavLink} from 'react-router-dom'

const Navbar = () => (
    <Box
        height={70}
        color="midnight"
        padding={1}
        shape="roundedBottom"
        display="flex"
        alignItems="center"
        justifyContent="around"
    >
        {/* {SignIn Link} */}
        <NavLink to="/signin">
            <Text size="xl" color="white">Signin</Text>
        </NavLink>

         {/* Title and Logo*/}
         <NavLink to="/">
            <Heading size="xs" color="orange">
                My Shop
            </Heading>
        </NavLink>

        {/* {SignUp Link} */}
        <NavLink to="/signup">
            <Text size="xl" color="white">Signup</Text>
        </NavLink>

        {/* {Checkout Link} */}
        {/* <NavLink to="/checkout">
            <Text size="xl" color="white">Checkout</Text>
        </NavLink> */}

       
    </Box>
)

export default Navbar;
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button
} from "@heroui/react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function NavbarComponent() {
  const menuItems = [
    { name: "About Us", path: "/" },
    { name: "Pricing", path: "/pricing" },
    { name: "Customers", path: "/customers" },
    { name: "Solutions", path: "/solutions" },
  ];

  return (
    <Navbar className="bg-transparent">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarBrand>
          <Icon icon="logos:acme" className="h-9 w-9" />
          <img src="Logo.svg" alt="" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex">
        <NavbarBrand>
          <Icon icon="logos:acme" className="h-9 w-9" />
          <img src="Logo.svg" alt="" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "text-white"
              }
            >
              {item.name}
            </NavLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={NavLink} to="/book-demo" color="primary" variant="solid" className="hidden sm:flex text-default font-semibold rounded-2xl">
            Book a Demo
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={NavLink} to="/contact" color="white" variant="bordered" className="hidden sm:flex text-white font-semibold rounded-2xl">
            Contact Us
          </Button>
        </NavbarItem>
        <NavbarMenuToggle
          className="sm:hidden"
          icon={<Icon icon="lucide:menu" className="h-6 w-6" />}
        />
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <NavLink to={item.path} className="w-full">
              {item.name}
            </NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

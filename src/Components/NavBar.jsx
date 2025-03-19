import {
    Navbar, 
    NavbarBrand, 
    NavbarContent, 
    NavbarItem, 
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link, 
    Button
  } from "@heroui/react";
  import { Icon } from "@iconify/react";
  
  export default function App() {
    const menuItems = [
      "About Us",
      "Pricing",
      "Customers",
      "Solutions",
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
          <NavbarItem  isActive>
            <Link  aria-current="page"  href="#">
              About Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="white" href="#">
                Pricing
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="white" href="#">
                Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="white" href="#">
                Solutions
            </Link>
          </NavbarItem>
        </NavbarContent>
        
        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="solid" className="hidden sm:flex text-default font-semibold rounded-2xl">
                Book a Demo
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="white" href="#" variant="bordered" className="hidden sm:flex text-white font-semibold rounded-2xl">
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
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={index === 0 ? "primary" : "secondary"}
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    );
  }
  
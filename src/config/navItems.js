import services from "./services";

export default [
  {
    name: 'Home',
    pathname: '/'
  },
  {
    name: 'About',
    label: 'About Us',
    pathname: '/about',
  },
  {
    name: 'Clients',
    label: 'Our Clients',
    pathname: '/clients',
  },
  {
    name: 'Services',
    pathname: '/services',
    menu: true,
    children: services
  },
  {
    name: 'Quote',
    label: 'Get A Quote',
    pathname: '/quote',
  },
  {
    name: 'Contact',
    label: 'Contact Us',
    pathname: '/contact'
  },
]

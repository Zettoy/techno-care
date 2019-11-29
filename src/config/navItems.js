import services from "./services";

export default [
  {
    label: 'Home',
    pathname: '/'
  },
  {
    label: 'About',
    pathname: '/about'
  },
  {
    label: 'Clients',
    pathname: '/clients'
  },  {
    label: 'Services',
    pathname: '/services',
    menu: true,
    children: services
  },
  {
    label: 'Quote',
    pathname: '/quote'
  },
  {
    label: 'Contact',
    pathname: '/contact'
  },
]

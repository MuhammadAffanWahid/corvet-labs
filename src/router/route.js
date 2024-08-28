import Home from "../views/home";
import Service from "../views/services";
import ContactUs from '../views/contactUs';
import IndividualService from "../views/individualService";
import AboutUs from '../views/aboutUs';
import ProjectDetails from "../views/projectDetails";
import SMediaService from '../views/sMediaService';
import AppDevService from '../views/AppDevService';
import WebDevService from '../views/WebDevService';
import QAService from '../views/QAService';

const routes = [
    {
        components: <Home/>,
        to: '/'
    },
    {
        components: <Service />,
        to: '/services'
    },
    {
        components: <ContactUs />,
        to: '/contactUs'
    },
    {
        components: <IndividualService />,
        to: '/individualService'
    },
    {
        components: <AboutUs />,
        to: '/aboutUs'
    },
    {
        components: <ProjectDetails />,
        to: '/projectDetails'
    },
    {
        components: <SMediaService />,
        to: '/sMediaService'
    },
    {
        components: <AppDevService />,
        to: '/AppDevService'
    },
    {
        components: <WebDevService />,
        to: '/WebDevService'
    },
    {
        components: <QAService />,
        to: '/QAService'
    }
];

export default routes;
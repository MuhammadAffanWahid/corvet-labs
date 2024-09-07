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
        to: '/contact-us'
    },
    {
        components: <IndividualService />,
        to: '/individual-service'
    },
    {
        components: <AboutUs />,
        to: '/about-us'
    },
    {
        components: <ProjectDetails />,
        to: '/project-details'
    },
    {
        components: <SMediaService />,
        to: '/social-media-service'
    },
    {
        components: <AppDevService />,
        to: '/app-dev-service'
    },
    {
        components: <WebDevService />,
        to: '/web-dev-service'
    },
    {
        components: <QAService />,
        to: '/qa-service'
    }
];

export default routes;
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import SchoolIcon from "@material-ui/icons/School"
import "react-vertical-timeline-component/style.min.css";
import 'bootstrap/dist/css/bootstrap.css';







const Experience = () => {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2015 - 2018"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                    iconOnClick={()=>{window.location= "http://www.celf.cl"}}
                >
                    <h3 className="vertical-timeline-element-title" >Andrew Carnaige collage, La Florida, Santiago</h3>
                    <p>Enseñanza Media</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2016 - 2023"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title" >Ma'Re'Os</h3>
                    <p>Cocinero y Cajero</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2019 - 2020"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                    iconOnClick={()=>{window.location= "https://britanicostore.cl"}}
                >
                    <h3 className="vertical-timeline-element-title" >Instituto chileno britanico de la cultura</h3>
                    <p>Estudio de inglés desde <b>A2 a B2</b></p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2020 - 2022"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                    iconOnClick={()=>{window.location= "https://www.duoc.cl"}}
                >
                    <h3 className="vertical-timeline-element-title" >Duoc UC</h3>
                    <p>Enseñanza Superior, Egresado de la carrera <b>Analista Programador Computacional</b></p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2021 - 2022"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                    iconOnClick={()=>{window.location= "https://4geeksacademy.com/es/inicio"}}
                >
                    <h3 className="vertical-timeline-element-title" >4Geeks Academy</h3>
                    <p>Estudiante y egresado del programa <b>Desarrollador Full Stack</b></p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2022 - 2023"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                    iconOnClick={()=>{window.location= "https://4geeksacademy.com/es/inicio"}}
                >
                    <h3 className="vertical-timeline-element-title" >Biometria Aplicada</h3>
                    <p>Estudiante y egresado del programa <b>Desarrollador Full Stack</b></p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};

export default Experience;
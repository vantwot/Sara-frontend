import React from "react";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CoursesInfo = ({ courses }) => {
    return (
        <div>

            {/* <thead className="table-header">
                    <tr className="table-row">
                        <th className="table-header codigo">Código</th>
                        <th className="table-header grupo">Grupo</th>
                        <th className="table-header asignatura">Asignatura</th>
                        <th className="table-header nota">Nota</th>
                        <th className="table-header creditos">Creditos</th>
                    </tr>
                </thead> */}

            {courses.map((course, index) => (
                <div key={index}>
                    <Row>
                        <Col xs={2}>
                            <span className="header-materia">{course.code}</span>
                        </Col>
                        <Col xs={7}>
                            <span className="header-materia">{course.name}</span>
                        </Col>
                        <Col xs={3}>
                            <span className="header-materia"> Créditos: {course.credits}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Table striped bordered hover>
                            <thead className="subtable-header">
                                <tr className="subtable-row">
                                    <th className="subtable-header table-grupo">Grupo</th>
                                    <th className="subtable-header">Profesor</th>
                                    <th className="subtable-header">Email</th>
                                    <th className="subtable-header horario">Horario</th>
                                </tr>
                            </thead>
                            <tbody>
                                {course.groups.map((group, index) => (
                                    <tr className="subtable-row" key={index}>
                                        <td className="subtable-data table-grupo">{group.group}</td>
                                        <td className="subtable-data">{group.professor}</td>
                                        <td className="subtable-data">{group.email}</td>
                                        <td className="subtable-data horario">{getHorarioStr(group.horario)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Row>
                </div>
            ))}

        </div>
    )
}

function getHorarioStr(horario) {
    let horarioStr = "";
    let place = "";

    const dias = {
        "lunes": "Lunes",
        "martes": "Martes",
        "miercoles": "Miércoles",
        "jueves": "Jueves",
        "viernes": "Viernes",
        "sabado": "Sábado",
        "domingo": "Domingo"
    }
    
    for (let i = 0; i < horario.date.length; i++) {
        //console.log(horario.place[i].split(" "));
        horarioStr += dias[horario.date[i]] + " " + horario.time[i] + " " + horario.place[i].substring(0, horario.place[i].length-18) + "\n";
    }

    return horarioStr;
}

export default CoursesInfo;
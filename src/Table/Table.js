import React, {Component} from 'react';
import {DataTable, TableHeader} from 'react-mdl';
import './table.css'

class Table extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="companies__pages">
                    <span>1-10 de 230</span>
                    <span><i class="fas fa-arrow-circle-left"></i></span>
                    <span><i class="fas fa-arrow-circle-right"></i></span>
                </div>
        <DataTable id="data__table"
            selectable
            shadow={0}
            rowKeyColumn="id"
            rows={[
                {id: 1001, Empresa: 'Círculo de crédito S.A de C.V', Fecha: '24 Ene', Usuarios: 290, Publicaciones: 200, Créditos: 'Ilimitado'},
                {id: 1002, Empresa: 'Círculo de crédito S.A de C.V', Fecha: '5 Abr', Usuarios: 125, Publicaciones: 200, Créditos: 'Ilimitado'},
                {id: 1003, Empresa: 'Círculo de crédito S.A de C.V', Fecha: '10 Feb', Usuarios: 235, Publicaciones: 200, Créditos: 'Ilimitado'},
                {id: 1003, Empresa: 'Círculo de crédito S.A de C.V', Fecha: '10 Feb', Usuarios: 235, Publicaciones: 200, Créditos: 'Ilimitado'},
                {id: 1003, Empresa: 'Círculo de crédito S.A de C.V', Fecha: '10 Feb', Usuarios: 235, Publicaciones: 200, Créditos: 'Ilimitado'},
                {id: 1003, Empresa: 'Círculo de crédito S.A de C.V', Fecha: '10 Feb', Usuarios: 235, Publicaciones: 200, Créditos: 'Ilimitado'},
                {id: 1003, Empresa: 'Círculo de crédito S.A de C.V', Fecha: '10 Feb', Usuarios: 235, Publicaciones: 200, Créditos: 'Ilimitado'},
                {id: 1003, Empresa: 'Círculo de crédito S.A de C.V', Fecha: '10 Feb', Usuarios: 235, Publicaciones: 200, Créditos: 'Ilimitado'},
                {id: 1003, Empresa: 'Círculo de crédito S.A de C.V', Fecha: '10 Feb', Usuarios: 235, Publicaciones: 200, Créditos: 'Ilimitado'},
                {id: 1003, Empresa: 'Círculo de crédito S.A de C.V', Fecha: '10 Feb', Usuarios: 235, Publicaciones: 200, Créditos: 'Ilimitado'},
            ]}
            >   
            <TableHeader name="Empresa" tooltip="The amazing material name">Empresa</TableHeader>
            <TableHeader name="Fecha" tooltip="Number of materials">Fecha de regreso</TableHeader>
            <TableHeader numeric name="Usuarios" tooltip="Price pet unit">Usuarios</TableHeader>
            <TableHeader name="Publicaciones" tooltip="Number of materials">Publicaciones</TableHeader>
            <TableHeader name="Créditos" tooltip="Number of materials">Créditos</TableHeader>
        </DataTable>
        </React.Fragment>
        );
    }
}

export default Table;
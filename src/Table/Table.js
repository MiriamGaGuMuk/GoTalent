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
                <div className="navigation__companies">
                    <input style={{textAlign: "left"}} placeholder="Search"/>
                    <span><i class="far fa-star"></i></span>
                    <span>A B <strong>C</strong> D E F G H I J K L M N O P Q R S T U V W X Y Z</span>          
                </div>
        <div id="data__table__container" >
        <DataTable col={8} tablet={6} id="data__table"
            selectable
            shadow={0}
            rowKeyColumn="id"
            rows={[
                {id: 1001, Empresa: 'Círculo de crédito S.A de C.V', Fecha: '24 Ene', Usuarios: 290, Publicaciones: 200, Créditos: 'Ilimitado', Directorio: 'A'},
                {id: 1002, Empresa: 'Círculo de crédito S.A de C.V', Fecha: '05 Abr', Usuarios: 125, Publicaciones: 200, Créditos: 'Ilimitado', Directorio: 'B'},
                {id: 1003, Empresa: 'Círculo de crédito S.A de C.V', Fecha: '20 May', Usuarios: 235, Publicaciones: 200, Créditos: 'Ilimitado', Directorio: 'C'},
                {id: 1003, Empresa: 'Círculo de crédito S.A de C.V', Fecha: '14 Jun', Usuarios: 235, Publicaciones: 200, Créditos: 'Ilimitado', Directorio: 'D'},
                {id: 1003, Empresa: 'Círculo de crédito S.A de C.V', Fecha: '18 Jun', Usuarios: 235, Publicaciones: 200, Créditos: 'Ilimitado', Directorio: 'E'},
                {id: 1003, Empresa: 'Círculo de crédito S.A de C.V', Fecha: '30 Ago', Usuarios: 235, Publicaciones: 200, Créditos: 'Ilimitado', Directorio: 'F'},
                {id: 1003, Empresa: 'Círculo de crédito S.A de C.V', Fecha: '02 Sep', Usuarios: 235, Publicaciones: 200, Créditos: 'Ilimitado', Directorio: 'G'},
                {id: 1003, Empresa: 'Círculo de crédito S.A de C.V', Fecha: '19 Sep', Usuarios: 235, Publicaciones: 200, Créditos: 'Ilimitado', Directorio: 'H'},
                {id: 1003, Empresa: 'Círculo de crédito S.A de C.V', Fecha: '24 Oct', Usuarios: 235, Publicaciones: 200, Créditos: 'Ilimitado', Directorio: 'I'},
                {id: 1003, Empresa: 'Círculo de crédito S.A de C.V', Fecha: '20 Nov', Usuarios: 235, Publicaciones: 200, Créditos: 'Ilimitado', Directorio: 'J'},
                {id: 1003, Empresa: 'Círculo de crédito S.A de C.V', Fecha: '20 Nov', Usuarios: 235, Publicaciones: 200, Créditos: 'Ilimitado', Directorio: 'K'},
                {id: 1003, Empresa: 'Círculo de crédito S.A de C.V', Fecha: '20 Nov', Usuarios: 235, Publicaciones: 200, Créditos: 'Ilimitado', Directorio: 'L'},
                {id: 1003, Empresa: 'Círculo de crédito S.A de C.V', Fecha: '20 Nov', Usuarios: 235, Publicaciones: 200, Créditos: 'Ilimitado', Directorio: 'M'},
                {id: 1003, Empresa: 'Círculo de crédito S.A de C.V', Fecha: '20 Nov', Usuarios: 235, Publicaciones: 200, Créditos: 'Ilimitado', Directorio: 'N'},
                {id: 1003, Empresa: 'Círculo de crédito S.A de C.V', Fecha: '20 Nov', Usuarios: 235, Publicaciones: 200, Créditos: 'Ilimitado', Directorio: 'O'},
                {id: 1003, Empresa: 'Círculo de crédito S.A de C.V', Fecha: '20 Nov', Usuarios: 235, Publicaciones: 200, Créditos: 'Ilimitado', Directorio: 'P'},
                {id: 1003, Empresa: 'Círculo de crédito S.A de C.V', Fecha: '20 Nov', Usuarios: 235, Publicaciones: 200, Créditos: 'Ilimitado', Directorio: 'Q'},
                {id: 1003, Empresa: 'Círculo de crédito S.A de C.V', Fecha: '20 Nov', Usuarios: 235, Publicaciones: 200, Créditos: 'Ilimitado', Directorio: 'R'},
                {id: 1003, Empresa: 'Círculo de crédito S.A de C.V', Fecha: '20 Nov', Usuarios: 235, Publicaciones: 200, Créditos: 'Ilimitado', Directorio: 'S'},
                {id: 1003, Empresa: 'Círculo de crédito S.A de C.V', Fecha: '20 Nov', Usuarios: 235, Publicaciones: 200, Créditos: 'Ilimitado', Directorio: 'T'},
                {id: 1003, Empresa: 'Círculo de crédito S.A de C.V', Fecha: '20 Nov', Usuarios: 235, Publicaciones: 200, Créditos: 'Ilimitado', Directorio: 'U'},
                {id: 1003, Empresa: 'Círculo de crédito S.A de C.V', Fecha: '20 Nov', Usuarios: 235, Publicaciones: 200, Créditos: 'Ilimitado', Directorio: 'V'},
                {id: 1003, Empresa: 'Círculo de crédito S.A de C.V', Fecha: '20 Nov', Usuarios: 235, Publicaciones: 200, Créditos: 'Ilimitado', Directorio: 'W'},
                {id: 1003, Empresa: 'Círculo de crédito S.A de C.V', Fecha: '20 Nov', Usuarios: 235, Publicaciones: 200, Créditos: 'Ilimitado', Directorio: 'X'},
                {id: 1003, Empresa: 'Círculo de crédito S.A de C.V', Fecha: '20 Nov', Usuarios: 235, Publicaciones: 200, Créditos: 'Ilimitado', Directorio: 'Y'},
                {id: 1003, Empresa: 'Círculo de crédito S.A de C.V', Fecha: '20 Nov', Usuarios: 235, Publicaciones: 200, Créditos: 'Ilimitado', Directorio: 'Z'}
            ]}
            >   
            <TableHeader numeric name="Empresa" tooltip="Empresa">Empresa</TableHeader>
            <TableHeader name="Fecha" tooltip="Fecha de regreso">Fecha de regreso</TableHeader>
            <TableHeader name="Usuarios" tooltip="Usuarios">Usuarios</TableHeader>
            <TableHeader name="Publicaciones" tooltip="Publicaciones">Publicaciones</TableHeader>
            <TableHeader name="Créditos" tooltip="Créditos">Créditos</TableHeader>
            <TableHeader numeric name="Directorio"><i class="far fa-star"></i></TableHeader>
        </DataTable>
        
        </div>

                    
        </React.Fragment>
        );
    }
}

export default Table;
import React, {Component} from 'react';
import {DataTable, TableHeader} from 'react-mdl';
import './table.css'

class Table extends Component{
    render(){
        return(
            <React.Fragment>
            <span><i class="fas fa-sync-alt"></i></span>
        <DataTable
            selectable
            shadow={0}
            rowKeyColumn="id"
            rows={[
                {id: 1001, material: 'Acrylic (Transparent)', quantity: 25, price: 2.90},
                {id: 1002, material: 'Plywood (Birch)', quantity: 50, price: 1.25},
                {id: 1003, material: 'Laminate (Gold on Blue)', quantity: 10, price: 2.35},
                {id: 1003, material: 'Laminate (Gold on Blue)', quantity: 10, price: 2.35},
                {id: 1003, material: 'Laminate (Gold on Blue)', quantity: 10, price: 2.35},
                {id: 1003, material: 'Laminate (Gold on Blue)', quantity: 10, price: 2.35},
                {id: 1003, material: 'Laminate (Gold on Blue)', quantity: 10, price: 2.35},
                {id: 1003, material: 'Laminate (Gold on Blue)', quantity: 10, price: 2.35},
                {id: 1003, material: 'Laminate (Gold on Blue)', quantity: 10, price: 2.35},
                {id: 1003, material: 'Laminate (Gold on Blue)', quantity: 10, price: 2.35},
            ]}
            >   
            <TableHeader name="material" tooltip="The amazing material name">Material</TableHeader>
            <TableHeader numeric name="quantity" tooltip="Number of materials">Quantity</TableHeader>
            <TableHeader numeric name="price" cellFormatter={(price) => `\$${price.toFixed(2)}`} tooltip="Price pet unit">Price</TableHeader>
        </DataTable>
        </React.Fragment>
        );
    }
}

export default Table;
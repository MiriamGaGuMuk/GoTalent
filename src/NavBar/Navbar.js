import React, {Component} from 'react';
import {Layout,Header,Navigation,Drawer,Textfield} from 'react-mdl';
import './navbar.css';
import Table from '../Table/Table';

class NavBar extends Component {
    render(){
        return(
            <div>
                <Layout fixedHeader>
                    <Header id="nav__bar" title={<span><span style={{ color: '#ddd' }}></span><strong>Go Talent</strong></span>}>
                        <Navigation>
                            <a href="#"><i class="fas fa-cog"></i></a>
                            <a href="#"><i class="fas fa-chevron-down"></i></a>
                            <span id="line__nav">|</span>
                            <a href="#"><i class="far fa-bell"></i></a>
                        </Navigation>
                    </Header>
                    <Drawer style={{height: '100%'}} title="Title">
                        <Navigation>
                            <a href="#">Link</a>
                            <a href="#">Link</a>
                            <a href="#">Link</a>
                            <a href="#">Link</a>
                        </Navigation>
                    </Drawer>
                    <div className="companies">
                    <h6 className="add__companies">Directorio de Empresas</h6>
                    <Textfield className="text__field"
                        onChange={() => {}}
                        label="Agregar empresa"
                        style={{width: '200px'}}
                    />
                    </div>
                    <div>
                        <p className="companies__status">Empresas</p>
                        <div className="companies__status"><span>500</span></div>
                    </div>
                    <Table/>
                </Layout>
            </div>
        );
    }
}

export default NavBar;
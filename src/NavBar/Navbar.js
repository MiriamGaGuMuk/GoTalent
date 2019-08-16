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
                    <Drawer id="side__bar" style={{height: '100%'}} title="Go Talent">
                        <Navigation>
                        <img id="feed-img" style={{width: '200px', height: '150px'}} src="https://i2.wp.com/myaeon.com.au/wp-content/uploads/2017/04/avatar-round-1.png?ssl=1" alt="An awesome shot"/>
                        <p>Alexandra Sousa Smith</p>
                        <p>Developer Expert</p>
                            <a href="#">Profile</a>
                            <a href="#">Ofertas de empleo</a>
                            <a href="#">Buscador Avanzado</a>
                            <a href="#">Bibliotecas de CV's</a>
                            <a href="#">Favoritos</a>
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
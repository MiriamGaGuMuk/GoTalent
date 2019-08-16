import React, {Component} from 'react';
import {Layout,Header,Navigation,Drawer,Textfield} from 'react-mdl';
import {Link} from 'react-router-dom';
import './navbar.css';
import Table from '../Table/Table';

class NavBar extends Component {
    render(){
        return(
            <div>
                <Layout fixedHeader>
                    <Header id="nav__bar" title={<span><span style={{ color: '#ddd' }}></span><strong>Go Talent</strong></span>}>
                        <Navigation>
                            <Link to="/"><i class="fas fa-cog"></i></Link>
                            <Link to="/"><i class="fas fa-chevron-down"></i></Link>
                            <span id="line__nav">|</span>
                            <Link to="/"><i class="far fa-bell"></i></Link>
                        </Navigation>
                    </Header>
                    <Drawer id="side__bar" style={{height: '100%'}} title="Go Talent">
                        <Navigation>
                        <img col={4} phone={2} tablet={4} style={{width:'230px', height: '200px', fontSize: '12px'}} id="sidebad__pic"  src="https://i2.wp.com/myaeon.com.au/wp-content/uploads/2017/04/avatar-round-1.png?ssl=1" alt="An awesome shot"/>
                        <p>Alexandra Sousa Smith
                            <br/>
                            Developer Expert
                        </p>
                            <a href="#">Profile</a>
                            <a href="#">Ofertas de empleo</a>
                            <a href="#">Buscador Avanzado</a>
                            <a href="#">Bibliotecas de CV's</a>
                            <a href="#">Favoritos</a>
                        </Navigation>
                    </Drawer>
                    <div className="companies">
                    <span className="add__companies">Directorio de Empresas</span>
                    <input placeholder="Agregar empresa"/>
                    </div>
                    <div className="companies__numbers">
                        <span className="companies__status">Empresas</span>
                        <span className="companies__status">500</span>
                        <span>Ordenr por: <a href="#">Empresa</a> | <a href="#">Administrador</a></span>
                    </div>
                    <Table/>
                </Layout>
            </div>
        );
    }
}

export default NavBar;
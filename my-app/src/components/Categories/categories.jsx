import React from 'react'
import { Container , Row , Col } from 'reactstrap';
import './styls/style.css'
import burger from '../../assets/images/category-01.png'
import pizza from '../../assets/images/category-02.png'
import chicken from '../../assets/images/category-03.png'
import meat from '../../assets/images/category-01.png'


const categoriesArr = [
    {
        name:'pizza',
        src : pizza
    },
    {
        name:'Fastfood',
        src : burger
    },
    {
        name:'Asian Food',
        src :  chicken
    },
    {
        name:'Row Meat',
        src :  meat
    }
]


export default function Categories() {
  return (
    <div className='categories'>
      <Container>
         
            <div className="inner">

                <Row>
                    {
                        categoriesArr.map(cat => (
                            <Col lg='3' md='6' className='mb-lg-0 mb-4' key={cat}>
                                <div className="box p-3 d-flex justify-content-center align-items-center gap-4" key={cat.name}>
                                    <img src={cat.src} alt="pic" />
                                    <p className='rock pt-2'>{cat.name}</p>
                                </div>
                            </Col>
                        ))
                    }
                </Row>

            </div>
         
      </Container>
    </div>
  )
}

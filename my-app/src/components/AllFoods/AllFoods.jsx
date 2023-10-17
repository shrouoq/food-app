import React , { useState } from 'react'
import './styls/style.css'
import { Container , Row , Col } from 'reactstrap'
import products from './../../assets/fake-data/products';
import Product from './../product/Product';
import ReactPaginate from 'react-paginate'

export default function AllFoods() {
    
    let [searchTerm , setSearchTerm] = useState('')
    let [pageNum , setPageNum] = useState(0)

    let searchedProducts = products.filter((item) => {
        if(searchTerm === ''){
            return item
        }
        if(item.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
            return item
        }else{
            return console.log('not found');
        }
    })

    let productsPerPage = 8
    let start = pageNum * productsPerPage
    let end = start + productsPerPage
    let slicedItems = searchedProducts.slice(start , end)
    let pageCount = Math.ceil(searchedProducts.length / productsPerPage)
    let changePage = ({ selected }) => {
        setPageNum(selected)
    }


  return (
    <div className='allFoods mt-5 mb-5'>
      <Container>
        <div className="search__box">
            <Row>
                <Col lg='6'>
                    <div className="search position-relative overflow-hidden">
                        <input type="text" name="" id="search" value={searchTerm} onChange={(e) => setSearchTerm(e.currentTarget.value)}   placeholder='im looking for...' className=' w-100 h-100 p-2'/>
                        <span className=' position-absolute'><i class="ri-search-line"></i></span>
                    </div>
                </Col>

                <Col lg='6'  className='select__box d-flex justify-content-lg-end'>
                    <select className=' text-capitalize p-2'>
                        <option>default</option>
                        <option>low price</option>
                        <option>heigth price</option>
                        <option>alphabetically,A-Z</option>
                        <option>alphabetically,Z-A</option>
                    </select>
                </Col>
            </Row>
        </div>

        <div className="items mt-5">
            <Row>
                {
                    slicedItems.map(ele => 
                    <Col lg='3' md='6' key={ele.id}>
                        <Product item={ele} />
                    </Col>
                    )
                }
            </Row>
        </div>

        <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"Prev"}
                nextLabel={"Next"}
                containerClassName=" paginationBttns "
              />
        </div>
      </Container>
    </div>
  )
}

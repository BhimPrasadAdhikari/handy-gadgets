export const revalidate=0;

import getCategory from '@/actions/get-category'

import ProductsList from '@/components/product-list';
import React from 'react'
import getProducts from '@/actions/get-products';
import getSizes from '@/actions/get-sizes';
import getColors from '@/actions/get-colors';
import Container from '@/components/ui/container';
import Billboard from '@/components/billboard';
import Filter from '../components/filters';
import NoResult from '@/components/ui/no-result';
import ProductCard from '@/components/ui/product-card';
import MobileFilter from '../components/mobile-filter';
export interface CategoryPageProps{
 params:{
    categoryId:string
 },
 searchParams:{
  colorId:string;
  sizeId:string;
 }
}
const CategoryPage:React.FC<CategoryPageProps> = async({
    params,searchParams
}) => {
    const category=await getCategory(params.categoryId);
    const products=await getProducts({
      categoryId:params.categoryId,
      colorId:searchParams.colorId,
      sizeId: searchParams.sizeId
    });
    const sizes=await getSizes();
    const colors=await getColors();
  return (
    <div className='bg-white'>
      <Container >
        <Billboard data={category.billboard}/>
        <div className='px-4 sm:px-6 lg:px-8 pb-24'>
          <div className='lg:grid lg:grid-cols-5 lg:gap-x-8'>
            <MobileFilter sizes={sizes} colors={colors}/>
            <div className='hidden lg:block'>
              <Filter valueKey="sizeId" name="Sizes" data={sizes}/>
              <Filter valueKey="colorId" name="Colors" data={colors}/>
            </div>
           <div className='mt-6 lg:col-span-4 lg:mt-0'>
            {products.length===0 && <NoResult/>}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              {products.map((item)=>{
            return    <ProductCard key={item.id} data={item}/>
              })}


            </div>

           </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CategoryPage
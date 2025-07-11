import React from 'react';
// import getBillboard from '@/actions/get-billboard';
// import Billboard from '@/components/billboard';
import Container from '@/components/ui/container';
import ProductsList from '@/components/product-list';
import getProducts from '@/actions/get-products';
export const revalidate = 0;
const HomePage = async () => {
  const products = await getProducts({isFeatured:true});
  // const billboard = await getBillboard('66e1b17ee5a4dd025ef90820');
  console.log(process.env.TEST_SECRET_KEY)
  return (
    <Container>
      <div className='space-y-10 pb-10'>
        {/* <Billboard data={billboard} /> */}
         <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
          <ProductsList title="Featured Products" data={products} />
         </div>
      </div>
    </Container>
  );
};
export default HomePage;

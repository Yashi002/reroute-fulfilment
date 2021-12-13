import api from '@/api';

const fetchProducts = async (query: any): Promise <any>  => {
  return api({
   // TODO: We can replace this with any API
    url: "orders", 
    method: "post",
    data: query,
    cache: true
  });
}

export const OrderService = {
  fetchProducts
}
import React from 'react';
import { useParams } from 'react-router-dom';
import { renderProductDetail } from './utils/renderProductDetail';

const RenderProductDetail = () => {
  const { id } = useParams();  // Extract id from route params
  return renderProductDetail(id);
};

export default RenderProductDetail;

import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Navbar from '../../components/navbar';
interface indexProps {}

const PageContainer = styled.div`
  ${tw`
	flex
	flex-col
	w-full
	h-full
	items-center
	overflow-x-hidden

`}
`;

const HomePage: React.FC<indexProps> = ({}) => {
  return (
    <PageContainer>
      <Navbar />
    </PageContainer>
  );
};

export default HomePage;

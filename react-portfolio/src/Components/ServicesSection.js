import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from './ServiceCard';
import design from '../img/design.svg';
import gamedev from '../img/game-dev.svg';
import intelligence from '../img/intelligence.svg';

function ServicesSection(){
    return(
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'}  />
                <div className="Services">
                    <ServiceCard 
                      image={design}
                      title={'Web Devlopment'}
                      paragraph={'A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea.'}
                     />
                     <ServiceCard 
                      image={gamedev}
                      title={'Game Devlopment'}
                      paragraph={'A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea.'}
                     />
                     <ServiceCard 
                      image={intelligence}
                      title={'Artificial Intelligence'}
                      paragraph={'A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea.'}
                     />
                </div>
            </ServicesSectionStyled>
       </InnerLayout>
    );
}

const ServicesSectionStyled = styled.section`
.Services{
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    @media screen and (max-width:1000px){
        flex-direction: column;
    }
    @media screen and (max-width:950px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width:650px){
        grid-template-columns: repeat(1, 1fr);
    }
   
}

`;
export default ServicesSection;
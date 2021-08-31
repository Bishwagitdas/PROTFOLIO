import React from 'react';
import styled from 'styled-components';

function Title({title, span}) {
    return(
        <TitleStyled>
            <h1>{title} <b><span>{span}</span></b></h1>
        </TitleStyled>

    )
}

const TitleStyled = styled.div`
    position: relative;
    h1{
        color: var(--white-color);
        font-size: 2rem;
        font-weigth: 600;
        text-transform: uppercase;
        position: relative;
        padding-bottom: .5rem;
        &::before{
                content: "";
                position: absolute;
                bottom: 0;
                width: 7rem;
                height: .25rem;
                background-color: var(--background-light-color-2);
                border-redius: 15px;
                left: 0;
            }
            &::after{
                content: "";
                position: absolute;
                bottom: 0;
                width: 3.5rem;
                height: .25rem;
                background-color: var(--primary-color);
                border-redius: 15px;
                left: 0;
            }
        span{
            font-width: 700,
            color: rgba(25,29,43,.44);
            font-size: 5rem;
            position: absolute;
            left:0;
            top: 30%;
            z-index: -1
        }

    }

`;
export default Title;
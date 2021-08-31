import React from 'react';
import styled from 'styled-components';
import Particles from '../Components/Particles';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkdeInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

function HomePage() {
    return (

        <HomePageStyled >
            <div className="p-particles-con">
                <Particles />
            </div>
            <div className="typography">
                <h1>Hi I'm <span>BISHWAGIT DAS</span></h1>
                <p>
                    The knowledge and skills I have acquired by studying several courses. I want to take my wisdom, efficiency
                    quality to your place. I possess expert knowledge in providing IT solutions and software development.
                </p>
                <div className="icons">
                    <a href="https://www.facebook.com/bishwagit.das.3/" className="icon i-facebook">
                        <FacebookIcon />
                    </a>
                    <a href="https://github.com/Bishwagitdas" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/bishwagit-das-23563217a/" className="icon i-linkedin">
                        <LinkdeInIcon />
                    </a>
                    <a href="https://twitter.com/bishwagit_das" className="icon i-twitter">
                        <TwitterIcon />
                    </a>

                </div>
            </div>

        </HomePageStyled >

    );
}

const HomePageStyled = styled.header`

width: 100%;
height:100%;
position: relative;
.p-particles-js{
    position: absolute;
    top: 0;
    left: 0;
}

.typography{
    position: absolute;
    top: 50%; 
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

}

.icons{
        display: flex;
        justify-content: center;
        margin-top: 1rem;
    .icon{
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all .4s ease-in-out;
        cursor: pointer;
        &:hover{
            border: 2px solid var(--primary-color);
            color: var(--border-color);

        }
        &:not(:last-child){
            margin-right: 1rem;
            
        }
        svg{
            margin: .5rem;
        }

    }

    .i-facebook{
        &:hover{
            border: 2px solid ;
            color: #B3B6B7;
        }
    }
    .i-github{
        &:hover{
            border: 2px solid #F4D03F ;
            color: #F4D03F;
        }
    }
    .i-linkedin{
        &:hover{
            border: 2px solid #D35400 ;
            color: #D35400;
        }
    }
    .i-twitter{
        &:hover{
            border: 2px solid #3498DB;
            color: #3498DB;
        }
    }


}

`;

export default HomePage;
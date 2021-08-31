import React from 'react';
import PrimaryButton from './PrimaryButton';
import styled from 'styled-components';
import resume from '../img/resume.jpg';


function ImageSection(){
    return(
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt="" />
            </div>
            <div className="right-content">
                
                <h3>I am <span> BISHWAGIT DAS</span></h3>
            
                <p className="paragraph">
                I am flexible, reliable and possess excellent time keeping skills. I am an enthusiastic,
                self-motivated, reliable, responsible and hard working person.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>DOB</p>
                        <p>Nationality</p>
                        <p>Language</p>
                        <p>Location</p>
                        <p>Service</p>

                    </div>
                    <div className="info">
                        <p>: Bishwagit Das</p>
                        <p>: 23</p>
                        <p>: February 12th, 1998</p>
                        <p>: Bangladesh</p>
                        <p>: Bangla, English</p>
                        <p>: Naogaon,Dhaka,Bangladesh</p>
                        <p>: Full Stack Devloper</p>

                    </div>
                </div>
                <PrimaryButton title={'Download Cv'} />
            </div>

        </ImageSectionStyled>

    );
}
const ImageSectionStyled = styled.div`
  margin-top: 5rem; 
  display: flex;
  .left-content{
      width: 100%;
      height: 70vh;
      
      img{
          width: 90%;
          height: 70vh;
          object-fit: cover;

      }
  }
  .right-content{


    h3{
        font-size: 2rem;
        color: var(--white-color);
        span{
            font-size: 2rem;

        }
    }
    .paragraph{
        padding: 1rem 0;
    }

     .about-info{
        display: flex;
        padding-bottom: 1rem;

        .info-title{
            padding-right: 3rem;
            P{
                font-weigth: 600;

            }

        }

        .info-title, .info{
            p{
                padding: .3rem 0;
            }
        }

    }

  }

`;
export default ImageSection;
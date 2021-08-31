import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={''} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">

                    {/* <p> N/A</p> */}
                    <ResumeItem 
                        year={'2015 - 2020'} 
                        title={'Computer Science Teacher'}
                        subTitle={'Sussex University'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />
                    <ResumeItem 
                        year={'2015 - Present'} 
                        title={'Full Stack Developer'}
                        subTitle={'Microsoft Studios'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />
                    <ResumeItem 
                        year={'2010 - 2017'} 
                        title={'User Interface Designer'}
                        subTitle={'Google Inc'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2018 - 2021'} 
                        title={'American International University-Bangladesh'}
                        subTitle={'Computer Science Engineering'}
                        text={'CGPA 3.35'} 
                    />
                    <ResumeItem 
                        year={'2014 - 2016'} 
                        title={'Naogaon Govt College'}
                        subTitle={'Science'}
                        text={'GPA 4.25'} 
                    />
                    <ResumeItem 
                        year={'2008 - 2014'} 
                        title={'Chakmuli High School'}
                        subTitle={'Science'}
                        text={'GPA 5'} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }
    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume;
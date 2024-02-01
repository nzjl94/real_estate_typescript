import React, { useState, useEffect} from "react";
import styled,{ useTheme } from "styled-components";

// import Image from 'next/image'
import TEXT_1 from "../ui/TEXT_ELEMENT"
import profilePic from '/public/image/about/journey/title.png'
import {getAPIData} from '../../utility/API'


const Container = styled.div``;

export default () => {
  const theme = useTheme();

  const [data, setData] = useState({title:{},sections:{}})
  useEffect( () => {
    getAPIData('/api/about/journey',setData)
    console.log(data)
  }, [])

  return (
    <Container className="grid grid-cols-7 gap-6">
        <div className="col-span-4 flex flex-col justify-around">
            <div className="mainHeader">
                {/* <TEXT_1 text={data.title?.title} /> */}
                {/* <TEXT_1 text={data.title?.content} fontSize={"18px"} color={theme.colors.gray1} /> */}
            </div>
            <div className="self-stretch grid grid-cols-3  gap-3">
                {/* {Object.keys(data.sections).length>0 && data.sections.map(({title,content},index) => {
                  return (
                    <div key={index} className="p-[16px] border-[1px] rounded-[12px] border-gray-1 bg-gray-1">
                        <TEXT_1 text={title} fontSize={"40px"} />
                        <TEXT_1 text={content} fontSize={"18px"} color={theme.colors.gray1} />
                    </div>
                  );
                })} */}
            </div>
        </div>
        <div className="col-span-3">
            {/* <Image src={profilePic} alt="Vercel Logo" className="image" /> */}
        </div>
    </Container>
  );
};
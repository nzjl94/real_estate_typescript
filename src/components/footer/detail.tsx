import React              from 'react'
import styled,{useTheme}  from "styled-components";

import TEXT               from "../ui/TEXT"
import IMG                from "../ui/IMAGE"


const Container = styled.div `
  padding: 100px 162px;
`
const Detail = () => {

  const theme = useTheme();

  type pageLinksType ={
    [key : string]:{text:string;plink:string;}[]
  }
  const pageLinks:pageLinksType ={
    "Home":[
      {text:"Hero Section",plink:""},
      {text:"Features",plink:""},
      {text:"Properties",plink:""},
      {text:"Testimonials",plink:""},
      {text:"FAQ's",plink:""}
    ],
    "About Us":[
      {text:"Our Story",plink:""},
      {text:"Our Wroks",plink:""},
      {text:"How It Works",plink:""},
      {text:"Our Team",plink:""},
      {text:"Our Clients",plink:""}
    ],
    "Properties":[
      {text:"Portfolio",plink:""},
      {text:"Categories",plink:""}
    ],
    "Services":[
      {text:"Valuation Mastery",plink:""},
      {text:"Strategic Marketing",plink:""},
      {text:"Negotiation Wizardry",plink:""},
      {text:"Closing Success",plink:""},
      {text:"Property Management",plink:""}
    ],
    "Contact Us":[
      {text:"Contact Form",plink:""},
      {text:"Our Offices",plink:""}
    ]
  }
  const TEXT_PARAM = (color=theme.colors.white,fontSize="18px",className="")=> ({
    fontSize,
    fontWeight:500,
    className:`text-left ${className}`,
    color
  })
  return <Container className='grid grid-flow-col w-full gap-x-[80px] grid-cols-3'>
      <div>details 1</div>
      <div className='grid grid-flow-col justify-between col-span-2'>{
        Object.keys(pageLinks).map((key)=>(<div className="grid grid-flow-row gap-y-[20px] content-start"> 
          {<TEXT {...TEXT_PARAM(theme.colors.gray1,"20px","pb-[10px]")} text={key}/>}
          {pageLinks[key].map(({text,plink},index)=><TEXT {...TEXT_PARAM()} text={text}/>)}
        </div>)) 
      }</div>
  </Container>
}

export default Detail
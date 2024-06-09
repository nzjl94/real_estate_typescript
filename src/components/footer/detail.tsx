import styled,{useTheme}  from "styled-components";

import {TEXT,IMAGE}       from "../ui/elements"
import {Link}             from 'react-router-dom';
import MediaQuery         from 'react-responsive'
import {pageLinksType}    from "../../utility/types/typeApp"

const Container = styled.div ``
const Detail = () => {
  const theme = useTheme();

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
      {text:"Valuation Mastery",plink:"/service#service_experience"},
      {text:"Strategic Marketing",plink:"/service#service_value"},
      {text:"Negotiation Wizardry",plink:"/service#service_management"},
      {text:"Closing Success",plink:"/service#service_investment"},
      {text:"Property Management",plink:"/service#service_start"}
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
  return <div className="px-[16px] lg:px-[80px] xl:px-[160px]">
    <MediaQuery minWidth={640}>
      <Container className='grid grid-flow-col w-full gap-x-[80px] grid-cols-3 py-[100px] px-[160]'>
          <div className='grid grid-flow-row grid-cols-6 content-start gap-y-[30px] place-content-start'>
            <div className='col-span-3'>
              <Link to="/" className="text-2xl font-bold text-white flex justify-center items-center gap-4">
                <IMAGE path="image/logo.svg" width={48} height={48} activeBorder={false} />
                <TEXT fontSize={"32px"} text="Estatein"/>
              </Link>
            </div>
            <div className="relative col-span-5">
              <div className="absolute inset-y-0 left-0 flex items-center pl-[24px] pointer-events-none">
                <img src="image/general/footer/message.svg" alt="Vercel Logo" className="w-[24px]" />
              </div>
              <input 
                type="email" name="email" id="email"  placeholder="Enter Your Email" 
                className="            
                  bg-black text-gray-700 pr-[24px] py-[18px] pl-[58px] text-[18px] border border-gray-1 rounded-[12px] w-full
                  focus:border-gray-1 outline-none
                " 
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-[24px] pointer-events-none">
                <img src="image/general/footer/send.svg" alt="Vercel Logo" className="w-[30px]" />
              </div>
            </div>
          </div>
          <div className='grid grid-flow-col justify-between col-span-2'>{
            Object.keys(pageLinks).map((key,index)=>(<div key={index} className="grid grid-flow-row gap-y-[20px] content-start"> 
              {<TEXT {...TEXT_PARAM(theme.colors.gray1,"20px","pb-[10px]")} text={key}/>}
              {pageLinks[key].map(({text,plink},index)=><Link key={index} to={plink} >{<TEXT {...TEXT_PARAM()} text={text}/>}</Link>)}
            </div>)) 
          }</div>
      </Container>
    </MediaQuery>
    <MediaQuery maxWidth={640}>
      <Container className='flex flex-col w-full gap-y-[50px] py-[50px] px-[16px]'>
          <div className='grid grid-flow-row grid-cols-6 content-start gap-y-[30px] place-content-start'>
            <div className='col-span-2'>
              <Link to="/" className="text-2xl font-bold text-white flex justify-center items-center gap-4">
                <IMAGE path="image/logo.svg" width={48} height={48} activeBorder={false} />
                <TEXT fontSize={"32px"} text="Estatein"/>
              </Link>
            </div>
            <div className="relative col-span-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-[24px] pointer-events-none">
                <img src="image/general/footer/message.svg" alt="Vercel Logo" className="w-[24px]" />
              </div>
              <input 
                type="email" name="email" id="email"  placeholder="Enter Your Email" 
                className="            
                  bg-black text-gray-700 pr-[24px] py-[18px] pl-[58px] text-[18px] border border-gray-1 rounded-[12px] w-full
                  focus:border-gray-1 outline-none
                " 
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-[24px] pointer-events-none">
                <img src="image/general/footer/send.svg" alt="Vercel Logo" className="w-[30px]" />
              </div>
            </div>
          </div>
          <div className='grid grid-flow-row grid-cols-2 justify-between col-span-2 gap-y-[20px] gap-x-[20px]'>{
            Object.keys(pageLinks).map((key,index)=>(<div key={index} className={`${["Properties","Contact Us"].includes(key)?"row-span-1":"row-span-2"} col-span-1 grid grid-flow-row pb-[20px] gap-y-[8px] border-b border-gray-1 content-start`}> 
              {<TEXT {...TEXT_PARAM(theme.colors.gray1,"16px","pb-[16px]")} text={key}/>}
              {pageLinks[key].map(({text,plink},index)=><Link key={index} to={plink} >{<TEXT {...TEXT_PARAM(theme.colors.white,"14px")} text={text}/>}</Link>)}
            </div>)) 
          }</div>
      </Container>
    </MediaQuery>
  </div>
}

export default Detail
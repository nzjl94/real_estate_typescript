import styled,{ useTheme }    from "styled-components";
import {TEXT,BUTTON}          from "../elements"
import {
  TEXT_IMAGE_TYPE,cardActionType
}                             from '../../../utility/types/typeApp';
import {useNavigate}          from 'react-router-dom';

const Container = styled.div``;

const TEXT_IMAGE:React.FC<TEXT_IMAGE_TYPE>= ({title,sections,img,parentClass="",firstChildClass="",showSection=false}) => {

  const theme     = useTheme();
  const navigate  = useNavigate();

	const buttonAction:cardActionType  = (event,parameter) => {
		let curText = (event.target as HTMLInputElement).textContent
    if(curText==="Learn More"){
		  navigate(`/about`)
    }else{
      navigate(`/property`)
    }
	}
  return (
    <Container className={`grid md:grid-flow-col md:grid-cols-2 gap-y-[16px] md:gap-y-0 gap-x-[60px] lg:gap-x-[80px] ${parentClass} py-[40px] px-[16px] md:p-0`}>
        <div className={`order-2 md:order-1 flex flex-col justify-around gap-y-[60px] ${firstChildClass}`}>
            <div className="">
                <TEXT text={title.title} responsive="set3" />
                <TEXT text={title.content} responsive="set2" color={theme.colors.gray1} />
            </div>
            {showSection===true && <div className="flex flex-col gap-y-[16px] md:gap-y-0 md:flex-row md:gap-x-[20px]">
              <BUTTON text="Learn More"         localAction={buttonAction} type="directButton" className="basis-full px-[24px] py-[18px] rounded-[10px] cp-color-2" /> 
              <BUTTON text="Browse Properties"  localAction={buttonAction} type="directButton" className="basis-full px-[24px] py-[18px] rounded-[10px] border-[1px] bg-purple-1 border-purple-1"/>
            </div>}
            <div className={`self-stretch flex flex-row justify-center flex-wrap md:flex-nowrap gap-x-[12px] lg:gap-x-[20px] gap-y-[12px]`}>
                {sections.length>0 && sections.map(({title,content},index) => {
                  return (
                    <div key={index} className={`p-[16px] rounded-[12px] cp-color-2`}>
                        <TEXT text={title} responsive="set6" fontWeight={700} />
                        <TEXT text={content} responsive="set2" fontWeight={500} color={theme.colors.gray1} />
                    </div>
                  );
                })}
            </div>
        </div>
        <div className="order-1 md:order-2">
            <img src={img} alt="Vercel Logo" className="image" />
        </div>
    </Container>
  );
};

export default TEXT_IMAGE
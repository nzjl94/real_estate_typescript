import styled,{ useTheme }     from "styled-components";
import {TEXT,BUTTON}            from "../elements"
import {CARD6_TYPE}             from '../../../utility/types/typeApp';


//: React.FC<CARD6_TYPE>

const Container = styled.div`${({theme}) => ``}`;

const CARD7=() => {

    return <Container className={`flex flex-col space-y-[40px] p-[50px] border border-gray-1 rounded-[12px]`}>
            <div className="flex justify-between items-center">
                <TEXT text="Monthly Costs" className="align-middle" responsive="set7" />

                <BUTTON 
                    type="button" text="Learn More" 
                    className={`py-[18px] px-[24px] rounded-[10px] bg-gray-1 items-center`} 
                />
            </div>
            <div className="h-[1px] w-full bg-gray-5"></div>
            <div className="">2</div>
            <div className="h-[1px] w-full bg-gray-5"></div>
            <div className="">3</div>
    </Container>
};
export default CARD7;
import styled from "styled-components";



const Wrapper = styled.div`
    grid-row: 3 / 6;
    grid-column: 1 / 10;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: 5em;
    line-height: 300%;
    display: flex;
`;


function Content1() {
     return (
        <Wrapper>
            Content1
        </Wrapper>
    );
     }

export default Content1;
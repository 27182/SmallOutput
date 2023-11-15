import styled from "styled-components";

const Wrapper = styled.div`
  grid-row: 3 / 6;
  grid-column: span 3;
`;


const SideMenu = styled.div`
    height: 100%;
    width: 100%;
    text-align: center;
    font-size: 1.5em;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        flex-direction: row;
    }
`;

const SideList = styled.div`

    height: 33%;


    @media screen and (max-width: 768px) {
        width: 33%;
        height: 3em;
        line-height: 300%;

    }
`;
const LastOne = styled.div`


@media screen and (max-width: 768px) {
    width: 34%;
    height: 3em;
    line-height: 300%;
}

    height: 34%;
`;







function MenuOnRight() {
    return (
        <Wrapper className="MenuOnRight">
            <SideMenu>

                <SideList className="SideList">
                    Side 1
                </SideList>

                <SideList className="SideList">
                    Side 2
                </SideList>

                <LastOne className="LastOne">
                    Side 3
                </LastOne>
            </SideMenu>
        </Wrapper>
    );
}

export default MenuOnRight;
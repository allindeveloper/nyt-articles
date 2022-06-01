import {Space} from "../ui/Space/Space"
import styled from "styled-components"

const StyledContainer = styled.div`

    margin: 0 auto;
    flex-grow: 1;
    min-height: 100vh;

`
const PageContainer = ({children}) => {
    return (
        <>
            <Space top={100} />
            <StyledContainer>
                {children}
            </StyledContainer>
        </>
    )
}
export default PageContainer
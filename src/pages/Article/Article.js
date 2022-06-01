import { Link } from "react-router-dom"
import PageContainer from "../../components/container/PageContainer"

export const Article = () =>{
    return (
        <PageContainer>
        <h1 style={{marginTop:90}}>Welcome to Article</h1>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/view/8899-rfedi">Article Details</Link>
        </nav>
      </PageContainer>
    )
}
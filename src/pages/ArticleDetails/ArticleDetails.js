import { useNavigate } from "react-router-dom";

export const ArticleDetails = () => {
    const navigate = useNavigate()


    const goBackToArticles = () => {
        navigate(-1)
    }
  return (
    <div>
      <h1 style={{ marginTop: 90 }}>Welcome to Article Details</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <div onClick={goBackToArticles}>Go Back</div>
      </nav>
    </div>
  );
};

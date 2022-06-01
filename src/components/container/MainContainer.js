import { Header } from "../shared/Header/Header";
import {Routes, Route} from "react-router-dom"
import {Article} from "../../pages/Article/Article"
import {ArticleDetails} from "../../pages/ArticleDetails/ArticleDetails"
import { Fragment } from "react";

export const MainContainer = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
         <Route path="/" element={<Article />} />
         <Route path="/view/:id" element={<ArticleDetails />} />
         <Route
          path="*"
          element={
            <main style={{ padding: "1rem", marginTop: 100 }}>
              <p>[404] Haa! There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </Fragment>
  );
};

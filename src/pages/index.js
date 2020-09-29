import React from 'react';
import Layout from '../components/layout';

//components
import HomeBanner from '../components/homePage/HomeBanner';
import HomeContent from '../components/homePage/HomeContent';
import HomeFeatured from '../components/homePage/HomeFeatured';
import HomeContact from '../components/homePage/Contact';
// import SEO from "../components/seo"

//Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from '../context/globalContext';

const IndexPage = (props) => {
  const { cursorStyles } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();

  const onCursor = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;

    dispatch({ type: 'CURSOR_TYPE', cursorType: cursorType });
  };

  return (
    <Layout>
      {/* <SEO title="home" /> */}
      <HomeBanner onCursor={onCursor} />
      <HomeContent />
      <HomeFeatured onCursor={onCursor} />
      <HomeContact />
    </Layout>
  );
};

export default IndexPage;

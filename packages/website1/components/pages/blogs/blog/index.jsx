"use client"

import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../../common/breadcrumb";
import BlogGridMain from "./blog-grid";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import SwitchTab from "../../common/dark-light";


const BlogGrid = () => {
    return (
        <>
            <SEO pageTitle='China Technology and Electric Power News' />
            <SwitchTab />
            <HeaderOne />
            <BreadCrumb title="News" innerTitle="China Science and Technology and Electric Power Technology and Our Company News" />
            <BlogGridMain />
            <FooterOne />
            <ScrollToTop />
        </>
    );
};

export default BlogGrid;
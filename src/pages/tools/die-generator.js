import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import DieGenerator from "../../components/die-generator"

const DieGeneratorPage = () => (
    <>
    <Layout>
        <SEO title="Die Generator" />
        <h1>Die Generator Tool</h1>
        <DieGenerator/>
    </Layout>
    </>
)

export default DieGeneratorPage

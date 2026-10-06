import CVPage from "@/components/UI/CV/CVPage";
import productDesignerCV from "@/lib/store/cv/product-designer";

export const metadata = {
  title: "Wahab Sekinat - Product Designer CV",
  description: "Product design CV for Wahab Sekinat, covering experience, projects, and skills.",
};

const ProductDesignerCVPage = () => {
  return <CVPage data={productDesignerCV} otherCv={{ label: "Frontend", href: "/cv/frontend-developer" }} />;
};

export default ProductDesignerCVPage;

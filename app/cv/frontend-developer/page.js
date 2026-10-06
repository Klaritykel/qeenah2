import CVPage from "@/components/UI/CV/CVPage";
import frontendDeveloperCV from "@/lib/store/cv/frontend-developer";

export const metadata = {
  title: "Wahab Sekinat - Frontend Developer CV",
  description: "Frontend developer CV for Wahab Sekinat, covering experience, projects, and skills.",
};

const FrontendDeveloperCVPage = () => {
  return <CVPage data={frontendDeveloperCV} otherCv={{ label: "Product Design", href: "/cv/product-designer" }} />;
};

export default FrontendDeveloperCVPage;

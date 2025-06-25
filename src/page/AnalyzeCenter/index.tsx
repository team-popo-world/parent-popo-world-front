import { Link } from "react-router-dom";
import { InvestmentChart } from "../../features/analyze/InvestmentChart";
export const AnalyzeCenterPage = () => {
  return (
    <>
      <InvestmentChart />
      <Link to="/analyze/store">상품 센터로 이동하기</Link>
    </>
  );
};

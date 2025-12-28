import { BenefitsLuminoliss } from "./BenefitsLuminoliss";
import { CTAFinal } from "./CTAFinal";
import HeroLuminoliss from "./HeroLuminoliss";
import { IngredientsLuminoliss } from "./IngredientsLuminoliss";
import { ResultsLuminoliss } from "./ResultsLuminoliss";


export default function LuminolissPage() {
  return (
    <>
      <HeroLuminoliss />
      <BenefitsLuminoliss />
      <IngredientsLuminoliss />
      <ResultsLuminoliss />
      <CTAFinal />
    </>
  );
}

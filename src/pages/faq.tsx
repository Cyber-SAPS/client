import { AccordionComponent } from "../components/feature/accordion";

import { PageHeader } from "../components/ui/header";


export default function Faq() {
  return (
    <main className="w-full md:w-4/5 mx-auto p-8">
      <PageHeader title="Frequently Asked Questions" />

      <AccordionComponent />

    </main>
  )
}

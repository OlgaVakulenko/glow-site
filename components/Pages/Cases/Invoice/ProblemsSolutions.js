import Layout from '../../../Layout';
import Animated from '../../../Animated';

function Text({ className, children }) {
  return <Animated as='p' className={className}>{children}</Animated>;
}

export default function ProblemsSolutions() {
  return (
    <Layout className="pt-[144px]">
      <Animated as='div' className="mb-10 text-[40px] font-medium leading-[48px] tracking-[-2px] md:mb-[54px] md:text-[56px] md:leading-[64px]">
        Problems & Solutions
      </Animated>
      <div className="space-y-4 text-base leading-[160%] md:space-y-8 md:text-[24px] xl:grid xl:grid-cols-12 xl:gap-8 xl:space-y-0">
        <Text className="xl:col-span-6">
          {`One of the key benefits of InvoiceMaker is its speed. With our intuitive design, you can quickly input all the necessary details for your invoice, including the client's name and contact information, the products or services provided, and the total amount owed. InvoiceMaker automatically calculates taxes and discounts, and generates a polished invoice that can be sent to your client right away.`}
        </Text>
        <div className="hidden xl:col-span-1 xl:block"></div>
        <div className="md:space-y-8 xl:col-span-5">
          <Text>
            {`This app also offers a range of customizable invoice templates, allowing you to select the design that best fits your brand or business. Plus, with InvoiceMaker's cloud-based technology, you can access and manage all of your invoices from anywhere, at any time.`}
          </Text>
          <Text>
            {`In summary, InvoiceMaker is a must-have tool for any business owner or freelancer looking to streamline their invoicing process. With its fast and accurate invoice generation, customizable templates, and user-friendly interface, InvoiceMaker is the perfect solution for managing your invoicing needs with ease.`}
          </Text>
        </div>
      </div>
    </Layout>
  );
}

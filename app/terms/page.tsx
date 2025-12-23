import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | NyeAI",
  description: "Terms of Service for NyeAI - Read our terms and conditions for using our AI consulting services.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Terms of Service
        </h1>
        <p className="text-text-secondary mb-8">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="space-y-8 text-text-secondary">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Agreement to Terms</h2>
            <p>
              By accessing or using the NyeAI website and services (&quot;Services&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use our Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Description of Services</h2>
            <p className="mb-4">
              NyeAI provides AI consulting, training, and implementation services for small and local businesses, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>AI tool training and education</li>
              <li>Process automation and integration services</li>
              <li>Data strategy and business intelligence consulting</li>
              <li>AI readiness assessments and recommendations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Use of Services</h2>
            <h3 className="text-xl font-semibold text-foreground mb-2">Eligibility</h3>
            <p className="mb-4">
              You must be at least 18 years old and have the legal authority to enter into these Terms to use our Services.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-2">Acceptable Use</h3>
            <p className="mb-4">You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Use the Services in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to our systems or networks</li>
              <li>Interfere with or disrupt the Services or servers</li>
              <li>Use the Services to transmit harmful code or malicious software</li>
              <li>Impersonate any person or entity or misrepresent your affiliation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Intellectual Property</h2>
            <p className="mb-4">
              All content, materials, and intellectual property on our website and within our Services are owned by or licensed to NyeAI. This includes but is not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Text, graphics, logos, and images</li>
              <li>Training materials and documentation</li>
              <li>Software and technology</li>
              <li>Trade names, trademarks, and service marks</li>
            </ul>
            <p>
              You may not reproduce, distribute, modify, or create derivative works of our content without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Service Agreements and Payments</h2>
            <p className="mb-4">
              Specific terms for consulting engagements, training programs, or implementation projects will be outlined in separate service agreements or statements of work.
            </p>
            <p className="mb-4">
              Payment terms, pricing, and deliverables will be specified in your service agreement. Unless otherwise stated:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Payments are due according to the agreed-upon schedule</li>
              <li>All fees are non-refundable unless specified in your service agreement</li>
              <li>Late payments may result in suspension of services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Disclaimers and Limitation of Liability</h2>
            <h3 className="text-xl font-semibold text-foreground mb-2">No Warranties</h3>
            <p className="mb-4">
              Our Services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. We do not guarantee that:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>The Services will meet your specific requirements or expectations</li>
              <li>The Services will be uninterrupted, timely, secure, or error-free</li>
              <li>Any particular results or outcomes will be achieved</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-2">Limitation of Liability</h3>
            <p className="mb-4">
              To the maximum extent permitted by law, NyeAI shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Loss of profits or revenue</li>
              <li>Loss of data or business opportunities</li>
              <li>Business interruption</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Confidentiality</h2>
            <p>
              We respect the confidentiality of information shared during our consulting engagements. Specific confidentiality obligations will be outlined in your service agreement or a separate non-disclosure agreement (NDA).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless NyeAI and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising from your use of the Services or violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Termination</h2>
            <p className="mb-4">
              We reserve the right to terminate or suspend your access to our Services at any time, with or without cause or notice, for conduct that we believe:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Violates these Terms or applicable laws</li>
              <li>Could harm us, our Services, or other users</li>
              <li>Exposes us or others to legal liability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the updated Terms on our website and updating the &quot;Last updated&quot; date. Your continued use of the Services after such changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which NyeAI operates, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Dispute Resolution</h2>
            <p>
              Any disputes arising from these Terms or your use of our Services shall be resolved through good faith negotiations. If negotiations fail, disputes may be resolved through binding arbitration or in the courts of competent jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-dark-gray border border-purple-primary/20 rounded-lg p-6">
              <p className="font-semibold text-foreground">NyeAI</p>
              <p>Email: legal@nyeai.com</p>
              <p className="mt-2 text-sm">
                For general inquiries, please visit our <a href="/contact" className="text-purple-primary hover:text-purple-accent underline">Contact page</a>.
              </p>
            </div>
          </section>

          <section className="border-t border-purple-primary/20 pt-8">
            <p className="text-sm">
              By using NyeAI&apos;s Services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Privacy Policy — Zonda Professionals',
    description:
      'How we collect, use, store, and share information when you use the Zonda Professionals mobile application.',
  };
}

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 pb-20 pt-28 text-foreground md:pt-32">
      <article className="space-y-10 text-base leading-relaxed">
        <header className="space-y-4 border-b border-border pb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-zonda-dark md:text-4xl">
            Privacy Policy for Zonda Professionals
          </h1>
          <p className="text-muted-foreground">Effective date: 1/1/2026</p>
          <p>
            Zonda Professionals (&quot;App&quot;) is provided by ZondaHealth
            (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
          </p>
          <p>
            This Privacy Policy explains how we collect, use, store, and share
            information when you use the Zonda Professionals mobile application.
          </p>
        </header>

        <section className="space-y-4" aria-labelledby="who-we-are">
          <h2 id="who-we-are" className="text-xl font-semibold text-zonda-dark">
            1. Who We Are
          </h2>
          <p>
            <strong>Developer / Controller:</strong>
            <br />
            ZondaHealth
          </p>
          <p>
            <strong>Privacy contact:</strong>
            <br />
            support@zondahealth.com
          </p>
          <p>
            <strong>Support contact:</strong>
            <br />
            support@zondahealth.com
          </p>
          <p>
            This Privacy Policy applies to the Zonda Professionals mobile app
            available under the package/bundle identifier{' '}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
              com.zonda.professionals
            </code>
            .
          </p>
        </section>

        <section className="space-y-6" aria-labelledby="information-we-collect">
          <h2
            id="information-we-collect"
            className="text-xl font-semibold text-zonda-dark"
          >
            2. Information We Collect
          </h2>
          <p>
            We may collect and process the following categories of information:
          </p>

          <div className="space-y-3">
            <h3 className="text-lg font-medium text-zonda-dark">
              A. Account and identity information
            </h3>
            <ul className="list-disc space-y-1 pl-6">
              <li>Email address</li>
              <li>First name</li>
              <li>Last name</li>
              <li>
                Username or account identifiers associated with your
                professional account
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-medium text-zonda-dark">
              B. Professional profile information
            </h3>
            <ul className="list-disc space-y-1 pl-6">
              <li>Phone number</li>
              <li>
                National ID information, such as ID type, ID number, and issuing
                country
              </li>
              <li>Professional verification status</li>
              <li>
                Professional license information, such as registration number,
                issuing authority, issuing country, issue date, expiration date,
                and license verification status
              </li>
              <li>
                Specialty information associated with professional licenses,
                where applicable
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-medium text-zonda-dark">
              C. Location information
            </h3>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                Approximate and/or precise foreground location from your device,
                when you grant permission
              </li>
              <li>
                Coordinates used to record where a professional visit or
                appointment was completed
              </li>
            </ul>
            <p>
              We collect location data only while the app is in use and only for
              operational purposes related to service delivery and
              visit/appointment completion.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-medium text-zonda-dark">
              D. Authentication and security data
            </h3>
            <ul className="list-disc space-y-1 pl-6">
              <li>Session tokens</li>
              <li>Authorization tokens</li>
              <li>
                Basic device/app session information required to maintain secure
                login state
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-medium text-zonda-dark">
              E. Technical and operational information
            </h3>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                Basic app diagnostics, logs, and request metadata necessary to
                operate, secure, and troubleshoot the App and backend services
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-4" aria-labelledby="how-we-use">
          <h2 id="how-we-use" className="text-xl font-semibold text-zonda-dark">
            3. How We Use Information
          </h2>
          <p>We use personal information to:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Create and manage user accounts</li>
            <li>Authenticate users and maintain active sessions</li>
            <li>Verify professional identity and licensing status</li>
            <li>
              Enable professionals to complete onboarding and verification flows
            </li>
            <li>Display and update user profile information</li>
            <li>
              Record the location of completed visits or appointments when
              required for service operations
            </li>
            <li>
              Provide, maintain, secure, and improve the App and related
              services
            </li>
            <li>
              Detect, prevent, and investigate misuse, fraud, security
              incidents, and technical issues
            </li>
            <li>
              Comply with legal, regulatory, contractual, and professional
              obligations
            </li>
          </ul>
        </section>

        <section className="space-y-4" aria-labelledby="legal-bases">
          <h2
            id="legal-bases"
            className="text-xl font-semibold text-zonda-dark"
          >
            4. Legal Bases for Processing
          </h2>
          <p>
            Depending on your location and applicable law, we process personal
            data on one or more of the following legal bases:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              Performance of a contract or provision of requested services
            </li>
            <li>Compliance with legal or regulatory obligations</li>
            <li>
              Legitimate interests, such as securing our services and preventing
              abuse
            </li>
            <li>
              Your consent, where required, including for device location
              permissions
            </li>
          </ul>
        </section>

        <section className="space-y-4" aria-labelledby="location-permissions">
          <h2
            id="location-permissions"
            className="text-xl font-semibold text-zonda-dark"
          >
            5. Location Permissions
          </h2>
          <p>
            The App requests foreground location permission to help record where
            care or a visit was completed. If you deny location permission, some
            features of the App may not function correctly or may be
            unavailable.
          </p>
          <p>
            You can change location permissions at any time in your device
            settings.
          </p>
        </section>

        <section className="space-y-4" aria-labelledby="how-we-share">
          <h2
            id="how-we-share"
            className="text-xl font-semibold text-zonda-dark"
          >
            6. How We Share Information
          </h2>
          <p>We do not sell personal data.</p>
          <p>We may share personal data only in the following circumstances:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              With service providers that help us operate the App and related
              backend services, such as authentication, cloud hosting,
              infrastructure, and technical support providers
            </li>
            <li>
              With affiliated entities within the Zonda group, where necessary
              to provide the service
            </li>
            <li>
              With healthcare, operational, compliance, or regulatory
              stakeholders where required to provide services or comply with
              applicable obligations
            </li>
            <li>
              With authorities, regulators, courts, or law enforcement when
              required by law or to protect rights, safety, and security
            </li>
            <li>
              In connection with a merger, acquisition, restructuring,
              financing, or sale of assets, subject to appropriate safeguards
            </li>
          </ul>
          <p>
            We require service providers processing personal data on our behalf
            to use appropriate confidentiality and security measures.
          </p>
        </section>

        <section className="space-y-4" aria-labelledby="storage-security">
          <h2
            id="storage-security"
            className="text-xl font-semibold text-zonda-dark"
          >
            7. Data Storage and Security
          </h2>
          <p>
            We use reasonable technical and organizational measures designed to
            protect personal data against unauthorized access, loss, misuse,
            alteration, and disclosure.
          </p>
          <p>These measures may include:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Encrypted transmission of data where appropriate</li>
            <li>Secure storage of authentication credentials on the device</li>
            <li>Access controls and restricted administrative access</li>
            <li>
              Logging and monitoring for security and operational purposes
            </li>
          </ul>
          <p>
            No method of transmission or storage is completely secure, and we
            cannot guarantee absolute security.
          </p>
        </section>

        <section className="space-y-4" aria-labelledby="retention">
          <h2 id="retention" className="text-xl font-semibold text-zonda-dark">
            8. Data Retention
          </h2>
          <p>We retain personal data only for as long as necessary to:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Provide the App and related services</li>
            <li>Maintain account and verification records</li>
            <li>
              Comply with legal, tax, accounting, regulatory, and professional
              obligations
            </li>
            <li>Resolve disputes and enforce agreements</li>
            <li>Maintain security, fraud prevention, and audit records</li>
          </ul>
          <p>
            Specific retention periods may vary depending on the type of data
            and applicable law.
          </p>
          <p>
            If you request deletion of your account or personal data, we may
            retain certain information where necessary for legitimate business
            purposes or to comply with legal, regulatory, fraud prevention,
            security, or recordkeeping obligations.
          </p>
        </section>

        <section className="space-y-4" aria-labelledby="deletion">
          <h2 id="deletion" className="text-xl font-semibold text-zonda-dark">
            9. Account Deletion and Data Deletion Requests
          </h2>
          <p>
            You may request deletion of your account and associated personal
            data by:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Using the in-app deletion option, if available; or</li>
            <li>Contacting us at support@zondahealth.com</li>
          </ul>
          <p>
            When we receive a valid deletion request, we will delete or
            de-identify your personal data unless we need to retain certain
            information for legal, security, fraud prevention, regulatory, or
            recordkeeping reasons.
          </p>
        </section>

        <section className="space-y-4" aria-labelledby="your-rights">
          <h2
            id="your-rights"
            className="text-xl font-semibold text-zonda-dark"
          >
            10. Your Rights
          </h2>
          <p>
            Depending on your location and applicable law, you may have rights
            to:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Access your personal data</li>
            <li>Correct inaccurate or incomplete data</li>
            <li>Request deletion of your data</li>
            <li>Object to or restrict certain processing</li>
            <li>Withdraw consent where processing is based on consent</li>
            <li>Request portability of your data</li>
            <li>
              Lodge a complaint with a competent data protection authority
            </li>
          </ul>
          <p>To exercise your rights, contact us at support@zondahealth.com.</p>
        </section>

        <section className="space-y-4" aria-labelledby="children">
          <h2 id="children" className="text-xl font-semibold text-zonda-dark">
            11. Children
          </h2>
          <p>
            The App is intended for professional use and is not directed to
            children. We do not knowingly collect personal information directly
            from children through this App.
          </p>
        </section>

        <section className="space-y-4" aria-labelledby="international">
          <h2
            id="international"
            className="text-xl font-semibold text-zonda-dark"
          >
            12. International Data Transfers
          </h2>
          <p>
            Your information may be processed in countries other than your own.
            Where applicable, we take appropriate steps to protect personal data
            during international transfers in accordance with applicable law.
          </p>
        </section>

        <section className="space-y-4" aria-labelledby="third-party">
          <h2
            id="third-party"
            className="text-xl font-semibold text-zonda-dark"
          >
            13. Third-Party Services
          </h2>
          <p>
            The App may rely on third-party service providers for
            authentication, hosting, infrastructure, and related technical
            operations. Those providers process data only as necessary to
            provide services on our behalf or as otherwise described in this
            Privacy Policy.
          </p>
        </section>

        <section className="space-y-4" aria-labelledby="changes">
          <h2 id="changes" className="text-xl font-semibold text-zonda-dark">
            14. Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. If we make
            material changes, we will update the effective date above and may
            provide additional notice through the App, website, or other
            appropriate means.
          </p>
        </section>

        <section className="space-y-4" aria-labelledby="contact">
          <h2 id="contact" className="text-xl font-semibold text-zonda-dark">
            15. Contact Us
          </h2>
          <p>
            If you have questions, concerns, or requests related to this Privacy
            Policy or personal data processing, contact us at:
          </p>
          <p className="whitespace-pre-line">
            ZondaHealth
            {'\n'}
            support@zondahealth.com
          </p>
        </section>
      </article>
    </main>
  );
}

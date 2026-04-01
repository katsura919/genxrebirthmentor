
import React from 'react';

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-[var(--bg-main)] px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-3xl text-base leading-7 text-[var(--text-primary)]">
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-[var(--accent-dark)] sm:text-4xl font-[family-name:var(--font-headline)]">
                    Privacy Policy
                </h1>
                <p className="mt-6 text-[1.125rem] leading-8 text-[var(--text-secondary)] font-[family-name:var(--font-body)]">
                    Last updated: February 14, 2026
                </p>

                <div className="mt-10 max-w-2xl space-y-8 font-[family-name:var(--font-body)]">
                    <p>
                        At Gen X Rebirth, we value your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website and use our services.
                    </p>

                    <section>
                        <h2 className="text-2xl font-bold tracking-tight text-[var(--accent-dark)] font-[family-name:var(--font-headline)]">1. Information We Collect</h2>
                        <p className="mt-4">
                            We may collect the following types of information:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li><strong>Personal Information:</strong> Name, email address, and other contact details you voluntarily provide when subscribing to our newsletter, booking a consultation, or contacting us.</li>
                            <li><strong>Usage Data:</strong> Information about how you interact with our website, such as IP address, browser type, pages visited, and time spent on the site.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold tracking-tight text-[var(--accent-dark)] font-[family-name:var(--font-headline)]">2. How We Use Your Information</h2>
                        <p className="mt-4">
                            We use the collected information for the following purposes:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li>To provide and maintain our services.</li>
                            <li>To communicate with you, including sending newsletters, updates, and promotional materials (you can opt-out at any time).</li>
                            <li>To improve our website and user experience.</li>
                            <li>To comply with legal obligations.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold tracking-tight text-[var(--accent-dark)] font-[family-name:var(--font-headline)]">3. Data Security</h2>
                        <p className="mt-4">
                            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet is 100% secure.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold tracking-tight text-[var(--accent-dark)] font-[family-name:var(--font-headline)]">4. Third-Party Services</h2>
                        <p className="mt-4">
                            We may use third-party services (such as analytics providers or email marketing platforms) that collect, monitor, and analyze this type of information. These third parties have their own privacy policies addressing how they use such information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold tracking-tight text-[var(--accent-dark)] font-[family-name:var(--font-headline)]">5. Your Rights</h2>
                        <p className="mt-4">
                            You have the right to access, correct, or delete your personal information. If you wish to exercise these rights, please contact us.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold tracking-tight text-[var(--accent-dark)] font-[family-name:var(--font-headline)]">6. Changes to This Policy</h2>
                        <p className="mt-4">
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold tracking-tight text-[var(--accent-dark)] font-[family-name:var(--font-headline)]">7. Contact Us</h2>
                        <p className="mt-4">
                            If you have any questions about this Privacy Policy, please contact us at support@genxrebirth.com.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}

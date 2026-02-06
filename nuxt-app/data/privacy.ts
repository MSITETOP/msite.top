export type PrivacySection = {
  id?: string
  title: string
  paragraphs?: string[]
  list?: string[]
  subsections?: { title: string; paragraphs?: string[]; list?: string[] }[]
  paragraphsAfter?: string[]
}

export type PrivacyContent = {
  title: string
  lastUpdated: string
  sections: PrivacySection[]
}

export type PrivacyMeta = {
  title: string
  description: string
  keywords?: string
}

export type PrivacyData = { meta: PrivacyMeta; content: PrivacyContent }

export const privacyEn: PrivacyData = {
  meta: {
    title: 'Privacy Policy | MSITE.TOP',
    description:
      'Privacy Policy - MSITE.TOP Bitrix24 services. How we collect, use, and protect your personal data.',
    keywords: 'privacy policy, data protection, GDPR, MSITE.TOP'
  },
  content: {
    title: 'Privacy Policy',
    lastUpdated: 'February 2, 2025',
    sections: [
      {
        id: 'introduction',
        title: '1. Introduction',
        paragraphs: [
          'MSITE.TOP ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our website and services.',
          'By using our website or services, you agree to the collection and use of information in accordance with this policy.'
        ]
      },
      {
        id: 'information-we-collect',
        title: '2. Information We Collect',
        subsections: [
          {
            title: '2.1 Information You Provide',
            paragraphs: ['We collect information that you provide directly to us, including:'],
            list: [
              'Name and contact information (email, phone number, company name)',
              'Information about your business and requirements',
              'Messages and communications you send to us',
              'Any other information you choose to provide'
            ]
          },
          {
            title: '2.2 Automatically Collected Information',
            paragraphs: [
              'When you visit our website, we may automatically collect certain information, including:'
            ],
            list: [
              'IP address and browser type',
              'Pages visited and time spent on pages',
              'Referring website addresses',
              'Device information'
            ]
          }
        ]
      },
      {
        id: 'how-we-use',
        title: '3. How We Use Your Information',
        paragraphs: ['We use the information we collect to:'],
        list: [
          'Respond to your inquiries and provide our services',
          'Send you information about Bitrix24 implementation, customization, and support services',
          'Improve our website and services',
          'Comply with legal obligations',
          'Protect our rights and prevent fraud'
        ]
      },
      {
        id: 'legal-basis',
        title: '4. Legal Basis for Processing (GDPR)',
        paragraphs: [
          'If you are located in the European Economic Area (EEA), we process your personal data based on:'
        ],
        list: [
          'Consent: When you provide explicit consent for specific processing activities',
          'Contract: To perform our services and fulfill contractual obligations',
          'Legitimate interests: To improve our services and communicate with you about relevant services',
          'Legal obligation: To comply with applicable laws and regulations'
        ]
      },
      {
        id: 'data-sharing',
        title: '5. Data Sharing and Disclosure',
        paragraphs: [
          'We do not sell your personal information. We may share your information with:'
        ],
        list: [
          'Service providers: Third-party vendors who assist us in operating our website and providing services (e.g., hosting, analytics)',
          'Business partners: Bitrix24 and other partners necessary to deliver our services',
          'Legal requirements: When required by law or to protect our rights'
        ]
      },
      {
        id: 'data-retention',
        title: '6. Data Retention',
        paragraphs: [
          'We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.'
        ]
      },
      {
        id: 'your-rights',
        title: '7. Your Rights (GDPR)',
        paragraphs: ['If you are located in the EEA, you have the following rights:'],
        list: [
          'Access: Request a copy of your personal data',
          'Rectification: Request correction of inaccurate data',
          'Erasure: Request deletion of your personal data',
          'Restriction: Request limitation of processing',
          'Portability: Request transfer of your data to another service',
          'Objection: Object to processing based on legitimate interests',
          'Withdraw consent: Withdraw consent at any time'
        ],
        paragraphsAfter: [
          'To exercise these rights, please contact us at b24@msite.top.'
        ]
      },
      {
        id: 'cookies',
        title: '8. Cookies and Tracking Technologies',
        paragraphs: [
          'We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.'
        ]
      },
      {
        id: 'data-security',
        title: '9. Data Security',
        paragraphs: [
          'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
        ]
      },
      {
        id: 'international-transfers',
        title: '10. International Data Transfers',
        paragraphs: [
          'Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable data protection laws.'
        ]
      },
      {
        id: 'children-privacy',
        title: "11. Children's Privacy",
        paragraphs: [
          'Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.'
        ]
      },
      {
        id: 'changes',
        title: '12. Changes to This Privacy Policy',
        paragraphs: [
          'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.'
        ]
      },
      {
        id: 'contact',
        title: '13. Contact Us',
        paragraphs: [
          'If you have questions about this Privacy Policy, please contact us:',
          'MSITE.TOP\nEmail: b24@msite.top\nPhone: +34 614 33 27 85'
        ]
      }
    ]
  }
}

export const privacyEs: PrivacyData = {
  meta: {
    title: 'Política de Privacidad | MSITE.TOP',
    description:
      'Política de Privacidad - MSITE.TOP servicios Bitrix24. Cómo recopilamos, usamos y protegemos tus datos personales.',
    keywords: 'política de privacidad, protección de datos, RGPD, MSITE.TOP'
  },
  content: {
    title: 'Política de Privacidad',
    lastUpdated: '2 de febrero de 2025',
    sections: [
      {
        id: 'introduccion',
        title: '1. Introducción',
        paragraphs: [
          'MSITE.TOP ("nosotros", "nuestro", "nuestra") se compromete a proteger tu privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos tu información personal cuando utilizas nuestro sitio web y servicios.',
          'Al usar nuestro sitio web o servicios, aceptas la recopilación y el uso de información de acuerdo con esta política.'
        ]
      },
      {
        id: 'informacion-recopilamos',
        title: '2. Información que Recopilamos',
        subsections: [
          {
            title: '2.1 Información que Proporcionas',
            paragraphs: [
              'Recopilamos información que proporcionas directamente, incluyendo:'
            ],
            list: [
              'Nombre e información de contacto (email, teléfono, nombre de empresa)',
              'Información sobre tu negocio y requisitos',
              'Mensajes y comunicaciones que nos envías',
              'Cualquier otra información que elijas proporcionar'
            ]
          },
          {
            title: '2.2 Información Recopilada Automáticamente',
            paragraphs: [
              'Cuando visitas nuestro sitio web, podemos recopilar automáticamente cierta información, incluyendo:'
            ],
            list: [
              'Dirección IP y tipo de navegador',
              'Páginas visitadas y tiempo en cada página',
              'Direcciones de sitios web de referencia',
              'Información del dispositivo'
            ]
          }
        ]
      },
      {
        id: 'como-usamos',
        title: '3. Cómo Usamos tu Información',
        paragraphs: ['Usamos la información recopilada para:'],
        list: [
          'Responder a tus consultas y proporcionar nuestros servicios',
          'Enviarte información sobre implementación, personalización y soporte de Bitrix24',
          'Mejorar nuestro sitio web y servicios',
          'Cumplir con obligaciones legales',
          'Proteger nuestros derechos y prevenir fraudes'
        ]
      },
      {
        id: 'base-legal',
        title: '4. Base Legal para el Tratamiento (RGPD)',
        paragraphs: [
          'Si te encuentras en el Espacio Económico Europeo (EEE), procesamos tus datos personales basándonos en:'
        ],
        list: [
          'Consentimiento: Cuando proporcionas consentimiento explícito para actividades específicas de tratamiento',
          'Contrato: Para realizar nuestros servicios y cumplir obligaciones contractuales',
          'Intereses legítimos: Para mejorar nuestros servicios y comunicarnos contigo sobre servicios relevantes',
          'Obligación legal: Para cumplir con leyes y regulaciones aplicables'
        ]
      },
      {
        id: 'compartir-datos',
        title: '5. Compartir y Divulgación de Datos',
        paragraphs: [
          'No vendemos tu información personal. Podemos compartir tu información con:'
        ],
        list: [
          'Proveedores de servicios: Proveedores terceros que nos ayudan a operar nuestro sitio web y proporcionar servicios (ej. hosting, análisis)',
          'Socios comerciales: Bitrix24 y otros socios necesarios para entregar nuestros servicios',
          'Requisitos legales: Cuando sea requerido por ley o para proteger nuestros derechos'
        ]
      },
      {
        id: 'retencion-datos',
        title: '6. Retención de Datos',
        paragraphs: [
          'Conservamos tu información personal solo durante el tiempo necesario para cumplir los propósitos descritos en esta Política de Privacidad, a menos que un período de retención más largo sea requerido o permitido por ley.'
        ]
      },
      {
        id: 'tus-derechos',
        title: '7. Tus Derechos (RGPD)',
        paragraphs: [
          'Si te encuentras en el EEE, tienes los siguientes derechos:'
        ],
        list: [
          'Acceso: Solicitar una copia de tus datos personales',
          'Rectificación: Solicitar corrección de datos inexactos',
          'Supresión: Solicitar eliminación de tus datos personales',
          'Limitación: Solicitar limitación del tratamiento',
          'Portabilidad: Solicitar transferencia de tus datos a otro servicio',
          'Oposición: Oponerte al tratamiento basado en intereses legítimos',
          'Retirar consentimiento: Retirar el consentimiento en cualquier momento'
        ],
        paragraphsAfter: [
          'Para ejercer estos derechos, contáctanos en b24@msite.top.'
        ]
      },
      {
        id: 'cookies',
        title: '8. Cookies y Tecnologías de Seguimiento',
        paragraphs: [
          'Utilizamos cookies y tecnologías similares para rastrear la actividad en nuestro sitio web y almacenar cierta información. Puedes configurar tu navegador para rechazar todas las cookies o indicar cuando se envía una cookie.'
        ]
      },
      {
        id: 'seguridad-datos',
        title: '9. Seguridad de Datos',
        paragraphs: [
          'Implementamos medidas técnicas y organizativas apropiadas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción.'
        ]
      },
      {
        id: 'transferencias-internacionales',
        title: '10. Transferencias Internacionales de Datos',
        paragraphs: [
          'Tu información puede ser transferida y procesada en países distintos a tu país de residencia. Aseguramos que existan salvaguardas apropiadas para proteger tus datos de acuerdo con esta Política de Privacidad y las leyes de protección de datos aplicables.'
        ]
      },
      {
        id: 'privacidad-menores',
        title: '11. Privacidad de Menores',
        paragraphs: [
          'Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos conscientemente información personal de menores.'
        ]
      },
      {
        id: 'cambios',
        title: '12. Cambios a esta Política de Privacidad',
        paragraphs: [
          'Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos de cualquier cambio publicando la nueva Política de Privacidad en esta página y actualizando la fecha de "Última actualización".'
        ]
      },
      {
        id: 'contacto',
        title: '13. Contáctanos',
        paragraphs: [
          'Si tienes preguntas sobre esta Política de Privacidad, contáctanos:',
          'MSITE.TOP\nEmail: b24@msite.top\nTeléfono: +34 614 33 27 85'
        ]
      }
    ]
  }
}

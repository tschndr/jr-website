import SolutionsList from '@/components/solutions/SolutionsList';
import SolutionDetail from '@/components/solutions/SolutionDetail';

const solutionDetails = [
  {
    id: 'clinical-trial',
    title: 'Clinical Trial Management System',
    description: 'A comprehensive platform designed to streamline the planning, execution, and monitoring of clinical trials. Our system provides end-to-end management capabilities from protocol design to final analysis.',
    benefits: [
      'Reduce trial timelines by up to 30%',
      'Improve data quality with real-time validation',
      'Simplify regulatory compliance and audit preparation',
      'Enhance participant experience and retention',
    ],
    features: [
      {
        title: 'Protocol Management',
        description: 'Digital protocol authoring, versioning, and approval workflows.'
      },
      {
        title: 'Participant Tracking',
        description: 'Comprehensive participant management, screening, and eligibility tracking.'
      },
      {
        title: 'Data Monitoring',
        description: 'Real-time dashboards for monitoring trial progress and data quality.'
      },
      {
        title: 'Adverse Event Reporting',
        description: 'Structured capture and management of adverse events with automatic notifications.'
      },
      {
        title: 'Regulatory Documentation',
        description: 'Centralized document repository with compliance tracking and audit trails.'
      },
      {
        title: 'Statistical Analysis',
        description: 'Integrated analysis tools with customizable reporting capabilities.'
      },
    ],
    image: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'predictive-analytics',
    title: 'Predictive Analytics Platform',
    description: 'Advanced machine learning models that analyze clinical data to predict outcomes, identify patterns, and optimize trial designs. Our predictive analytics help researchers make data-driven decisions that improve efficiency and outcomes.',
    benefits: [
      'Identify potential responders to treatments',
      'Predict and mitigate patient dropout risks',
      'Optimize site selection based on performance analytics',
      'Reduce costs through more efficient trial designs',
    ],
    features: [
      {
        title: 'Outcome Prediction',
        description: 'ML models that forecast treatment responses and clinical outcomes.'
      },
      {
        title: 'Risk Stratification',
        description: 'Identify high-risk participants for enhanced monitoring or intervention.'
      },
      {
        title: 'Pattern Recognition',
        description: 'Uncover hidden patterns and correlations in complex clinical data.'
      },
      {
        title: 'Enrollment Optimization',
        description: 'Predictive models for site performance and enrollment rates.'
      },
      {
        title: 'Interactive Visualizations',
        description: 'Dynamic data exploration tools for researchers and stakeholders.'
      },
      {
        title: 'Model Explainability',
        description: 'Transparent AI with explainable decisions for regulatory compliance.'
      },
    ],
    image: 'https://images.pexels.com/photos/7289738/pexels-photo-7289738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    reversed: true,
  },
  {
    id: 'ehr-integration',
    title: 'EHR Integration System',
    description: 'Seamlessly connect your research platforms with existing electronic health record systems for unified data access. Our integration solution eliminates redundant data entry, reduces errors, and enables secure, compliant data exchange.',
    benefits: [
      'Eliminate duplicate data entry across systems',
      'Access comprehensive patient histories',
      'Ensure data consistency across clinical and research systems',
      'Streamline recruitment from existing patient populations',
    ],
    features: [
      {
        title: 'Bidirectional Sync',
        description: 'Two-way data flow between EHR systems and research platforms.'
      },
      {
        title: 'Standards Compliance',
        description: 'Support for FHIR, HL7, SNOMED CT, and other healthcare standards.'
      },
      {
        title: 'Privacy Controls',
        description: 'Granular access permissions and de-identification capabilities.'
      },
      {
        title: 'Audit Trails',
        description: 'Comprehensive logging of all data access and transfers.'
      },
      {
        title: 'Multi-EHR Support',
        description: 'Compatible with major EHR systems including Epic, Cerner, and Allscripts.'
      },
      {
        title: 'Custom Mapping',
        description: 'Flexible data mapping to accommodate institutional variations.'
      },
    ],
    image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'academic-research',
    title: 'Academic Research Platform',
    description: 'A specialized platform designed for academic institutions conducting clinical and translational research. Our solution facilitates collaboration, streamlines workflows, and enhances the productivity of academic research teams.',
    benefits: [
      'Foster collaboration across departments and institutions',
      'Streamline grant application and management process',
      'Track research outputs and impact metrics',
      'Simplify compliance with institutional requirements',
    ],
    features: [
      {
        title: 'Collaborative Workspaces',
        description: 'Secure environments for multi-institutional collaboration and data sharing.'
      },
      {
        title: 'Publication Tracking',
        description: 'Monitor research outputs, citations, and impact metrics.'
      },
      {
        title: 'Grant Management',
        description: 'Tools for funding applications, budget tracking, and reporting.'
      },
      {
        title: 'IRB Submission',
        description: 'Streamlined preparation and submission of IRB protocols.'
      },
      {
        title: 'Student Involvement',
        description: 'Structured roles and permissions for trainees and students.'
      },
      {
        title: 'Knowledge Repository',
        description: 'Central storage for protocols, methods, and research artifacts.'
      },
    ],
    image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    reversed: true,
  },
];

export default function SolutionsPage() {
  return (
    <main>
      <SolutionsList />
      {solutionDetails.map((solution) => (
        <SolutionDetail
          key={solution.id}
          id={solution.id}
          title={solution.title}
          description={solution.description}
          benefits={solution.benefits}
          features={solution.features}
          image={solution.image}
          reversed={solution.reversed}
        />
      ))}
    </main>
  );
}
export type DomainTag = 'ml' | 'systems' | 'rl';

export interface Profile {
  name: string;
  monogram: string;
  title: string;
  tagline: string;
  summary: string;
  github: string;
  linkedin: string;
  scholar: string;
  highlights: { label: string; value: string }[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  domains: DomainTag[];
  summary: string;
  bullets: string[];
  tags: string[];
  expandedByDefault?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Ph.D. Thesis' | 'M.Tech. Thesis' | 'Academic Project';
  domains: DomainTag[];
  tech: string[];
  description: string;
  highlights: string[];
}

export interface PublicationItem {
  title: string;
  venue: string;
  year: string;
  date: string;
  type: 'Journal' | 'Conference';
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  note?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export const profile: Profile = {
  name: 'Manoj Chandrasekaran',
  monogram: 'MC',
  title: 'Senior Machine Learning & Distributed Systems Engineer',
  tagline: 'Building large-scale ML, LLM, and latency-sensitive distributed systems.',
  summary:
    'Self-driven Machine Learning Engineer with a proven track record of developing large-scale ML and distributed software solutions for latency-sensitive systems at Microsoft, Meta, and Apple. Experienced in applying LLMs, RAG, reinforcement learning, and optimization algorithms to complex infrastructure, CDN reliability, and data center capacity planning challenges.',
  github: 'https://github.com/manoj-c',
  linkedin: 'https://www.linkedin.com/in/manojc/',
  scholar: 'https://scholar.google.com/citations?user=2j6BpK8AAAAJ&hl=en',
  highlights: [
    { value: '8+ yrs', label: 'Industry & Research' },
    { value: 'Microsoft · Meta · Apple', label: 'Production Scale' },
    { value: '6', label: 'Peer-Reviewed Papers' },
  ],
};

export const domainLabels: Record<DomainTag | 'all', string> = {
  all: 'All',
  ml: 'ML & LLMs',
  systems: 'Systems & Infra',
  rl: 'RL & Optimization',
};

export const experiences: ExperienceItem[] = [
  {
    id: 'microsoft-sse',
    company: 'Microsoft',
    role: 'Senior Software Engineer',
    period: 'Feb 2025 – Present',
    domains: ['systems', 'ml'],
    summary:
      'Azure FrontDoor — building global distributed health evaluation, anomaly detection, and agentic build qualification platforms.',
    expandedByDefault: true,
    bullets: [
      'Developing validation and diagnostic tooling for the Azure FrontDoor CDN service to identify and root-cause system failures.',
      'Led the design and shipping of the Environment Health Service — a global distributed architecture enabling sub-3-minute health evaluation to power global config shield.',
      'Automated outage declaration by integrating client-side availability alerts with existing outage pipelines, improving visibility into actual customer impact and enabling timely communication.',
      'Implemented an anomaly detection system to detect and localize spec test errors for faster outage root-causing.',
      'Modeled environment capacity as a function of CPU usage to improve fleet capacity forecasting accuracy.',
      'Designed a conductor-based agentic build qualification workflow, reducing manual qualification toil from a week to a few clicks and enabling higher release velocity.',
      'Automated internal build qualification processes and mentored a junior engineer through implementation; led the migration of the Fleet Health Report Service to an AKS-based architecture.',
    ],
    tags: ['Distributed Systems', 'Azure FrontDoor', 'AKS', 'Anomaly Detection', 'Agentic Workflows'],
  },
  {
    id: 'kyros-sds',
    company: 'Kyros Software Solutions',
    role: 'Senior Data Scientist',
    period: 'Oct 2024 – Feb 2025',
    domains: ['ml'],
    summary:
      'Architected production RAG pipelines and LLM document intelligence workflows for enterprise knowledge and contracts.',
    expandedByDefault: true,
    bullets: [
      'Built a Retrieval-Augmented Generation (RAG) framework to index internal documents and answer complex user queries.',
      'Benchmarked retrieval and generation quality across combinations of chunking strategies, embedding models, vector databases, and LLMs.',
      'Built an LLM-based pipeline to extract text from scanned contracts and surface structured metadata including summaries, keywords, and start/end dates.',
    ],
    tags: ['RAG', 'LLMs', 'Vector Databases', 'Document Extraction', 'Benchmarking'],
  },
  {
    id: 'meta-rs',
    company: 'Meta Platforms Inc.',
    role: 'Research Scientist',
    period: 'Jan 2022 – Aug 2024',
    domains: ['ml', 'rl', 'systems'],
    summary:
      'Data Center Planning — built LLM Q&A systems, RL network optimization, and topology risk/delay pipelines at hyperscale.',
    expandedByDefault: true,
    bullets: [
      'Built an LLM-powered natural language answering interface from the ground up for capacity planners to query Plan of Record and Bill of Materials (BOM) data.',
      'Fine-tuned and optimized Llama 2 and Code Llama to answer questions on network topology and material specifications from the latest BOM versions, with intermediate-step visibility for user trust.',
      'Maintained reinforcement learning-based optimization systems applied across backbone and data center forecast planning.',
      'Developed a Risk Evaluation pipeline computing multi-year safe DC topology capacity, reducing runtime from ~2 hours to 30 minutes.',
      'Implemented a Delay Analysis pipeline forecasting service regionalization timelines and quantifying upgrade delay risks.',
      'Conducted custom scenario risk analyses on capacity and demand, and built an audit system detecting cross-region capacity corner cases during network entity drains.',
      'Designed and implemented a system collecting live switch and circuit statuses to reconstruct accurate current-state network topologies.',
    ],
    tags: ['Llama 2 / Code Llama', 'Reinforcement Learning', 'Python', 'NetworkX', 'DC Planning'],
  },
  {
    id: 'facebook-intern',
    company: 'Facebook',
    role: 'Software Engineer Intern',
    period: 'May 2020 – Aug 2020',
    domains: ['rl', 'systems'],
    summary:
      'Applied Deep Q-Network reinforcement learning to optimize data center topology migrations.',
    expandedByDefault: false,
    bullets: [
      'Designed and implemented an optimization framework for data center topology migration in a minimal number of steps.',
      'Implemented a Deep Q-Network (DQN) reinforcement learning algorithm to discover optimal migration plans.',
      'Optimized the DQN-RL pipeline to reduce runtime from 8 hours to 30 minutes and scaled it to networks with hundreds of nodes, cutting migration time by 20%.',
    ],
    tags: ['DQN', 'Reinforcement Learning', 'Optimization', 'Python'],
  },
  {
    id: 'apple-intern',
    company: 'Apple',
    role: 'Software Engineer Intern',
    period: 'May 2016 – Aug 2016',
    domains: ['systems'],
    summary:
      'Wireless coexistence modeling and 802.11ax OFDMA simulation for Bluetooth and Wi-Fi.',
    expandedByDefault: false,
    bullets: [
      'Developed a mathematical model computing packet error rates of coded and uncoded Bluetooth packets as a function of SINR and implemented it in the network simulator for the A2DP profile.',
      'Added 802.11ax OFDMA APIs to the existing network simulator framework.',
      'Simulated and analyzed coexistence of simultaneous Bluetooth and Wi-Fi transmissions.',
    ],
    tags: ['C++', 'Network Simulation', '802.11ax OFDMA', 'Wireless Systems'],
  },
  {
    id: 'microsoft-sde',
    company: 'Microsoft',
    role: 'Software Development Engineer',
    period: 'Jul 2013 – Aug 2015',
    domains: ['systems', 'ml'],
    summary:
      'Bing Ads Measurements & Insights — large-scale ad campaign impact quantification and demand forecasting.',
    expandedByDefault: false,
    bullets: [
      'Worked on the Measurements & Insights team of Bing Ads, leveraging big data pipelines to deliver business insights for advertisers.',
      'Devised algorithms quantifying display ad campaign impact across audience segments (age, gender, interests).',
      'Designed and built an automated system computing engagement impact across all active ad campaigns and an audience-insights pipeline used to predict future demand.',
    ],
    tags: ['Scope', 'COSMOS', 'Big Data', 'Analytics', 'Forecasting'],
  },
];

export const projects: ProjectItem[] = [
  {
    id: 'phd-thesis',
    title: 'Connectome-based Modeling and Manipulating Dynamic Brain Activity',
    category: 'Ph.D. Thesis',
    domains: ['ml', 'rl'],
    tech: ['Python', 'Graph Modeling', 'NetworkX', 'Dynamical Systems'],
    description:
      'Characterized structural and functional brain connectivity to explain abnormalities in Major Depressive Disorder (MDD) and model personalized Deep Brain Stimulation (DBS) interventions.',
    highlights: [
      'Compared structural connectome networks between healthy subjects and MDD patients.',
      'Modeled structural-to-functional connectivity mappings to explain network abnormalities.',
      'Formulated Deep Brain Stimulation treatments as targeted network interventions for personalized therapy.',
    ],
  },
  {
    id: 'mtech-thesis',
    title: 'Optimal Joint Source-Channel Decoding for Multihop Wireless Sensor Networks',
    category: 'M.Tech. Thesis',
    domains: ['systems'],
    tech: ['C', 'C++', 'Maximum Likelihood', 'Signal Processing'],
    description:
      'Developed a joint Source-Channel Maximum Likelihood decoding framework exploiting spatiotemporal sensor correlations over fading wireless channels.',
    highlights: [
      'Proposed a Generalized Likelihood Ratio Test-based Prediction Likelihood Tree approach.',
      'Derived analytical performance bounds for decision-feedback and Viterbi-based ML sequence detection.',
      'Validated SCML algorithm performance and analytical bounds via simulation.',
    ],
  },
  {
    id: 'sdn-traffic',
    title: 'Traffic Classification in Software Defined Networks',
    category: 'Academic Project',
    domains: ['ml', 'systems'],
    tech: ['Python', 'Mininet', 'Decision Trees', 'MLP', 'Laplacian SVM'],
    description:
      'Evaluated deep packet inspection and ML-based traffic classification algorithms in SDN while reducing controller load via stateful data planes.',
    highlights: [
      'Benchmarked Decision Tree, Multilayer Perceptron, and Laplacian SVM classifiers on real-world traffic datasets.',
      'Reduced traffic classification overhead using stateful data plane offloading.',
    ],
  },
  {
    id: 'rl-soccer',
    title: 'Reinforcement Learning-based Humanoid Soccer Player',
    category: 'Academic Project',
    domains: ['rl', 'ml'],
    tech: ['TensorFlow', 'OpenAI Gym', 'MuJoCo', 'PPO'],
    description:
      'Trained a simulated humanoid agent using Proximal Policy Optimization to interact with a ball and score goals.',
    highlights: [
      'Modeled humanoid interaction with a disconnected object in MuJoCo.',
      'Designed reward shaping and optimized policy learning with PPO.',
    ],
  },
  {
    id: 'video-summarization',
    title: 'Signal Processing Algorithms for Real-Time Video Summarization',
    category: 'Academic Project',
    domains: ['ml'],
    tech: ['MATLAB', 'Java', 'Acoustic Signal Processing'],
    description:
      'Built an end-user highlight extraction system using short-time autocorrelation acoustic clues to detect applause and laughter in real-time video.',
    highlights: [
      'Improved F1 score of applause detection by 22% and laughter detection by 26%.',
      'Delivered an end-to-end highlight extraction application.',
    ],
  },
];

export const publications: PublicationItem[] = [
  {
    title: 'Root-Cause Analysis of Activation Cascade Differences in Brain Networks',
    venue: 'International Conference on Brain Informatics',
    date: 'Jul 2022',
    year: '2022',
    type: 'Conference',
  },
  {
    title: 'Roadmap for 5G Cellular Networks: 10 Key Enabling Technologies',
    venue: 'Computer Networks (Elsevier) Journal',
    date: 'Sep 2016',
    year: '2016',
    type: 'Journal',
  },
  {
    title: 'Optimal Prediction Likelihood Tree Based Source-Channel ML Decoder for Wireless Sensor Networks',
    venue: 'IEEE Signal Processing Letters',
    date: 'Feb 2014',
    year: '2014',
    type: 'Journal',
  },
  {
    title: 'Novel Approach for Detecting Applause in Continuous Meeting Speech',
    venue: '3rd International Conference on Electronics Computer Technology',
    date: 'Apr 2011',
    year: '2011',
    type: 'Conference',
  },
  {
    title: 'Compressive Sampling of Speech Signals using Bessel Basis',
    venue: '3rd National Conference on Recent Trends in Communication, Computation & Signal Processing',
    date: 'Mar 2011',
    year: '2011',
    type: 'Conference',
  },
  {
    title: 'Investigation of Various Channel Models for Application of Constant Power Water Filling Algorithm',
    venue: 'IEEE International Conference on Computational Intelligence and Computing Research',
    date: 'Dec 2010',
    year: '2010',
    type: 'Conference',
  },
];

export const education: EducationItem[] = [
  {
    degree: 'Ph.D. Program',
    field: 'Computer Science (Coursework & Research)',
    institution: 'Georgia Institute of Technology',
  },
  {
    degree: 'M.S.',
    field: 'Electrical & Computer Engineering',
    institution: 'Georgia Institute of Technology',
  },
  {
    degree: 'M.Tech.',
    field: 'Electrical Engineering',
    institution: 'Indian Institute of Technology Kanpur',
  },
  {
    degree: 'B.Tech.',
    field: 'Electronics & Communications Engineering',
    institution: 'Amrita School of Engineering',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: 'ML, LLMs & Reinforcement Learning',
    items: [
      'PyTorch',
      'TensorFlow',
      'ReAgent',
      'Llama 2 / Code Llama',
      'RAG & Vector DBs',
      'Agentic Workflows',
      'DQN / PPO',
      'NetworkX',
      'SciPy / NumPy',
    ],
  },
  {
    category: 'Distributed Systems & Infrastructure',
    items: [
      'Azure FrontDoor / CDN',
      'Kubernetes (AKS)',
      'Distributed Health Monitoring',
      'Anomaly Detection',
      'Capacity Forecasting',
      'Network Topology Modeling',
    ],
  },
  {
    category: 'Languages & Data Platforms',
    items: ['Python', 'C', 'C++', 'MATLAB', 'SQL', 'Neo4j', 'Scope', 'COSMOS'],
  },
];

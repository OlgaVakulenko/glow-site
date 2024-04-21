export const services = [
  {
    name: 'MVP',
    stages: [
      {
        name: 'Investigate',
        description:
          'We do a deep research of your idea. Starting with an interview, we learn about your vision, goals, and target audience. Then we analyze the market, competitors, and audiences for valuable insights that will help build a foundation for your product.',
        tags: [
          'Stakeholders Workshops',
          'Value Proposition Canvas',
          'Competitors Analyzes',
          'Market Research',
          'User Interviews',
          'Surveys',
        ],
      },
      {
        name: 'Ideate',
        description:
          'We brainstorm features to form the foundation of a roadmap. We do it while using the Lean-approach to select the best features for the MVP for a safe and flexible launch.',
        tags: [
          'Customer Journey Map',
          'Jobs To Be Done',
          'Product Concept',
          'MVP Definition',
          'Product Roadmap',
          'Requirements',
        ],
      },
      {
        name: 'Create',
        description:
          'We build efficient but simple UX, create an eye-catching visual concept. For each project, we make a design system that helps us speed-up the work process without losing the consistency',
        tags: [
          'Information Architecture',
          'Wireframes',
          'Visual Concept',
          'UI Design',
          'Prototype',
          'Design System',
          'Handoff',
        ],
      },
      {
        name: 'Iterate',
        description:
          'When the design is done our work is not over. We run usability tests and gather real feedback to plan improvements. Received data and further analysis bring solutions that can help improve the product after launch.',
        tags: [
          'Design QA',
          'Usability Testing',
          'A/B Testing',
          'Analytics',
          'Post-launch optimization',
        ],
      },
    ],
    ill: (media) => {
      if (media === 'mobile') {
        return (
          <svg
            className="h-full w-full"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.76367 44.6186V25.2656" stroke="#DADADA" />
            <path d="M2.76367 30.795V25.2656" stroke="#19191B" />
            <path d="M16.584 39.0893V19.7363" stroke="#DADADA" />
            <path d="M16.584 39.0886V29.4121" stroke="#19191B" />
            <path d="M30.4121 24.2279V4.875" stroke="#DADADA" />
            <path d="M30.4121 14.8971V4.875" stroke="#19191B" />
            <path d="M44.2324 19.7358V0.382812" stroke="#19191B" />
            <path d="M41.4686 19.7363L46.998 19.7363" stroke="black" />
            <path d="M41.4686 19.7363L46.998 19.7363" stroke="#19191B" />
            <path d="M27.6444 4.875L33.1738 4.875" stroke="#19191B" />
            <path d="M27.6444 24.2285L33.1738 24.2285" stroke="#DADADA" />
            <path d="M13.8202 39.0898L19.3496 39.0898" stroke="#19191B" />
            <path d="M13.8202 19.7363L19.3496 19.7363" stroke="#DADADA" />
            <path d="M-0.000114918 30.7947L5.5293 30.7947" stroke="#19191B" />
            <path d="M-0.000114918 44.6172L5.5293 44.6172" stroke="#DADADA" />
            <circle cx="16.5856" cy="29.4118" r="1.03676" fill="#19191B" />
            <circle
              cx="30.4098"
              cy="14.5524"
              r="0.863971"
              fill="#19191B"
              stroke="#19191B"
              strokeWidth="0.345588"
            />
            <circle cx="44.2301" cy="1.41958" r="1.03676" fill="#19191B" />
            <circle cx="2.76137" cy="25.2653" r="1.03676" fill="#19191B" />
          </svg>
        );
      }

      return (
        <svg
          className="h-full w-full"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.70312 77.6482V44.707"
            stroke="#DADADA"
            strokeWidth="0.588235"
          />
          <path
            d="M4.70312 54.1188V44.707"
            stroke="#19191B"
            strokeWidth="0.588235"
          />
          <path
            d="M28.2344 68.2361V35.2949"
            stroke="#DADADA"
            strokeWidth="0.588235"
          />
          <path
            d="M28.2344 68.2362V51.7656"
            stroke="#19191B"
            strokeWidth="0.588235"
          />
          <path
            d="M51.7656 42.9412V10"
            stroke="#DADADA"
            strokeWidth="0.588235"
          />
          <path
            d="M51.7656 27.0588V10"
            stroke="#19191B"
            strokeWidth="0.588235"
          />
          <path
            d="M75.293 35.2947V2.35352"
            stroke="#19191B"
            strokeWidth="0.588235"
          />
          <path
            d="M70.5882 35.2949L80 35.2949"
            stroke="black"
            strokeWidth="0.588235"
          />
          <path
            d="M70.5882 35.2949L80 35.2949"
            stroke="#19191B"
            strokeWidth="0.588235"
          />
          <path
            d="M47.057 10L56.4687 10"
            stroke="#19191B"
            strokeWidth="0.588235"
          />
          <path
            d="M47.057 42.9414L56.4687 42.9414"
            stroke="#DADADA"
            strokeWidth="0.588235"
          />
          <path
            d="M23.5296 68.2363L32.9414 68.2363"
            stroke="#19191B"
            strokeWidth="0.588235"
          />
          <path
            d="M23.5296 35.2949L32.9414 35.2949"
            stroke="#DADADA"
            strokeWidth="0.588235"
          />
          <path
            d="M-0.00160885 54.1191L9.41016 54.1191"
            stroke="#19191B"
            strokeWidth="0.588235"
          />
          <path
            d="M-0.00160885 77.6484L9.41016 77.6484"
            stroke="#DADADA"
            strokeWidth="0.588235"
          />
          <circle cx="28.2335" cy="51.7647" r="1.76471" fill="#19191B" />
          <circle
            cx="51.7647"
            cy="26.4717"
            r="1.47059"
            fill="#19191B"
            stroke="#19191B"
            strokeWidth="0.588235"
          />
          <circle cx="75.2921" cy="4.11822" r="1.76471" fill="#19191B" />
          <circle cx="4.70611" cy="44.7061" r="1.76471" fill="#19191B" />
        </svg>
      );
    },
  },
  {
    name: 'Redesign',
    stages: [
      {
        name: 'Audit',
        description:
          'The product already has clear goals but something is off with reaching them. We can help fix that: first, we interview stakeholders and do a deep analysis of the existing design. After that we provide our clients with a detailed report on problems and suggested solutions.',
        tags: [
          'Stakeholders Workshops',
          'Usability testings',
          'Competitors Analysis',
          'Heuristic Analysis',
          'UI UX Audit',
          'Audit report',
        ],
      },
      {
        name: 'Ideate',
        description: `Based on the audit results, together with the client we make joint decision for the changes roadmap.
        Maybe the product is visually excellent but users experience some blockers when using it - we can fix the flow without changing the visual concept. 
        Or, maybe the features work great but the looks are outdated and need a redo of Look & Feel.`,
        tags: ['Features definition', 'Redesign roadmap', 'Requirements'],
      },
      {
        name: 'Redesign',
        description:
          'Our aim here is to use design to solve problems and meet the set goals. We improve things that work and obliterate any obstacles on for the user.',
        tags: [
          'Wireframes',
          'Visual Concept',
          'UI Design',
          'Prototype',
          'Design System',
          'Handoff',
        ],
      },
      {
        name: 'Iterate',
        description:
          'We put the redesign to test, analyze, and evaluate the effect of new solutions. Then we can bring iterations based on the feedback of real users.',
        tags: ['Design QA', 'Usability Testing', 'A/B Testing', 'Analytics'],
      },
    ],
    ill: (media) =>
      media === 'mobile' ? (
        <svg
          className="h-full w-full"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_9728_21801)">
            <circle cx="22.4614" cy="23.5009" r="22.1176" stroke="#DADADA" />
            <path
              d="M22.4614 45.6186C26.612 45.6186 30.6789 44.4507 34.1971 42.2483C37.7153 40.046 40.5427 36.8981 42.3562 33.1646C44.1697 29.4311 44.8961 25.2626 44.4522 21.1358C44.0084 17.0089 42.4122 13.0902 39.8463 9.82776C37.2803 6.56528 33.8482 4.09065 29.9421 2.6868C26.0361 1.28295 21.8139 1.00653 17.7582 1.88915C13.7024 2.77177 9.97692 4.77781 7.00754 7.67791C4.03815 10.578 1.94474 14.2551 0.966633 18.2889"
              stroke="#19191B"
            />
            <path
              d="M25.2266 27.9931L25.9347 27.8559C37.0803 25.6965 41.015 11.7661 32.6462 4.0947L32.1383 3.62915"
              stroke="black"
            />
            <circle cx="25.9196" cy="27.994" r="1.03676" fill="#19191B" />
            <circle cx="22.4625" cy="45.619" r="1.03676" fill="#19191B" />
            <circle cx="1.03676" cy="17.9706" r="1.03676" fill="#19191B" />
          </g>
          <defs>
            <clipPath id="clip0_9728_21801">
              <rect
                width="47"
                height="46.3088"
                fill="white"
                transform="translate(0 0.345703)"
              />
            </clipPath>
          </defs>
        </svg>
      ) : (
        <svg
          className="h-full w-full"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_9728_19029)">
            <circle
              cx="38.233"
              cy="40.0003"
              r="37.6471"
              stroke="#DADADA"
              strokeWidth="0.588235"
            />
            <path
              d="M38.233 77.6474C45.2979 77.6474 52.2203 75.6594 58.2087 71.9107C64.197 68.1621 69.0097 62.804 72.0966 56.4491C75.1834 50.0942 76.4197 42.9989 75.6642 35.9745C74.9087 28.9501 72.1919 22.28 67.8243 16.7268C63.4567 11.1737 57.6147 6.96152 50.9662 4.57199C44.3176 2.18245 37.1308 1.71196 30.2275 3.21429C23.3241 4.71662 16.9828 8.13115 11.9286 13.0675C6.87428 18.0039 3.31102 24.2628 1.64616 31.1288"
              stroke="#19191B"
              strokeWidth="0.588235"
            />
            <path
              d="M42.9414 47.6481L44.1468 47.4145C63.1179 43.7389 69.8153 20.0276 55.5706 6.96991L54.7061 6.17749"
              stroke="black"
              strokeWidth="0.588235"
            />
            <circle cx="44.1163" cy="47.6473" r="1.76471" fill="#19191B" />
            <circle cx="38.2335" cy="77.6475" r="1.76471" fill="#19191B" />
            <circle cx="1.76471" cy="30.5887" r="1.76471" fill="#19191B" />
          </g>
          <defs>
            <clipPath id="clip0_9728_19029">
              <rect
                width="80"
                height="78.8235"
                fill="white"
                transform="translate(0 0.587891)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
  },
  {
    name: 'Long term',
    stages: [
      {
        name: 'Investigate',
        description: `Getting involved with an established project or after the MVP launch we look for something great that we can polish and something new to add. 

        How do we find new features to add? By knowing the business goals and the target audience of course. We also conduct a market analysis to get the perfect solution for your product.
        `,
        tags: [
          'Stakeholders Workshops',
          'User Interviews',
          'Competitors Analysis',
          'Market Research',
          'Customer Journey Map',
          'Jobs To Be Done',
        ],
      },
      {
        name: 'Create',
        description:
          'When the problem is exposed we get in the graphics software to provide the solution. Consistency is key, that’s why we create mockups based on our design system and the technical capabilities. After considering all possible cases, we present the client with a neat clickable mockup that is ready for testing.',
        tags: [
          'Information Architecture',
          'Wireframes',
          'UI Design',
          'Prototype',
          'Design System',
          'Handoff',
        ],
      },
      {
        name: 'Iterate',
        description:
          'Our goal is to make the best design possible while minimizing time and resource spending. The same feature can be done differently so we present a couple of test-ready options and polish the best one to the point of perfection.',
        tags: [
          'Design QA',
          'Usability Testing',
          'A/B Testing',
          'Analytics',
          'Constant Improvements',
        ],
      },
    ],
    ill: (media) =>
      media === 'mobile' ? (
        <svg
          className="h-full w-full"
          viewBox="0 0 48 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.9214 11.7896V11.7896C20.1434 11.7896 21.9447 13.5909 21.9447 15.8129V24.0425M17.9214 37.027V37.027C20.1434 37.027 21.9447 35.2256 21.9447 33.0036V24.0425M21.9447 24.0425H29.0771"
            stroke="#19191B"
            strokeWidth="0.601504"
          />
          <circle cx="29.2613" cy="24.0436" r="1.09728" fill="#19191B" />
          <path
            d="M47 34.8335L39.5934 34.8335C33.8868 34.8335 29.2607 30.2074 29.2607 24.5008V24.5008C29.2607 18.7942 33.8868 14.1681 39.5934 14.1681L47 14.1681"
            stroke="#19191B"
            strokeWidth="0.601504"
          />
          <circle cx="39.1354" cy="24.0436" r="1.09728" fill="#19191B" />
          <circle cx="5.1212" cy="33.5533" r="1.09728" fill="#19191B" />
          <circle cx="8.77892" cy="41.9654" r="1.09728" fill="#19191B" />
          <circle cx="1.09728" cy="17.4596" r="1.09728" fill="#19191B" />
          <circle cx="9.87658" cy="6.85265" r="1.09728" fill="#19191B" />
          <path
            d="M0 1H7.40664C13.1132 1 17.7393 5.62611 17.7393 11.3327V11.3327C17.7393 17.0393 13.1132 21.6654 7.40663 21.6654H0"
            stroke="#DADADA"
            strokeWidth="0.601504"
          />
          <path
            d="M0 26.9692H7.40664C13.1132 26.9692 17.7393 31.5954 17.7393 37.3019V37.3019C17.7393 43.0085 13.1132 47.6347 7.40663 47.6347H0"
            stroke="#DADADA"
            strokeWidth="0.601504"
          />
          <circle cx="17.5582" cy="11.9728" r="1.09728" fill="#19191B" />
          <circle cx="17.5582" cy="37.2101" r="1.09728" fill="#19191B" />
        </svg>
      ) : (
        <svg
          className="h-full w-full"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.2773 19.5486V19.5486C34.9316 19.5486 37.8939 22.5109 37.8939 26.1651V39.699M31.2773 61.0523V61.0523C34.9316 61.0523 37.8939 58.09 37.8939 54.4358V39.699M37.8939 39.699H49.6232"
            stroke="#19191B"
            strokeWidth="0.601504"
          />
          <circle cx="49.9256" cy="39.7008" r="1.80451" fill="#19191B" />
          <path
            d="M79.0977 57.4451L66.9172 57.4451C57.5325 57.4451 49.9247 49.8373 49.9247 40.4526V40.4526C49.9247 31.0679 57.5325 23.4601 66.9172 23.4601L79.0977 23.4601"
            stroke="#19191B"
            strokeWidth="0.601504"
          />
          <circle cx="66.1639" cy="39.7008" r="1.80451" fill="#19191B" />
          <circle cx="10.2264" cy="55.3394" r="1.80451" fill="#19191B" />
          <circle cx="16.242" cy="69.1734" r="1.80451" fill="#19191B" />
          <circle cx="3.6092" cy="28.8726" r="1.80451" fill="#19191B" />
          <circle cx="18.0467" cy="11.4293" r="1.80451" fill="#19191B" />
          <path
            d="M1.80469 1.80444H13.9851C23.3698 1.80444 30.9776 9.41223 30.9776 18.7969V18.7969C30.9776 28.1816 23.3698 35.7894 13.9851 35.7894H1.80469"
            stroke="#DADADA"
            strokeWidth="0.601504"
          />
          <path
            d="M1.80469 44.5115H13.9851C23.3698 44.5115 30.9776 52.1193 30.9776 61.504V61.504C30.9776 70.8886 23.3698 78.4964 13.9851 78.4964H1.80469"
            stroke="#DADADA"
            strokeWidth="0.601504"
          />
          <circle cx="30.6795" cy="19.8492" r="1.80451" fill="#19191B" />
          <circle cx="30.6795" cy="61.3531" r="1.80451" fill="#19191B" />
        </svg>
      ),
  },
];

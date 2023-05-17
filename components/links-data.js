const links = [
  {
    label: 'Work',
    href: '/work',
  },
  {
    label: 'Team',
    href: '/about',
  },
  {
    label: 'Services',
    href: '#',
    children: [
      {
        title: 'MVP',
        text: 'We define your goals, get to know your audience, and understand the context.',
        href: '#1',
        icon: (
          <svg
            width="64"
            height="48"
            viewBox="0 0 64 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="13.5"
              y="28.5"
              width="15"
              height="15"
              stroke="currentColor"
            />
            <rect
              x="29.5"
              y="5.5"
              width="15"
              height="15"
              stroke="currentColor"
            />
            <rect
              x="28.5"
              y="28.5"
              width="23"
              height="15"
              fill="currentColor"
              stroke="currentColor"
            />
          </svg>
        ),
      },
      {
        title: 'Redesign',
        text: 'We define your goals, get to know your audience, and understand the context.',
        href: '#2',
        icon: (
          <svg
            width="64"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M37 7L6.5 37.5" stroke="currentColor" />
            <path d="M43.3134 21.7155L0.193168 22.7846" stroke="currentColor" />
            <circle
              cx="22"
              cy="24"
              r="15.5"
              fill="white"
              stroke="currentColor"
            />
            <circle
              cx="27.5"
              cy="19.5"
              r="4"
              fill="currentColor"
              stroke="currentColor"
            />
          </svg>
        ),
      },
      {
        title: 'Long term',
        text: 'We define your goals, get to know your audience, and understand the context.',
        href: '#3',
        icon: (
          <svg
            width="64"
            height="48"
            viewBox="0 0 64 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.5 39V13.75C5.5 11.4028 7.40279 9.5 9.75 9.5V9.5C12.0972 9.5 14 11.4028 14 13.75V34.75C14 37.0972 15.9028 39 18.25 39V39C20.5972 39 22.5 37.0972 22.5 34.75V13.75C22.5 11.4028 24.4028 9.5 26.75 9.5V9.5C29.0972 9.5 31 11.4028 31 13.75V29.75C31 34.8586 35.1414 39 40.25 39V39C45.3586 39 49.5 34.8586 49.5 29.75V24.6818C49.5 22.9245 50.9245 21.5 52.6818 21.5H57.5"
              stroke="currentColor"
            />
            <circle
              cx="32.5"
              cy="32.5"
              r="4"
              fill="currentColor"
              stroke="currentColor"
            />
          </svg>
        ),
      },
      {
        title: 'Startup',
        text: 'We define your goals, get to know your audience, and understand the context.',
        href: '#4',
        icon: (
          <svg
            width="64"
            height="48"
            viewBox="0 0 64 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="48"
              cy="13"
              r="7.5"
              fill="currentColor"
              stroke="currentColor"
            />
            <circle cx="24" cy="30" r="14.5" stroke="currentColor" />
          </svg>
        ),
      },
    ],
  },
  {
    label: 'Blog',
    href: '/blog',
  },
];

export default links;

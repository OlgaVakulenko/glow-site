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
    // href: '/services',
    children: [
      {
        title: 'All services',
        text: 'We put Human Centered Design in the core of our work to provide top-notch solutions.',
        href: '/services',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="44" height="33" viewBox="0 0 44 33" fill="none">
						<path d="M16.6333 3.16963C13.8036 2.71679 10.9033 3.17614 8.352 4.48119C5.80074 5.78625 3.73094 7.86929 2.4422 10.4288C1.15346 12.9884 0.712629 15.8916 1.18352 18.7183C1.65442 21.5451 3.0126 24.1486 5.06148 26.1522C7.11037 28.1557 9.74366 29.4553 12.5802 29.8628C15.4168 30.2703 18.3094 29.7646 20.8395 28.4189C23.3695 27.0732 25.4057 24.9573 26.6534 22.3775C27.901 19.7977 28.2953 16.8877 27.7793 14.0689" stroke="#19191B" stroke-linecap="round"/>
						<circle cx="14.5" cy="16.5" r="5" fill="#19191B" stroke="#19191B"/>
					</svg>
        ),
      },
      {
        title: 'UI & UX design',
        text: 'Achieve your product goals and business objectives with our UI & UX design services.',
        href: '/services/ui-ux-services',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="44" height="33" viewBox="0 0 44 33" fill="none">
						<circle cx="26.8125" cy="8.9375" r="5.15625" fill="#19191B" stroke="#19191B" stroke-width="0.6875"/>
						<circle cx="10.3125" cy="20.625" r="9.96875" stroke="#19191B" stroke-width="0.6875"/>
					</svg>
        ),
      },
      {
        title: 'Mobile app design',
        text: 'Your brand is unique, and so should your app designs. Let’s make your apps glow.',
        href: '/services/mobile-services',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="44" height="33" viewBox="0 0 44 33" fill="none">
						<g clip-path="url(#clip0_345_17308)">
							<rect x="14.5" y="0.5" width="21" height="14" transform="rotate(90 14.5 0.5)" fill="#19191B" stroke="#19191B"/>
							<rect x="33.655" y="11.345" width="21.31" height="14.31" transform="rotate(90 33.655 11.345)" fill="white" stroke="#19191B" stroke-width="0.69"/>
						</g>
						<defs>
							<clipPath id="clip0_345_17308">
								<rect width="44" height="33" fill="white"/>
							</clipPath>
						</defs>
					</svg>
        ),
      },
    ],
  },
  {
    label: 'Blog',
    href: '/blog',
  },
	{
		label: 'Design for AI',
		href: '/ai',
	}

];

export default links;

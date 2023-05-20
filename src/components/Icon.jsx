export const TwitterIcon = ({className,...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.23em"
    height="1em"
    viewBox="0 0 256 209"
    className = {`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="rgba(255, 255, 255, 0)" d="M0 0h256v209H0z" />
    <path
      fill="#55acee"
      d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
    />
  </svg>
)


export const GithubIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);

export const LinkedInIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);

export const PinterestIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="#CB1F27"
      d="M0 128.002c0 52.414 31.518 97.442 76.619 117.239-.36-8.938-.064-19.668 2.228-29.393 2.461-10.391 16.47-69.748 16.47-69.748s-4.089-8.173-4.089-20.252c0-18.969 10.994-33.136 24.686-33.136 11.643 0 17.268 8.745 17.268 19.217 0 11.704-7.465 29.211-11.304 45.426-3.207 13.578 6.808 24.653 20.203 24.653 24.252 0 40.586-31.149 40.586-68.055 0-28.054-18.895-49.052-53.262-49.052-38.828 0-63.017 28.956-63.017 61.3 0 11.152 3.288 19.016 8.438 25.106 2.368 2.797 2.697 3.922 1.84 7.134-.614 2.355-2.024 8.025-2.608 10.272-.852 3.242-3.479 4.401-6.409 3.204-17.884-7.301-26.213-26.886-26.213-48.902 0-36.361 30.666-79.961 91.482-79.961 48.87 0 81.035 35.364 81.035 73.325 0 50.213-27.916 87.726-69.066 87.726-13.819 0-26.818-7.47-31.271-15.955 0 0-7.431 29.492-9.005 35.187-2.714 9.869-8.026 19.733-12.883 27.421a127.897 127.897 0 0 0 36.277 5.249c70.684 0 127.996-57.309 127.996-128.005C256.001 57.309 198.689 0 128.005 0 57.314 0 0 57.309 0 128.002Z"
    />
  </svg>
);

export const DribbbleIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="#E74D89"
      d="M128 8.5c66 0 119.4 53.4 119.4 119.3S194 247.2 128 247.2 8.6 193.8 8.6 127.9 62 8.5 128 8.5Z"
    />
    <path
      fill="#B2215A"
      d="M128 255.7c-70.6 0-128-57.3-128-127.8C0 57.3 57.4 0 128 0s128 57.3 128 127.8-57.4 127.9-128 127.9Zm107.9-110.4c-3.7-1.2-33.8-10.1-68.1-4.7 14.3 39.2 20.1 71.2 21.2 77.8 24.6-16.5 42.1-42.7 46.9-73.1Zm-65.2 83.2c-1.6-9.6-8-43-23.3-82.8-.2.1-.5.2-.7.2-61.7 21.5-83.8 64.2-85.8 68.2 18.5 14.4 41.8 23 67.1 23 15.1.1 29.6-3 42.7-8.6ZM46.8 201c2.5-4.2 32.5-53.8 88.9-72.1 1.4-.5 2.9-.9 4.3-1.3-2.7-6.2-5.7-12.4-8.9-18.5-54.6 16.3-107.6 15.6-112.4 15.5 0 1.1-.1 2.2-.1 3.3.1 28.1 10.7 53.7 28.2 73.1ZM21 105.6c4.9.1 49.9.3 101.1-13.3C104 60.1 84.4 33.1 81.6 29.2 50.9 43.6 28.1 71.8 21 105.6Zm81.4-83.8c3 4 22.9 31 40.8 63.9 38.9-14.6 55.3-36.6 57.3-39.4-19.3-17.1-44.7-27.5-72.5-27.5-8.8 0-17.4 1.1-25.6 3Zm110.2 37.1c-2.3 3.1-20.6 26.6-61 43.1 2.5 5.2 5 10.5 7.3 15.8.8 1.9 1.6 3.8 2.4 5.6 36.4-4.6 72.5 2.8 76.1 3.5-.3-25.7-9.5-49.4-24.8-68Z"
    />
  </svg>
);


export const LinkArrow = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);

export const Circular = ({className,...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={400}
    height={400}
    viewBox="0 0 300 300"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path d="M155.9 30.7c0 1.6-.3 5-.7 7.8-.3 2.7-.6 6.8-.6 9-.1 4.4-.6 4.2 10.2 4.6 8.1.4 13.2-4.3 13.2-12.2 0-7.2-6.5-11.9-16.5-11.9-5.3 0-5.5.1-5.6 2.7zm16.9 3.8c4 4.7 2.5 11.6-3.1 14-4.4 1.8-12.9.9-12.3-1.4.2-.9.7-4.8 1.1-8.6.4-3.9.9-7.3 1.1-7.6.2-.3 2.7-.2 5.6.2 3.8.6 5.9 1.6 7.6 3.4zM122.9 29.8c-1.5.3-1.6.8-.3 6 .7 3.1 1.8 7.6 2.4 10 .5 2.3 1 5.4 1 6.8 0 1.9.5 2.5 1.8 2.2 1.2-.2 1.6-1.1 1.4-3.4-.5-4.6 1.9-6.1 5.6-3.5 1.6 1.1 3.4 2.7 4.1 3.5.7.8 2.1 1.2 3.3.8 1.8-.4 1.9-.7.6-1.6-.8-.6-3.2-2.6-5.3-4.4l-3.8-3.4 3.2-4.5c4.6-6.4.9-5.4-4.1 1.2-2.1 2.7-4.2 5.1-4.6 5.3-.5.1-1.5-3.3-2.3-7.6-1.1-6.2-1.7-7.7-3-7.4zM185.5 40.4c-5.9 2.6-7.2 10.1-2.6 14.7 2.3 2.3 3.9 2.9 7 2.9 2.7 0 4.1-.4 4.1-1.3 0-.8-1.3-1.3-3.5-1.3-3.8 0-7.5-2.7-7.5-5.6 0-2.3.4-2.3 7.7.6 3.4 1.3 6.4 2.1 6.7 1.8 1-.9.7-6.2-.5-8.4-.6-1.1-2.6-2.6-4.4-3.4-4-1.6-3.3-1.6-7 0zm7.3 3.2c2.1 1.4 3.1 5.4 1.4 5.4-2 0-10.2-3.3-10.2-4 0-1.2 3.1-2.9 5-3 .9 0 2.6.7 3.8 1.6zM108.1 43.7c-4.2 3.9-4.7 7.1-1.9 11.3 2.8 4.1 6.9 5.4 11.4 3.5 2.8-1.1 5.4-4 5.4-5.9 0-1.3-2.1-.4-4.4 1.9-2.9 2.9-5.2 3.1-8.4.9-1.5-1-2.2-2.5-2.2-4.7 0-4.6 1.3-6 6.2-6.6 5.3-.7 5.7-2.5.6-2.9-2.9-.2-4.3.3-6.7 2.5zM202.5 50.8c-1.2 11.7-1.1 13.6.5 13.9.9.2 4.9-2.1 8.9-5.1 9-6.8 8.5-6.2 6.7-6.9-.8-.3-4.2 1.5-8.1 4.5l-6.7 5 .6-4.3c.3-2.4.9-6.2 1.2-8.5.4-3.2.2-4.3-.9-4.7-1.3-.5-1.7.7-2.2 6.1zM90 52.7c-2.7 1.8-4.9 4.3-5 5.5 0 1.7 2.3.7 4.2-1.8 1.5-1.9 2.8-2.4 5.1-2.2 4.3.4 4.4 2.2.2 4.8-4.9 3-6.1 5.5-4 8.6.8 1.3 2.4 2.4 3.5 2.4 3.1 0 6.9-2.1 7.6-4.2.3-1.1 1.2-1.7 2-1.4 2.8 1.1 2.4-1.6-1.3-7.1-4.3-6.5-7.8-7.8-12.3-4.6zm10.8 8.6c.5 2.5-2.6 5.7-5.4 5.7-3.3 0-3.5-2.1-.6-5.3 2.9-3 5.5-3.2 6-.4zM217.1 62.1c-4.2 4.1-4.2 8.6-.1 12.7 3.2 3.2 8 4.8 8 2.6 0-.7-1-1.6-2.2-2-3.6-1-5.8-3.5-5.8-6.5 0-3.7 1.3-4.3 3.6-1.8 1.1 1.2 3.6 3.4 5.6 5.1l3.7 2.9 1.5-3.6c1.8-4.3 1-7.3-3-10.4-3.8-3-7.6-2.7-11.3 1zm11.5 2.4c1.5 2.2 1.2 6.6-.4 6.5-1.4-.1-9.1-7.7-8.5-8.4.3-.3 2.1-.6 3.9-.6 2.5 0 3.8.7 5 2.5zM77.5 62c-1.8 2-2 2-3.2.4-1-1.4-1.6-1.5-2.5-.6-.9.9-.9 1.5 0 2.4.8.8.8 1.5.1 2.4-1.6 2-.1 3.8 1.8 2.2 1.3-1 2.1-.5 5.5 3.5 3 3.5 4.7 4.7 6.7 4.7 3.6 0 7-3.5 5.2-5.3-1-.9-1.4-.8-2.2.5-1.5 2.8-3.5 2.2-7.8-2.5L77 65.5l2.2-1.8c1.4-1.2 1.8-2.1 1.1-2.8-.6-.6-1.6-.2-2.8 1.1zM235.3 75.3c-6.8 6-8.9 8.5-8.1 9.4.7.9 3.2-.8 10.1-7 5.1-4.5 9.2-8.6 9.2-9.1 0-2.5-2.8-.9-11.2 6.7zM60.1 71.5c-3.4 3.1-4.1 4.3-4.1 7.6 0 2.8.6 4.2 2.2 5.3 3.1 2.2 3.9 2.1 9.7-2 5.8-3.9 9.1-3.9 9.1.1 0 2.6-5.3 8.5-7.6 8.5-1.6 0-1.9 1.6-.3 2.5 1.4.9 7.4-3.3 9.3-6.6 2-3.4 2-5.8 0-8.7-2.1-3-5-2.8-10.4.8-6 4-9 4-9 .1 0-2.1 1-3.8 3.6-6.1 2.5-2.1 3.3-3.5 2.6-4.2-.7-.7-2.3.2-5.1 2.7zM239.6 82.5c-6.2 3.3-7.4 9.2-3 14.4 2 2.5 3.4 3.1 6.4 3.1 10.6 0 13.3-13.5 3.5-17.6-4.1-1.7-3.4-1.7-6.9.1zm7.9 4c1.4 1.3 2.5 3.3 2.5 4.5 0 4.9-7.9 8-11.4 4.4-2.5-2.4-2-6.9 1-9.3 3.4-2.7 5-2.6 7.9.4zM41.7 96.4c-.4.9.4 1.8 2.1 2.4 1.5.6 6.8 3.1 11.9 5.5 7.2 3.6 9.3 4.3 9.7 3.1.4-1-2.6-2.9-10.8-6.9-6.3-3-11.6-5.5-11.9-5.5-.3 0-.7.6-1 1.4zM252 102c-3.6 1.5-8.6 3.5-11.2 4.4-2.7 1-4.8 2.4-4.8 3.2 0 1.8 1.8 1.7 5-.1 3.7-2.1 4.8-1.8 4.2 1-.7 3.7 1.6 8.2 4.9 9.5 3.4 1.5 6.6.8 10.2-2.1 3.7-2.8 3.7-8.5.1-12.4-1.5-1.7-2.2-3-1.5-3.4.5-.4.7-1.1.3-1.7-.5-.7-3-.1-7.2 1.6zm6.2 4.7c3.9 3.6.8 11.3-4.7 11.3-2.9 0-6.5-3.6-6.5-6.5 0-5.2 7.3-8.4 11.2-4.8zM37.7 106.2c-.3 1 2.6 2.6 10.7 5.6 12.2 4.5 13.6 4.9 13.6 2.9 0-.6-4.6-2.9-10.3-5-13.7-5.1-13.4-5-14-3.5zM41 119c0 1.4 1.1 1.9 4.8 2.5 6.4.9 9.2 2.9 9.2 6.4 0 5.2-4 6.1-14.5 3.5-1.9-.5-2.5-.2-2.5.9 0 1.7 1.4 2.3 7.5 3.3 2.2.3 4.2.7 4.3.9.2.2 1.6-.1 3.2-.6 3.7-1.3 5.8-6.1 4.3-9.9-.9-2.3-.8-2.7.3-2.3.8.3 1.4-.1 1.4-1.1 0-.9-.3-1.6-.7-1.6-.5 0-4.5-.9-9-1.9-7.9-1.8-8.3-1.8-8.3-.1zM252.5 126.2c-2.2 2.7-2.6 3.9-2.2 7.1.6 4.3 2.8 7.3 4.6 6.3.8-.5.7-1.4-.4-2.9-1.9-2.8-1.9-7.1.1-9.1 2.5-2.6 3.1-1.9 3.8 4.1.4 3.2.9 6.5 1.2 7.4.7 2.4 3.9 1.3 7-2.4 4.8-5.8.7-13.7-7.2-13.7-3.5 0-4.7.5-6.9 3.2zm12.6 2.4c1.5 2.9.2 7.7-2.2 8.2-1.2.2-1.8-1.1-2.6-5.3-.5-3-.8-5.7-.6-5.9 1-1 4.2.8 5.4 3zM31 147.8v8.8l12.3-.1c10.2 0 12.2-.3 12.2-1.5 0-1.1-1.2-1.5-5-1.5h-5l.2-6.3c.1-4.8-.2-6.2-1.3-6.2-1 0-1.4 1.5-1.4 5.9 0 3.3-.3 6.2-.7 6.4-.5.2-2.5.2-4.5 0l-3.8-.5v-6.9c0-5.5-.3-6.9-1.5-6.9s-1.5 1.6-1.5 8.8zM260.8 144.8c-6.9.2-8.8.6-8.8 1.7 0 1.2 1.4 1.5 5.9 1.5 6.4 0 9.1 1.5 9.1 5.1 0 1 .7 1.9 1.5 1.9 1.7 0 2-2.7.5-5-.6-.9-.5-1.7.2-2.1.5-.3.8-1.3.6-2-.2-1.1-2.3-1.3-9-1.1zM250.4 166.5c-.8 1.9 1.2 3.6 3.3 2.8 1.9-.7 1.2-3.7-1-4.1-.9-.2-2 .4-2.3 1.3zM55 176.5c-1 1.2-.9 1.6.4 2.1 2.4.9 4.7-.3 4-2.1-.8-1.9-2.8-1.9-4.4 0zM245.1 186.5c-2.7 3.5-3.5 8-2.1 11.5.9 2.3 3.2 3.9 9.8 7 6.6 3.2 8.7 3.8 9.4 2.8.6-.9-1.3-2.3-7-4.9-9.4-4.5-10.6-5.7-9.8-10.4 1.2-6.3 5.9-7 15.4-2.5 7.3 3.4 8.5 3.6 8 1.4-.4-2.1-13.1-7.4-17.8-7.4-2.9 0-4.3.6-5.9 2.5zM61.5 196.6c-5 2.9-8.6 3-11 .4-1.3-1.5-2.2-1.7-2.9-1-.8.8-.3 1.8 1.6 3.5 1.7 1.5 2.3 2.5 1.5 2.8-.8.3-.9.8-.2 1.6 1.3 1.3 16.3-5.7 16.4-7.6.2-2.1-1.3-2.1-5.4.3zM66.7 203.4c-.3.8.5 1.8 1.9 2.5 1.3.6 2.9 2.2 3.4 3.7 1.3 3.3 1.3 3.7-.3 5.8-1.1 1.5-1.7 1.1-5.2-4.3-2.2-3.4-4.3-6.1-4.7-6.1-1.3 0-4.8 5.3-4.8 7.4 0 3.6 3.6 8.4 6.9 9.1 5.6 1.2 12.4-4.6 11.5-10-.5-3.4-2.7-6.6-5.5-8.1-2.3-1.1-2.8-1.1-3.2 0zm-.9 10.1c1.7 2.4 3.2 4.7 3.2 5 0 1.2-5.5.4-7.2-1.2-2.4-2.2-2.4-8.4.1-8.3.3.1 2.1 2.1 3.9 4.5zM235 205.3c0 .7 4.3 4.1 9.6 7.6 7.1 4.8 9.8 6.1 10.6 5.3.7-.7 1-1.3.7-1.5-2.7-2.3-19.1-12.7-19.9-12.7-.5 0-1 .6-1 1.3zM229.7 206.3c-.6 1.5 16.1 30.7 17.6 30.7 1.9 0 .1-3.9-7.5-16.7-9.4-16-9.4-15.9-10.1-14zM75.8 221.7c-3 3.3-4.8 6.4-4.8 7.9 0 3 4.1 7.4 7 7.4 1.4 0 2 .5 1.8 1.7-.5 3.2 1.6 1.9 7.6-4.5 4.3-4.5 5.6-6.6 4.9-7.3-.8-.8-2.4.2-5.5 3.5-4.9 5.1-7.7 5.7-10.8 2.6-2.9-2.9-2.5-4.5 2.5-9.9 3.5-3.7 4.2-5.1 3.3-5.9-1-.8-2.5.4-6 4.5zM219 223.8c-2.1 1-4.2 3.2-5.3 5.3-2.2 4.6-1.4 7.1 5 14.8 2.6 3.1 4.8 5.8 5 6 .1.2 1 .1 1.9-.3 1.3-.5.8-1.6-3-6.1-7.6-8.9-8.7-12.4-4.8-15.8 3.9-3.4 6.1-3.1 10.5 1.5 2.4 2.4 5.3 5.6 6.5 7.2 1.4 1.8 2.7 2.6 3.8 2.2 1.2-.5.6-1.8-3.3-6.7-7.1-9.2-10.7-10.9-16.3-8.1zM99.5 228.1c-2.1 1-11.4 15.6-11.2 17.4.1.5.8.9 1.5.8.8 0 2.6 1.2 4 2.7 1.5 1.6 4.2 3.1 5.9 3.5 2.8.6 3.8.2 6.3-2.3 3.8-3.9 3.9-7.9.4-12.1-2-2.4-3.4-3.1-6.2-3.1h-3.5l2.3-2.5c3.2-3.4 5.6-3.1 9.8 1.1 2.4 2.4 3.8 3.2 4.5 2.5 1.4-1.4-2.7-5.9-7-7.7-3.7-1.6-4.1-1.6-6.8-.3zm4.5 11.1c2.6 2.8 2.6 6.2-.1 8.9-1.5 1.5-2.8 1.9-4.7 1.4-3.1-.7-6.2-3.9-6.2-6.4 0-2.6 3.8-6.1 6.5-6.1 1.3 0 3.3 1 4.5 2.2zM205.3 233.8c-.7.5-1.6 3.5-1.9 6.8-.4 3.2-.8 6-.9 6.2-.2.2-2.8-1.1-5.9-2.8-4.1-2.4-6-2.9-7.2-2.2-1.5.8-.5 1.6 5.3 4.5l7.1 3.6-.9 4.8c-.5 2.6-1.1 5.8-1.4 7-.4 1.7-.1 2 1.4 1.6 1.4-.4 2-1.7 2.4-6 .3-3 .8-5.7 1-5.9.2-.2 2.5.8 5.1 2.2 3.5 2 5.3 2.4 6.7 1.7 1.8-.7 1.2-1.2-4.3-3.8-3.5-1.6-6.4-3-6.5-3-.4-.2 1.5-11.3 2.2-13.6.7-2-.2-2.4-2.2-1.1zM112.3 249.3c-2.9 7.3-3 8.9-.7 8.8.9 0 7.2-15.9 6.6-16.6-1.6-1.5-3 .4-5.9 7.8zM122 245.8c-3.4 2.7-2.1 6.4 2.9 8.7 4.5 2 5.6 3.8 3.5 5.6-1.2 1-2.2.9-5.1-.5-2.1-1-4-1.3-4.5-.8-1.4 1.4 1.8 3.4 6.6 3.9 3.9.5 4.6.2 6-1.9 2.2-3.4 1.3-5.2-4-7.9-2.7-1.5-4.3-3-4.2-3.9.5-2.4 4.8-2.4 8.1 0 2.3 1.8 3.1 2 3.8.9 1.1-1.9.4-2.5-4.8-4.3-5.8-2-5.6-2-8.3.2zM169.5 246.9c-10.4 1.8-15.3 9.8-11 18.1 2.4 4.7 6.7 6.3 14.6 5.7 8.1-.6 9.1-1.1 8.4-4-.8-3.7-1.5-8.9-2.2-15-.6-6.3-.6-6.3-9.8-4.8zm6.6 4.8c0 1.6.2 3.7.5 4.8.2 1.1.7 4.1 1.1 6.7l.6 4.8h-6.5c-5.6 0-6.8-.3-8.9-2.6-5-5.4-2.3-13.6 5.2-15.4 6.6-1.5 7.9-1.3 8 1.7zM139.1 248.9c-2.5 1.6-.3 3.1 2.9 2 2-.8 3.5-.7 5.2.2 4.5 2.4 5.2 5.7 1.1 5.3-12.6-1.3-12.3-1.4-12.3 1.6 0 4.1 4.4 8 8.9 8 4-.1 6.2-1.4 7.9-4.7 3.3-6-1.4-13.3-8.5-13.3-2.1 0-4.4.4-5.2.9zm11.9 10.2c0 1.6-4 4.9-5.8 4.9-2.4 0-6.2-2.8-6.2-4.6 0-1.1 1.3-1.4 6-1.3 3.3.1 6 .6 6 1zM106.5 263c-.4.7-.3 1.6.3 2.2 1.4 1.4 4.5.2 4-1.5-.6-1.6-3.4-2.1-4.3-.7z" />
  </svg>
)

export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);


export const YoutubeIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 512 512"
    {...props}
  >
    <circle
      cx={256}
      cy={256}
      r={256}
      style={{
        fill: "#dde3e4",
      }}
    />
    <path
      d="M168 456h176v8H168z"
      style={{
        fill: "#ccc",
      }}
    />
    <path
      d="M312 456H200l8-56h96z"
      style={{
        fill: "#adadad",
      }}
    />
    <path
      d="M448 360v32c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8v-32h384z"
      style={{
        fill: "#ccc",
      }}
    />
    <path
      d="M80 120h352v224H80z"
      style={{
        fill: "#fff",
      }}
    />
    <path
      d="M440 104H72c-4.4 0-8 3.6-8 8v248h384V112c0-4.4-3.6-8-8-8zm-8 240H80V120h352v224z"
      style={{
        fill: "#3b3b3b",
      }}
    />
    <path
      d="M80 120h352v224H80z"
      style={{
        fill: "#fff",
      }}
    />
    <path
      d="M352 304H160c-4.4 0-8-3.6-8-8V168c0-4.4 3.6-8 8-8h192c4.4 0 8 3.6 8 8v128c0 4.4-3.6 8-8 8z"
      style={{
        fill: "#db2b42",
      }}
    />
    <path
      d="m232 188 69.52 44L232 276z"
      style={{
        fill: "#fff",
      }}
    />
  </svg>
)


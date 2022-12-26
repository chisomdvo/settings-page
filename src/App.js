/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import picture1 from "./picture1.png";
import avatar from "./avatar.png";
import avatar1 from "./avatar1.png";
import avatar2 from "./avatar2.png";
import avatar3 from "./avatar3.png";
import avatar4 from "./avatar4.png";
import avatar5 from "./avatar5.png";

const projects = [
  {
    id: 1,
    title: "Basic Plan - Dec 2022",
    initials: "GA",
    team: "Engineering",
    members: [
      {
        name: "Dries Vincent",
        handle: "driesvincent",
        imageUrl: avatar1,
      },
      {
        name: "Lindsay Walton",
        handle: "lindsaywalton",
        imageUrl: avatar2,
      },
      {
        name: "Courtney Henry",
        handle: "courtneyhenry",
        imageUrl: avatar3,
      },
      {
        name: "Tom Cook",
        handle: "tomcook",
        imageUrl: avatar4,
      },
      {
        name: "Tom cruise",
        handle: "tomcruise",
        imageUrl: avatar5,
      },
    ],
    totalMembers: 7,
    showmembers: 5,
    lastUpdated: "Dec 1, 2022",
    amount: "USD $10.00",
    pinned: true,
    bgColorClass: "bg-pink-600",
  },
  {
    id: 2,
    title: "Basic Plan - Nov 2022",
    initials: "GA",
    team: "Engineering",
    members: [
      {
        name: "Dries Vincent",
        handle: "driesvincent",
        imageUrl: avatar1,
      },
      {
        name: "Lindsay Walton",
        handle: "lindsaywalton",
        imageUrl: avatar2,
      },
      {
        name: "Courtney Henry",
        handle: "courtneyhenry",
        imageUrl: avatar3,
      },
      {
        name: "Tom Cook",
        handle: "tomcook",
        imageUrl: avatar4,
      },
      {
        name: "Tom cruise",
        handle: "tomcruise",
        imageUrl: avatar5,
      },
    ],
    totalMembers: 6,
    showmembers: 5,
    lastUpdated: "Nov 1, 2022",
    amount: "USD $10.00",
    pinned: true,
    bgColorClass: "bg-pink-600",
  },
  {
    id: 3,
    title: "Basic Plan - Oct 2022",
    initials: "GA",
    team: "Engineering",
    members: [
      {
        name: "Dries Vincent",
        handle: "driesvincent",
        imageUrl: avatar1,
      },
      {
        name: "Lindsay Walton",
        handle: "lindsaywalton",
        imageUrl: avatar2,
      },
      {
        name: "Courtney Henry",
        handle: "courtneyhenry",
        imageUrl: avatar3,
      },
      {
        name: "Tom Cook",
        handle: "tomcook",
        imageUrl: avatar4,
      },
      {
        name: "Tom cruise",
        handle: "tomcruise",
        imageUrl: avatar5,
      },
    ],
    totalMembers: 5,
    showmembers: 5,
    lastUpdated: "Oct 1, 2022",
    amount: "USD $10.00",
    pinned: true,
    bgColorClass: "bg-pink-600",
  },
  {
    id: 4,
    title: "Basic Plan - Sep 2022",
    initials: "GA",
    team: "Engineering",
    members: [
      {
        name: "Dries Vincent",
        handle: "driesvincent",
        imageUrl: avatar1,
      },
      {
        name: "Lindsay Walton",
        handle: "lindsaywalton",
        imageUrl: avatar2,
      },
      {
        name: "Courtney Henry",
        handle: "courtneyhenry",
        imageUrl: avatar3,
      },
    ],
    totalMembers: 3,
    showmembers: 3,
    lastUpdated: "Sep 1, 2022",
    amount: "USD $10.00",
    pinned: true,
    bgColorClass: "bg-pink-600",
  },
  {
    id: 5,
    title: "Basic Plan - Aug 2022",
    initials: "GA",
    team: "Engineering",
    members: [
      {
        name: "Dries Vincent",
        handle: "driesvincent",
        imageUrl: avatar1,
      },
      {
        name: "Lindsay Walton",
        handle: "lindsaywalton",
        imageUrl: avatar2,
      },
      {
        name: "Courtney Henry",
        handle: "courtneyhenry",
        imageUrl: avatar3,
      },
      {
        name: "Tom Cook",
        handle: "tomcook",
        imageUrl: avatar4,
      },
    ],
    totalMembers: 4,
    showmembers: 4,
    lastUpdated: "Aug 1, 2022",
    amount: "USD $10.00",
    pinned: true,
    bgColorClass: "bg-pink-600",
  },
  {
    id: 6,
    title: "Basic Plan - Jul 2022",
    initials: "GA",
    team: "Engineering",
    members: [
      {
        name: "Dries Vincent",
        handle: "driesvincent",
        imageUrl: avatar1,
      },
      {
        name: "Lindsay Walton",
        handle: "lindsaywalton",
        imageUrl: avatar2,
      },
      {
        name: "Courtney Henry",
        handle: "courtneyhenry",
        imageUrl: avatar3,
      },
      {
        name: "Tom Cook",
        handle: "tomcook",
        imageUrl: avatar4,
      },
    ],
    totalMembers: 4,
    showmembers: 4,
    lastUpdated: "Jul 1, 2022",
    amount: "USD $10.00",
    pinned: true,
    bgColorClass: "bg-pink-600",
  },
  {
    id: 7,
    title: "Basic Plan - Jun 2022",
    initials: "GA",
    team: "Engineering",
    members: [
      {
        name: "Dries Vincent",
        handle: "driesvincent",
        imageUrl: avatar1,
      },
      {
        name: "Lindsay Walton",
        handle: "lindsaywalton",
        imageUrl: avatar2,
      },
      {
        name: "Courtney Henry",
        handle: "courtneyhenry",
        imageUrl: avatar3,
      },
    ],
    totalMembers: 3,
    showmembers: 3,
    lastUpdated: "Jun 1, 2022",
    amount: "USD $10.00",
    pinned: true,
    bgColorClass: "bg-pink-600",
  },
  // More projects...
];
const pinnedProjects = projects.filter((project) => project.pinned);

const navigation = [
  {
    name: "Home",
    href: "#",
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 22V12H15V22M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
          stroke="#667085"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    current: false,
  },
  {
    name: "Dashboard",
    href: "#",
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 20V10M12 20V4M6 20V14"
          stroke="#667085"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    current: false,
    count: true,
  },
  {
    name: "Projects",
    href: "#",
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 17L12 22L22 17M2 12L12 17L22 12M12 2L2 7L12 12L22 7L12 2Z"
          stroke="#667085"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    current: false,
  },
  {
    name: "Tasks",
    href: "#",
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 11L12 14L22 4M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16"
          stroke="#667085"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    current: false,
  },
  {
    name: "Reporting",
    href: "#",
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 15C4 15 5 14 8 14C11 14 13 16 16 16C19 16 20 15 20 15V3C20 3 19 4 16 4C13 4 11 2 8 2C5 2 4 3 4 3V15ZM4 15V22"
          stroke="#667085"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Users",
    href: "#",
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"
          stroke="#667085"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    current: false,
  },
  {
    name: "Supporting",
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.93 4.93L9.17 9.17M14.83 14.83L19.07 19.07M19.07 4.93L14.83 9.17L18.36 5.64M4.93 19.07L9.17 14.83M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
          stroke="#667085"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    href: "#",
    support: true,
    current: false,
  },
  {
    name: "Settings",
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1286_5199)">
          <path
            d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
            stroke="#667085"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z"
            stroke="#667085"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1286_5199">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    href: "#",
    current: true,
  },
];

const tabs = [
  { name: "My Details", href: "#", class: "md:flex hidden", current: false },
  { name: "Profile", href: "#", class: "md:flex hidden", current: false },
  { name: "Password", href: "#", class: "md:flex hidden", current: false },
  { name: "Team", href: "#", class: "md:flex hidden", current: false },
  { name: "Plan", href: "#", current: false },
  { name: "Billing", href: "#", current: true },
  { name: "Notifications", href: "#", current: false },
  { name: "Integrations", href: "#", current: false },
  { name: "API", href: "#", class: "md:flex hidden", current: false },
];

let flag = true;
function checkAll() {
  if (flag) {
    const chkbxAll = document.querySelector("#comments");
    const isChecked = chkbxAll.checked;
    const chkbxOptions = document.querySelectorAll(".selectcheckbox");
    for (let i = 0; i < chkbxOptions.length; i++) {
      chkbxOptions[i].checked = isChecked;
    }
  }
}

function itemCheck() {
  var selectAll = 0;
  const itemChk = document.getElementsByClassName("selectcheckbox");
  for (let i = 0; i < itemChk.length; i++) {
    if (itemChk[i].checked === false) {
      const itemSelectAll = itemChk[i].checked;
      const itemSelectAllChk = document.querySelector("#comments");
      itemSelectAllChk.checked = itemSelectAll;
    }
    if (itemChk[i].checked === true) {
      selectAll += 1;
    }
    if (itemChk.length === selectAll) {
      const trueAll = itemChk[i].checked;
      const itemtrueAll = document.querySelector("#comments");
      itemtrueAll.checked = itemtrueAll;
    }
  }
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <>
      <div>
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 ">
          <div className="flex flex-col flex-grow pt-5 bg-white overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <svg
                width="39"
                height="38"
                viewBox="0 0 39 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_dd_21_27254)">
                  <g clip-path="url(#clip0_21_27254)">
                    <rect
                      x="3"
                      y="2"
                      width="32.2254"
                      height="32"
                      rx="8"
                      fill="white"
                    />
                    <rect
                      x="3"
                      y="2"
                      width="32.2254"
                      height="32"
                      rx="8"
                      fill="url(#paint0_linear_21_27254)"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.1127 4.03885C11.3478 4.03885 5.05319 10.2895 5.05319 18C5.05319 25.7106 11.3478 31.9612 19.1127 31.9612C26.8775 31.9612 33.1722 25.7106 33.1722 18C33.1722 10.2895 26.8775 4.03885 19.1127 4.03885ZM4.97498 18C4.97498 10.2466 11.3046 3.96118 19.1127 3.96118C26.9207 3.96118 33.2504 10.2466 33.2504 18C33.2504 25.7535 26.9207 32.0389 19.1127 32.0389C11.3046 32.0389 4.97498 25.7535 4.97498 18Z"
                      fill="#D0D5DD"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.1127 14.0779C16.9312 14.0779 15.1628 15.834 15.1628 18.0002C15.1628 20.1665 16.9312 21.9226 19.1127 21.9226C21.2942 21.9226 23.0627 20.1665 23.0627 18.0002C23.0627 15.834 21.2942 14.0779 19.1127 14.0779ZM15.0845 18.0002C15.0845 15.7911 16.888 14.0002 19.1127 14.0002C21.3374 14.0002 23.1409 15.7911 23.1409 18.0002C23.1409 20.2094 21.3374 22.0002 19.1127 22.0002C16.888 22.0002 15.0845 20.2094 15.0845 18.0002Z"
                      fill="#D0D5DD"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.1127 15.3201C17.6223 15.3201 16.4142 16.5198 16.4142 17.9997C16.4142 19.4796 17.6223 20.6793 19.1127 20.6793C20.603 20.6793 21.8111 19.4796 21.8111 17.9997C21.8111 16.5198 20.603 15.3201 19.1127 15.3201ZM16.336 17.9997C16.336 16.4769 17.5791 15.2424 19.1127 15.2424C20.6462 15.2424 21.8894 16.4769 21.8894 17.9997C21.8894 19.5225 20.6462 20.757 19.1127 20.757C17.5791 20.757 16.336 19.5225 16.336 17.9997Z"
                      fill="#D0D5DD"
                    />
                    <path d="M19.0735 2H19.1518V34H19.0735V2Z" fill="#D0D5DD" />
                    <path
                      d="M35.2253 17.9609L35.2253 18.0386L2.99999 18.0386L2.99999 17.9609L35.2253 17.9609Z"
                      fill="#D0D5DD"
                    />
                    <path d="M29.7893 2H29.8675V34H29.7893V2Z" fill="#D0D5DD" />
                    <path d="M13.7157 2H13.7939V34H13.7157V2Z" fill="#D0D5DD" />
                    <path d="M24.4314 2H24.5096V34H24.4314V2Z" fill="#D0D5DD" />
                    <path d="M8.35785 2H8.43607V34H8.35785V2Z" fill="#D0D5DD" />
                    <path
                      d="M35.2253 28.6016L35.2253 28.6792L2.99999 28.6792L2.99999 28.6016L35.2253 28.6016Z"
                      fill="#D0D5DD"
                    />
                    <path
                      d="M35.2253 12.6406L35.2253 12.7183L2.99999 12.7183L2.99999 12.6406L35.2253 12.6406Z"
                      fill="#D0D5DD"
                    />
                    <path
                      d="M35.2253 23.2812L35.2253 23.3589L2.99999 23.3589L2.99999 23.2812L35.2253 23.2812Z"
                      fill="#D0D5DD"
                    />
                    <path
                      d="M35.2253 7.32031L35.2253 7.39798L2.99999 7.39798L2.99999 7.32031L35.2253 7.32031Z"
                      fill="#D0D5DD"
                    />
                    <g filter="url(#filter1_dd_21_27254)">
                      <ellipse
                        cx="19.1127"
                        cy="18"
                        rx="8.05634"
                        ry="8"
                        fill="url(#paint1_linear_21_27254)"
                      />
                    </g>
                    <g filter="url(#filter2_b_21_27254)">
                      <path
                        d="M3 18H35.2254V21.2C35.2254 25.6804 35.2254 27.9206 34.3534 29.6319C33.5864 31.1372 32.3626 32.3611 30.8573 33.1281C29.146 34 26.9058 34 22.4254 34H15.8C11.3196 34 9.07937 34 7.36808 33.1281C5.86278 32.3611 4.63893 31.1372 3.87195 29.6319C3 27.9206 3 25.6804 3 21.2V18Z"
                        fill="white"
                        fill-opacity="0.2"
                      />
                    </g>
                  </g>
                  <rect
                    x="3.1"
                    y="2.1"
                    width="32.0254"
                    height="31.8"
                    rx="7.9"
                    stroke="#D0D5DD"
                    stroke-width="0.2"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_dd_21_27254"
                    x="0"
                    y="0"
                    width="38.2253"
                    height="38"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_21_27254"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1.5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_21_27254"
                      result="effect2_dropShadow_21_27254"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_21_27254"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_dd_21_27254"
                    x="8.05634"
                    y="8"
                    width="22.1127"
                    height="22"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_21_27254"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1.5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_21_27254"
                      result="effect2_dropShadow_21_27254"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_21_27254"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_b_21_27254"
                    x="-2"
                    y="13"
                    width="42.2253"
                    height="26"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="2.5"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_21_27254"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_21_27254"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_21_27254"
                    x1="19.1127"
                    y1="2"
                    x2="19.1127"
                    y2="34"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="#D0D5DD" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_21_27254"
                    x1="15.0845"
                    y1="26"
                    x2="23.0508"
                    y2="9.95528"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#53389E" />
                    <stop offset="1" stop-color="#6941C6" />
                  </linearGradient>
                  <clipPath id="clip0_21_27254">
                    <rect
                      x="3"
                      y="2"
                      width="32.2254"
                      height="32"
                      rx="8"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span className="ml-2 font-semibold"> Untitled UI</span>
            </div>
            <div className="px-3 mt-5">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div
                  className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                  aria-hidden="true"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z"
                      stroke="#667085"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="focus:ring-indigo-500  font-semibold focus:border-indigo-500 block w-full pl-9 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Search"
                />
              </div>
            </div>
            <div className="mt-5 flex-1 flex flex-col">
              <nav className="flex-1 px-2 pb-4 ">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-[#F9FAFB] text-[#101828]"
                        : "text-[#344054] hover:bg-white",
                      item.support ? "mt-6" : "",
                      "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    )}
                  >
                    {item.svg}
                    <div className="ml-3 text-[#344054]">{item.name}</div>
                    {item.count ? (
                      <span className="ml-14">
                        <svg
                          width="32"
                          height="24"
                          viewBox="0 0 36 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g>
                            <rect
                              width="36"
                              height="24"
                              rx="12"
                              fill="#F2F4F7"
                            />
                            <path
                              d="M15.0152 6.81818V17H13.474V8.35938H13.4143L10.9782 9.95028V8.47869L13.5187 6.81818H15.0152ZM21.3142 17.169C20.5287 17.1657 19.8575 16.9586 19.3007 16.5476C18.7439 16.1366 18.318 15.5384 18.023 14.7528C17.728 13.9673 17.5805 13.0211 17.5805 11.9141C17.5805 10.8104 17.728 9.86742 18.023 9.08523C18.3213 8.30303 18.7488 7.70644 19.3057 7.29545C19.8658 6.88447 20.5353 6.67898 21.3142 6.67898C22.0931 6.67898 22.7609 6.88613 23.3177 7.30043C23.8746 7.71141 24.3005 8.308 24.5954 9.0902C24.8937 9.86908 25.0429 10.8104 25.0429 11.9141C25.0429 13.0244 24.8954 13.9723 24.6004 14.7578C24.3054 15.54 23.8795 16.1383 23.3227 16.5526C22.7659 16.9635 22.0964 17.169 21.3142 17.169ZM21.3142 15.8416C22.0036 15.8416 22.5422 15.5052 22.93 14.8324C23.3211 14.1596 23.5166 13.1868 23.5166 11.9141C23.5166 11.0689 23.4271 10.3546 23.2481 9.77131C23.0725 9.18466 22.8189 8.74053 22.4875 8.43892C22.1594 8.134 21.7683 7.98153 21.3142 7.98153C20.6281 7.98153 20.0895 8.3196 19.6984 8.99574C19.3073 9.67187 19.1101 10.6446 19.1068 11.9141C19.1068 12.7625 19.1946 13.4801 19.3703 14.0668C19.5493 14.6501 19.8028 15.0926 20.1309 15.3942C20.4591 15.6925 20.8535 15.8416 21.3142 15.8416Z"
                              fill="#344054"
                            />
                          </g>
                        </svg>
                      </span>
                    ) : null}
                  </a>
                ))}
              </nav>
            </div>
            <div className="px-3 py-5 ml-3 mr-3 rounded-md mt-5 bg-[#F9FAFB]">
              <div>
                <div className="font-semibold text-[#101828]">
                  New features available!
                </div>
                <div className="text-[#667085]">
                  Check out the new dashboard view. Pages now load faster
                </div>
              </div>
              <div>
                <img src={picture1} className="py-3" alt="picture1" />
              </div>

              <div>
                <span className="text-[#667085]"> Dismiss</span>
                <span className="ml-3 text-[#6941C6]"> What's new?</span>
              </div>
            </div>
            <div className="px-1 mt-5">
              <hr></hr>
              <div className="group w-full bg-white rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-purple-500">
                <span className="flex w-full justify-between items-center">
                  <span className="flex min-w-0 items-center justify-between space-x-3">
                    <img
                      src={avatar}
                      className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
                      alt="picture1"
                    />
                    <span className="flex-1 flex flex-col min-w-0">
                      <span className="text-gray-900 text-sm font-medium truncate">
                        Olivia Rhye
                      </span>
                      <span className="text-gray-500 text-sm truncate">
                        olivia@untitledui.com
                      </span>
                    </span>
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5M13.3333 14.1667L17.5 10M17.5 10L13.3333 5.83333M17.5 10H7.5"
                      stroke="#667085"
                      stroke-width="1.67"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="md:pl-64 bg-[#F9FAFB] flex flex-col flex-1">
          <main>
            <div className="">
              <header className="bg-white border-b-2 md:hidden">
                <nav
                  className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                  aria-label="Top"
                >
                  <div className="w-full py-2 flex items-center justify-between">
                    <div className="flex items-center">
                      <svg
                        width="38"
                        height="39"
                        viewBox="0 0 38 39"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_dd_1625_23913)">
                          <g clip-path="url(#clip0_1625_23913)">
                            <rect
                              x="3"
                              y="2.5"
                              width="32"
                              height="32"
                              rx="8"
                              fill="white"
                            />
                            <rect
                              x="3"
                              y="2.5"
                              width="32"
                              height="32"
                              rx="8"
                              fill="url(#paint0_linear_1625_23913)"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M19 4.53885C11.2895 4.53885 5.03885 10.7895 5.03885 18.5C5.03885 26.2106 11.2895 32.4612 19 32.4612C26.7106 32.4612 32.9612 26.2106 32.9612 18.5C32.9612 10.7895 26.7106 4.53885 19 4.53885ZM4.96118 18.5C4.96118 10.7466 11.2466 4.46118 19 4.46118C26.7535 4.46118 33.0389 10.7466 33.0389 18.5C33.0389 26.2535 26.7535 32.5389 19 32.5389C11.2466 32.5389 4.96118 26.2535 4.96118 18.5Z"
                              fill="#D0D5DD"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M19 14.5779C16.8338 14.5779 15.0777 16.334 15.0777 18.5002C15.0777 20.6665 16.8338 22.4226 19 22.4226C21.1662 22.4226 22.9223 20.6665 22.9223 18.5002C22.9223 16.334 21.1662 14.5779 19 14.5779ZM15 18.5002C15 16.2911 16.7909 14.5002 19 14.5002C21.2091 14.5002 23 16.2911 23 18.5002C23 20.7094 21.2091 22.5002 19 22.5002C16.7909 22.5002 15 20.7094 15 18.5002Z"
                              fill="#D0D5DD"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M19 15.8201C17.52 15.8201 16.3203 17.0198 16.3203 18.4997C16.3203 19.9796 17.52 21.1793 19 21.1793C20.4799 21.1793 21.6796 19.9796 21.6796 18.4997C21.6796 17.0198 20.4799 15.8201 19 15.8201ZM16.2427 18.4997C16.2427 16.9769 17.4772 15.7424 19 15.7424C20.5228 15.7424 21.7572 16.9769 21.7572 18.4997C21.7572 20.0225 20.5228 21.257 19 21.257C17.4772 21.257 16.2427 20.0225 16.2427 18.4997Z"
                              fill="#D0D5DD"
                            />
                            <path
                              d="M18.9612 2.5H19.0389V34.5H18.9612V2.5Z"
                              fill="#D0D5DD"
                            />
                            <path
                              d="M35 18.4609L35 18.5386L3 18.5386L3 18.4609L35 18.4609Z"
                              fill="#D0D5DD"
                            />
                            <path
                              d="M29.6019 2.5H29.6796V34.5H29.6019V2.5Z"
                              fill="#D0D5DD"
                            />
                            <path
                              d="M13.6407 2.5H13.7184V34.5H13.6407V2.5Z"
                              fill="#D0D5DD"
                            />
                            <path
                              d="M24.2815 2.5H24.3592V34.5H24.2815V2.5Z"
                              fill="#D0D5DD"
                            />
                            <path
                              d="M8.32031 2.5H8.39798V34.5H8.32031V2.5Z"
                              fill="#D0D5DD"
                            />
                            <path
                              d="M35 29.1016L35 29.1792L3 29.1792L3 29.1016L35 29.1016Z"
                              fill="#D0D5DD"
                            />
                            <path
                              d="M35 13.1406L35 13.2183L3 13.2183L3 13.1406L35 13.1406Z"
                              fill="#D0D5DD"
                            />
                            <path
                              d="M35 23.7812L35 23.8589L3 23.8589L3 23.7812L35 23.7812Z"
                              fill="#D0D5DD"
                            />
                            <path
                              d="M35 7.82031L35 7.89798L3 7.89798L3 7.82031L35 7.82031Z"
                              fill="#D0D5DD"
                            />
                            <g filter="url(#filter1_dd_1625_23913)">
                              <circle
                                cx="19"
                                cy="18.5"
                                r="8"
                                fill="url(#paint1_linear_1625_23913)"
                              />
                            </g>
                            <g filter="url(#filter2_b_1625_23913)">
                              <path
                                d="M3 18.5H35V21.7C35 26.1804 35 28.4206 34.1281 30.1319C33.3611 31.6372 32.1372 32.8611 30.6319 33.6281C28.9206 34.5 26.6804 34.5 22.2 34.5H15.8C11.3196 34.5 9.07937 34.5 7.36808 33.6281C5.86278 32.8611 4.63893 31.6372 3.87195 30.1319C3 28.4206 3 26.1804 3 21.7V18.5Z"
                                fill="white"
                                fill-opacity="0.2"
                              />
                            </g>
                          </g>
                          <rect
                            x="3.1"
                            y="2.6"
                            width="31.8"
                            height="31.8"
                            rx="7.9"
                            stroke="#D0D5DD"
                            stroke-width="0.2"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_dd_1625_23913"
                            x="0"
                            y="0.5"
                            width="38"
                            height="38"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy="1" />
                            <feGaussianBlur stdDeviation="1" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_1625_23913"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy="1" />
                            <feGaussianBlur stdDeviation="1.5" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="effect1_dropShadow_1625_23913"
                              result="effect2_dropShadow_1625_23913"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect2_dropShadow_1625_23913"
                              result="shape"
                            />
                          </filter>
                          <filter
                            id="filter1_dd_1625_23913"
                            x="8"
                            y="8.5"
                            width="22"
                            height="22"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy="1" />
                            <feGaussianBlur stdDeviation="1" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_1625_23913"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy="1" />
                            <feGaussianBlur stdDeviation="1.5" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="effect1_dropShadow_1625_23913"
                              result="effect2_dropShadow_1625_23913"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect2_dropShadow_1625_23913"
                              result="shape"
                            />
                          </filter>
                          <filter
                            id="filter2_b_1625_23913"
                            x="-2"
                            y="13.5"
                            width="42"
                            height="26"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feGaussianBlur
                              in="BackgroundImageFix"
                              stdDeviation="2.5"
                            />
                            <feComposite
                              in2="SourceAlpha"
                              operator="in"
                              result="effect1_backgroundBlur_1625_23913"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_backgroundBlur_1625_23913"
                              result="shape"
                            />
                          </filter>
                          <linearGradient
                            id="paint0_linear_1625_23913"
                            x1="19"
                            y1="2.5"
                            x2="19"
                            y2="34.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="white" />
                            <stop offset="1" stop-color="#D0D5DD" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_1625_23913"
                            x1="15"
                            y1="26.5"
                            x2="23"
                            y2="10.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#53389E" />
                            <stop offset="1" stop-color="#6941C6" />
                          </linearGradient>
                          <clipPath id="clip0_1625_23913">
                            <rect
                              x="3"
                              y="2.5"
                              width="32"
                              height="32"
                              rx="8"
                              fill="white"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <div className=" ml-3 space-x-8 text-black  text-base font-medium ">
                        Untitled UI
                      </div>
                    </div>
                    <div className="">
                      <svg
                        width="20"
                        height="15"
                        viewBox="0 0 20 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 7.5H15M1 1.5H19M1 13.5H19"
                          stroke="#667085"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </nav>
              </header>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl py-3 font-semibold text-gray-900">
                  Settings
                </h1>
                <div className="text-[#667085]">
                  Manage your team and preferences here.
                </div>
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="py-4">
                  <div>
                    <div className="block">
                      <nav
                        className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200"
                        aria-label="Tabs"
                      >
                        {tabs.map((tab, tabIdx) => (
                          <a
                            key={tab.name}
                            href={tab.href}
                            className={classNames(
                              tab.current
                                ? "text-gray-900 bg-[#F9FAFB]"
                                : "text-gray-500 hover:text-gray-700",
                              tab.class ? tab.class : "",
                              tabIdx === 0 ? "rounded-l-lg" : "",
                              tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
                              "group relative min-w-0 flex-1 overflow-hidden bg-white py-2 px-2 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
                            )}
                            aria-current={tab.current ? "page" : undefined}
                          >
                            <span>{tab.name}</span>
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                </div>

                <div className="py-1">
                  <form className="space-y-8 divide-y divide-gray-200">
                    <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                      <div className="divide-y divide-gray-200 pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                        <div>
                          <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Payment method
                          </h3>
                          <p className="mt-1 max-w-2xl text-sm text-gray-500">
                            Update your billing details and address.
                          </p>
                        </div>
                        <div className="space-y-6 sm:space-y-5 divide-y divide-gray-200">
                          <div className="pt-6 sm:pt-5">
                            <div
                              role="group"
                              aria-labelledby="label-notifications"
                            >
                              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
                                <div>
                                  <h3
                                    className="sm:text-sm sm:text-gray-700 text-lg font-medium leading-6 text-gray-900"
                                    id="label-notifications"
                                  >
                                    Contact email
                                  </h3>
                                  <p className="mt-1 text-sm text-gray-500">
                                    Where should invoices be sent?
                                  </p>
                                </div>
                                <div className="sm:col-span-2">
                                  <div className="max-w-lg">
                                    <div className="mt-4 space-y-4">
                                      <div>
                                        <div className="relative flex items-start">
                                          <div className="flex items-center h-5">
                                            <input
                                              id="offerss"
                                              name="offerss"
                                              type="radio"
                                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                            />
                                          </div>
                                          <div className="ml-3 text-sm">
                                            <label
                                              htmlFor="offers"
                                              className="font-medium text-gray-700"
                                            >
                                              send to my account email
                                            </label>
                                            <p className="text-gray-500">
                                              olivia@untitledui.com
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div>
                                        <div className="relative flex items-start">
                                          <div className="flex items-center h-5">
                                            <input
                                              id="offerss"
                                              name="offerss"
                                              type="radio"
                                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                            />
                                          </div>
                                          <div className="ml-3 text-sm w-full">
                                            <label
                                              htmlFor="offers"
                                              className="font-medium text-gray-700"
                                            >
                                              send to an alternate email
                                            </label>
                                            <div>
                                              <div className="mt-1 relative rounded-md shadow-sm">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                  <svg
                                                    width="20"
                                                    height="16"
                                                    viewBox="0 0 20 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                  >
                                                    <path
                                                      d="M18.3333 3.00001C18.3333 2.08334 17.5833 1.33334 16.6667 1.33334H3.33332C2.41666 1.33334 1.66666 2.08334 1.66666 3.00001M18.3333 3.00001V13C18.3333 13.9167 17.5833 14.6667 16.6667 14.6667H3.33332C2.41666 14.6667 1.66666 13.9167 1.66666 13V3.00001M18.3333 3.00001L9.99999 8.83334L1.66666 3.00001"
                                                      stroke="#667085"
                                                      stroke-width="1.66667"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"
                                                    />
                                                  </svg>
                                                </div>
                                                <input
                                                  type="email"
                                                  name="email"
                                                  id="email"
                                                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                                                  placeholder="billing@untitledui.com"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="pt-6 sm:pt-5">
                            <div
                              role="group"
                              aria-labelledby="label-notifications"
                            >
                              <div className="sm:grid sm:grid-cols-3 sm:gap-4 ">
                                <div className="mt-4">
                                  <h3
                                    className="sm:text-sm sm:text-gray-700 text-lg font-medium leading-6 text-gray-900"
                                    id="label-notifications"
                                  >
                                    Card details
                                  </h3>
                                  <p className="mt-1 text-sm text-gray-500">
                                    Select default payment method.
                                  </p>
                                </div>
                                <div className="sm:col-span-2">
                                  <div className="max-w-lg">
                                    <div className="mt-4 space-y-4">
                                      <div className="relative flex items-start rounded-lg  justify-between py-3 px-3 border-2 border-[#D6BBFB]">
                                        <div className="flex sm:items-start">
                                          {" "}
                                          <div className="flex mt-3 items-center h-5">
                                            <svg
                                              width="46"
                                              height="32"
                                              viewBox="0 0 46 32"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <rect
                                                x="0.5"
                                                y="0.5"
                                                width="45"
                                                height="31"
                                                rx="5.5"
                                                fill="white"
                                              />
                                              <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M14.3337 21.1443H11.5874L9.52795 13.0565C9.4302 12.6844 9.22265 12.3555 8.91736 12.2005C8.15546 11.811 7.3159 11.5009 6.40001 11.3446V11.0332H10.8241C11.4347 11.0332 11.8927 11.5009 11.969 12.0442L13.0375 17.8782L15.7825 11.0332H18.4525L14.3337 21.1443ZM19.979 21.1443H17.3853L19.521 11.0332H22.1147L19.979 21.1443ZM25.4703 13.8343C25.5466 13.2897 26.0045 12.9783 26.5388 12.9783C27.3784 12.9001 28.2929 13.0565 29.0562 13.4447L29.5141 11.2677C28.7509 10.9564 27.9113 10.8 27.1494 10.8C24.6321 10.8 22.8003 12.2005 22.8003 14.1443C22.8003 15.623 24.0978 16.3995 25.0137 16.8672C26.0045 17.3336 26.3862 17.645 26.3098 18.1114C26.3098 18.811 25.5466 19.1224 24.7847 19.1224C23.8688 19.1224 22.9529 18.8892 22.1147 18.4996L21.6568 20.6779C22.5726 21.0661 23.5635 21.2225 24.4794 21.2225C27.302 21.2993 29.0562 19.9001 29.0562 17.8C29.0562 15.1553 25.4703 15.0003 25.4703 13.8343ZM38.1333 21.1443L36.0739 11.0332H33.8619C33.4039 11.0332 32.946 11.3446 32.7933 11.811L28.9798 21.1443H31.6498L32.1828 19.6669H35.4633L35.7686 21.1443H38.1333ZM34.2435 13.7561L35.0054 17.5668H32.8697L34.2435 13.7561Z"
                                                fill="#172B85"
                                              />
                                              <rect
                                                x="0.5"
                                                y="0.5"
                                                width="45"
                                                height="31"
                                                rx="5.5"
                                                stroke="#F2F4F7"
                                              />
                                            </svg>
                                          </div>
                                          <div className="ml-5">
                                            <div
                                              htmlFor="offers"
                                              className="font-medium text-[#53389E]"
                                            >
                                              Visa ending in 1234
                                            </div>
                                            <div className="font-medium text-[#53389E]">
                                              Expiring 06/2024
                                            </div>
                                            <div className="mt-2">
                                              <span className=" text-[#53389E]">
                                                Set as default
                                              </span>
                                              <span className="text-[#53389E] ml-4 font-semibold">
                                                Edit
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="ml-3 text-sm ">
                                          <div>
                                            {" "}
                                            <input
                                              id="offers"
                                              name="offers"
                                              type="radio"
                                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                            />
                                          </div>
                                        </div>
                                      </div>

                                      <div className="relative flex items-start rounded-lg  justify-between py-3 px-3 border-2 bg-white">
                                        <div className="flex sm:items-start">
                                          {" "}
                                          <div className="flex mt-3 items-center h-5">
                                            <svg
                                              width="46"
                                              height="32"
                                              viewBox="0 0 46 32"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <rect
                                                x="0.5"
                                                y="0.5"
                                                width="45"
                                                height="31"
                                                rx="5.5"
                                                fill="white"
                                              />
                                              <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M22.9053 22.4392C21.3266 23.77 19.2787 24.5733 17.0409 24.5733C12.0478 24.5733 8 20.5737 8 15.64C8 10.7062 12.0478 6.70662 17.0409 6.70662C19.2787 6.70662 21.3266 7.50995 22.9053 8.84068C24.484 7.50995 26.5319 6.70662 28.7697 6.70662C33.7628 6.70662 37.8106 10.7062 37.8106 15.64C37.8106 20.5737 33.7628 24.5733 28.7697 24.5733C26.5319 24.5733 24.484 23.77 22.9053 22.4392Z"
                                                fill="#ED0006"
                                              />
                                              <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M22.9053 22.4392C24.8492 20.8007 26.0818 18.3626 26.0818 15.64C26.0818 12.9173 24.8492 10.4792 22.9053 8.84067C24.484 7.50995 26.5319 6.70662 28.7697 6.70662C33.7628 6.70662 37.8106 10.7062 37.8106 15.64C37.8106 20.5737 33.7628 24.5733 28.7697 24.5733C26.5319 24.5733 24.484 23.77 22.9053 22.4392Z"
                                                fill="#F9A000"
                                              />
                                              <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M22.9053 22.4392C24.8492 20.8007 26.0818 18.3626 26.0818 15.64C26.0818 12.9174 24.8492 10.4793 22.9053 8.84071C20.9614 10.4793 19.7288 12.9174 19.7288 15.64C19.7288 18.3626 20.9614 20.8007 22.9053 22.4392Z"
                                                fill="#FF5E00"
                                              />
                                              <rect
                                                x="0.5"
                                                y="0.5"
                                                width="45"
                                                height="31"
                                                rx="5.5"
                                                stroke="#F2F4F7"
                                              />
                                            </svg>
                                          </div>
                                          <div className="ml-5">
                                            <div
                                              htmlFor="offers"
                                              className="font-medium text-gray-700"
                                            >
                                              Mastercard ending in 1234
                                            </div>
                                            <div className="font-medium text-gray-700">
                                              Expiring 06/2024
                                            </div>
                                            <div className=" mt-2">
                                              <span className=" text-gray-700">
                                                Set as default
                                              </span>
                                              <span className="text-[#53389E] ml-4 font-semibold">
                                                Edit
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="ml-3 text-sm ">
                                          <div>
                                            {" "}
                                            <input
                                              id="offers"
                                              name="offers"
                                              type="radio"
                                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                            />
                                          </div>
                                        </div>
                                      </div>

                                      <div className="relative flex items-start">
                                        <div className="flex items-center h-5">
                                          <svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 14 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M7 1.16666V12.8333M1.16667 7H12.8333"
                                              stroke="#667085"
                                              stroke-width="1.67"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                            />
                                          </svg>
                                        </div>
                                        <div className="ml-3 text-sm">
                                          <div>Add new payment method</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="py-8">
                  <div className="sm:flex w-full  pr-3 py-5 items-center justify-between  rounded-t">
                    <h3 className="text-gray-800 dark:text-gray-100 font-semibold text-base sm:text-xl">
                      Billing history
                    </h3>

                    <button
                      type="button"
                      className="inline-flex mt-5 sm:mt-0 items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-black bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      {" "}
                      <span className="mr-2">
                        {" "}
                        <svg
                          width="20"
                          height="18"
                          viewBox="0 0 20 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.66667 13.1667L10 16.5M10 16.5L13.3333 13.1667M10 16.5V9M17.4 14.075C18.1245 13.5655 18.6678 12.8385 18.9511 11.9993C19.2343 11.1601 19.2428 10.2525 18.9753 9.40819C18.7078 8.56386 18.1782 7.82674 17.4634 7.3038C16.7486 6.78086 15.8857 6.49931 15 6.5H13.95C13.6994 5.52323 13.2304 4.61604 12.5784 3.84674C11.9265 3.07743 11.1085 2.46605 10.186 2.05863C9.26356 1.65121 8.26071 1.45836 7.25294 1.4946C6.24518 1.53084 5.25877 1.79523 4.36797 2.26786C3.47717 2.74049 2.70519 3.40904 2.11016 4.22319C1.51513 5.03734 1.11255 5.97587 0.932723 6.96813C0.752897 7.96038 0.800514 8.9805 1.07199 9.95169C1.34346 10.9229 1.83172 11.8198 2.50001 12.575"
                            stroke="#344054"
                            stroke-width="1.67"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                      Download all
                    </button>
                  </div>
                  <div className="">
                    <div className="align-middle inline-block min-w-full border-b border-gray-200">
                      <table className="min-w-full">
                        <thead>
                          <tr className="border rounded-md border-gray-200">
                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-base font-medium text-gray-500  tracking-wider">
                              <div className="flex items-center space-x-3 lg:pl-2">
                                <div className="flex-shrink-0 h-10 w-10">
                                  <input
                                    id="comments"
                                    name="comments"
                                    type="checkbox"
                                    onClick={() => checkAll()}
                                    className="mt-3 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                  />
                                </div>
                                <a
                                  href="#"
                                  className="truncate hover:text-gray-600"
                                >
                                  <span>Invoice</span>
                                </a>
                                <svg
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 1.33333V10.6667M6 10.6667L10.6667 6M6 10.6667L1.33333 6"
                                    stroke="#667085"
                                    stroke-width="1.33333"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </div>
                            </th>
                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-base font-medium text-gray-500  tracking-wider">
                              Amount
                            </th>
                            <th className="hidden lg:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-base font-medium text-gray-500  tracking-wider">
                              Date
                            </th>
                            <th className="hidden lg:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-base font-medium text-gray-500  tracking-wider">
                              Status
                            </th>
                            <th className="hidden lg:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-base font-medium text-gray-500  tracking-wider">
                              Users on plan
                            </th>
                            <th className="hidden lg:table-cell pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-base font-medium text-gray-500  tracking-wider" />
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-100">
                          {projects.map((project) => (
                            <tr key={project.id}>
                              <td className="px-6 py-3 max-w-0 w-full whitespace-nowrap text-base font-medium text-gray-900">
                                <div className="flex items-center space-x-3 lg:pl-2">
                                  <div className="flex-shrink-0 h-10 w-10">
                                    <input
                                      id="comments"
                                      name="comments"
                                      type="checkbox"
                                      data-name={classNames(
                                        project.id ? project.id : "",
                                        "selectcheckbox mt-3 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                      )}
                                      onClick={() => itemCheck(project.id)}
                                      className={classNames(
                                        project.id ? project.id : "",
                                        "selectcheckbox mt-3 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                      )}
                                    />
                                  </div>
                                  <a
                                    href="#"
                                    className="truncate hover:text-gray-600"
                                  >
                                    <span>{project.title}</span>
                                  </a>
                                </div>
                              </td>
                              <td className="px-6 py-3 whitespace-nowrap text-base text-gray-500 text-right">
                                {project.amount}
                              </td>
                              <td className="hidden lg:table-cell px-6 py-3 whitespace-nowrap text-base text-gray-500 text-right">
                                {project.lastUpdated}
                              </td>
                              <td className="hidden lg:table-cell px-6 py-3 whitespace-nowrap text-base text-gray-500 text-right">
                                <svg
                                  width="55"
                                  height="22"
                                  viewBox="0 0 55 22"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    width="55"
                                    height="22"
                                    rx="11"
                                    fill="#ECFDF3"
                                  />
                                  <path
                                    d="M16 8L10.5 13.5L8 11"
                                    stroke="#12B76A"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M22.9842 15V6.27273H26.095C26.774 6.27273 27.3365 6.39631 27.7825 6.64347C28.2285 6.89062 28.5623 7.22869 28.7839 7.65767C29.0055 8.08381 29.1163 8.56392 29.1163 9.09801C29.1163 9.63494 29.0041 10.1179 28.7797 10.5469C28.5581 10.973 28.2228 11.3111 27.774 11.5611C27.3279 11.8082 26.7669 11.9318 26.0907 11.9318H23.9515V10.8153H25.9714C26.4004 10.8153 26.7484 10.7415 27.0154 10.5938C27.2825 10.4432 27.4785 10.2386 27.6035 9.98011C27.7285 9.72159 27.791 9.42756 27.791 9.09801C27.791 8.76847 27.7285 8.47585 27.6035 8.22017C27.4785 7.96449 27.2811 7.7642 27.0112 7.61932C26.7441 7.47443 26.3919 7.40199 25.9544 7.40199H24.301V15H22.9842ZM32.4039 15.1449C31.9892 15.1449 31.6142 15.0682 31.2789 14.9148C30.9437 14.7585 30.6781 14.5327 30.4821 14.2372C30.2889 13.9418 30.1923 13.5795 30.1923 13.1506C30.1923 12.7812 30.2633 12.4773 30.4054 12.2386C30.5474 12 30.7392 11.8111 30.9806 11.6719C31.2221 11.5327 31.492 11.4276 31.7903 11.3565C32.0886 11.2855 32.3926 11.2315 32.7022 11.1946C33.0943 11.1491 33.4125 11.1122 33.6568 11.0838C33.9011 11.0526 34.0787 11.0028 34.1895 10.9347C34.3002 10.8665 34.3556 10.7557 34.3556 10.6023V10.5724C34.3556 10.2003 34.2505 9.91193 34.0403 9.70739C33.8329 9.50284 33.5233 9.40057 33.1113 9.40057C32.6824 9.40057 32.3443 9.49574 32.0971 9.68608C31.8528 9.87358 31.6838 10.0824 31.59 10.3125L30.3926 10.0398C30.5346 9.64205 30.742 9.32102 31.0147 9.0767C31.2903 8.82955 31.6071 8.65057 31.965 8.53977C32.323 8.42614 32.6994 8.36932 33.0943 8.36932C33.3556 8.36932 33.6326 8.40057 33.9252 8.46307C34.2207 8.52273 34.4963 8.63352 34.752 8.79545C35.0105 8.95739 35.2221 9.18892 35.3869 9.49006C35.5517 9.78835 35.6341 10.1761 35.6341 10.6534V15H34.3897V14.1051H34.3386C34.2562 14.2699 34.1326 14.4318 33.9679 14.5909C33.8031 14.75 33.5914 14.8821 33.3329 14.9872C33.0744 15.0923 32.7647 15.1449 32.4039 15.1449ZM32.6809 14.1222C33.0332 14.1222 33.3343 14.0526 33.5843 13.9134C33.8372 13.7741 34.0289 13.5923 34.1596 13.3679C34.2931 13.1406 34.3599 12.8977 34.3599 12.6392V11.7955C34.3145 11.8409 34.2264 11.8835 34.0957 11.9233C33.9679 11.9602 33.8216 11.9929 33.6568 12.0213C33.492 12.0469 33.3315 12.071 33.1752 12.0938C33.019 12.1136 32.8883 12.1307 32.7832 12.1449C32.536 12.1761 32.3102 12.2287 32.1056 12.3026C31.9039 12.3764 31.742 12.483 31.6199 12.6222C31.5005 12.7585 31.4409 12.9403 31.4409 13.1676C31.4409 13.483 31.5574 13.7216 31.7903 13.8835C32.0233 14.0426 32.3201 14.1222 32.6809 14.1222ZM37.3311 15V8.45455H38.6053V15H37.3311ZM37.9746 7.4446C37.753 7.4446 37.5627 7.37074 37.4036 7.22301C37.2473 7.07244 37.1692 6.89347 37.1692 6.68608C37.1692 6.47585 37.2473 6.29687 37.4036 6.14915C37.5627 5.99858 37.753 5.9233 37.9746 5.9233C38.1962 5.9233 38.3851 5.99858 38.5414 6.14915C38.7005 6.29687 38.78 6.47585 38.78 6.68608C38.78 6.89347 38.7005 7.07244 38.5414 7.22301C38.3851 7.37074 38.1962 7.4446 37.9746 7.4446ZM42.7697 15.1278C42.2413 15.1278 41.7697 14.9929 41.3549 14.723C40.943 14.4503 40.6191 14.0625 40.3833 13.5597C40.1504 13.054 40.0339 12.4474 40.0339 11.7401C40.0339 11.0327 40.1518 10.4276 40.3876 9.92472C40.6262 9.42187 40.9529 9.03693 41.3677 8.76989C41.7825 8.50284 42.2527 8.36932 42.7782 8.36932C43.1845 8.36932 43.5112 8.4375 43.7583 8.57386C44.0083 8.70739 44.2015 8.86364 44.3379 9.04261C44.4771 9.22159 44.585 9.37926 44.6618 9.51562H44.7385V6.27273H46.0126V15H44.7683V13.9815H44.6618C44.585 14.1207 44.4743 14.2798 44.3294 14.4588C44.1873 14.6378 43.9913 14.794 43.7413 14.9276C43.4913 15.0611 43.1674 15.1278 42.7697 15.1278ZM43.051 14.0412C43.4174 14.0412 43.7271 13.9446 43.9799 13.7514C44.2356 13.5554 44.4288 13.2841 44.5595 12.9375C44.693 12.5909 44.7598 12.1875 44.7598 11.7273C44.7598 11.2727 44.6944 10.875 44.5637 10.5341C44.4331 10.1932 44.2413 9.92756 43.9885 9.73722C43.7356 9.54687 43.4231 9.4517 43.051 9.4517C42.6674 9.4517 42.3478 9.55114 42.0922 9.75C41.8365 9.94886 41.6433 10.2202 41.5126 10.5639C41.3848 10.9077 41.3208 11.2955 41.3208 11.7273C41.3208 12.1648 41.3862 12.5582 41.5169 12.9077C41.6475 13.2571 41.8407 13.5341 42.0964 13.7386C42.3549 13.9403 42.6731 14.0412 43.051 14.0412Z"
                                    fill="#027A48"
                                  />
                                </svg>
                              </td>
                              <td className="hidden lg:table-cell px-6 py-3 text-base text-gray-500 font-medium">
                                <div className="flex items-center space-x-2">
                                  <div className="flex flex-shrink-0 -space-x-1">
                                    {project.members
                                      .filter(
                                        (member, index) =>
                                          index < project.showmembers
                                      )
                                      .map((member, index) => {
                                        return (
                                          <img
                                            key={member.handle}
                                            className="max-w-none h-6 w-6 rounded-full ring-2 ring-white"
                                            src={member.imageUrl}
                                            alt={member.name}
                                          />
                                        );
                                      })}
                                  </div>

                                  {project.totalMembers >
                                  project.members.length ? (
                                    <span className="flex-shrink-0 text-xs leading-5 font-medium">
                                      +
                                      {project.totalMembers -
                                        project.members.length}
                                    </span>
                                  ) : null}
                                </div>
                              </td>
                              <td className="hidden lg:table-cell px-6 py-3 whitespace-nowrap text-right text-base font-medium">
                                <a
                                  href="#"
                                  className="text-indigo-600 hover:text-indigo-900"
                                >
                                  <svg
                                    width="20"
                                    height="18"
                                    viewBox="0 0 20 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M6.66667 13.1667L10 16.5M10 16.5L13.3333 13.1667M10 16.5V9M17.4 14.075C18.1245 13.5655 18.6678 12.8385 18.9511 11.9993C19.2343 11.1601 19.2428 10.2525 18.9753 9.40819C18.7078 8.56386 18.1782 7.82674 17.4634 7.3038C16.7486 6.78086 15.8857 6.49931 15 6.5H13.95C13.6994 5.52323 13.2304 4.61604 12.5784 3.84674C11.9265 3.07743 11.1085 2.46605 10.186 2.05863C9.26356 1.65121 8.26071 1.45836 7.25294 1.4946C6.24518 1.53084 5.25877 1.79523 4.36797 2.26786C3.47717 2.74049 2.70519 3.40904 2.11016 4.22319C1.51513 5.03734 1.11255 5.97587 0.932723 6.96813C0.752897 7.96038 0.800514 8.9805 1.07199 9.95169C1.34346 10.9229 1.83172 11.8198 2.50001 12.575"
                                      stroke="#667085"
                                      stroke-width="1.66667"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </svg>
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

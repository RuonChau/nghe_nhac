import { announcements, assignments, attendance, classes, events, exams, home, lessons, logout, messages, parents, profile, settings, students, teachers } from "./icons";


export const menuItem = [
  {
    title: 'MENU',
    items:[
      {
        icon: home,
        lable: 'Home',
        href: '/'
      },
      {
        icon: teachers,
        lable: 'Teachers',
        href: '/teachers'
      },
      {
        icon: students,
        lable: 'Students',
        href: '/students'
      },
      {
        icon: parents,
        lable: 'parents',
        href: '/Parents'
      },
      {
        icon: classes,
        lable: 'Classes',
        href: '/classes'
      },
      {
        icon: lessons,
        lable: 'Lessons',
        href: '/lessons'
      },
      {
        icon: exams,
        lable: 'Exams',
        href: '/exams'
      },
      {
        icon: assignments,
        lable: 'Assignments',
        href: '/assignments'
      },
      {
        icon: attendance,
        lable: 'Attendance',
        href: '/attendance'
      },
      {
        icon: events,
        lable: 'Events',
        href: '/events'
      },
      {
        icon: messages,
        lable: 'Messages',
        href: '/messages'
      },
      {
        icon: announcements,
        lable: 'Announcements',
        href: '/announcements'
      },
    ]
  },
  {
    title: 'OTHER',
    items:[
      {
        icon: profile,
        lable: 'Profile',
        href: '/profile'
      },
      {
        icon: settings,
        lable: 'Settings',
        href: '/settings'
      },
      {
        icon: logout,
        lable: 'Logout',
        href: '/logout'
      }
    ]
  }
]
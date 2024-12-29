import classes from "../../public/icons/class.png"
import home from "../../public/icons/home.svg"
import teachers from "../../public/icons/teacher.svg"
import students from "../../public/icons/student.png"
import parents from "../../public/icons/parent.png"
import profile from "../../public/icons/user.png"
import settings from "../../public/icons/settings.png"
import logout from "../../public/icons/exit.png"
import lessons from "../../public/icons/lesson.png"
import exams from "../../public/icons/exam.png"
import assignments from "../../public/icons/assignment.png"
import attendance from "../../public/icons/attendance.png"
import events from "../../public/icons/event.png"
import messages from "../../public/icons/message.png"
import announcements from "../../public/icons/announcement.png"



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
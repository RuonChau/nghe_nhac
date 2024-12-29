export const wh_logo = 50
export const wh_menu = 20
export const wh_search = 26
export const wh_avatar = wh_menu + 16


// export enum Status {
//   Active = 'Active',
//   Normal = 'Normal',
//   Pending = 'Pending',
//   Deleted = 'Deleted',
//   Inactive = 'Inactive',
//   Completed = 'Completed',
//   Cancelled = 'Cancelled',
//   Rejected = 'Rejected',
// }

export enum TypeEnum {
  Student = 'Student',
  Teacher = 'Teacher',
  Parent = 'Parent',
  Staff = 'Staff',
}
export type Type = keyof typeof TypeEnum

